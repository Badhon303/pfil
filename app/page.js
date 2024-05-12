"use client"

import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter()
  return (
    <div className="w-screen h-screen">
      <div className="h-full w-full flex items-center justify-center space-x-32 text-3xl font-bold">
        <div
          onClick={() => router.push("/all-projects")}
          className="cursor-pointer"
        >
          All Projects
        </div>
        <div
          onClick={() => router.push("/demo-projects")}
          className="cursor-pointer"
        >
          Demo Projects
        </div>
      </div>
    </div>
  )
}
