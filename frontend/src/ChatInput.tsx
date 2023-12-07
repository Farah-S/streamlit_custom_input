import React, { PropsWithChildren, useEffect, useState, useId }  from "react";
import {
  withStreamlitConnection, Streamlit, ComponentProps,
} from "streamlit-component-lib";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import { Children } from "baseui/toast";
import { Button, } from "react-bootstrap";
import Icon  from "@mui/material/Icon";
import TextareaAutosize from 'react-textarea-autosize';
// import Gridy from "./CustomChatBubble";
interface PythonArgs2 {
  initialValue: "",
  key:string,
}
document.body.style.backgroundColor = "transparent";

let state = "idle"

const ChatInput=(props:ComponentProps)=>{
    const {initialValue, key}: PythonArgs2 = props.args;
   
  // console.log(props.args);
  const [value, setValue] = useState<string>(initialValue);
  useEffect(() => Streamlit.setFrameHeight());

const handleClick = () => {
    // "message" stores input field value
    setValue(value);
    Streamlit.setComponentValue(value)
    // console.log(value)
    
  };
  return (
    <footer style={{  position: "relative",
  left: 0,minHeight:"cal(100vh - 34px)",
  bottom: 0,
}}>
    <Row style={{ justifyContent:"center", paddingTop:"10px"}}>
          <TextareaAutosize placeholder="Type here.." value={value} onChange={(
                ev: React.ChangeEvent<HTMLTextAreaElement>,
            ): void => setValue(ev.target.value)} autoFocus style={{resize:"none", marginLeft:"0px", marginRight:"10px",marginTop:"7px", width:"550px", borderRadius:"1rem",boxShadow: "none",maxBlockSize:"75px",borderColor: "transparent",backgroundColor: "#f1faff"}}/>
      
        <Button key={key} type="submit" onClick={handleClick} style={{width:"55px", borderRadius: "3rem", paddingRight:"5px",paddingTop:"8px", paddingLeft:"9px", display: "flex", justifyContent:"center", backgroundColor: "#f8efff", color: "#5b5b5c",borderColor:"transparent", height:"42px"}} >
          <Icon baseClassName="material-symbols-outlined">send</Icon>
        </Button>
    </Row></footer>
  );
}

export default withStreamlitConnection(ChatInput);