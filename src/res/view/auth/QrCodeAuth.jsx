import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QrCodeAuth = () => {
  const [qrCode, setQrCode] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    generateQrCode();
  }, []);

  const generateQrCode = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/generate-qr-code');
      setQrCode(response.data.qrCode);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyQrCode = async (secret) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/verify-qr-code', { secret });
      console.log(response.data.message);
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <h2>Welcome! You are now logged in.</h2>
      ) : (
        <div>
          <img src={qrCode} alt="QR Code" />
          <p>Scan the QR code with your mobile app.</p>
          <button onClick={() => verifyQrCode(prompt('Enter the secret shown in the QR code:'))}>
            Verify QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default QrCodeAuth


