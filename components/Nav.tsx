"use client";

import Link from "next/link";
import "./Nav.css";
import { useState } from "react";
import "./Nav.css";
import "../app/globals.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-container">
      <nav className="nav mobile-padding nav-fade">
        <div className="nav-content">
          <div className="nav-header text-black">
            <h1 className="nav-title type-body-bold">ZISHUN STUDIOS</h1>
            <p className="nav-sub-heading type-body">
              BY MIGRANT MULTIDISCIPLINARY ARTIST ZED 榛子瞬 XU
            </p>
          </div>
          <div className="nav-links-container text-black">
            <h2 className="nav-links-heading type-body-bold">NAVIGATION</h2>
            <ul className="nav-links type-body">
              <li className="nav-link">
                <Link href="/">HOME,</Link>
              </li>
              <li className="nav-link">
                <Link href="/film">FILM,</Link>
              </li>
              <li className="nav-link">
                <Link href="/paintings">PAINTING,</Link>
              </li>
              <li className="nav-link">
                <Link href="/performance">PERFORMANCE,</Link>
              </li>
              <li className="nav-link">
                <Link href="/about">ABOUT</Link>
              </li>
            </ul>
          </div>
          <button
            className="menu-button type-body text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="nav-overlay">
            <ul className="nav-overlay-links">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/painting">PAINTING</Link>
              </li>
              <li>
                <Link href="/selected-works">SELECTED WORKS</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
