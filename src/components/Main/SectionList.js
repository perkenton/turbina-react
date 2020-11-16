import React from "react";

function SectionList({ list }) {

  return (  
    <ul className="section__list">
      {list.map(({ id, text }) => {
        return (
          <li className="section__list-item" key={ id } >{ text }</li>
        )
      })}
    </ul>    
  )
}

export default SectionList;