import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Urls from "../utils/urls";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const redirectUri = Urls.domain() + "/settings";

  // TODO replace localhost with the right url
  return (
    <button onClick={() => loginWithRedirect({ redirectUri })}>Log In</button>
  );
};

export default LoginButton;
