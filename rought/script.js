// Utility functions
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function modInverse(e, phi) {
  let [m0, x0, x1] = [phi, 0, 1];
  if (phi === 1) return 0;

  while (e > 1) {
    let q = Math.floor(e / phi);
    [e, phi] = [phi, e % phi];
    [x0, x1] = [x1 - q * x0, x0];
  }

  return x1 < 0 ? x1 + m0 : x1;
}

// Generate RSA keys
function generateKeys() {
  const p = 61; // example prime number
  const q = 53; // example prime number
  const n = p * q; // modulus
  const phi = (p - 1) * (q - 1);

  let e = 3;
  while (gcd(e, phi) !== 1) {
    e += 2;
  }

  const d = modInverse(e, phi);

  return { publicKey: { e, n }, privateKey: { d, n } };
}

// Encryption function
function encrypt(message, publicKey) {
  const { e, n } = publicKey;
  const messageInt = Buffer.from(message)
    .toString("utf8")
    .split("")
    .map((char) => char.charCodeAt(0));
  return messageInt.map((m) => Math.pow(m, e) % n);
}

// Decryption function
function decrypt(encryptedMessage, privateKey) {
  const { d, n } = privateKey;
  const decryptedInt = encryptedMessage.map((c) => Math.pow(c, d) % n);
  return decryptedInt.map((m) => String.fromCharCode(m)).join("");
}

// Example usage
const { publicKey, privateKey } = generateKeys();
const message = "HELLO";
const encryptedMessage = encrypt(message, publicKey);
const decryptedMessage = decrypt(encryptedMessage, privateKey);

console.log("Original Message:", message);
console.log("Encrypted Message:", encryptedMessage);
console.log("Decrypted Message:", decryptedMessage);
