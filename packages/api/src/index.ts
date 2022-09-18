import 'reflect-metadata';

import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import path from 'path';
import { buildSchema, Query, Resolver } from 'type-graphql';

dotenv.config();

@Resolver(() => String)
class HelloWorld {
  @Query(() => String, { name: 'helloWorld', description: 'Hello World' })
  helloWorld() {
    return 'Hello World';
  }
}

const { NODE_ENV, PORT = 4000 } = process.env;

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  if (NODE_ENV === 'development') {
    app.use(cors());
  }
  app.use(express.static(path.join(__dirname, '../../ui/dist')));

  const httpServer = http.createServer(app);
  const schema = await buildSchema({ resolvers: [HelloWorld] });
  const server = new ApolloServer({
    introspection: true,
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });
  app.use((_, res) => {
    res.sendFile(path.join(__dirname, '../../ui/dist/index.html'));
  });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
};

main().catch((error: Error) => {
  console.error('🚀 ~ file: index.ts ~ line 36 ~ Error', error.message);
});
