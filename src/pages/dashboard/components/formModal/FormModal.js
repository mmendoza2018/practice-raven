import React, { useEffect, useState } from "react";
import "./formModal.css";
import helpPetition from "../../../../utils/helpPetition";
let valueDefault = {
  name: "",
  status: "TODO",
  tags: ["REACT"],
  pointEstimate: 0,
  dueDate: "2022-03-13T01:40:13.903Z",
  assigneeId: "85416a6b-e075-4d85-914b-37b90f67d802",
};
const FormModal = ({ textButton, refreshCards }) => {
  const [dataUsers, setDataDataUsers] = useState([]);
  const [dataForm, setDataForm] = useState(valueDefault);
  const [dataTags, setDataTags] = useState("REACT");
  let { post, get } = helpPetition();

  const handleForm = (el) => {
    setDataForm({
      ...dataForm,
      [el.name]: el.value,
    });
  };
  const handleTags = (element) => {
    setDataTags([element.value]);
    dataForm.tags = [element.value];
  };

  useEffect(() => {
    get("https://syn-api-prod.herokuapp.com/users").then((res) => {
      if (!res.error) {
        setDataDataUsers(res);
      } else {
        console.log("error response get");
      }
    });
  }, []);
  const requestPostCards = () => {
    post("https://syn-api-prod.herokuapp.com/tasks", {
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: dataForm,
    }).then((res) => {
      if (res.error) console.log("error response post");
      refreshCards();
    });
  };
  return (
    <div className="container__form">
      <div className="item__form">
        <label>Task Title</label>
        <input
          name="name"
          type="text"
          value={dataForm.name}
          onChange={(e) => handleForm(e.target)}
        />
      </div>
      <div className="item__form">
        <label>estimate</label>
        <select
          name="pointEstimate"
          onChange={(e) => handleForm(e.target)}
          value={dataForm.pointEstimate}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
      </div>

      <div className="item__form">
        <label>Assignee</label>
        <select
          name="assigneeId"
          onChange={(e) => handleForm(e.target)}
          value={dataForm.assigneeId}
        >
          {dataUsers.map((e) => {
            return (
              <option key={e.fullName} value={e.id}>
                {e.fullName}
              </option>
            );
          })}
        </select>
      </div>

      <div className="item__form">
        <label>Label</label>
        <select
          name="tags"
          onChange={(e) => handleTags(e.target)}
          value={dataTags}
        >
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
        <button onClick={requestPostCards}>{textButton}</button>
      </div>
    </div>
  );
};

export default FormModal;
