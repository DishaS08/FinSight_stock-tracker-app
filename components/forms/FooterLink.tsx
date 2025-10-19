import Link from 'next/link'
import React from 'react'

const FooterLink = ({text, linkText, href}:FooterLinkProps) => {
  return (
    <div className='text-center pt-4'>
        {text}{` `}
        <Link href={href} className='footer-link'>
            {linkText}
        </Link>
    </div>
  )
}

export default FooterLink