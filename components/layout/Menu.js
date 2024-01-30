import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  return (
    <ul id="menu-primary-menu" className="menu">
      <li className={`menu-item ${router.pathname === "/slider-scroll" ? "current-item" : ""}`}>
        <Link href="/slider-scroll">Blockcity</Link>
      </li>
      <li className={`menu-item ${router.pathname === "/about-us" ? "current-item" : ""}`}>
        <Link href="/about-us">About us</Link>
      </li>
      <li className="menu-item menu-item-has-children">
        <a>Explore</a>
        <ul className="sub-menu">
          <li className={`menu-item ${router.pathname === "/explore-3" ? "current-item" : ""}`}>
            <Link href="/explore-3">Explore market</Link>
          </li>
          <li className={`menu-item ${router.pathname === "/product-detail-2" ? "current-item" : ""}`}>
            <Link href="/product-detail-2">Blockcity Products</Link>
          </li>
          <li className={`menu-item ${router.pathname === "/ranking" ? "current-item" : ""}`}>
            <Link href="/ranking">Ranking</Link>
          </li>
          <li className={`menu-item ${router.pathname === "/upcoming" ? "current-item" : ""}`}>
            <Link href="/upcoming">Upcoming Projects</Link>
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a>Market</a>
        <ul className="sub-menu">
          <li className="menu-item has-item">
            <Link href="/market">Market</Link>
            <ul className="nav-sub-menu">
              <li className={`nav-menu-item ${router.pathname === "/market-create" ? "current-item" : ""}`}>
                <Link href="/market-create">Create</Link>
              </li>
              <li className={`nav-menu-item ${router.pathname === "/market" ? "current-item" : ""}`}>
                <Link href="/market">Market</Link>
              </li>
              <li className={`nav-menu-item ${router.pathname === "/market-active-bid" ? "current-item" : ""}`}>
                <Link href="/market-active-bid">Active Bid</Link>
              </li>
              <li className={`nav-menu-item ${router.pathname === "/market-explore" ? "current-item" : ""}`}>
                <Link href="/market-explore">Explore</Link>
              </li>
              <li className={`nav-menu-item ${router.pathname === "/market-collection" ? "current-item" : ""}`}>
                <Link href="/market-collection">My collection</Link>
              </li>
              <li className={`nav-menu-item ${router.pathname === "/market-favorite" ? "current-item" : ""}`}>
                <Link href="/market-favorite">My favorite</Link>
              </li>
              <li className={`nav-menu-item ${router.pathname === "/market-wallet" ? "current-item" : ""}`}>
                <Link href="/market-wallet">Wallet</Link>
              </li>
              <li className={`nav-menu-item ${router.pathname === "/market-history" ? "current-item" : ""}`}>
                <Link href="/market-history">History</Link>
              </li>
              <li className={`nav-menu-item ${router.pathname === "/market-settings" ? "current-item" : ""}`}>
                <Link href="/market-settings">Settings</Link>
              </li>
            </ul>
          </li>
          <li className={`menu-item ${router.pathname === "/author-2" ? "current-item" : ""}`}>
            <Link href="/author-2">Author dashboard</Link>
          </li>
        </ul>
      </li>
      <li className={`menu-item ${router.pathname === "/contact-us" ? "current-item" : ""}`}>
        <Link href="/contact-us">Contact</Link>
      </li>
    </ul>
  );
}
