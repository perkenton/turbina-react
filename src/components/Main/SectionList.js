import React from "react";

function SectionList(props) {

  return (  
    <ul className="section__list">
      {props.list.map(({ id, text }) => {
        return (
          <li className="section__list-item" key={ id } >{ text }</li>
        )
      })}
    </ul>    
  )
}

export default SectionList;