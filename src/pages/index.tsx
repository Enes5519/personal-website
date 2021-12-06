import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <div className="container">
    <Head>
      <title>Enes Yıldırım | Kişisel Blog</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="c-small flex-center px-5 py-4 w-full">
      <a className="btn btn-ghost font-normal" href="/">
        Anasayfa
      </a>
      <a className="btn btn-ghost font-normal" href="/">
        Blog
      </a>
      <a className="btn btn-ghost font-normal" href="/">
        Özgeçmiş
      </a>
    </div>
    <div className="c-small py-16">
      <h1>Hoşgeldiniz, ben Enes</h1>
      <p className="mt-6">Front-end teknolojileri, linux, psikoloji gibi konularla yakından ilgileniyorum.</p>
    </div>
    <div className="c-small py-16">
      <h2>Son Bloglarım</h2>
      <p className="mt-6">Beklemede kalın...</p>
    </div>
  </div>
);

export default Home;
