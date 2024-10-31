import React, { useState, useRef } from "react";
import { useTheme } from "../context/COntext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MAinText = () => {
  const { setMAinText, setDecodetext, givetext } = useTheme();
  const [text, setText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [timer, setTimer] = useState(0);

  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleEncode = (e) => {
    e.preventDefault();
    const encoded = text.split("").join(""); // Simple encoding example
    setEncodedText(encoded);
    setMAinText(encoded);
  };

  const copyToClipboard = () => {
    if (textareaRef.current) {
      navigator.clipboard
        .writeText(textareaRef.current.value)
        .then(() => {
          toast.success("Text copied to clipboard!");
        })
        .catch(() => {
          toast.error("Failed to copy text to clipboard!");
        });
    }
  };

  const handleDecode = (e) => {
    e.preventDefault();
    const decoded = text.split("").join("");
    setText(decoded);
    setDecodetext(decoded);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setText("");
    setEncodedText("");
  };

  return (
    <div className="h-full w-full flex-col flex items-center text-white justify-center gap-4">
      <div className="text-white text-2xl">
        Welcome to the Word Code text Encryption Hub
      </div>

      <form className="w-full h-full">
        <div className="flex flex-col w-full h-full min-h-[50vh] items-center justify-around p-2 rounded-2xl">
          <div className="text-3xl font-bold"> The Hub</div>
          <div className="w-full">
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Enter text here"
              className="w-full rounded-xl p-2 text-black text-lg"
            />
          </div>
          <div className="flex gap-2 flex-row w-full">
            <button
              onClick={handleEncode}
              className="p-1 rounded-xl hover:bg-white hover:text-black transition-all ease-linear duration-200 font-semibold border-2 w-1/2"
            >
              Encode
            </button>
            <button
              onClick={handleDecode}
              className="p-1 rounded-xl hover:bg-white hover:text-black transition-all ease-linear duration-200 font-semibold border-2 w-1/2"
            >
              Decode
            </button>
          </div>
          <div className="text-xl font-semibold">Encoded Text:</div>
          <div className="text-xl w-full">
            <textarea
              ref={textareaRef}
              onClick={copyToClipboard}
              value={givetext || encodedText}
              readOnly
              placeholder="Encoded text will appear here"
              className="w-full rounded-xl p-2 text-black text-lg"
            />
          </div>
          <div className="flex gap-2 w-full">
            <button
              onClick={handleReset}
              className="p-1 rounded-xl w-1/2 hover:bg-white hover:text-black transition-all ease-linear duration-200 font-semibold border-2"
            >
              Reset
            </button>
            <button
              onClick={() => setText("")}
              className="p-1 rounded-xl w-1/2 hover:bg-white hover:text-black transition-all ease-linear duration-200 font-semibold border-2"
            >
              Clear
            </button>
          </div>
          <div>
            <span>
              Note: Word Code encryption is a simple substitution cipher.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MAinText;
