import Image from "next/image"
import Link from "next/link"
import Modal from "../components/modal"
import ModalServer from "../components/modalServer"
import ModalNbp from "../components/modalNbp"
import ModalPfilFTH from "../components/modalPfilFTH"
import ModalDepositLoan from "../components/ModalDepositLoan"
import { cookies } from "next/headers"
import CookieDelete from "@/components/cookieDelete"

const RootPage = () => {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value || ""
  return (
    <div>
      <p
        style={{ fontSize: "40px", fontWeight: "bold" }}
        className="text-center my-20"
      >
        <span className="pe-5">
          <Link href="/">&lt;</Link>
        </span>
        All Projects
      </p>
      <div className="row flex flex-col md:flex-row justify-center items-center space-y-24 md:space-x-24 md:space-y-0  mx-5">
        <Link href="/cashtransaction" style={{ textDecoration: "none" }}>
          <div className="">
            <Image
              className="mx-auto"
              src="/cash.png"
              alt="Snow"
              width={100}
              height={100}
            />
            <p
              style={{
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              className="text-center"
            >
              Cash Transaction
            </p>
          </div>
        </Link>
        {/* <Modal token={token} /> */}
        <Link href="/vault" style={{ textDecoration: "none" }}>
          <div className="">
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
        <ModalServer token={token} />
        <ModalNbp token={token} />
        <ModalDepositLoan token={token} />
        <ModalPfilFTH token={token} />
      </div>
      {token ? <CookieDelete /> : null}
    </div>
  )
}

export default RootPage
