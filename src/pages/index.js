import React, { useEffect, useState } from "react"

export default function Home() {
  const [ data, setData ] = useState("");

  useEffect(() => {
    (async() => {
      const response = await fetch(`.netlify/functions/hello`);
      const tempData = await response.json();
      setData(tempData);
    }
    )();
  },[])
   
  
  return(
    <div>
      <h1>Hello world!</h1>
      <div>{data.message}</div>
    </div>
  )
}
