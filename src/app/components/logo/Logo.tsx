import React, { useState } from 'react'
import style from './logo.module.scss'
import logo from '@/app/assets/img/svg/Logo.svg'
import user from '@/app/assets/img/svg/user.svg'
import Link from 'next/link'
import Image from 'next/image'
import UserModal from '../userModal/UserModal'

const Logo = () => {

  const [showModal, setShowModal] = useState(false)

  const handleUserModal = () => {
    setShowModal(!showModal)
  }

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
        <li onClick={() => handleUserModal()}><Image width={26} height={26} src={user.src} alt='user quickbet' /></li>
      </nav>
      {showModal && <UserModal showModal={setShowModal} />}
    </div>
  )
}

export default Logo