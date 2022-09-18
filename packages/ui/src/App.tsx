import fetch from 'cross-fetch';
import { gql, request } from 'graphql-request';
import { useEffect, useState } from 'react';

const HELLO_WORLD = gql`
  query helloWorld {
    helloWorld
  }
`;

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    request<{ helloWorld: string }>(
      import.meta.env.VITE_GRAPHQL_API,
      HELLO_WORLD,
      { fetch }
    ).then(({ helloWorld }) => {
      setMessage(helloWorld);
    });
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <h2>IT WORKS!!!!</h2>
    </>
  );
}

export default App;
