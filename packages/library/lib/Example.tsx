import { useState } from 'react';

interface IExample {
  name: string;
}

export const Example = ({ name }: IExample) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>This is an Example Component</h1>
      <p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          The Current Count is :{count}
        </button>
      </p>
      <p>Hello {name}</p>
    </>
  );
};
