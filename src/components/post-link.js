import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <div>
        <Link to={post.frontmatter.path}>
            <div
                style={{
                    margin: "1em 0",
                    padding: "0.5em",
                    background: "#263238",
                }}>
                {post.frontmatter.title}
                <div style={{
                    'font-size': "80%",
                    float: 'right'
                }}>
                    {post.frontmatter.date}
                </div>
            </div>
        </Link>
    </div >
)

export default PostLink