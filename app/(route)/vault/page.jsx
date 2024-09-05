import { redirect } from "next/navigation"

const vault = () => {
  return (
    <div className="full">
      <iframe
        className="frame"
        // src="https://app.powerbi.com/reportEmbed?reportId=6bba8f0a-39ea-4b9b-8fb6-f43a16cb280a&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
        src="https://app.powerbi.com/reportEmbed?reportId=7e626303-dfd4-461b-8a67-edfe114650ad&autoAuth=true&ctid=1db80db5-18b9-4763-98d1-d7dbc2116c81"
      ></iframe>
    </div>
  )

  // redirect(
  //   "https://app.powerbi.com/reportEmbed?reportId=6bba8f0a-39ea-4b9b-8fb6-f43a16cb280a&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
  // )
}

export default vault
