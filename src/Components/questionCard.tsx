import React, { useState } from "react";
import { questionPropsType } from "../Type/quiz_type";

const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
}) => {
  // console.log(question, options)

  // user radio

  let [selectoption, setSelectOption] = useState(""); //string value ""

  const handleSelection = (ev: any) => {
    // console.log(ev.target.value)
    setSelectOption(ev.target.value);
  };

  return (
      <div className="card vstack gap-2 col-md-8 mx-auto" >
        <div className="card-body">
          <p className="card-text">
          <p className="question-style"> Q. {question} </p>
          </p>
        </div>
        <ul className="list-group list-group-flush">
        <div className="container"style={{height: '13em'}}>
        <form
            onSubmit={(e: React.FormEvent<EventTarget>) =>
              callback(e, selectoption)
            }
           >
          
            {options.map((opt: string, ind: number) => {
              return (
                <div key={ind} >
                  <label >
                    <input
                      type="radio"
                      name="opt"
                      style={{ margin: "8px" }}
                      value={opt}
                      required
                      checked={selectoption === opt} //if equals then pass next option with clear
                      onChange={handleSelection}
                    />
                    {opt}
                  </label>
                </div>
              );
            })}
          <div className="d-grid gap-2 col-6 mx-auto">
            <input className="btn btn-primary" type="submit" />
            </div>
          </form></div>
        
        </ul>
       
      </div>
  
  );
};
export default QuestionCard;
