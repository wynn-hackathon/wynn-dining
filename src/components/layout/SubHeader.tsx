import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="logo"><Link aria-label="Wynn Las Vegas Private Access" href="/"><Image src="/images/wynn-lasvegas-footer-logo.svg" width="133" height="60" alt="Wynn Las Vegas" /></Link></div>
      </div>
    </div>
    )
  }

  export default SubHeader