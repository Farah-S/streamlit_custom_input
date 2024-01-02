import os
import streamlit.components.v1 as components

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
# (This is, of course, optional - there are innumerable ways to manage your
# release process.)
_RELEASE = True

# Declare a Streamlit component. `declare_component` returns a function
# that is used to create instances of the component. We're naming this
# function "_component_func", with an underscore prefix, because we don't want
# to expose it directly to users. Instead, we will create a custom wrapper
# function, below, that will serve as our component's public API.

# It's worth noting that this call to `declare_component` is the
# *only thing* you need to do to create the binding between Streamlit and
# your component frontend. Everything else we do in this file is simply a
# best practice.

if _RELEASE==False:


    _component_func = components.declare_component(
        # We give the component a simple, descriptive name ("ChatContainer"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "ChatInput",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3000",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend\\build")
    # print(build_dir)
    _component_func = components.declare_component("ChatInput", path=build_dir)


# Create a wrapper function for the component. This is an optional
# best practice - we could simply expose the component function returned by
# `declare_component` and call it done. The wrapper allows us to customize
# our component's API: we can pre-process its input args, post-process its
# output value, and add a docstring for users.
def ChatInput(key="chatInput", initialValue="", inputStyle={}, buttonStyle={}):
    """Customizable input component that takes input from the user

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
    """
    # Call through to our private component function. Arguments we pass here
    # will be sent to the frontend, where they'll be available in an "args"
    # dictionary.
    #
    # "default" is a special argument that specifies the initial return
    # value of the component before the user has interacted with it.
    
    component_value = _component_func(initialValue=initialValue,key=key, inputStyle=inputStyle, buttonStyle=buttonStyle)

    # We could modify the value returned from the component if we wanted.
    # There's no need to do this in our simple example - but it's an option.
    return component_value
