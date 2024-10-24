import s from './Footer.module.css'
export default function Footer() {
  return (
    <div className={s.footer}>
      <h4>Разработано с помощью пива &copy;</h4> 
      <div className={s.support_wrapper}>
        <a href="https://t.me/coldestintheuniverse" target='_blank'>Поддержать разработчика</a>
        <img src="/support.jpg" alt="" className={s.suprot_img}/>
      </div>
    </div>
  )
}
