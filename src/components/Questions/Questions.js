import React, { useEffect } from "react";
import { QuestionItem } from "../QuestionsItem/QuestionsItem";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

const Questions = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getQuestions();
  }, []);
  return (
    <>
      <div style={{ fontSize: "20px", marginBottom: "20px" }}>
        Frequently asked questions
      </div>
      <div
        style={{
          height: `calc(100vh - 200px)`,
          overflowY: "auto",
        }}
      >
        {store.questions.map((questionStore) => {
          return (
            <QuestionItem
              question={questionStore.question}
              answer={questionStore.answer}
            />
          );
        })}
      </div>
    </>
  );
};

export default observer(Questions);
