import React from 'react';

import "./Tag.css";


const Tag=({tagName,selectTag, selected})=> {
    // console.log("props",props);
    const tagStyle={
        Research: {backgroundColor: "#fda821"},
        Planning: {backgroundColor: "#15D4C8"},
        Execution: {backgroundColor: "#ffd12c"},
        Review: {backgroundColor: "#4cdafc"},
        default: {backgroundColor: "#f9f9f9"},


    }
    return <button 
    type='button'
     className='tag'
     style={selected? tagStyle[tagName]: tagStyle.default}
     
      onClick={()=>selectTag
    (tagName)}>
        {tagName}
    </button>;


    
};

export default Tag;