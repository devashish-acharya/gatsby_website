import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Not actually that simple</h1>
    <p>Welcome to my simple site.</p>
    <p>You wont find anything useful here, just me practicing some code!</p>
    <br></br>
    
    
    <p>Ipsum eu sit dolore nulla veniam tempor ullamco id. Commodo sint commodo quis est ex voluptate culpa reprehenderit cillum proident excepteur. Do excepteur excepteur amet proident laboris consequat enim ex sunt excepteur cupidatat. Minim occaecat est sunt consequat reprehenderit laboris cupidatat dolore tempor qui anim enim elit. Sit veniam amet sint anim enim eiusmod ullamco commodo eu eiusmod aliquip duis cupidatat.</p>
    

    
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
     <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
