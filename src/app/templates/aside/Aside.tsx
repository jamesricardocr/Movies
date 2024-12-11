
import React from 'react'
import style from './aside.module.scss'
import GenreList from '@/app/components/aside/GenreList'
import Search from '@/app/components/search/Search'


const Aside = () => {
  return (
    <aside className={style.aside}>
        <Search/>
        <GenreList/>
    </aside >
  )
}

export default Aside