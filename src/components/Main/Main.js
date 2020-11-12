import React from "react";
import Section from "./Section";
import SectionParagraph from "./SectionParagraph";
import SectionList from "./SectionList";
import AddAuthorForm from "./../Form";
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

      <Section title="Форма">
        <SectionParagraph text= "Заполняя эту форму, вы&nbsp;становитесь частью проекта." />
     
        <AddAuthorForm />

        <span className="form__submit-error">
          Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!
        </span>
      </Section>
      
    </main>
  );
}

export default Main;
