import style from '../../style/navbar.module.css'
const Navbar = () => {
  return (
  <nav className={style.navbar}>

    <ul className={style.list}>
      <li className={style.item}>
        <a href="/" className={style.link}>
          Home
        </a>
      </li>
      <li className={style.item}>
        <a href="/chat"  className={style.link}>
          Chat
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;
