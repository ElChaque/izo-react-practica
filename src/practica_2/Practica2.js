import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Page from './components/Page';
import BlogPost from './components/BlogPost';

const site = {
  pageTitle: 'RIVER PLATE EL MAS GRANDE',
  pageBody: '9/12/2018 Madrid',
};

const externalLinks = [
  { text: 'Minijuego', url: 'https://www.Minijuegos.com/'},
  { text: 'Youtube', url: 'https://www.Youtube.com/' },
];

function Practica2() {
  const extraContent = <p>Te amo Gallardo</p>;
  const randomBlogPost = {
    title: 'Practica de React',
    body: 'Aprendiendo a crear componentes y la exportacion/importacion, crear enlances',
  };

  return (
    <Page>
      <Header pageTitle={site.pageTitle} />
      <Main body={site.pageBody} externalLinks={externalLinks} extraContent={extraContent} />
      <BlogPost title={randomBlogPost.title} body={randomBlogPost.body} />
    </Page>
  );
}

export default Practica2;