import Link from 'next/link'
import style from './footer.module.scss'

export const Footer = ()=>{
    return(
        <footer className={style.footer}>
            <p>Copyright &copy; DJ Events 2022</p>
            <p>
                <Link href="/about">
                  <a>About This Project</a>  
                </Link>
            </p>
        </footer>
    )
}

export default Footer