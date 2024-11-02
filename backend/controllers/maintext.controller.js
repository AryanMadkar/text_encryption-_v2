const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const encrypt = async (req, res) => {
  try {
    // Get data from request body
    const { text1, key, bits, algorithm2 } = req.body;
    if (!text1 || !key) {
      return res
        .status(400)
        .json({ message: "Both text and key are required" });
    }
    let hashkey;
    let algorithm;
    const iv = crypto.randomBytes(16);

    // Determine the encryption key and algorithm based on `bits`
    if (bits === 256) {
      hashkey = crypto.createHash("sha256").update(key).digest(); // 32 bytes
      algorithm = "aes-256-cbc";
    } else if (bits === 192) {
      hashkey = crypto.createHash("sha256").update(key).digest().slice(0, 24); // 24 bytes
      algorithm = "aes-192-cbc";
    } else if (bits === 128) {
      hashkey = crypto.createHash("sha256").update(key).digest().slice(0, 16); // 16 bytes
      algorithm = "aes-128-cbc";
    } else {
      return res
        .status(400)
        .json({ message: "Invalid bit size. Use 128, 192, or 256." });
    }
    if (key.length < 2) {
      return res
        .status(400)
        .json({ message: "Key must be at least 2 characters long" });
    }

    // Create the cipher with the appropriate algorithm and key
    const cipher = crypto.createCipheriv(algorithm, hashkey, iv);
    let encrypted = cipher.update(text1, "utf8", "hex");
    encrypted += cipher.final("hex");

    // Combine IV and encrypted text
    const finaltext = iv.toString("hex") + ":" + encrypted;
    return res.status(200).json({ encryptedText: finaltext });
  } catch (error) {
    console.error("Error encrypting data:", error);
    return res.status(500).json({ message: "Encryption failed" });
  }
};

const dcrypt = async (req, res) => {
  try {
    // Get data from request body
    const { text2, key, bits } = req.body;
    if (!text2 || !key || !bits) {
      return res
        .status(400)
        .json({ message: "Text, key, and bit size are required" });
    }

    let hashkey;
    let algorithm;

    // Generate the correct key based on `bits` for decryption
    if (bits === 256) {
      hashkey = crypto.createHash("sha256").update(key).digest(); // 32 bytes
      algorithm = "aes-256-cbc";
    } else if (bits === 192) {
      hashkey = crypto.createHash("sha256").update(key).digest().slice(0, 24); // 24 bytes
      algorithm = "aes-192-cbc";
    } else if (bits === 128) {
      hashkey = crypto.createHash("sha256").update(key).digest().slice(0, 16); // 16 bytes
      algorithm = "aes-128-cbc";
    } else {
      return res
        .status(400)
        .json({ message: "Invalid bit size. Use 128, 192, or 256." });
    }

    // Separate IV and encrypted text
    const encryptedParts = text2.split(":");
    const iv = Buffer.from(encryptedParts[0], "hex");
    const encryptedText = encryptedParts[1];

    // Create a decipher with the same algorithm and key used for encryption
    const decipher = crypto.createDecipheriv(algorithm, hashkey, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return res.status(200).json({ decryptedText: decrypted });
  } catch (error) {
    console.error("Error decrypting data:", error);
    return res.status(500).json({ message: "Decryption failed" });
  }
};

const fileEncrypt = async (req, res) => {
  try {
    const { key } = req.body; // Retrieve the key
    const file = req.file; // The uploaded file

    if (!file) {
      return res.status(400).json({ message: "File are required" });
    }
    if (key.length < 2 || !key) {
      return res
        .status(400)
        .json({ message: "Key must be at least 2 characters long" });
    }

    const iv = crypto.randomBytes(16);
    const hash = crypto.createHash("sha256").update(key).digest();
    const algorithm = "aes-256-cbc";

    // Encryption stream
    const cipher = crypto.createCipheriv(algorithm, hash, iv);
    res.writeHead(200, {
      "Content-Disposition": `attachment; filename="encrypted-${file.originalname}.enc"`,
      "Content-Type": "application/octet-stream",
    });

    // Stream the file through the cipher and send it directly to the response
    const input = fs.createReadStream(file.path); // Read the uploaded file
    input.pipe(cipher).pipe(res); // Pipe through the cipher and to the response

    input.on("end", () => {
      res.end(); // Close the response when done
    });

    input.on("error", (error) => {
      console.error("Error reading file:", error);
      return res.status(500).json({ message: "Encryption failed" });
    });
  } catch (error) {
    console.error("Error encrypting file:", error);
    return res.status(500).json({ message: "Encryption failed" });
  }
};

const fileDecrypt = async (req, res) => {
  try {
    const { key } = req.body; // Retrieve the key
    const file = req.file; // The uploaded encrypted file

    if (!file) {
      return res.status(400).json({ message: "File are required" });
    }
    if (!key) {
      return res.status(400).json({ message: "Key is required" });
    }

    const iv = crypto.randomBytes(16);
    const hash = crypto.createHash("sha256").update(key).digest();
    const algorithm = "aes-256-cbc";

    // Decryption stream
    const decipher = crypto.createDecipheriv(algorithm, hash, iv);
    res.writeHead(200, {
      "Content-Disposition": `attachment; filename="decrypted-${file.originalname}"`,
      "Content-Type": "application/octet-stream",
    });

    // Stream the file through the decipher and send it directly to the response
    const input = fs.createReadStream(file.path); // Read the encrypted file
    input.pipe(decipher).pipe(res); // Pipe through the decipher and to the response

    input.on("end", () => {
      res.end(); // Close the response when done
    });

    input.on("error", (error) => {
      console.error("Error reading file:", error);
      return res.status(500).json({ message: "Decryption failed" });
    });
  } catch (error) {
    console.error("Error decrypting file:", error);
    return res.status(500).json({ message: "Decryption failed" });
  }
};

module.exports = {
  encrypt,
  dcrypt,
  fileEncrypt,
  fileDecrypt,
};
