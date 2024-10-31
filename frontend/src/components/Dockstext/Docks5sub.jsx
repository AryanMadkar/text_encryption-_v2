import React from "react";
import { VscTerminalPowershell } from "react-icons/vsc";

const Docks5sub = () => {
  return (
    <div className="w-full h-full mt-10 flex flex-col items-start justify-center gap-3">
      <p>Asymmetric Encryption Example (RSA in Python)</p>
      <div className="min-h-[80vh] overflow-hidden flex-col rounded-xl w-full card flex items-center justify-start">
        <div className="h-[3rem]  bg-gray-800 w-full flex flex-row items-center justify-start">
          <h1 className="ml-8 text-sm flex flex-row items-center justify-center gap-2">
            {" "}
            <VscTerminalPowershell className="text-lg" />
            Shell
          </h1>
        </div>
        <div className="h-full w-full p-4 flex items-start justify-around flex-col">
          <p className="font-normal flex items-start justify-around flex-col">
            <h1 className="mb-2">
              <span className="text-blue-700"> from </span> Crypto.PublicKey
              <span className="text-blue-700"> import </span>
              RSA <br />
              <span className="text-blue-700"> from </span> Crypto.Cipher
              <span className="text-blue-700"> import </span> PKCS1_OAEP <br />
            </h1>
            <h1 className="my-2">
              key = RSA.generate(<span className="text-[#DC4484]">2048</span>){" "}
              <br /> public_key = key.publickey() <br />
              cipher_rsa = PKCS1_OAEP.new(public_key)
            </h1>
            <h1 className="my-2">
              plaintext ={" "}
              <sapn className="text-[#59EFCA]">b'Hello, RSA!' </sapn>
              <br />
              ciphertext = cipher_rsa.encrypt(plaintext)
            </h1>{" "}
            <h1 className="my-2">
              cipher_rsa = PKCS1_OAEP.new(key)
              <br /> decrypted_data = cipher_rsa.decrypt(ciphertext)
            </h1>
            <h1 className="my-5">
              <span className="text-[#D8972E]">print</span>(
              <span className="text-[#59EFCA]">"Ciphertext:"</span>, ciphertext)
              <br />
              <span className="text-[#D8972E]">print</span>(
              <span className="text-[#59EFCA]">"Decrypted:"</span>,
              decrypted_data)
            </h1>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Docks5sub;
