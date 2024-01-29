import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  return (
    <ul id="menu-primary-menu" className="menu">
      <li className={router.pathname == "/slider-scroll" ? "menu-item current-item" : "menu-item"}>
        <Link href="/slider-scroll">Blockcity</Link>
      </li>

      <li className={router.pathname == "/about-us" ? "menu-item current-item" : "menu-item"}>
        <Link href="/about-us">About us</Link>
      </li>

      <li className="menu-item menu-item-has-children">
        <a>Explore</a>
        <ul className="sub-menu">
          <li className={router.pathname == "/explore-3" ? "menu-item current-item" : "menu-item"}>
            <Link href="/explore-3">Explore market</Link>
          </li>

          <li className={router.pathname == "/product-detail-2" ? "menu-item current-item" : "menu-item"}>
            <Link href="/product-detail-2">Blockcity Products</Link>
          </li>

          <li className={router.pathname == "/ranking" ? "menu-item current-item" : "menu-item"}>
            <Link href="/ranking">Ranking</Link>
          </li>

          <li className={router.pathname == "/upcoming" ? "menu-item current-item" : "menu-item"}>
            <Link href="/upcoming">Upcoming Projects</Link>
          </li>
        </ul>
      </li>

      <li className="menu-item menu-item-has-children">
        <a>Pages</a>
        <ul className="sub-menu">
          <li className="menu-item has-item">
            <Link href="/market">Market</Link>
            <ul className="nav-sub-menu">
              <li className="nav-menu-item"><Link href="/market-create">Create</Link></li>
              <li className="nav-menu-item"><Link href="/market">Market</Link></li>
              <li className="nav-menu-item"><Link href="/market-active-bid">Active Bid</Link></li>
              <li className="nav-menu-item"><Link href="/market-explore">Explore</Link></li>
              <li className="nav-menu-item"><Link href="/market-collection">My collection</Link></li>
              <li className="nav-menu-item"><Link href="/market-favorite">My favorite</Link></li>
              <li className="nav-menu-item"><Link href="/market-wallet">Wallet</Link></li>
              <li className="nav-menu-item"><Link href="/market-history">History</Link></li>
              <li className="nav-menu-item"><Link href="/market">Settings</Link></li>
            </ul>
          </li>

          <li className={router.pathname == "/author-2" ? "menu-item current-item" : "menu-item"}>
            <Link href="/author-2">Authors Style 2</Link>
          </li>

          <li className={router.pathname == "/terms-condition" ? "menu-item current-item" : "menu-item"}>
            <Link href="/terms-condition">Terms &amp; Condition</Link>
          </li>

          <li className={router.pathname == "/no-result" ? "menu-item current-item" : "menu-item"}>
            <Link href="/no-result">No Result</Link>
          </li>

          <li className={router.pathname == "/faq" ? "menu-item current-item" : "menu-item"}>
            <Link href="/faq">FAQs</Link>
          </li>

          <li className={router.pathname == "/coming-soon" ? "menu-item current-item" : "menu-item"}>
            <Link href="/coming-soon">Coming Soon</Link>
          </li>

          <li className={router.pathname == "/maintenance" ? "menu-item current-item" : "menu-item"}>
            <Link href="/maintenance">Maintenance</Link>
          </li>

          <li className={router.pathname == "/404" ? "menu-item current-item" : "menu-item"}>
            <Link href="/404">404</Link>
          </li>

          <li className={router.pathname == "/login" ? "menu-item current-item" : "menu-item"}>
            <Link href="/login">Login</Link>
          </li>

          <li className={router.pathname == "/sign-up" ? "menu-item current-item" : "menu-item"}>
            <Link href="/sign-up">Sign up</Link>
          </li>
        </ul>
      </li>

      <li className={router.pathname == "/contact-us" ? "menu-item current-item" : "menu-item"}>
        <Link href="/contact-us">Contact</Link>
      </li>
    </ul>
  );
}
