import React, { useEffect, useRef, useState}  from "react";
import {
  withStreamlitConnection, Streamlit, ComponentProps,
} from "streamlit-component-lib";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, } from "react-bootstrap";
import Icon  from "@mui/material/Icon";
import TextareaAutosize from 'react-textarea-autosize';

interface ChatInputArgs {
  initialValue: "",
  key: "ChatInput",
}
document.body.style.backgroundColor = "transparent";

const ChatInput=(props:ComponentProps)=>{
  const {initialValue, key}: ChatInputArgs = props.args;
  const [value, setValue] = useState<string>(initialValue);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => Streamlit.setFrameHeight());

  const handleClick = () => {
      setValue(value.trim());
      Streamlit.setComponentValue(value.trim())
      setValue("")
      if(inputRef.current){
        inputRef.current.focus()
      }
    };

  const onEnterClick = (event:React.KeyboardEvent) => {
      if (event.key === "Enter"){
        event.preventDefault()
        if (event.key === "Enter" && event.shiftKey==false){
          handleClick();
        }else{
          setValue(value+'\n')
        }
      }
    };
    
  const onChangeHandler = ( ev: React.ChangeEvent<HTMLTextAreaElement>, ): void => setValue(ev.target.value)


  return (
    <Row style={{ justifyContent:"center", paddingTop:"0px", paddingLeft:"13%"}}>
        <TextareaAutosize key={key} 
        placeholder="Type here.." 
        value={value} ref={inputRef} 
        onKeyDown={onEnterClick} onChange={onChangeHandler} autoFocus 
        style={{whiteSpace:"pre-line",resize:"none", marginLeft:"25px", marginRight:"10px",marginTop:"0px", width:"80%", borderRadius:"1rem",boxShadow: "none",maxBlockSize:"75px",borderColor: "transparent",backgroundColor: "#eef7ff"}}/>
        
        <Button type="submit" onClick={handleClick} style={{width:"55px", borderRadius: "3rem", paddingRight:"5px",paddingTop:"3px", paddingLeft:"9px", display: "flex", justifyContent:"center", backgroundColor: "#f8efff", color: "#5b5b5c",borderColor:"transparent", height:"33px"}} >
        
          <Icon baseClassName="material-symbols-outlined">send</Icon>
        
        </Button>
    </Row>
  );
}

export default withStreamlitConnection(ChatInput);