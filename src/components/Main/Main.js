import React from "react";

import Section from "./Section";
import SectionParagraph from "./SectionParagraph";
import SectionList from "./SectionList";
import AddAuthorForm from "../Form/AddAuthorForm";

import {
  TEXT_SECTIONS_DATA
} from '../../constants/constants';

function Main() {
  
  return (
    <main className="main">
      {TEXT_SECTIONS_DATA.map(({ id, title, type, content }) => {
        return (
          <Section key={ id } title={ title }>
            { 
              type === 'list'
              ? <SectionList list={ content } />
              : content.map((text, index) => {
                  return (<SectionParagraph key={ index } text={ text } />)
                })                                               
            } 
          </Section>
        )
      })}  

      <Section key="form" title="Форма">
        <SectionParagraph text= "Заполняя эту форму, вы&nbsp;становитесь частью проекта." />     
        <AddAuthorForm />
      </Section>      
    </main>
  );
}

export default Main;
