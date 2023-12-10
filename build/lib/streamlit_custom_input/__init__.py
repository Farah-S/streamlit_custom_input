import streamlit.components.v1 as components
import os 

# _component_func = components.declare_component(
#     "ChatInput",
#     url="http://localhost:3001",  # Fetch frontend component from local webserver
# )

parent_dir = os.path.dirname(os.path.abspath(__file__))
build_dir = os.path.join(parent_dir, "frontend/build")
component = components.declare_component("ChatInput", path=build_dir)


def ChatInput(key="button", initialValue="") -> str:
    component_value = component(initialValue=initialValue,key=key)
    return component_value