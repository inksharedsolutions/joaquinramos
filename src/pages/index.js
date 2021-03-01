import React from "react"
import { Helmet } from "react-helmet";

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/banner';
import MidBook from "../components/front-book"
import Author from "../components/author"
// import Video from "../components/videos"

const IndexPage = () => (
  <>
    <Layout>
      <Helmet title="Home | Joaquin Ramos"/>
      <Nav />
      <Banner />
      <MidBook />
      <Author />
      {/* <Video /> */}
    </Layout>
  </>
)

export default IndexPage
