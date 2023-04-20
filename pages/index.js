import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I am Kaleb, a Computer/Data Scientist!</p>
        <p>
          I am currently seeking Full-time employment as a Software Engineer and Data Analyst.
          Here is a link to my {' '}
          <a href="https://github.com/kgetachew/kgetachew/blob/main/Getachew%2C%20Kaleb.pdf">résumé</a>.
        </p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Socials</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/kaleb-getachew/">LinkedIn</a></li>
          <br />
          <li><a href="https://github.com/kgetachew">Github</a></li>
        </ul>
      </section>

      <section>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          </ul>
        </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
