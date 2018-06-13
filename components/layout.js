import Link from 'next/link'
import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <title>test</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </Head>

    { children }
  </div>
)
