import React, { useEffect, useRef, useState}  from "react";
import {
  withStreamlitConnection, Streamlit, ComponentProps,
} from "streamlit-component-lib";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, } from "react-bootstrap";
import Icon  from "@mui/material/Icon";
import TextareaAutosize from 'react-textarea-autosize';

document.body.style.backgroundColor = "transparent";

const ChatInput=(props:ComponentProps)=>{
  const { initialValue, key, inputStyle, buttonStyle} = props.args;
  // const {initialValue, key}: State = props.args;
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

const istyle={
        paddingLeft: ("paddingLeft" in inputStyle? inputStyle["paddingLeft"]: "10px"), 
        paddingRight: ("paddingRight" in inputStyle? inputStyle["paddingRight"]:"10px"),
        whiteSpace: ("whiteSpace" in inputStyle? inputStyle["whiteSpace"]:"pre-line"), 
        resize: ("resize" in inputStyle? inputStyle["resize"]:"none"), 
        marginLeft: ("marginLeft" in inputStyle? inputStyle["marginLeft"]:"0"), 
        marginRight: ("marginRight" in inputStyle? inputStyle["marginRight"]:"10px"),
        paddingBottom: ("paddingBottom" in inputStyle? inputStyle["paddingBottom"]:"3px"),
        width: ("width" in inputStyle? inputStyle["width"]:"75%"), 
        borderRadius: ("borderRadius" in inputStyle? inputStyle["borderRadius"]:"1rem"), 
        maxBlockSize: ("maxBlockSize" in inputStyle? inputStyle["maxBlockSize"]:"75px"), 
        borderColor: ("borderColor" in inputStyle? inputStyle["borderColor"]:"#f4efff"), 
        backgroundColor: ("backgroundColor" in inputStyle? inputStyle["backgroundColor"]:"#fcf9ff")
    }

    const bstyle={
        width: ("width" in buttonStyle? buttonStyle["width"]:"55px"), 
        borderRadius: ("borderRadius" in buttonStyle? buttonStyle["borderRadius"]:"3rem"), 
        paddingRight: ("paddingRight" in buttonStyle? buttonStyle["paddingRight"]:"5px"), 
        paddingTop: ("paddingTop" in buttonStyle? buttonStyle["paddingTop"]:"3px"), 
        paddingLeft: ("paddingLeft" in buttonStyle? buttonStyle["paddingLeft"]:"9px"), 
        display: ("display" in buttonStyle? buttonStyle["display"]:"flex"), 
        justifyContent: ("justifyContent" in buttonStyle? buttonStyle["justifyContent"]:"center"), 
        backgroundColor: ("backgroundColor" in buttonStyle? buttonStyle["backgroundColor"]:"#edf1ff"), 
        color: ("color" in buttonStyle? buttonStyle["color"]:"#5b5b5c"),
        height: ("height" in buttonStyle? buttonStyle["height"]:"33px")
    }

    return (
      <Row style={{ justifyContent:"center", paddingTop:"0px", paddingLeft:"2%"}}>
        <TextareaAutosize key={key} 
        placeholder="Type here.." 
        value={value} ref={inputRef} 
        onKeyDown={onEnterClick} onChange={onChangeHandler} autoFocus 
        style={{paddingLeft:istyle["paddingLeft"],paddingRight:istyle["paddingRight"],whiteSpace:istyle["whiteSpace"],resize:istyle["resize"], marginLeft:istyle["marginLeft"], marginRight:istyle["marginRight"],paddingBottom:istyle["paddingBottom"], width:istyle["width"], borderRadius:istyle["borderRadius"],boxShadow: "none",maxBlockSize:istyle["maxBlockSize"],borderColor: istyle["borderColor"],backgroundColor: istyle["backgroundColor"]}}/>
        <Button type="submit" onClick={handleClick} style={{width:bstyle["width"], borderRadius: bstyle["borderRadius"], paddingRight:bstyle["paddingRight"],paddingTop:bstyle["paddingTop"], paddingLeft:bstyle["paddingLeft"], display: bstyle["display"], justifyContent:bstyle["justifyContent"], backgroundColor: bstyle["backgroundColor"], color: bstyle["color"],borderColor:"transparent", height:bstyle["height"]}} >
          <Icon baseClassName="material-symbols-outlined">send</Icon>
        </Button>
      </Row>
    )
}

export default withStreamlitConnection(ChatInput);

// interface State {
//   initialValue: string,
  
//   key: "ChatInput",

//   inputStyle:{
//     paddingLeft:"10px", paddingRight:"10px",
//     whiteSpace:"pre-line", resize:"none", 
//     marginLeft:"0", marginRight:"10px",
//     paddingBottom:"3px", width:"75%", 
//     borderRadius:"1rem", maxBlockSize:"75px", 
//     borderColor: "#f4efff", backgroundColor: "#fcf9ff"},
  
//     buttonStyle:{
//       width:"55px", borderRadius: "3rem", 
//       paddingRight:"5px", paddingTop:"3px", 
//       paddingLeft:"9px", display: "flex", 
//       justifyContent:"center", 
//       backgroundColor: "#edf1ff", color: "#5b5b5c",
//       height:"33px"
//     }
// }

// document.body.style.backgroundColor = "transparent";

// /**
//  * This is a React-based component template. The `render()` function is called
//  * automatically when your component should be re-rendered.
//  */
// class ChatInput extends StreamlitComponentBase<State> {
  
//   public render = (): ReactNode => {
    
//     const { initialValue, key, inputStyle, buttonStyle} = this.props.args;
    
//     const [value, setValue] = useState<string>(initialValue);
    
//     const inputRef = useRef<HTMLTextAreaElement>(null);
    
//     useEffect(() => Streamlit.setFrameHeight());
    
//     const handleClick = () => {
//       setValue(value.trim());
//       Streamlit.setComponentValue(value.trim())
//       setValue("")
//       if(inputRef.current){
//         inputRef.current.focus()
//       }
//     };

//     const onEnterClick = (event:React.KeyboardEvent) => {
//       if (event.key === "Enter"){
//         event.preventDefault()
//         if (event.key === "Enter" && event.shiftKey==false){
//           handleClick();
//         }else{
//           setValue(value+'\n')
//         }
//       }
//     };
    
//     const onChangeHandler = ( ev: React.ChangeEvent<HTMLTextAreaElement>, ): void => setValue(ev.target.value)

//     const istyle={
//         paddingLeft: ("paddingLeft" in inputStyle? inputStyle["paddingLeft"]: "10px"), 
//         paddingRight: ("paddingRight" in inputStyle? inputStyle["paddingRight"]:"10px"),
//         whiteSpace: ("whiteSpace" in inputStyle? inputStyle["whiteSpace"]:"pre-line"), 
//         resize: ("resize" in inputStyle? inputStyle["resize"]:"none"), 
//         marginLeft: ("marginLeft" in inputStyle? inputStyle["marginLeft"]:"0"), 
//         marginRight: ("marginRight" in inputStyle? inputStyle["marginRight"]:"10px"),
//         paddingBottom: ("paddingBottom" in inputStyle? inputStyle["paddingBottom"]:"3px"),
//         width: ("width" in inputStyle? inputStyle["width"]:"75%"), 
//         borderRadius: ("borderRadius" in inputStyle? inputStyle["borderRadius"]:"1rem"), 
//         maxBlockSize: ("maxBlockSize" in inputStyle? inputStyle["maxBlockSize"]:"75px"), 
//         borderColor: ("borderColor" in inputStyle? inputStyle["borderColor"]:"#f4efff"), 
//         backgroundColor: ("backgroundColor" in inputStyle? inputStyle["backgroundColor"]:"#fcf9ff")
//     }

//     const bstyle={
//         width: ("width" in buttonStyle? buttonStyle["width"]:"55px"), 
//         borderRadius: ("borderRadius" in buttonStyle? buttonStyle["borderRadius"]:"3rem"), 
//         paddingRight: ("paddingRight" in buttonStyle? buttonStyle["paddingRight"]:"5px"), 
//         paddingTop: ("paddingTop" in buttonStyle? buttonStyle["paddingTop"]:"3px"), 
//         paddingLeft: ("paddingLeft" in buttonStyle? buttonStyle["paddingLeft"]:"9px"), 
//         display: ("display" in buttonStyle? buttonStyle["display"]:"flex"), 
//         justifyContent: ("justifyContent" in buttonStyle? buttonStyle["justifyContent"]:"center"), 
//         backgroundColor: ("backgroundColor" in buttonStyle? buttonStyle["backgroundColor"]:"#edf1ff"), 
//         color: ("color" in buttonStyle? buttonStyle["color"]:"#5b5b5c"),
//         height: ("height" in buttonStyle? buttonStyle["height"]:"33px")
//     }

//     return (
//       <Row style={{ justifyContent:"center", paddingTop:"0px", paddingLeft:"2%"}}>
//         <TextareaAutosize key={key} 
//         placeholder="Type here.." 
//         value={value} ref={inputRef} 
//         onKeyDown={onEnterClick} onChange={onChangeHandler} autoFocus 
//         style={{paddingLeft:istyle["paddingLeft"],paddingRight:istyle["paddingRight"],whiteSpace:istyle["whiteSpace"],resize:istyle["resize"], marginLeft:istyle["marginLeft"], marginRight:istyle["marginRight"],paddingBottom:istyle["paddingBottom"], width:istyle["width"], borderRadius:istyle["borderRadius"],boxShadow: "none",maxBlockSize:istyle["maxBlockSize"],borderColor: istyle["borderColor"],backgroundColor: istyle["backgroundColor"]}}/>
//         <Button type="submit" onClick={handleClick} style={{width:bstyle["width"], borderRadius: bstyle["borderRadius"], paddingRight:bstyle["paddingRight"],paddingTop:bstyle["paddingTop"], paddingLeft:bstyle["paddingLeft"], display: bstyle["display"], justifyContent:bstyle["justifyContent"], backgroundColor: bstyle["backgroundColor"], color: bstyle["color"],borderColor:"transparent", height:bstyle["height"]}} >
//           <Icon baseClassName="material-symbols-outlined">send</Icon>
//         </Button>
//       </Row>
//     )
//   }
// }

// // "withStreamlitConnection" is a wrapper function. It bootstraps the
// // connection between your component and the Streamlit app, and handles
// // passing arguments from Python -> Component.
// //
// // You don't need to edit withStreamlitConnection (but you're welcome to!).
// export default withStreamlitConnection(ChatInput)
