import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Urls from "../utils/urls";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: Urls.domain() })}>Log Out</button>
  );
};

export default LogoutButton;
