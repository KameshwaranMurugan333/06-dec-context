import React from "react"
import { ComponentA } from "./components/componentA";
import { CountContext } from './contexts';

export default function App() {

  const [count, setCount] = React.useState(10);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }} >
        <ComponentA />
      </CountContext.Provider>
    </div>
  );
}



