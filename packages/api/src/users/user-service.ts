import { prismaClient } from './../prisma-client/index';

export class UserService {
  private client!: typeof prismaClient.user;
  constructor(client?: typeof prismaClient.user) {
    if (client) {
      this.client = client;
    } else {
      this.client = prismaClient.user;
    }
  }
  async getUser(id: string) {
    return await this.client.findUniqueOrThrow({ where: { id } });
  }
}
