// EmailInput.jsx
import React, { useState } from "react";
import Input from "../components/Input"

const EmailInput = ({ email, setEmail }) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  // const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const [isFormValid, setIsFormValid] = useState(true);

  const handleEmailBlur = () => {
    // Validasi saat fokus keluar dari field email
    if (email.trim() === "") {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputEmail)) {
      setIsEmailValid(false);
      // setEmailErrorMessage(
      //   "Email hanya bisa diisi dengan simbol (@), (.), atau (_)"
      // );
    } else {
      setIsEmailValid(true);
    }
  };
  
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  return (
    <div className="mt-4xl">
      {/* Input form login menggunakan email */}
      <div className="mb-md">
        <label htmlFor="email" className="text-sm font-medium text-neutral-900">
          Email
        </label>
      </div>
      <Input
        type="email"
        id="email"
        placeholder="Masukkan email"
        className={`${(!isEmailValid || isEmailEmpty) && "border-red-500"}`}
        size="medium"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      { email === "" && (
        isEmailEmpty &&
        <p className="text-red-500 text-sm mt-1">Email tidak boleh kosong.</p>
      )}
      {(!isEmailValid && email) && (
        <p className="text-red-500 text-sm mt-1">
          Masukkan alamat email yang valid.
        </p>
      )}
    </div>
  );
};

export default EmailInput;
