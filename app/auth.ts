"use server";

import { cookies } from "next/headers";

export async function login(username: string) {
  if (username === "admin") {
    const token = `mock-token-for-${username}`;
    
    const cookieStore = await cookies()
    cookieStore.set("token", token)

    return { success: true };
  } else {
    return { success: false, message: "Invalid username" };
  }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("token")

  return { success: true };
}

export async function checkAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  return token ? { isAuthenticated: true } : { isAuthenticated: false }
}