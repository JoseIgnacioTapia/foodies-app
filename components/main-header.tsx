import React from "react";
import Link from "next/link";

import logoImg from "@/assets/logo.png";

function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            {" "}
            <Link href="/community">Foodies communities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
