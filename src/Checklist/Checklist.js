import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./checklist.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
const initialValue = ["Camera", "Camping tent", "Charger"];

function Checklist(props) {
  const [checklist, setChecklist] = useState(initialValue);
  const [item, setItem] = useState("");
  const [edit, setEdit] = useState("");
  const handleItem = () => {
    if (item === "") return;
    initialValue = [...initialValue, item];
    setChecklist(initialValue);
    setItem("");
  };
  const handleEdit = (text, index) => {
    const newChecklist = Array.from(checklist);
    newChecklist[index] = text;
    setChecklist(newChecklist);
  };
  const handleDelete = index => { 
    console.log(index)
    initialValue.splice(index, 1);
    setChecklist([...initialValue]);
  };
  return (
    <div className="checklist">
      <h1
        style={{
          fontSize: "50px",
          backgroundColor: "white",
          color : "#18AA5C",
          marginLeft: "25%",
          marginTop : 0,
          paddingBottom : "30px",
        }}
      >
        CheckList
      </h1>
      <div className="add-item">
        <input
          className="add-input"
          type="text"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <button className="add-button" onClick={handleItem}>
          <AddCircleIcon style={{ fontSize: 50,backgroundColor:"white" }}/>
        </button>
      </div>
      <div style={{ backgroundColor: "white" }}>
        {checklist.map((item, index) => (
          <Item
            item={item}
            index={index}
            handleDelete={() => handleDelete(index)}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default Checklist;
