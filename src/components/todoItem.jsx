import React from "react";
function todoItem(props){
    return (
    <div className="div2">
        <p className="lilist">{props.text}</p>
        <button onClick={()=>{props.onClick(props.id)}}>-</button>
    </div>
    );
}
export default todoItem;