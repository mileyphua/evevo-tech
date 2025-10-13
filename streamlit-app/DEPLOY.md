# Deploy to Streamlit Community Cloud

## 🚀 Quick Deploy (5 Minutes)

### Step 1: Push to GitHub

This folder is already in your GitHub repository at: `mileyphua/evevo-tech/streamlit-app/`

### Step 2: Deploy to Streamlit Cloud

1. **Go to:** https://share.streamlit.io

2. **Sign in** with GitHub

3. **Click "New app"**

4. **Fill in the form:**
   - Repository: `mileyphua/evevo-tech`
   - Branch: `main` (or your default branch)
   - Main file path: `streamlit-app/app.py`
   - App URL: Choose your subdomain (e.g., `evevo-ai-agent`)

5. **Click "Deploy"**

6. **Wait 2-3 minutes** for deployment

7. **Done!** Your app will be live at:
   ```
   https://[your-subdomain].streamlit.app
   ```

---

## 🔧 Configuration

### Update n8n Webhook URL

Edit `app.py` line 60:
```python
n8n_webhook = st.text_input(
    "n8n Webhook URL",
    value="https://mileyphua.app.n8n.cloud/webhook/assistant",  # ← Change this
    help="Your n8n webhook endpoint"
)
```

### Update Agent ID

Edit `app.py` line 54:
```python
agent_id = st.text_input(
    "Agent ID",
    value="agent_7701k52w044zf5fsct5627sr3y81",  # ← Change this
    help="Your ElevenLabs agent ID"
)
```

### Use Environment Variables (Recommended)

1. In Streamlit Cloud dashboard, go to **Settings → Secrets**

2. Add secrets:
```toml
N8N_WEBHOOK_URL = "https://mileyphua.app.n8n.cloud/webhook/assistant"
ELEVENLABS_AGENT_ID = "agent_7701k52w044zf5fsct5627sr3y81"
```

3. Update `app.py` to use secrets:
```python
import streamlit as st

# Use secrets
n8n_webhook = st.secrets.get("N8N_WEBHOOK_URL", "default-url")
agent_id = st.secrets.get("ELEVENLABS_AGENT_ID", "default-id")
```

---

## 🎨 Customization

### Change Colors

Edit `.streamlit/config.toml`:
```toml
[theme]
primaryColor = "#667eea"  # Your brand color
backgroundColor = "#ffffff"
secondaryBackgroundColor = "#f0f2f6"
textColor = "#262730"
```

### Change Title

Edit `app.py` line 6:
```python
st.set_page_config(
    page_title="Your Company Name",  # ← Change this
    page_icon="🤖",
    layout="wide"
)
```

---

## 📱 Custom Domain (Optional)

1. **In Streamlit Cloud:** Settings → Custom Domain
2. **Add your domain:** `ai.yourdomain.com`
3. **Update DNS:** Add CNAME record pointing to Streamlit
4. **Wait for SSL:** Automatic HTTPS certificate

---

## 🔒 Add Authentication (Optional)

Install authenticator:
```bash
pip install streamlit-authenticator
```

Add to `requirements.txt`:
```
streamlit-authenticator>=0.2.0
```

Add to `app.py`:
```python
import streamlit_authenticator as stauth

# Create config
config = {
    'credentials': {
        'usernames': {
            'admin': {
                'name': 'Admin User',
                'password': 'hashed_password_here'
            }
        }
    },
    'cookie': {
        'name': 'evevo_auth',
        'key': 'random_signature_key',
        'expiry_days': 30
    }
}

authenticator = stauth.Authenticate(
    config['credentials'],
    config['cookie']['name'],
    config['cookie']['key'],
    config['cookie']['expiry_days']
)

name, authentication_status, username = authenticator.login('Login', 'main')

if authentication_status:
    # Show app
    authenticator.logout('Logout', 'sidebar')
    # ... rest of your app
elif authentication_status == False:
    st.error('Username/password is incorrect')
elif authentication_status == None:
    st.warning('Please enter your username and password')
```

---

## 🐛 Troubleshooting

### App won't deploy
- Check `requirements.txt` is present
- Verify Python version compatibility
- Check logs in Streamlit Cloud dashboard

### Iframe not loading
- Check CORS policies
- Verify ElevenLabs URL is correct
- Check browser console for errors

### n8n webhook fails
- Test webhook URL directly
- Check n8n workflow is active
- Verify network connectivity

---

## 📊 Monitor Your App

### Streamlit Cloud Dashboard:
- View app logs
- Check resource usage
- Monitor uptime
- View analytics

### Add Google Analytics:

Add to `app.py`:
```python
import streamlit.components.v1 as components

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

---

## 🔄 Update Your App

### Method 1: Git Push
```bash
git add .
git commit -m "Update app"
git push
```
Streamlit Cloud auto-deploys on push!

### Method 2: Streamlit Cloud UI
- Go to app dashboard
- Click "Reboot app"
- Changes deploy automatically

---

## ✅ Post-Deployment Checklist

- [ ] App deployed successfully
- [ ] Custom URL configured (optional)
- [ ] n8n webhook URL updated
- [ ] Agent ID configured
- [ ] Tested end-to-end
- [ ] Userscripts extension installed (for auto-click)
- [ ] Auto-click script created
- [ ] Shared with users

---

## 🎉 Your App is Live!

**URL:** `https://[your-subdomain].streamlit.app`

**Share it with:**
- Direct link
- QR code
- Embed in website
- Social media

**Next steps:**
1. Customize branding
2. Add authentication (optional)
3. Set up custom domain (optional)
4. Monitor usage
5. Collect feedback

🚀 **Your AI voice agent is now live on the internet!**

