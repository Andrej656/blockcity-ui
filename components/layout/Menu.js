import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  return (
    <ul id="menu-primary-menu" className="menu">
      <li className={`menu-item ${router.pathname === "/slider-scroll" ? "current-item" : ""}`}>
        <Link href="/slider-scroll">Home</Link>
      </li>
      <li className={`menu-item ${router.pathname === "/about-us" ? "current-item" : ""}`}>
        <Link href="/about-us">About us</Link>
      </li>
      {/* Add the Market menu item */}
      <li className={`menu-item ${router.pathname === "/market" ? "current-item" : ""}`}>
        <Link href="/market">Blockcity</Link>
      </li>
    </ul>
  );
}
