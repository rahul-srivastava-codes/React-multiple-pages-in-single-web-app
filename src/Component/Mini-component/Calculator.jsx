import React, { useState } from "react";

function Calculator() {
  return (
    <div>
      <form
        action=""
        className="flex  flex-col items-center justify-center  h-[90vh] w-[100vw]"
      >
        <input
          type="text"
          className="w-[30vw] h-[10vh] border-1 rounded-lg"
          value={input}
          onChange={() => setinput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Calculator;
