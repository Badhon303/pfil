"use client"

import { Button } from "./ui/button"
import { ServerCookieDelete } from "./delete"

const CookieDelete = () => {
  return (
    <div className="text-center">
      <Button onClick={() => ServerCookieDelete()} className="mt-36">
        Log Out
      </Button>
    </div>
  )
}

export default CookieDelete
