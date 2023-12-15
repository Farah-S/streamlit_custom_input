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
    <Row style={{ justifyContent:"center", paddingTop:"0px", paddingLeft:"2%"}}>
        <TextareaAutosize key={key} 
        placeholder="Type here.." 
        value={value} ref={inputRef} 
        onKeyDown={onEnterClick} onChange={onChangeHandler} autoFocus 
        style={{paddingLeft:"10px",paddingRight:"10px",whiteSpace:"pre-line",resize:"none", marginLeft:"0", marginRight:"10px",paddingBottom:"3px", width:"75%", borderRadius:"1rem",boxShadow: "none",maxBlockSize:"75px",borderColor: "#f4efff",backgroundColor: "#fcf9ff"}}/>
        <Button type="submit" onClick={handleClick} style={{width:"55px", borderRadius: "3rem", paddingRight:"5px",paddingTop:"3px", paddingLeft:"9px", display: "flex", justifyContent:"center", backgroundColor: "#edf1ff", color: "#5b5b5c",borderColor:"transparent", height:"33px"}} >
          <Icon baseClassName="material-symbols-outlined">send</Icon>
        </Button>
    </Row>
  );
}

export default withStreamlitConnection(ChatInput);