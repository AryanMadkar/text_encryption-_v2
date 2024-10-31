import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Create the Theme Context
const ThemeContext = createContext();

// Custom hook for easy access to the context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export const ThemeProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [bits, setBits] = useState(128);
  const [key, setKey] = useState("");
  const [MAinText, setMAinText] = useState("");
  const [decodetext, setDecodetext] = useState("");
  const [givetext, setGivetext] = useState("Encripted text will appear here ");

  const [theme, setTheme] = useState("dark");

  const sendencryptiontext = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/encrypt", {
        text1: MAinText,
        key,
        bits,
      });
      setGivetext(response.data.encryptedText);
      toast.success("Encryption successful!");
    } catch (error) {
      toast.error("Encryption failed!");
      console.error("Error encrypting data:", error);
    }
  };
  const decriptiontext = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/decrypt", {
        text2: decodetext,
        key,
        bits,
      });
      const finalres = response.data.decryptedText;
      setGivetext(finalres);
      toast.success("Decryption successful!");

      // Perform encryption logic here
    } catch (error) {
      toast.error("Decryption failed!");
      console.error("Error encrypting data:", error);
    }
  };

  useEffect(() => {
    if (key.length > 0) {
      sendencryptiontext();
    }
  }, [MAinText]);
  useEffect(() => {
    if (key.length > 0) {
      decriptiontext();
    }
  }, [decodetext]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        bits,
        setBits,
        MAinText,
        setMAinText,
        setDecodetext,
        decodetext,
        key,
        setKey,
        givetext,
        authenticated,
        setAuthenticated,
      }}
    >
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
