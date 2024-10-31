import React from "react";
import { VscTerminalPowershell } from "react-icons/vsc";
import Docks5sub from "./Docks5sub";

const Docks5 = () => {
  return (
    <div>
      <div className="flex swim2 items-start font-semibold flex-col justify-center gap-2">
        <h1 className="text-2xl">4. ECC (Elliptic-Curve Cryptography)s</h1>
        <p className="ml-6">
          Elliptic-Curve Cryptography (ECC) is a form of asymmetric encryption
          that uses the mathematics of elliptic curves over finite fields. ECC
          offers the same level of security as RSA but with significantly
          smaller key sizes, making it faster and more efficient, especially for
          mobile devices and IoT.
        </p>
        <ul
          className="flex flex-col items-start justify-center gap-2 list-inside"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li className="ml-5 marker:text-white">
            Advantages of ECC
            <ul className="flex flex-col items-start justify-center gap-2 list-disc list-inside">
              <li className="ml-5 marker:text-white">
                Efficiency: Provides high security with smaller keys, reducing
                storage and processing requirements.
              </li>
              <li className="ml-5 marker:text-white">
                Speed: Faster computation due to smaller key sizes.
              </li>
              <li className="ml-5 marker:text-white">
                Security: ECC offers robust security with reduced risk of
                brute-force attacks.
              </li>
            </ul>
          </li>
          <li className="ml-5 marker:text-white">
            ECC Key Sizes Compared to RSA
            <ul className="flex flex-col items-start justify-center gap-2 list-disc list-inside">
              <li className="ml-5 marker:text-white">
                ECC 256-bit key ≈ RSA 3072-bit key
              </li>
              <li className="ml-5 marker:text-white">
                ECC 384-bit key ≈ RSA 7680-bit key
              </li>
            </ul>
          </li>
        </ul>
        <div className="w-full h-full mt-10 flex flex-col items-start justify-center gap-3">
          <h1 className="text-2xl text-center flex items-start justify-start w-full">
            5. Implementing Encryption in Code
          </h1>
          <p>Symmetric Encryption Example (AES in Python)</p>
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
                  <span className="text-blue-700"> from </span> Crypto.Cipher
                  <span className="text-blue-700"> import </span>
                  AES <br />
                  <span className="text-blue-700"> from </span>{" "}
                  Crypto.Util.Padding
                  <span className="text-blue-700">i mport </span> pad, unpad{" "}
                  <br />
                  <span className="text-blue-700"> from </span> Crypto.Random
                  <span className="text-blue-700">i mport </span>{" "}
                  get_random_bytes
                  <br />
                </h1>
                <h1 className="my-2">
                  key = get_random_bytes(
                  <span className="text-[#DC4484]">16</span>) # 128-bit key
                  <br /> data ={" "}
                  <span className="text-[#59EFCA]">b'Hello, World!'</span>
                </h1>
                <h1 className="my-2">
                  {" "}
                  <span className="text-sm text-gray-700">
                    {" "}
                    #Encrypt data <br />
                  </span>
                  cipher = AES.new(key, AES.MODE_CBC)
                  <br />
                  ciphertext = cipher.encrypt(pad(data, AES.block_size)) <br />
                </h1>{" "}
                <h1 className="my-2">
                  {" "}
                  <span className="text-sm text-gray-700">
                    {" "}
                    # Decrypt data <br />
                  </span>{" "}
                  cipher = AES.new(key, AES.MODE_CBC, iv=cipher.iv)
                  <br />
                  plaintext = unpad(cipher.decrypt(ciphertext), AES.block_size)
                  <br />
                </h1>
                <h1 className="my-5">
                  <span className="text-[#D8972E]">print</span>(
                  <span className="text-[#59EFCA]">"Ciphertext:"</span>,
                  ciphertext)
                  <br />
                  <span className="text-[#D8972E]">print</span>(
                  <span className="text-[#59EFCA]">"Plaintext:"</span>,
                  plaintext)
                </h1>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Docks5sub />
    </div>
  );
};

export default Docks5;
