import React from 'react';

function Article({title, link, date}){
  return(
    <div></div>
  )
}

const Blog = ()=>{
  return <div className="blog-container">
    <div className="left">
      <span>Blog</span>
      <h2>What's new? My blog and new</h2>
    </div>
    <div className="right">
      <Article title="" link="" date=""/>
    </div>
  </div>
}
export default Blog;