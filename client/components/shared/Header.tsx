import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [color, setColor] = useState(false);

  // Change navbar color on scroll
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
      return () => {
        window.removeEventListener("scroll", changeColor);
      };
    }
  }, []);

  return (
    <div
      className={
        color || router.pathname !== "/" ? "header header-scroll-bg" : "header"
      }
    >
      <div className="left-section">
        <Image src="/images/logo.png" alt="Logo" height={110} width={110} />
      </div>
      <div className="right-section">
        <ul>
          <li>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={router.pathname === "/menu" ? "active" : ""}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/offers"
              className={router.pathname === "/offers" ? "active" : ""}
            >
              Offers and Events
            </Link>
          </li>
          <li>
            <Link
              href="/functions"
              className={router.pathname === "/functions" ? "active" : ""}
            >
              Functions
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={router.pathname === "/contact-us" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
          <li className="book-table-btn">
            <Link href="/book-a-table">Book A Table</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
