import { useState } from "react";
import {
  StandardParagraph,
  StandardSectionHeader,
  DarkCodeSyntaxHighlighter,
} from "../components/";
import { useLucationPathName } from "../customReactHooks";

const codeString = `
import { useState } from 'react';
function Count() {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => setCount((prevCount) => prevCount + 1);
  return <div onClick={handleCount}>{count}</div>;
}`;

function Count() {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      {`${count}`}
      <button
        className="p-2 ml-1 rounded-md shadow-md bg-indigo-500 text-gray-50"
        onClick={handleCount}
      >
        +1
      </button>
    </div>
  );
}

export const BasicStateManagement = () => {
  const hookName = useLucationPathName();

  return (
    <>
      <div className="h-12 p-2 mb-8 flex items-center">
        <h2 className="text-lg">Basic State Management</h2>
      </div>
      <div>
        <StandardSectionHeader>{hookName}</StandardSectionHeader>
        <StandardParagraph>
          <h5>Definitions</h5>
          <ul className="list-disc pl-8">
            <li>
              &#34;state&#34; is data that changes over the lifetime of a
              specific instance of a React component.
            </li>
            <li>
              &#34;state&#34; retains data between renders and is specific to
              the component is declared in.
            </li>
            <li>
              &#34;setState&#34; or the state setter function is React&#39;s way
              of updating the state of updating the state declared in that
              component.
            </li>
            <li>
              &#34;useState&#34; is the built-in React hook that we use to
              create the sate and the state setter function with the syntax you
              can see below.
            </li>
            <li>
              &#34;useState&#34; can be initialized with a default value, which
            </li>
          </ul>
        </StandardParagraph>
        <DarkCodeSyntaxHighlighter>{codeString}</DarkCodeSyntaxHighlighter>
        <StandardSectionHeader>Example</StandardSectionHeader>
        <Count />
      </div>
    </>
  );
};
