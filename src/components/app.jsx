import React,{useState} from "react";
import InputArea from "./inputArea";
import TodoItem from "./todoItem";
import "../styles.css";
function App(){
    const[items,setItems]=useState([]);
    function addItem(inputText){
        if(inputText==="" || !inputText.trim().length){
            return null;
        }
        setItems(prevItems=>{
            return [...prevItems,inputText]});
    }
    function deleteItem(id){
        setItems(prevItems=>{
            return prevItems.filter((item,index)=>{
                return index !=id;
            });
        });
    }
    return (
        <div className="div1">
            <h1 className="head">TO DO LIST</h1>
            <InputArea onAdd={addItem}/>
            <div className="div3">
                {items.map((todoItem,index)=>(
                    <TodoItem
                        key={index}
                        id={index}
                        text={todoItem}
                        onClick={deleteItem}
                    />
                ))}
                </div>
        </div>
    );
}
export default App;