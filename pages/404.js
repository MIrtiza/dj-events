import Link from "next/link"
import Layout from "../components/Layout"
import style from '../styles/404.module.scss'

export default function NotFoundPage(){
    return(
        <Layout title="page not found">
            <div className={style.error}>
            <h1>404</h1>
            <h4>Sorry, there is no page</h4>
            <Link href="/">Go to Home Page</Link>
            </div>
     
        </Layout>
    )
}