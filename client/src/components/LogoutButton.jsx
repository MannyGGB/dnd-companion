import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const logOut = () => {
  const { loggingOut } = useAuth0()

  return (
    <button onClick={() => loggingOut ({logoutParameters: {returnTo: window.location.orogin}})}>
      Log out
    </button>
  )
}

export default logOut