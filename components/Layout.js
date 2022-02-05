import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
export const Layout = ({title, keywords, description, children})=>{
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            
            <Header />
            <div>
                {children}
            </div>
           <Footer /> 
        </>
    )
}

Layout.defaultProps = {
    title:'DJ Events | Find the party',
    description: 'Find the latest DJ',
    keywords: 'music, dj, edm, atom'
}

export default Layout