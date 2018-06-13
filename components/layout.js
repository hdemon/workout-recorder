import Link from 'next/link'
import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <title></title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    { children }
  </div>
)
