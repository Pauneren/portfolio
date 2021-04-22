import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
const ProjectTemplate = ({ pageContext: { frontmatter__title }, data }) => {

  // const projectTitle = data.project.projectObject.title
  // const projectDescription = data.project.projectObject.description
  return (
    <>
      <Seo
        title={data.project.projectObject.title.toUpperCase()}
        description={data.project.projectObject.description}
      />
      <main className="project-template-page">
        <h2>{data.project.projectObject.title}</h2>
        <p>{data.project.projectObject.description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($frontmatter__title: String) {
    project: markdownRemark(
      fileAbsolutePath: { regex: "/(projects)/" }
      frontmatter: { title: { eq: $frontmatter__title } }
    ) {
      projectObject: frontmatter {
        description
        title
        id
      }
    }
  }
`

export default ProjectTemplate
