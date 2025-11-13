"use client"; // Required for using Link and interactivity

import Link from "next/link";
import styles from "./nav.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Dhiya’s Portfolio</h2>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
