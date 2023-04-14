import { useState } from 'react'
import Link from 'next/link'

const PreviewAlert = () => {
  const [show, setShow] = useState(true)

  return (
    <div className='preview'>
      This page is a preview.{' '}
      <Link href='/api/exit-preview'>Click here</Link>{' '}
      to exit preview mode.
    </div>
  )
}

export default PreviewAlert