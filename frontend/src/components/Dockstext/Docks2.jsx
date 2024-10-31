import React from "react";

const Docks2 = () => {
  return (
    <div className="flex items-start font-semibold flex-col justify-center gap-2">
      <h1 className="text-2xl">2. Encryption Basics</h1>
      <ul className="flex flex-col items-start justify-center gap-2 list-disc list-inside">
        <li className="ml-5 marker:text-white">
          Plaintext: The original readable data.
        </li>
        <li className="ml-5 marker:text-white">
          Ciphertext: The encrypted, unreadable data.
        </li>
        <li className="ml-5 marker:text-white">
          Key: A value used in an encryption algorithm to transform plaintext
          into ciphertext.
        </li>
        <li className="ml-5 marker:text-white">
          Encryption Algorithm: A method to encrypt and decrypt data (e.g., AES,
          RSA, ECC).
        </li>
        <li className="ml-5 marker:text-white">
          Symmetric Encryption: Same key for both encryption and decryption.
        </li>
      </ul>
    </div>
  );
};

export default Docks2;
