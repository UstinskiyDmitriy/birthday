import React from 'react'
import s from './Welcome.module.css'
export default function Welcome() {
  return (
    <div>
      <img src="/Welcome.jpg" alt="" className={s.image}/>
      <span className={s.here}>Вот твои пожелания!</span>
    </div>
  )
}
