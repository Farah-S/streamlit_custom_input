import streamlit as st
# from streamlit_custom_chat import ChatContainer
from streamlit_custom_input import ChatInput
# from streamlit_custom_chat import ChatBubble
# from custom_chat_input import ChatInput
import base64
from key_generator.key_generator import generate
from streamlit_js_eval import streamlit_js_eval

st.set_page_config(layout="wide")

# titlecol1, titlecol2, titlecol3 = st.columns([15,10,12])
# with titlecol1:
#     # st.header("A cat")
#     # st.image("https://static.streamlit.io/examples/cat.jpg")
#     st.markdown('#')
# with titlecol2:
#     st.title("Simple chat")
# with titlecol3:
#     # st.header("A cat")
#     # st.image("https://static.streamlit.io/examples/cat.jpg")
#     st.markdown('#')  
    
def set_bg_hack(main_bg):
    '''
    A function to unpack an image from root folder and set as bg.
 
    Returns
    -------
    The background.
    '''
    # set bg name
    main_bg_ext = "jpg"
        
    st.markdown(
         f"""
         <style>
         .stApp {{
             background: url(data:image/{main_bg_ext};base64,{base64.b64encode(open(main_bg, "rb").read()).decode()});
             background-size: cover
         }}
         [data-testid="stHeader"] {{
          background-color: rgba(0,0,0,0);
        }}
        [data-testid="baseButton-secondary"]{{
            border-radius:2rem;
            height: 47px;
            border-color: transparent;
            background-color: #fef8ff;
            font-family: 'Itim';
        }}
        [data-testid="baseButton-secondary"]:hover{{
            border-radius:2rem;
            height: 47px;
            border-color: transparent;
            background-color: #fdf4ff;
            color:black;
            font-family: 'Itim';
        }}
        .stChatFloatingInputContainer{{
            background-color: transparent;
        }}
         </style>
         """,
         unsafe_allow_html=True
     )
    
set_bg_hack("pastel3.jpg") 


def set_page_container_style(
        max_width: int = 1400, max_width_100_percent: bool = False,
        padding_top: int = 2, padding_right: int = 0, padding_left: int = 1, padding_bottom: int = 1,
        # color: str = COLOR, background_color: str = BACKGROUND_COLOR,
    ):
    if max_width_100_percent:
        max_width_str = f'max-width: 100%;'
    else:
        max_width_str = f'max-width: {max_width}px;'
    st.markdown(
        f'''
        <style>
            
            [data-testid="block-container"]{{
                {max_width_str}
                padding-top: {padding_top}rem;
                padding-right: {padding_right}rem;
                padding-left: {padding_left}rem;
                padding-bottom: {padding_bottom}rem;
                
            }}
        </style>
            
        ''',
        unsafe_allow_html=True,
    )

set_page_container_style()

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []
if "len" not in st.session_state:
    st.session_state.len = 0
# ChatContainer(messages=[{"role":"assistant","content":"Hello! How may I help you?"}], key=str(0))
    
# ChatContainer(messages=[ {"role":"assistant", "content":"or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su"} , 
#                         {"role":"user", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempnt in culpa qui officia deserunt mollit anim id est laborum."},
#                         {"role":"user", "content":"Lorem ipsum dololamco laborur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
#                         {"role":"user", "content":"is nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte"},
#                         {"role":"user", "content":"r sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul"},
#                         {"role":"assistant", "content":"ation ul"},
#                         {"role":"assistant", "content":"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"} ])

# style="
    # background-color: #fffeff;
    # border-radius: 2rem;
    # max-width: 900px;
    # padding-top: 18px;
    # box-shadow: inset 0px 0 15px 1px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    # justify-self: center;
    # align-self: center;
# " 
# st.sidebar.header("n")
# st.sidebar.subheader(‘1.please chose which app you want to operate’)
# with st.container():
#     CustomChatBubble(role="assistant", content="Hello! How may I help you?", key=str(0))
#     # Display chat messages from history on app rerun
#     for message in st.session_state.messages:
#         CustomChatBubble(role=message["role"], content=message["content"], key=(message["role"]+str(c)))
#         c+=1
# ChatContainer(messages=st.session_state.messages, key=str(c))

# prompt=""



    
if len(st.session_state.messages) == 0:
    st.session_state.messages.append({"role":"assistant","content":"Hello! How may I help you?","key":0})
    st.session_state.messages.append({"role":"user","content":"Hello!","key":1})
    st.session_state.messages.append({"role":"user","content":"Hello!","key":1})
    st.session_state.messages.append({"role":"assistant","content":"HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello !","key":1})
    st.session_state.messages.append({"role":"assistant","content":"Hello!","key":1})
    st.session_state.messages.append({"role":"assistant","content":"Hello!","key":1})
    st.session_state.messages.append({"role":"assistant","content":"Hello!","key":1})
    st.session_state.messages.append({"role":"user","content":"Hello!","key":1})
    st.session_state.messages.append({"role":"assistant","content":"Hello!","key":1})
    st.session_state.messages.append({"role":"assistant","content":"Hello!","key":1})
    # CustomChatBubble(role="assistant", content="Hello! How may I help you?")
    # ChatContainer(messages=st.session_state.messages, key=str(c))
    # prompt=ChatInput()
    # st.session_state.len=len(st.session_state.messages)

#     # Accept user input
#     if prompt := st.chat_input("What is up?"):
#         # Display user message in chat message container
#         CustomChatBubble(role="user", content=prompt, key=("user"+str(c)))
#         CustomChatBubble(role="assistant", content=prompt, key=("assistant"+str(c)))
#         c+=1
#         # Add user message to chat history
#         st.session_state.messages.append({"role": "user", "content": prompt})
#         st.session_state.messages.append({"role": "assistant", "content": prompt})
 

col1, col2 = st.columns([2,13]) 
        
# for index in st.session_state.messages: 
    # CustomChatBubble(role=index["role"], content=index["content"], key=(index["role"]+str(c)))
#     c+=1
with col1:
    st.markdown("#")
    st.markdown("#")
    st.markdown("#")
    # st.markdown("#")
    st.button("Take a Quiz", use_container_width=True)
with col2:
    # ChatContainer(messages=st.session_state.messages,key=str(55))

    def refresh(key:str):
        # st.session_state["ChatInput"] = ""
        
        del st.session_state[key]
        st.rerun()

    # if st.button(label="assistant", key="assistant"):
    #     key = generate()
    #     st.session_state.messages.append({"role": "assistant", "content": "whatever","key":"assistant-"+key.get_key()})
    #     refresh('assistant')
        

    if prompt:= ChatInput(initialValue="",key="inputButton"):
        st.session_state.state=True
        # Display user message in chat message container
        # CustomChatBubble(role="user", content=prompt, key=("user"+str(c)))
        # CustomChatBubble(role="assistant", content=prompt, key=("assistant"+str(c)))
        
        print(prompt)
        key = generate()
        # print(prompt)
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt,"key":"user-"+key.get_key()})
        # st.session_state.messages.append({"role": "assistant", "content": prompt,"key":"assistant-"+key.get_key()})
        
        # ChatInput()
        # updateMessages(st.session_state)
        # del st.session_state['button']
        # st.rerun()
        refresh('inputButton')
        # streamlit_js_eval(js_expressions="parent.window.location.reload()")
        # Container(messages=st.session_state.messages, key=str(c))
        # if len(st.session_state.messages)>st.session_state.len:
        # st.session_state.len=len(st.session_state.messages)
        # prompt=""
        # st.markdown('#')
        # st.markdown('#')
        # st.markdown('#')
        # ChatContainer(messages=st.session_state.messages, key=str(55))
        # prompt = ChatInput(initialValue="")
        # ChatContainer(messages=st.session_state.messages, key=str(c))
            