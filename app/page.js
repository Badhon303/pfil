import Image from "next/image"
import Link from "next/link"
import Modal from "./(route)/components/modal"
import { cookies } from "next/headers"
import CookieDelete from "@/components/cookieDelete"

export default function Home() {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value || ""

  return (
    <div className="title">
      <p style={{ fontSize: "40px", fontWeight: "bold" }}>Projects</p>
      <div className="row">
        <Link href="/cashtransaction" style={{ textDecoration: "none" }}>
          <div className="left">
            <Image src="/cash.png" alt="Snow" width={150} height={150} />
            <p
              style={{
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "20px",
                // color: "white",
              }}
            >
              Cash Transaction
            </p>
          </div>
        </Link>
        <Modal token={token} />
        <Link href="/vault" style={{ textDecoration: "none" }}>
          <div className="right">
            <Image src="/new-vault.png" alt="Snow" width={150} height={150} />
            <p
              style={{
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "20px",
                // color: "white",
              }}
            >
              Vault Status
            </p>
          </div>
        </Link>
      </div>
      <CookieDelete />
    </div>
  )
}
