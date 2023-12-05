"use server"

import { cookies } from "next/headers"

export async function ServerCookieDelete() {
  cookies().delete("token")
}
