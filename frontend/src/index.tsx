//file that renders the react components
import React from "react";
import ReactDOM from "react-dom";
import ChatInput from "./ChatInput";
import ChatContainer from "./ChatInput";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { ThemeProvider, LightTheme } from "baseui";
import { Icon, Paper, TextareaAutosize } from "@mui/material";
import { Button, Row } from "react-bootstrap";

const engine = new Styletron();



// ReactDOM.render(
//   <React.StrictMode>
//     <StyletronProvider value={engine}>
//       <ThemeProvider theme={LightTheme}>
//         {/* <Paper sx={{
//           p: 2,
//           minHeight:"400px",
//           maxWidth: "60%",
//           borderRadius:"2rem",
//           margin: 'auto',
//           boxShadow:"inset 0px 0 15px 1px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
//           flexGrow: 20,
//           backgroundColor: (theme) =>
//             theme.palette.mode === 'dark' ? '#1A2027' : '#FFFAFA',
//         }}> */}
//           {/* <CustomChatBubble/> */}
//         {/* </Paper> */}
//         {/* <ChatContainer2> */}
//           {/* <CustomChatBubble/> */}
//         {/* </ChatContainer2> */}
//       </ThemeProvider>
//     </StyletronProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <ThemeProvider theme={LightTheme}>
      <ChatInput/>
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
);