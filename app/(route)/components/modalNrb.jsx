"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"
import { useRouter, redirect } from "next/navigation"
import axios from "axios"

import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const ModalNrb = ({ token }) => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = () => {
    try {
      if (token) {
        setValid(true)
      } else {
        console.error("Token is undefined or null")
        setValid(false)
      }
    } catch (error) {
      console.error("JWT Verification Error: ", error)
      setValid(false)
    }
  }

  const onSubmit = async (e) => {
    setLoading(true)

    e.preventDefault()

    try {
      const response = await axios.post("/api/login", user)
      if (response.status === 200) {
        router.push("/nrb")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Dialog>
      {isClient ? (
        <div onClick={() => handleClick()} className="">
          {valid ? (
            redirect("/nrb")
          ) : (
            <DialogTrigger className="cursor-pointer">
              <Image src="/nrb.png" alt="Snow" width={250} height={150} />
              <p
                style={{
                  paddingTop: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                NRB
              </p>
            </DialogTrigger>
          )}
        </div>
      ) : null}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            Enter your email and password below to login to your account.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="example@mail.com"
              type="email"
              className="col-span-3"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="col-span-3"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" && password !== "") {
                  e.preventDefault()
                  onSubmit(e) // Make sure this function uses the current input value
                }
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onSubmit} disabled={buttonDisabled}>
            {loading ? "Loading..." : "Log In"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ModalNrb
