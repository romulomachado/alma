"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/app/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await login(username);

    if (res.success) {
      router.push("/admin/leads");
    } else {
      setError(res.message || "Login failed");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow w-96 space-y-4"
      >
        <h1 className="text-xl font-semibold">Alma Leads</h1>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`w-full border px-3 py-2 rounded ${
            error && "border-red-500 focus:border-red-500 focus:ring-red-500"
          }`}
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-600"
          disabled={!username}
        >
          Log In
        </button>
      </form>
    </main>
  );
}
