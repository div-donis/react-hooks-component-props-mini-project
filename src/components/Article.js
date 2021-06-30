import React from "react";

function Article(props){
    console.log(props);
        const date = "January 1, 1970";
        return <article>
                    <h3 key={props.title}>{props.title}</h3>
                    {props.date ? <small key={props.date}>{props.date}</small> : date}
                    <p key = {props.preview}>{props.preview}</p>
                </article>
    
    
}

export default Article