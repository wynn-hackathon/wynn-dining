import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
       <div className="container">
          <div className="row">
            <div className="col-sm-6">
            <ul className="links">
            <li><a href="https://www.wynnlasvegas.com/about-us" target="_blank" rel='noreferrer'>About Us</a></li>
            <li><a href="https://www.wynnlasvegas.com/privacy-policy" target="_blank" rel='noreferrer'>Privacy Policy</a></li>
            <li><a href="https://www.wynnlasvegas.com/cookie-notice" target="_blank" rel='noreferrer'>Cookie Notice</a></li>
            <li><a href="https://www.visitwynn.com/tc/index.cfm?term_id=708708&amp;_ga=2.58004643.807548922.1545345355-1023184388.1545345355&amp;_gl=1*wq7sjt*_gcl_aw*R0NMLjE2NzM1MzQzMzEuQ2owS0NRaUFfUDZkQmhEMUFSSXNBQUdJN0hDc1JheVR6OFN2UDctRjhKa1JJc3Y1ZmliazU1bzVUa3BYcnk0Tjl3VWxDQ194ZTNhd2lVQWFBbHJZRUFMd193Y0I.*_gcl_dc*R0NMLjE2NzM1MzQzMzEuQ2owS0NRaUFfUDZkQmhEMUFSSXNBQUdJN0hDc1JheVR6OFN2UDctRjhKa1JJc3Y1ZmliazU1bzVUa3BYcnk0Tjl3VWxDQ194ZTNhd2lVQWFBbHJZRUFMd193Y0I." target="_blank" rel='noreferrer'>Terms of Use</a></li>
          </ul>
            </div>
            <div className="col-sm-6">
              <div className="contact-info">
                <p className="location" tabIndex={0}>Wynn and Encore Las Vegas<br/>
                  3131 Las Vegas Blvd. Las Vegas, NV 89109<br />
                  <a href="tel:+17027707000">+1 (702) 770-7000</a></p>
                <div className="social">
                  <p tabIndex={0}>Connect with us.</p>
                  <ul className="social-icons">
                    <li><a aria-label="Wynn Las Vegas on Facebook" href="https://www.facebook.com/wynnlasvegas/" target="_blank" className="social-icon" rel='noreferrer'><Image src="/images/facebook-icon.svg" alt="Wynn Las Vegas on Facebook" width="15" height="15" /></a></li>
                  <li><a aria-label="Wynn Las Vegas on Twitter" href="https://www.twitter.com/wynnlasvegas/" target="_blank" className="social-icon" rel='noreferrer'><i className="bi bi-twitter"></i></a></li>
                  <li><a aria-label="Wynn Las Vegas on Android" href="https://play.google.com/store/apps/details?id=com.wynn.mobileapp&amp;hl=en_US&amp;gl=US" target="_blank" className="social-icon" rel='noreferrer'><i className="bi bi-android2"></i></a></li>
                  <li><a aria-label="Wynn Las Vegas on Instagram" href="https://www.instagram.com/wynnlasvegas/" target="_blank" className="social-icon" rel='noreferrer'><i className="bi bi-instagram"></i></a></li>
                  <li><a aria-label="Wynn Las Vegas on Apple" href="https://apps.apple.com/us/app/wynn-resorts/id1474419728" target="_blank" className="social-icon" rel='noreferrer'><i className="bi bi-apple"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
           <p className="copyright" tabIndex={0}>&copy;
            2023 Wynn Resorts Holdings, LLC.
            All rights reserved.
          </p>
     </div>
    </footer>
  )
}

export default Footer