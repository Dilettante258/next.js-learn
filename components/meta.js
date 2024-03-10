import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta charSet="UTF-8"/>

      <title>This is a title</title>

      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="academic homepage."/>
      <meta name="keywords" content="academic homepage"/>
      <meta
        name="description"
        content={ `A statically generated blog example using Next.js and ` }
      />

      <meta property="og:title" content="标题"/>
      <meta property="og:type" content="profile"/>
      <meta property="og:image" content="略缩图地址"/>
      <meta property="og:url" content="页面地址"/>
      <meta property="og:description" content="页面简介"/>
      <meta property="og:site_name" content="你的网站名"/>
    </Head>
  )
}

export default Meta;