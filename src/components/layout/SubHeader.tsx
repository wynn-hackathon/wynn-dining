import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="logo"><Link aria-label="Wynn Las Vegas Private Access" href="/diningPage"><Image src="/images/logo.svg" width="100" height="100" alt="Wynn Las Vegas" /></Link></div>
      </div>
    </div>
  )
}

export default SubHeader