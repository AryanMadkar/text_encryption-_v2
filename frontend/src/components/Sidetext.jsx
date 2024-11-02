import React, { useState } from "react";
import { useTheme } from "../context/COntext";

const Sidetext = () => {
  const { bits, setBits, key, setKey } = useTheme();
  const [keySize, setKeySize] = useState("128");
  const [encryptionMethod, setEncryptionMethod] = useState("AES");

  const handleTextChange = (e) => {
    e.preventDefault();
    setKey(e.target.value);
  };

  const handleKeySizeChange = (e) => {
    const selectedKeySize = e.target.value;
    setKeySize(selectedKeySize);
    setBits(Number(selectedKeySize));
  };

  const handleEncryptionMethodChange = (e) => {
    setEncryptionMethod(e.target.value);
  };

  function getrandomkey() {
    // Generate a random key based on the selected key size
    var key = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 32; i++) {
      key += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    setKey(key);
  }

  return (
    <div className="flex text-white px-3 h-full font-semibold flex-col items-start gap-2 justify-start w-full">
      <div className="w-full flex-col mt-2 flex items-center justify-center gap-2">
        <h1 className="text-xl">Please select the bits for your key</h1>
        <select
          value={keySize}
          onChange={handleKeySizeChange}
          className="w-full p-1 rounded-xl bg-blue-950 text-xl text-white"
        >
          <option value="128">128 Bit</option>
          <option value="192">192 Bits</option>
          <option value="256">256 Bits</option>
        </select>
      </div>
      <div className="w-full flex-col mt-2 flex items-center justify-center gap-2">
        <h1 className="text-xl">Please select your encryption method</h1>
        <select
          value={encryptionMethod}
          onChange={handleEncryptionMethodChange}
          className="w-full p-1 rounded-xl bg-blue-950 text-xl text-white"
        >
          <option value="AES">AES</option>
          <option value="RSA">RSA</option>
          <option value="ECC">ECC</option>
        </select>
      </div>
      <div className="w-full flex-col mt-2 flex items-center justify-center gap-2">
        <h1 className="text-lg">Enter the Key Here </h1>
        <input
          value={key}
          onChange={handleTextChange}
          type="text"
          placeholder="Enter Key Here"
          className="w-full p-2 rounded-lg bg-blue-950 text-lg text-white"
        />

        <div>
          <button onClick={getrandomkey} className="p-2 border-2 rounded">
            Random key
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidetext;
