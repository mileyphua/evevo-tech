# Streamlit + ElevenLabs Integration Guide

## 🎯 What You'll Build

A custom Streamlit web app that embeds your ElevenLabs conversational AI agent with:
- ✅ Custom branded interface
- ✅ Hidden ElevenLabs UI (embedded in iframe)
- ✅ Auto-start functionality (with Userscripts)
- ✅ Integration with your n8n webhook
- ✅ Professional look and feel

---

## 📋 Two Versions Available

### Version 1: Simple Embed (`streamlit_elevenlabs_app.py`)
- Basic iframe embedding
- Clean interface
- Auto-click script included
- Good for quick deployment

### Version 2: Custom UI (`streamlit_custom_ui.py`) ⭐ RECOMMENDED
- Beautiful gradient design
- Sidebar controls
- n8n integration
- Start/stop controls
- Status indicators
- Professional appearance

---

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
pip install streamlit requests
```

Or use the requirements.txt:
```bash
pip install -r requirements.txt
```

### Step 2: Choose Your App

**For Simple Version:**
```bash
streamlit run streamlit_elevenlabs_app.py
```

**For Custom UI Version:**
```bash
streamlit run streamlit_custom_ui.py
```

### Step 3: Open in Browser

Streamlit will automatically open at: `http://localhost:8501`

---

## 🎨 Customization Guide

### Change Colors

Edit the CSS in the app file:

```python
st.markdown("""
<style>
    .stApp {
        background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
    }
</style>
""", unsafe_allow_html=True)
```

### Change Title and Branding

```python
st.set_page_config(
    page_title="Your Company Name",
    page_icon="🎙️",  # Change emoji or use image URL
    layout="wide"
)
```

### Update Agent ID

```python
agent_id = "YOUR_AGENT_ID_HERE"
```

### Update n8n Webhook

```python
n8n_webhook = "YOUR_N8N_WEBHOOK_URL"
```

---

## ⚠️ Important: CORS Limitations

### The Challenge

ElevenLabs pages are protected by **CORS (Cross-Origin Resource Sharing)** policies, which means:
- ❌ JavaScript in your Streamlit app **cannot** directly access iframe content
- ❌ Cannot auto-click buttons from parent page
- ❌ Cannot read iframe DOM elements

### The Solution: Userscripts Extension

**You still need Userscripts extension** for auto-click functionality:

1. **Install Userscripts** (on client browser)
2. **Create auto-click script** (same as before)
3. **Script runs inside iframe** (bypasses CORS)

**Workflow:**
```
Streamlit App (Parent)
    ↓ embeds
ElevenLabs Page (Iframe)
    ↓ Userscripts runs inside
Auto-click "Call AI agent" ✅
```

---

## 🌐 Deployment Options

### Option 1: Streamlit Community Cloud (FREE)

**Steps:**
1. Push code to GitHub
2. Go to https://share.streamlit.io
3. Connect GitHub repo
4. Deploy!

**Pros:**
- ✅ Free hosting
- ✅ Easy deployment
- ✅ Automatic updates
- ✅ HTTPS included

**Cons:**
- ⚠️ Public by default
- ⚠️ Limited resources

---

### Option 2: Local Deployment

**Run locally:**
```bash
streamlit run streamlit_custom_ui.py --server.port 8501
```

**Access at:** `http://localhost:8501`

**Pros:**
- ✅ Full control
- ✅ Private
- ✅ No limits

**Cons:**
- ❌ Not accessible from internet
- ❌ Requires computer running

---

### Option 3: Cloud VPS (DigitalOcean, AWS, etc.)

**Steps:**

1. **Create VPS** (Ubuntu 22.04)

2. **Install dependencies:**
```bash
sudo apt update
sudo apt install python3-pip
pip3 install streamlit requests
```

3. **Upload your app:**
```bash
scp streamlit_custom_ui.py user@your-server:/home/user/
scp requirements.txt user@your-server:/home/user/
```

4. **Run with systemd:**

Create `/etc/systemd/system/streamlit.service`:
```ini
[Unit]
Description=Streamlit App
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu
ExecStart=/usr/local/bin/streamlit run streamlit_custom_ui.py --server.port 8501 --server.address 0.0.0.0
Restart=always

[Install]
WantedBy=multi-user.target
```

5. **Start service:**
```bash
sudo systemctl enable streamlit
sudo systemctl start streamlit
```

6. **Set up nginx reverse proxy:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:8501;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

**Pros:**
- ✅ Full control
- ✅ Custom domain
- ✅ Scalable
- ✅ Professional

**Cons:**
- ⚠️ Requires server management
- ⚠️ Costs $5-20/month

---

### Option 4: Docker Deployment

**Create Dockerfile:**
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY streamlit_custom_ui.py .

EXPOSE 8501

CMD ["streamlit", "run", "streamlit_custom_ui.py", "--server.port=8501", "--server.address=0.0.0.0"]
```

**Build and run:**
```bash
docker build -t streamlit-elevenlabs .
docker run -p 8501:8501 streamlit-elevenlabs
```

---

## 🔧 Advanced Features

### Add Authentication

```python
import streamlit_authenticator as stauth

# Create authenticator
authenticator = stauth.Authenticate(
    credentials,
    'cookie_name',
    'signature_key',
    cookie_expiry_days=30
)

name, authentication_status, username = authenticator.login('Login', 'main')

if authentication_status:
    # Show app
    st.write(f'Welcome {name}')
else:
    st.error('Username/password is incorrect')
```

### Add Analytics

```python
import streamlit.components.v1 as components

# Google Analytics
components.html("""
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
""", height=0)
```

### Add Session Logging

```python
import logging
from datetime import datetime

# Log agent starts
if st.button("Start Agent"):
    logging.info(f"Agent started at {datetime.now()}")
    # ... rest of code
```

---

## 📱 Mobile Optimization

The apps are already mobile-responsive, but you can enhance:

```python
# Detect mobile
import streamlit as st

# Check if mobile
is_mobile = st.session_state.get('is_mobile', False)

if is_mobile:
    # Adjust iframe height for mobile
    iframe_height = 500
else:
    iframe_height = 700
```

---

## 🎯 Complete Workflow

### End-to-End User Experience:

1. **User visits your Streamlit app**
   - Custom branded interface
   - Professional design

2. **User clicks "Start Agent"**
   - App calls n8n webhook
   - n8n gets signed URL from ElevenLabs
   - Iframe loads with signed URL

3. **Userscripts auto-clicks buttons**
   - "Call AI agent" clicked automatically
   - "Agree" clicked automatically

4. **Agent conversation starts**
   - User talks naturally
   - AI responds in real-time

5. **All within your custom interface**
   - ElevenLabs UI hidden in iframe
   - Your branding visible
   - Professional experience

---

## 🔒 Security Considerations

### 1. Protect n8n Webhook

Add authentication to your n8n webhook:

```python
headers = {
    "X-API-Key": "your-secret-key"
}
response = requests.post(n8n_webhook, json=data, headers=headers)
```

### 2. Environment Variables

Don't hardcode secrets:

```python
import os

N8N_WEBHOOK = os.getenv("N8N_WEBHOOK_URL")
AGENT_ID = os.getenv("ELEVENLABS_AGENT_ID")
```

Create `.env` file:
```
N8N_WEBHOOK_URL=https://mileyphua.app.n8n.cloud/webhook/assistant
ELEVENLABS_AGENT_ID=agent_7701k52w044zf5fsct5627sr3y81
```

### 3. Rate Limiting

Prevent abuse:

```python
from streamlit_extras.ratelimit import ratelimit

@ratelimit(max_calls=10, period=60)  # 10 calls per minute
def start_agent():
    # ... agent start code
```

---

## 🐛 Troubleshooting

### Iframe not loading
- Check CORS policies
- Verify URL is correct
- Check browser console for errors

### Auto-click not working
- Install Userscripts extension
- Verify script is enabled
- Check script match pattern

### n8n webhook fails
- Test webhook URL directly
- Check n8n workflow is active
- Verify network connectivity

### Streamlit app crashes
- Check Python version (3.8+)
- Verify all dependencies installed
- Check logs: `streamlit run app.py --logger.level=debug`

---

## 📊 Comparison: Streamlit vs Direct ElevenLabs

| Feature | Streamlit Embed | Direct ElevenLabs |
|---------|----------------|-------------------|
| **Custom Branding** | ✅ Full control | ❌ ElevenLabs branding |
| **UI Customization** | ✅ Unlimited | ❌ Limited |
| **Analytics** | ✅ Easy to add | ⚠️ Limited |
| **Authentication** | ✅ Easy to add | ❌ Not available |
| **Domain** | ✅ Your domain | ❌ elevenlabs.io |
| **Setup Time** | ⚠️ 30 minutes | ✅ 5 minutes |
| **Maintenance** | ⚠️ Required | ✅ None |

---

## ✅ Final Checklist

- [ ] Streamlit installed
- [ ] App file downloaded
- [ ] Agent ID updated
- [ ] n8n webhook URL updated
- [ ] App runs locally
- [ ] Userscripts extension installed (for auto-click)
- [ ] Auto-click script created
- [ ] Tested end-to-end
- [ ] Ready to deploy!

---

## 🎉 You're Done!

You now have a **custom-branded web interface** for your ElevenLabs conversational AI agent!

**Key Benefits:**
- ✅ Your branding, not ElevenLabs
- ✅ Custom design and colors
- ✅ Professional appearance
- ✅ Full control over UX
- ✅ Easy to deploy and share

**Next Steps:**
1. Customize the design
2. Add your branding
3. Deploy to production
4. Share with users!

🚀 **Your AI voice agent is now ready for the world!**

