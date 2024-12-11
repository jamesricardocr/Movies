import React from 'react'
import style from './logo.module.scss'
import logo from '@/app/assets/img/svg/Logo.svg'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className={style.logo}>
      <picture >
        <Link href={'/'}>
          <figure>
            <Image width={160} height={42} src={logo.src} alt="logo quickbet" />
          </figure>
        </Link>
      </picture>
      <nav>
        <ul>
          <li><Link href={'/generos/science-fiction?id=878'}>Popular</Link></li>
          <li><Link href={'/favoritos'}>Favoritos</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Logo