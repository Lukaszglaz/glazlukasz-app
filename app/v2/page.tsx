"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { InputBase } from "@/components/shared/InputBase/InputBase";
import { Button } from "@/components/shared/Button/Button";
import Home from "../page";

const CORRECT_USERNAME = process.env.NEXT_PUBLIC_LOGIN_V2;
const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_PASSWORD_V2;

export default function ProtectedPageWrapper() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Logowanie pomyślne!");
    } else {
      toast.error("Nieprawidłowy login lub hasło.");
      setUsername("");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <Home />;
  }

  return (
    <div className="bg-color-bg-page flex min-h-screen items-center justify-center">
      <Toaster position="top-center" />
      <div className="bg-color-bg-surface w-full max-w-sm rounded-lg p-8 shadow-2xl">
        <h1 className="text-color-text-primary mb-6 text-2xl font-bold">
          Wprowadź dane logowania
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <InputBase
            id="username"
            label="Nazwa użytkownika"
            type="text"
            value={username}
            onChange={handleChange}
          />

          <InputBase
            id="password"
            label="Hasło dostępu"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <Button variant="primary" type="submit" className="mt-4 w-full py-2">
            Zaloguj się
          </Button>
        </form>
      </div>
    </div>
  );
}
