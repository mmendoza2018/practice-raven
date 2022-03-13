import React, { useEffect, useState } from "react";
import "./formModal.css";
import helpPetition from "../../../../utils/helpPetition";

const FormModal = ({textButton}) => {
  const [dataUsers, setDataDataUsers] = useState([]);
  let { post, get } = helpPetition();
  let obj = {
    name: "string",
    tags: [
      "ANDROID"
    ],
    status: "BACKLOG",
    pointEstimate: "0",
    dueDate: "2022-03-13T01:40:13.903Z",
    assigneeId: "test"
  };
  useEffect(() => {
    let respuesta = post("https://syn-api-prod.herokuapp.com/tasks",{
      body:obj,
      mode:"no-cors",      
    }).then(
      (res) => {
        if (!res.error) {
          console.log("response true");
        } else {
          console.log("error response");
        }
      }
    );
    let respuesta2 = get("https://syn-api-prod.herokuapp.com/users").then(
      (res) => {
        if (!res.error) {
          setDataDataUsers(res);
        } else {
          console.log("error response");
        }
      }
    );
  }, []);
  return (
    <div className="container__form">
      <div className="item__form">
        <label>Task Title</label>
        <input type="text" />
      </div>
      <div className="item__form">
        <label>estimate</label>
        <select>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
      </div>
      <div className="item__form">
        <label>Assignee</label>
        <select>
          {dataUsers.map((e => {
            return <option key={e.fullName} value={e.fullName}>{e.fullName}</option>
          }))}
        </select>
      </div>
      <div className="item__form">
        <label>Label</label>
        <select>
          <option value="ANDROID">ANDROID</option>
          <option value="IOS">IOS</option>
          <option value="NODE_JS">NODE_JS</option>
          <option value="REACT">REACT</option>
          <option value="RAILS">RAILS</option>
        </select>
      </div>
      <div className="item__form">
        <label>Due date</label>
        <input type="date" />
      </div>
      <div className="item__form">
      <button>{textButton}</button>
      </div>
    </div>
  );
};

export default FormModal;
