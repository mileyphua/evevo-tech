import streamlit as st
import streamlit.components.v1 as components
import requests

# Page configuration
st.set_page_config(
    page_title="AI Voice Assistant",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for overlay design
st.markdown("""
<style>
    /* Hide Streamlit elements */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    
    /* Custom styling */
    .stApp {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    /* Card container */
    .agent-card {
        background: white;
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        margin: 20px auto;
        max-width: 1200px;
    }
    
    /* Header */
    .agent-header {
        text-align: center;
        margin-bottom: 30px;
    }
    
    .agent-header h1 {
        color: #667eea;
        font-size: 3em;
        margin: 0;
    }
    
    .agent-header p {
        color: #666;
        font-size: 1.2em;
        margin: 10px 0;
    }
    
    /* Status indicator */
    .status-indicator {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #4caf50;
        animation: pulse 2s infinite;
        margin-right: 8px;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    /* Iframe container */
    .iframe-container {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    }
    
    /* Custom overlay */
    .custom-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(102,126,234,0.9) 0%, transparent 100%);
        padding: 20px;
        z-index: 1000;
        pointer-events: none;
    }
    
    .overlay-title {
        color: white;
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
    }
</style>
""", unsafe_allow_html=True)

# Initialize session state
if 'agent_started' not in st.session_state:
    st.session_state.agent_started = False
if 'agent_url' not in st.session_state:
    st.session_state.agent_url = None

# Sidebar
with st.sidebar:
    st.markdown("## 🎛️ Agent Controls")
    st.markdown("---")
    
    # Agent configuration
    st.markdown("### ⚙️ Configuration")
    agent_id = st.text_input(
        "Agent ID",
        value="agent_7701k52w044zf5fsct5627sr3y81",
        help="Your ElevenLabs agent ID"
    )
    
    use_n8n = st.checkbox(
        "Use n8n webhook",
        value=True,
        help="Get signed URL from n8n"
    )
    
    if use_n8n:
        n8n_webhook = st.text_input(
            "n8n Webhook URL",
            value="https://mileyphua.app.n8n.cloud/webhook/assistant",
            help="Your n8n webhook endpoint"
        )
    
    st.markdown("---")
    
    # Start button
    if st.button("🚀 Start Agent", type="primary", use_container_width=True):
        with st.spinner("Initializing agent..."):
            if use_n8n:
                try:
                    response = requests.post(
                        n8n_webhook,
                        json={"input": "Start agent"},
                        timeout=10
                    )
                    st.session_state.agent_url = response.text.strip()
                    st.session_state.agent_started = True
                    st.success("✅ Agent initialized!")
                except Exception as e:
                    st.error(f"❌ Error: {str(e)}")
                    st.session_state.agent_url = f"https://elevenlabs.io/app/talk-to?agent_id={agent_id}"
                    st.session_state.agent_started = True
            else:
                st.session_state.agent_url = f"https://elevenlabs.io/app/talk-to?agent_id={agent_id}"
                st.session_state.agent_started = True
    
    if st.button("🔄 Reset", use_container_width=True):
        st.session_state.agent_started = False
        st.session_state.agent_url = None
        st.rerun()
    
    st.markdown("---")
    
    # Status
    st.markdown("### 📊 Status")
    if st.session_state.agent_started:
        st.markdown('<span class="status-indicator"></span> **Agent Active**', unsafe_allow_html=True)
    else:
        st.info("⏸️ Agent Idle")
    
    st.markdown("---")
    
    # Instructions
    with st.expander("📖 Instructions"):
        st.markdown("""
        1. Click **Start Agent** button
        2. Allow microphone access
        3. Click "Call AI agent" in the interface
        4. Accept terms if prompted
        5. Start talking!
        """)
    
    # Info
    with st.expander("ℹ️ About"):
        st.markdown("""
        **AI Voice Assistant**
        
        Powered by:
        - ElevenLabs Conversational AI
        - Streamlit Framework
        - n8n Automation
        
        Version: 1.0.0
        """)

# Main content
st.markdown('<div class="agent-card">', unsafe_allow_html=True)

# Header
st.markdown("""
<div class="agent-header">
    <h1>🤖 AI Voice Assistant</h1>
    <p>Talk naturally with your AI agent</p>
</div>
""", unsafe_allow_html=True)

# Agent interface
if st.session_state.agent_started and st.session_state.agent_url:
    st.markdown("### 🎤 Voice Interface")
    
    # Create custom HTML with iframe and auto-click script
    iframe_html = f"""
    <div class="iframe-container">
        <iframe 
            src="{st.session_state.agent_url}"
            width="100%"
            height="700"
            frameborder="0"
            allow="microphone; camera"
            style="border-radius: 15px;"
        ></iframe>
    </div>
    
    <script>
    console.log('🚀 ElevenLabs Auto-Start initialized');
    
    // Wait for iframe to load
    setTimeout(function() {{
        const iframe = document.querySelector('iframe');
        if (iframe) {{
            console.log('✅ Iframe found');
            
            // Note: Due to CORS, we cannot directly access iframe content
            // The auto-click must be done via browser extension or URL parameters
            console.log('💡 Use Userscripts extension for auto-click functionality');
        }}
    }}, 1000);
    </script>
    """
    
    components.html(iframe_html, height=720)
    
    # Tips
    st.info("💡 **Tip:** The agent will auto-start if you have the Userscripts extension installed with the auto-click script.")
    
else:
    # Welcome screen
    st.markdown("""
    <div style="text-align: center; padding: 60px 20px;">
        <h2>👋 Welcome!</h2>
        <p style="font-size: 1.2em; color: #666; margin: 20px 0;">
            Click the <strong>Start Agent</strong> button in the sidebar to begin.
        </p>
        <div style="margin-top: 40px;">
            <img src="https://img.icons8.com/clouds/200/000000/microphone.png" alt="Microphone" />
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    # Features
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.markdown("""
        ### 🎙️ Natural Voice
        Speak naturally and get human-like responses
        """)
    
    with col2:
        st.markdown("""
        ### 🤖 AI Powered
        Advanced conversational AI technology
        """)
    
    with col3:
        st.markdown("""
        ### 🔒 Secure
        Your conversations are private and secure
        """)

st.markdown('</div>', unsafe_allow_html=True)

# Footer
st.markdown("""
<div style="text-align: center; margin-top: 40px; padding: 20px; color: white;">
    <p>Powered by ElevenLabs • Built with Streamlit • Automated with n8n</p>
</div>
""", unsafe_allow_html=True)

