import React from "react";
import "./item.css";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
function Item({item,index,handleDelete,handleEdit}) {
  return (
    <div className="item" key={index}>
      <input id={index} className="item-input" type="text" value={item} onChange={(e)=>{
        handleEdit(e.target.value,index);
      }} /> 
      <button  className="delete-btn" onClick={handleDelete} ><DeleteIcon style={{fontSize :40 ,backgroundColor:"white"}}/></button>
      </div>
  );
}

export default Item;
