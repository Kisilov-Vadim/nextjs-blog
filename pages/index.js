import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../src/components/Layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Date from '../src/components/date';

export default function Home({ allPostsData, jsonTest }) {

  console.log(jsonTest)
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{ textAlign: 'center' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa excepturi beatae maiores consequatur modi quas reprehenderit perferendis veniam atque cum, ipsam suscipit pariatur perspiciatis fugit voluptas sapiente labore sit.
        </p>
        <Link href='/posts/first-post'>
          Go to my first post
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
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

const sendUserData = async (url) => {
  let res = await fetch(url);
  return res.json() 
}

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  const jsonTest = await sendUserData('https://jsonplaceholder.typicode.com/todos');
  return {
    props: {
      allPostsData, 
      jsonTest
    }
  }
}
