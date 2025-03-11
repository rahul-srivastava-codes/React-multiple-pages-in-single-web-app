import React, { useState } from "react";

function Calculator() {
  const [input, setinput] = useState();

  function handleclick(value) {
    if (value === "=") {
      try {
        setinput(eval(input)); // Evaluates the expression
      } catch (error) {
        setinput("Error"); // For invalid expressions
      }
    } else if (value === "AC") {
      setinput(""); // Clears the input
    } else {
      setinput((prev) => (prev ? prev + value : value)); // Concatenate input
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="flex  flex-col items-center justify-center  h-[90vh] w-[100vw]"
      >
        <div>
          <input
            type="text"
            className="w-[30vw] h-[10vh] border-1 rounded-lg"
            value={input}
          />
        </div>
        <div className="mt-2 flex items-center justify-between w-[30vw] h-[10vh]">
          <button
            className="mx-1 rounded-lg bg-zinc-400 w-[10vw] h-[10vh]"
            onClick={() => handleclick("1")}
          >
            1
          </button>
          <button
            className="mx-1 rounded-lg w-[10vw] h-[10vh] bg-zinc-400"
            onClick={() => handleclick("2")}
          >
            2
          </button>
          <button
            className="mx-1 w-[10vw] h-[10vh] rounded-lg bg-zinc-400"
            onClick={() => handleclick("3")}
          >
            3
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between w-[30vw] h-[10vh]">
          <button
            className="mx-1 rounded-lg bg-zinc-400 w-[10vw] h-[10vh]"
            onClick={() => handleclick("4")}
          >
            4
          </button>
          <button
            className="mx-1 rounded-lg w-[10vw] h-[10vh] bg-zinc-400"
            onClick={() => handleclick("5")}
          >
            5
          </button>
          <button
            className="mx-1 w-[10vw] h-[10vh] rounded-lg bg-zinc-400"
            onClick={() => handleclick("6")}
          >
            6
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between w-[30vw] h-[10vh]">
          <button
            className="mx-1 rounded-lg bg-zinc-400 w-[10vw] h-[10vh]"
            onClick={() => handleclick("7")}
          >
            7
          </button>
          <button
            className="mx-1 rounded-lg w-[10vw] h-[10vh] bg-zinc-400"
            onClick={() => handleclick("8")}
          >
            8
          </button>
          <button
            className="mx-1 w-[10vw] h-[10vh] rounded-lg bg-zinc-400"
            onClick={() => handleclick("9")}
          >
            9
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between w-[30vw] h-[10vh]">
          <button
            className="mx-1 rounded-lg bg-zinc-400 w-[10vw] h-[10vh]"
            onClick={() => handleclick("+")}
          >
            +
          </button>
          <button
            className="mx-1 rounded-lg w-[10vw] h-[10vh] bg-zinc-400"
            onClick={() => handleclick("-")}
          >
            -
          </button>
          <button
            className="mx-1 w-[10vw] h-[10vh] rounded-lg bg-zinc-400"
            onClick={() => handleclick("*")}
          >
            *
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between w-[30vw] h-[10vh]">
          <button
            className="mx-1 rounded-lg bg-zinc-400 w-[10vw] h-[10vh]"
            onClick={() => handleclick("/")}
          >
            /
          </button>
          <button
            className="mx-1 rounded-lg w-[10vw] h-[10vh] bg-zinc-400"
            onClick={() => handleclick("=")}
          >
            =
          </button>
          <button
            className="mx-1 w-[10vw] h-[10vh] rounded-lg bg-zinc-400"
            onClick={() => handleclick("AC")}
          >
            AC
          </button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
