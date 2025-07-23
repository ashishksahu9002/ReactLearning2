import { useEffect, useState } from "react";

const CssVariables = () => {
  const [blur, setBlur] = useState(10);
  const [base, setBase] = useState("#ffc600");

  useEffect(() => {
    document.documentElement.style.setProperty("--blur", `${blur}px`);
    document.documentElement.style.setProperty("--base", base);
  }, [blur, base]);

  return (
    <div className="h-full w-screen flex items-center flex-col p-1 bg-cyan-800 cssvar text-4xl text-white">
      <h2 className="p-2">
        Update CSS Variables with <span className="hl">REACT</span>
      </h2>

      <div className="controls p-2 pb-6 flex">
        <div className="p-2">
          <label className="p-2" htmlFor="blur">
            Blur:
          </label>
          <input
            id="blur"
            type="range"
            name="blur"
            className="cursor-pointer"
            min={0}
            max={20}
            value={blur}
            data-sizing="px"
            onChange={(e) => {
              setBlur(e.target.value);
            }}
          ></input>
        </div>

        <div className="p-2">
          <label className="p-2" htmlFor="base">
            Base Color
          </label>
          <input
            id="base"
            type="color"
            name="base"
            className="cursor-pointer"
            value={base}
            onChange={(e) => {
              setBase(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="w-96">
        <img className="p-2" src="https://images.unsplash.com/photo-1752503650851-cbc3f8b00679?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
    </div>
  );
};

export default CssVariables;
