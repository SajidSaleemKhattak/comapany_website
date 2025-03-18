import React, { useState } from "react";
import styles from "../Styling/Header.module.css";
import logo from "../assets/images_Landing_Page/Logo.jpeg";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  return (
    <header className={styles.header}>
      {/* Logo, */}
      <div className={styles.clogo}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img srcSet={logo} alt="LOGO" className={styles.logo} />
        </NavLink>
      </div>

      {/* Hamburger Menu Icon (Visible Only on Mobile) */}
      <button
        className={styles.menuIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Menu (Sidebar on Mobile) */}
      <nav
        className={`${styles.navigation} ${menuOpen ? styles.showMenu : ""}`}
      >
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/Become_a_Partner"
          onClick={() => setMenuOpen(false)}
        >
          Become a Partner
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/Services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : "")}
          to="/Contact_us"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </NavLink>

        {/* "Get a Quote" button (Only visible inside mobile sidebar) */}
        <NavLink
          to="/Get_a_quote"
          onClick={() => setMenuOpen(false)}
          className={styles.mobileQuote}
        >
          <button className={styles.btn}>Get a Quote</button>
        </NavLink>
      </nav>

      {/* "Get a Quote" button (Always visible on larger screens) */}
      <div className={styles.desktopQuote}>
        <NavLink to="/Get_a_quote" onClick={() => setMenuOpen(false)}>
          <button className={styles.btn}>Get a Quote</button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
