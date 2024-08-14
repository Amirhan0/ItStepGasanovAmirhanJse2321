import { useState } from "react";

export function DifferencesComponent({ differences }) {
  const [result, setResult] = useState("");
  function callBackFunction(value) {
    switch (value) {
      case "way":
        setResult(differences.way);
        break;
      case "easy":
        setResult(differences.easy);
        break;
      case "program":
        setResult(differences.program);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div>
        <button onClick={() => callBackFunction("way")}>way</button>
        <button onClick={() => callBackFunction("easy")}>easy</button>
        <button onClick={() => callBackFunction("program")}>program</button>
      </div>
      <div>result: {result}</div>
    </>
  );
}
