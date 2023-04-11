import React from 'react'
import SubHeader from './SubHeader'
import Link from 'next/link'
import { useEffect } from 'react'
import { isTablet, isDesktop, sticky, _$ } from '@/lib/utils'
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  useEffect(() => {

    window.addEventListener("scroll", (e) => {
      let header, height;
      isTablet() ? header = _$("#myHeader") : header = _$("#myHeader .mainNav");
      isTablet() ? height = 180 : height = 220;
      sticky(header, height, "sticky");
      if (isTablet() && _$(".menu-open-m")) { (_$("main").getBoundingClientRect().top < 300) && _$('.navbar-toggler').click(); }
    });
  })

  const closeMobileMenu = () => {
    let isMenuOpen = _$('.navbar #navbarNav').classList.contains('show');
    return !isMenuOpen && _$('.navbar').classList.toggle("menu-open-m");
  }

  return (

    <header id="myHeader">
      <SubHeader />
      <nav className="navbar navbar-expand-sm navbar-light mainNav">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={closeMobileMenu}>
            <div className="hamburger">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
              <span className="bar bar4"></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={router.pathname == "/" ? "nav-link active" : "nav-link"} href="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == "/rooms-and-suites" || router.pathname == '/rooms-and-suites/[slug]' ? "nav-link active" : "nav-link"} href="/events">Room & Suites</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == "/wynn-rewards" ? "nav-link" : "nav-link"} href="/wynn-rewards">Wynn Rewards</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == "/diningPage" || '/diningPage/[slug]' ? "nav-link active" : "nav-link"} href="/diningPage">Dining</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == "/casino" ? "nav-link active" : "nav-link"} href="/casino">Casino</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == "/shops" ? "nav-link active" : "nav-link"} href="/shops">Shops</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header