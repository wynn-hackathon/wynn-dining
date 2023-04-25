import React from 'react'
import SubHeader from './SubHeader'
import Link from 'next/link'
import { useEffect } from 'react'
import { isTablet, sticky, _$, isMobile } from '@/lib/utils'
import { useRouter } from 'next/router';

const Header = () => {

  const router = useRouter();
  let homeClass: any = "nav-link";
  router.pathname.includes('diningPage') && (homeClass += " active");

  const hampugerMenuClick = () => {
    let isMenuOpen: any = _$('.navbar #navbarNav').classList.contains('show');
    return !isMenuOpen && _$('.navbar').classList.toggle("menu-open-m");
  }

  const menuClick = () => {
    isMobile() && _$('.navbar-toggler').click();
  }

  const handleLogout = (e: any) => {
    e.preventDefault();
    _$('.account .login').classList.toggle('d-none')
    _$('.account .logout').classList.toggle('d-none')
    _$('.account-m .login').classList.toggle('d-none')
    _$('.account-m .logout').classList.toggle('d-none')
  }


  useEffect(() => {
    window?.addEventListener("scroll", (e) => {
      let header, height;
      isMobile() ? header = _$("#myHeader") : header = _$("#myHeader .mainNav");
      isMobile() ? height = 180 : height = 220;
      sticky(header, height, "sticky");
      if (isTablet() && _$(".menu-open-m")) {
        (_$("main").getBoundingClientRect().top < 300) && _$('.navbar-toggler').click();
      }
    });
  });

  return (
    <>
      <header id="myHeader" className={router.pathname.replace(/[^a-zA-Z0-9 ]/g, '')}>
        <SubHeader />
        <nav className="navbar navbar-expand-sm navbar-light mainNav">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={hampugerMenuClick}>
              <div className="hamburger">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
              </div>
            </button>
            <div className='account'>
              <i className="bi bi-person-circle"></i><Link className='login' href="" data-bs-toggle="modal" data-bs-target=".loginModal" >SIGN IN</Link>
              <span className='logout d-none'>
                <Link href="" className='' onClick={handleLogout}>LogOut</Link> |
                <Link href="" className='view_profile' data-bs-toggle="modal" data-bs-target=".profileModal">Profile</Link>
              </span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className='account-m'>
                  <i className="bi bi-person-circle"></i><Link href="" className='login' data-bs-toggle="modal" data-bs-target=".loginModal" >SIGN IN</Link>
                  <span className='logout d-none'>
                    <Link href="" className='' onClick={handleLogout}>LogOut</Link> |
                    <Link href="/" className='' data-bs-toggle="modal" data-bs-target=".profileModal">Profile</Link>
                  </span>
                </li>
                <li className="nav-item home">
                  <Link className={homeClass} href="/diningPage" onClick={menuClick} >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={router.pathname == "/about_our_hackathon" ? "nav-link active" : "nav-link"} href="/about_our_hackathon" onClick={menuClick}>About Project</Link>
                </li>
                <li className="nav-item">
                  <Link className={router.pathname == "/data_flow" ? "nav-link active" : "nav-link"} href="/data_flow" onClick={menuClick}>What We Do</Link>
                </li>

                <li className="nav-item">
                  <Link className={router.pathname == "/our_team" ? "nav-link active" : "nav-link"} href="/our_team" onClick={menuClick}>Our Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header

