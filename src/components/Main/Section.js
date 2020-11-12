import React from "react";
import SectionParagraph from "./SectionParagraph";

function Section(props) {
  return (
    <section className="section">
      <h2 className="section__title">{ props.title }</h2>
      {
        props.text.length <= 1
          ?
          <SectionParagraph text={ props.text } />
          :
          props.text.map((item, index) => {
            return (
              <SectionParagraph key={ index } text={ item } />
            )
          })
      }
    </section>
  )
}

export default Section;