import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import jwt from "jsonwebtoken"

const Pfil = () => {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value || ""
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
    if (!decodedToken) redirect("/")
  } catch (error) {
    redirect("/")
  }

  return (
    <div className="full">
      <iframe
        className="frame"
        // src="https://app.powerbi.com/reportEmbed?reportId=3b298925-08e3-43aa-91fb-e0392a632b7b&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
        src="https://app.powerbi.com/reportEmbed?reportId=6a28a29b-c10f-4876-9029-1260304ff95c&autoAuth=true&ctid=1db80db5-18b9-4763-98d1-d7dbc2116c81"
        // src="https://app.powerbi.com/reportEmbed?reportId=ed68e0e6-721a-4caf-a428-fe1f9dce3767&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
      ></iframe>
    </div>
  )

  // redirect(
  //   "https://app.powerbi.com/reportEmbed?reportId=3b298925-08e3-43aa-91fb-e0392a632b7b&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
  // )
}

export default Pfil
