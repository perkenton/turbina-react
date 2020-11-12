import React from "react";

function SectionList(props) {

  return (
    <section className="section">
      <h2 className="section__title">{ props.title }</h2>
      <ul className="section__list">
        {props.list.map(({ id, text }) => {
          return (
            <li className="section__list-item" key={ id } >{ text }</li>
          )
        })}
      </ul>
    </section>
  )
}

export default SectionList;