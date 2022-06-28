import * as React from "react"
import * as indexStyles from '../styles/pages/Index.module.css'



//data

// styles

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Loris Polenz</title>
      <h1>Hi!</h1>
      <h3>I'm Loris, feel free to reach out to me! (<a href="mailto:loris@lorispolenz.com">loris@lorispolenz.com</a>)</h3>

      <div className={indexStyles.links}>
        <h2>Links</h2>
        <a href="https://github.com/lorispolenz">GitHub</a>
        <a href="https://www.linkedin.com/in/lorispolenz/">LinkedIn</a>
        <a href="./projects">Projects</a>
        <a href=".">this</a>
      </div>
    </main>
  )
}

export default IndexPage
