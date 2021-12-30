import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/">
              <a href="#" className="nav-link">
                <b>Home</b>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/settings">
              <a href="#" className="nav-link active" aria-current="page">
                Settings
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a
              href={"/api/auth/" + (user ? "logout" : "login")}
              className="nav-link"
            >
              {user ? "Logout" : "Login"}
            </a>
          </li>
        </ul>
        {user ? (
          <img
            src={user.picture}
            alt={user.name}
            width="38"
            height="38"
            className="rounded-circle"
          />
        ) : null}
      </header>
    </div>
  );
};

export default Header;
