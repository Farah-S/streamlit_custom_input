import React, { useEffect, useState}  from "react";
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
  useEffect(() => Streamlit.setFrameHeight());

  const handleClick = () => {
      setValue(value);
      Streamlit.setComponentValue(value)
      setValue("")
      // console.log(value)
    };

  return (
    <Row style={{ justifyContent:"center", paddingTop:"10px"}}>
          <TextareaAutosize key={key} placeholder="Type here.." value={value} onChange={(
                ev: React.ChangeEvent<HTMLTextAreaElement>,
            ): void => setValue(ev.target.value)} autoFocus style={{resize:"none", marginLeft:"0px", marginRight:"10px",marginTop:"7px", width:"550px", borderRadius:"1rem",boxShadow: "none",maxBlockSize:"75px",borderColor: "transparent",backgroundColor: "#f1faff"}}/>
      
        <Button type="submit" onClick={handleClick} style={{width:"55px", borderRadius: "3rem", paddingRight:"5px",paddingTop:"8px", paddingLeft:"9px", display: "flex", justifyContent:"center", backgroundColor: "#f8efff", color: "#5b5b5c",borderColor:"transparent", height:"42px"}} >
          <Icon baseClassName="material-symbols-outlined">send</Icon>
        </Button>
    </Row>
  );
}

export default withStreamlitConnection(ChatInput);