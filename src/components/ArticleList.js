import React from "react";

function ArticleList(props){
    console.log(props);
    const postVar = props.posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      }); 
    return <main>
        {postVar}
    </main>
}

export default ArticleList