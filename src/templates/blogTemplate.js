import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout';

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div
          style={{
            margin: '1em auto',
            float: 'left',
            'font-weight': '800',
            'font-size': '200%',
          }}
        >{frontmatter.title}</div>
        <div
          style={{
            margin: '0.5em auto',
            float: 'right',
            'font-size': '110%',
            'font-weight': 'bold',
          }}
        >{frontmatter.date}</div>
        <div
          style={{
            clear: 'both',
          }}
          className="blog-post"
        >
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`