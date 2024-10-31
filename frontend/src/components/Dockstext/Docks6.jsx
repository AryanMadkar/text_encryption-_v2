import React from "react";

const Docks6 = () => {
  return (
    <div className="flex items-start swim3 font-semibold flex-col justify-center gap-2">
      <h1 className="text-2xl">6 Best Practices for Encryption</h1>
      <ul className="flex flex-col items-start justify-center gap-2 list-disc list-inside">
        <li className="ml-5 marker:text-white">
          Use secure random generators for keys.
        </li>
        <li className="ml-5 marker:text-white">
          Ciphertext: The encrypted, unreadable data.
        </li>
        <li className="ml-5 marker:text-white">
          Store keys securely, never hard-code them in the source code.
        </li>
        <li className="ml-5 marker:text-white">
          Rotate encryption keys periodically.
        </li>
        <li className="ml-5 marker:text-white">
          Use salting with hashes for added security.
        </li>
        <li className="ml-5 marker:text-white">
          Prefer ECC over RSA for improved efficiency in devices with limited
          computational resources.
        </li>
      </ul>
      <h1 className="text-2xl mt-10">7 Common Libraries for Encryption</h1>
      <ul className="flex flex-col items-start justify-center gap-4 list-disc list-inside">
        <li className="ml-5 marker:text-white">
          Python: <span className="bg-gray-600 p-1 rounded">PyCryptodome</span>{" "}
          , <span className="bg-gray-600 p-1 rounded">cryptography</span> ,{" "}
          <span className="bg-gray-600 p-1 rounded">eciespy </span>(for ECC)
        </li>
        <li className="ml-5 marker:text-white">
          JavaScript: <span className="bg-gray-600 p-1 rounded">crypto-js</span>{" "}
          ,<span className="bg-gray-600 p-1 rounded">crypto</span> (Node.js)
        </li>
        <li className="ml-5 marker:text-white">
          Java: <span className="bg-gray-600 p-1 rounded">javax.crypto</span>{" "}
        </li>
        <li className="ml-5 marker:text-white">
          C#:{" "}
          <span className="bg-gray-600 p-1 rounded">
            System.Security.Cryptography
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Docks6;
