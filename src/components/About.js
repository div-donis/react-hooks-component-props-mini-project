import React from "react";

function About(props){
    console.log(props)
    const url = "https://via.placeholder.com/215"

    return <aside>
        {props.image ? <img src = {props.image} alt = "blog logo"></img> : <img src = {url} alt = "blog logo"></img>}
        <p>{props.about}</p>
    </aside>
}

export default About