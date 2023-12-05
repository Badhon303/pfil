"use client"

import { Button } from "./ui/button"
import { ServerCookieDelete } from "./delete"

const CookieDelete = () => {
  return (
    <Button onClick={() => ServerCookieDelete()} className="mt-44">
      Log Out
    </Button>
  )
}

export default CookieDelete
