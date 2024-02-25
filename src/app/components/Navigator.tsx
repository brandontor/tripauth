"use client"

import React, { useEffect, useState } from "react"

type Props = {}

function Navigator({}: Props) {
  const [position, setPosition] = useState({ latitude: "", longitude: "" })
  useEffect(() => {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: `${position.coords.latitude}`,
          longitude: `${position.coords.longitude}`,
        })
      })

      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          console.log("GRANTED")
        } else if (result.state === "prompt") {
        }
        // Don't do anything if the permission was denied.
      })
    } else {
      /* geolocation IS NOT available */
    }
  }, [])
  return (
    <div>
      Latitude: {position.latitude} Longitude: {position.longitude}
    </div>
  )
}

export default Navigator
