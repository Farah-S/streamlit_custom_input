# streamlit_custom_input

![input_example](https://github.com/Farah-S/streamlit_custom_input/blob/main/streamlit_custom_input/frontend/public/input_example.png)

Streamlit custom chat input box, it returns the value entered by the user on enter or by clicking on the button. To add a new line the user can press shift+enter. The parameters are as follow:

Args:

    initialValue (string, optional): 
        The initial value that will be displayed in the input box
    
    key (string, optional): 
        Uniquely identifies the input instance. Defaults to "ChatInput".
    
    inputStyle (dict, optional): 
        Allows the customization of the input box style with CSS. 
        The values that can be changed and their default values are 
        {
            paddingLeft: "10px", 
            paddingRight: "10px",
            whiteSpace: "pre-line", 
            resize: "none", 
            marginLeft: "0", 
            marginRight: "10px",
            paddingBottom: "3px", 
            width: "75%", 
            borderRadius: "1rem", 
            maxBlockSize: "75px", 
            borderColor: "#f4efff", 
            backgroundColor: "#fcf9ff"
        }.
        
    buttonStyle (dict, optional): 
        Allows the customization of the input button style with CSS. 
        The values that can be changed and their default values are 
        {    
            width: "55px", 
            borderRadius: "3rem", 
            paddingRight: "5px", 
            paddingTop: "3px", 
            paddingLeft: "9px", 
            display: "flex", 
            justifyContent: "center", 
            backgroundColor: "#edf1ff", 
            color: "#5b5b5c",
            height: "33px"
        }.

Returns:
    string

## Installation instructions

```sh
python -m pip install --index-url https://test.pypi.org/simple/ --no-deps streamlit_custom_input
```

## Usage instructions
Example of how to use without customization

```python
import streamlit as st

from streamlit_custom_input import ChatInput

value = ChatInput(initialValue="", key="input")
```

Example of how to use with customization

```python
import streamlit as st

from streamlit_custom_input import ChatInput

value = ChatInput(initialValue="", key="input", inputStyle={"backgroundColor":"black"}, buttonStyle={"height":"50px"})
```

For more example please check the app.py
