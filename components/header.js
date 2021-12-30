import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Urls from "../utils/urls";
import Link from "next/link";

const Header = () => {
  const auth = useAuth0();
  const authButtonClick = () => {
    if (auth.isAuthenticated) {
      auth.logout({ returnTo: Urls.domain() });
    } else {
      auth.loginWithRedirect({ redirectUri: Urls.domain() + "/settings" });
    }
  };

  return (
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link href="/">
              <a href="#" class="nav-link">
                <b>Home</b>
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/settings">
              <a href="#" class="nav-link active" aria-current="page">
                Settings
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <a href="#" onClick={authButtonClick} class="nav-link">
              {auth.isAuthenticated ? "Logout" : "Login"}
            </a>
          </li>
        </ul>
        {auth.isAuthenticated ? (
          <img
            src={auth.user.picture}
            alt={auth.user.name}
            width="38"
            height="38"
            class="rounded-circle"
          />
        ) : null}
      </header>
    </div>
  );
};

export default Header;
