import React from 'react'
import SubHeader from './SubHeader'
import Link from 'next/link'
import { useEffect } from 'react'
import { isTablet, isDesktop, sticky, _$, isMobile } from '@/lib/utils'
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  useEffect(() => {

    window.addEventListener("scroll", (e) => {
      let header, height;
      isMobile() ? header = _$("#myHeader") : header = _$("#myHeader .mainNav");
      isMobile() ? height = 180 : height = 220;
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
                <Link className={router.pathname == "/diningPage" || '/diningPage/[slug]' ? "nav-link" : "nav-link"} href="/diningPage">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == "/about_our_hackathon" ? "nav-link active" : "nav-link"} href="/about_our_hackathon">About Project</Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname == "/data_flow" ? "nav-link" : "nav-link"} href="/data_flow">Data Flow</Link>
              </li>

              <li className="nav-item">
                <Link className={router.pathname == "/our_team" ? "nav-link active" : "nav-link"} href="/our_team">Our Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header