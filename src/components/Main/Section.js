import React from "react";

function Section(props) {
  const { children, title } = props;
  return (
    <section className="section">
      <h2 className="section__title">{ title }</h2>
      {
        [ children ]
      }
    </section>
  )
}

export default Section;