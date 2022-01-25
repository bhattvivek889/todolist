import React,{useState} from "react";
function InputArea(props){
    const [inputText,setInputText]=useState("");
    function handleChange(event){
        const newName=event.target.value;
        setInputText(newName);
    }
    function handleSubmit(event){
        props.onAdd(inputText);
        setInputText("");
        event.preventDefault();
    }
    return (
        <form className="form1">
                <input onChange={handleChange} type="text" placeholder="Enter item" value={inputText}></input>
                <br></br>
                <button onClick={handleSubmit}>+</button>
            </form>
    );
}
export default InputArea;