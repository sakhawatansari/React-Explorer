import React, { useState } from 'react';
import { Clipboard } from 'flowbite-react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);
  const [copySuccess, setCopySuccess] = useState('');

  const generatePassword = () => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) {
      chars += '0123456789';
    }
    if (includeSpecialChars) {
      chars += '!@#$%^&*()';
    }

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    setCopySuccess(''); // Reset copy success message
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopySuccess('Password copied to clipboard!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Password Generator</h1>
        <div className="mb-6">
          <label className="flex items-center mb-2 text-white">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              className="mr-2"
            />
            Include Special Characters
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2">Password Length: {passwordLength}</label>
          <input
            type="range"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            min="1"
            max="100"
            className="w-full cursor-pointer"
          />
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
        >
          Generate Password
        </button>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="border border-gray-700 p-2 rounded-lg flex-grow mr-2 bg-gray-800 text-white"
          />
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Copy
          </button>
        </div>
        {copySuccess && <p className="text-green-500 text-center">{copySuccess}</p>}
        <footer className="text-center text-gray-400 mt-6">
          Created by Sakhawat Ansari
        </footer>
      </div>
    </div>
  );
};

export default PasswordGenerator;
