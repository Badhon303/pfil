import { redirect } from "next/navigation"

const vault = () => {
  return (
    <div className="full">
      <iframe
        className="frame"
        src="https://app.powerbi.com/reportEmbed?reportId=6bba8f0a-39ea-4b9b-8fb6-f43a16cb280a&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
      ></iframe>
    </div>
  )

  // redirect(
  //   "https://app.powerbi.com/reportEmbed?reportId=6bba8f0a-39ea-4b9b-8fb6-f43a16cb280a&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
  // )
}

export default vault
