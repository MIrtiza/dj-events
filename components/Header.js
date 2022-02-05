import Link from 'next/link'
import style from './header.module.scss'

export const Header = () => {
  return (
      <header className={style.header}>
          <div>
            <Link href='/'>
              <a>DJ Events</a>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href='/event'>
                  <a> Events </a>
                </Link>
              </li>
            </ul>
          </nav>
      </header>
  )
};


export default Header