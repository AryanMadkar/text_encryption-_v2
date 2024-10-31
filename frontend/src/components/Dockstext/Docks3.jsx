import React from "react";

const Docks3 = () => {
  return (
    <div className="flex items-start font-semibold flex-col justify-center gap-2">
      <h1 className="text-2xl">3. Types of Encryption Algorithms</h1>
      <ul
        className="flex flex-col items-start justify-center gap-2 list-inside"
        style={{ listStyleType: "lower-alpha" }}
      >
        <li className="ml-5 marker:text-white">
          Symmetric Encryption{" "}
          <ul className="flex flex-col items-start justify-center gap-2 list-disc list-inside">
            <li className="ml-5 marker:text-white">
              AES : A widely used encryption standard for its balance of speed
              and security. AES supports key sizes of 128, 192, or 256 bits.
            </li>
            <li className="ml-5 marker:text-white">
              DES (Data Encryption Standard): An older encryption standard, now
              considered less secure. Generally replaced by AES.{" "}
            </li>
            <li className="ml-5 marker:text-white">
              Blowfish: A flexible algorithm with a varying key length, often
              faster in specific scenarios than AES.
            </li>
          </ul>
        </li>
        <li className="ml-5 marker:text-white">
          Asymmetric Encryption
          <ul className="flex flex-col items-start justify-center gap-2 list-disc list-inside">
            <li className="ml-5 marker:text-white">
              RSA: Relies on a public-private key pair and is widely used for
              secure data transmission.
            </li>
            <li className="ml-5 marker:text-white">
              ECC (Elliptic-Curve Cryptography): An efficient and secure
              encryption method that uses smaller key sizes compared to RSA
              while providing similar security.
            </li>
          </ul>
        </li>
        <li className="ml-5 marker:text-white">
          Hashing (not reversible)
          <ul className="flex flex-col items-start justify-center gap-2 list-disc list-inside">
            <li className="ml-5 marker:text-white">
              SHA-256: Commonly used for data integrity checks. It's a one-way
              function, so it is not typically used for encryption.
            </li>
            <li className="ml-5 marker:text-white">
              MD5: Another hashing algorithm, though generally insecure for
              cryptographic purposes due to vulnerabilities.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Docks3;
