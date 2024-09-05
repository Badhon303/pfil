import { redirect } from "next/navigation"

const Cashtransaction = () => {
  // return redirect(
  //   "https://app.powerbi.com/reportEmbed?reportId=152a650f-ae45-4366-8ae5-4b3b767c1498&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
  // )
  return (
    <div className="full">
      <iframe
        className="frame"
        // src="https://app.powerbi.com/reportEmbed?reportId=152a650f-ae45-4366-8ae5-4b3b767c1498&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
        src="https://app.powerbi.com/reportEmbed?reportId=f7103bd3-99ac-4d60-bca9-c3115ee10b5b&autoAuth=true&ctid=1db80db5-18b9-4763-98d1-d7dbc2116c81"
      ></iframe>
    </div>
  )
}

export default Cashtransaction
