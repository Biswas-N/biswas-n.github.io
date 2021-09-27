import * as React from "react"
import Layout from "../components/layout"

// styles
const pageStyles = {
  margin: "96px auto",
  maxWidth: "600px",
  fontFamily: "'Source Sans Pro', sans-serif",
  flexGrow: 1,
  color: "#231900",
}

const nameStyles = {
  fontFamily: "'Playfair Display', serif"
}

const nameSpanStyles = {
  borderBottom: "2px solid #ffcc00",
}

const buttonStyles = {
  fontSize: "14px",
  fontWeight: "700",
  backgroundColor: "#ffcc00",
  color: "#231900",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  marginTop: "10px",
  borderRadius: "5px",
}

const contentStyles = {
  fontWeight: "400",
}

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Biswas Nandamuri</title>
        <h1 style={nameStyles}>Hi, I'm <span style={nameSpanStyles}>Biswas Nandamuri</span></h1>
        <p style={contentStyles}>
          I'm a software engineer based in India. I mainly work with .Net, React, Node.js, MySql, e.t.c.. Thank you for visiting this site, I am planning to create an amazing portfolio here, meanwhile check out my resumé.
        </p>
        <a href={'/Biswas_Nandamuri_Resume.pdf'}><button style={buttonStyles}>Resumé</button></a>
      </main>
    </Layout>
  )
}

export default IndexPage
