import streamlit.components.v1 as components

_component_func = components.declare_component(
    "ChatInput",
    url="http://localhost:3001",  # Fetch frontend component from local webserver
)

def ChatInput( key="button", initialValue="") -> str:
    component_value = _component_func(initialValue=initialValue,key=key)
    c=(component_value)
    
    return c