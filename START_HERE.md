# Quick Start Guide - Get Your Live Link in 2 Minutes! 🚀

## What You Need
- Node.js installed (check by opening PowerShell and typing `node --version`)
- If you don't have Node.js: Download from https://nodejs.org/

## Step-by-Step Instructions

### Step 1: Open PowerShell
1. Press `Windows Key + X`
2. Select "Windows PowerShell" or "Terminal"

### Step 2: Navigate to Your Project
Copy and paste this command:
```powershell
cd "C:\Users\alvin\OneDrive\Documents\Desktop\rk_kidaflow\antigravity_ad_landing_page"
```

### Step 3: Start the Server
```powershell
node server.js
```

You should see:
```
🚀 Server running at http://localhost:8000/
✨ Your Bookkeeping landing page is ready!
```

✅ **Your site is now running locally!** You can test it by opening http://localhost:8000/ in your browser.

### Step 4: Make It Public (Get Live Link)

**Keep the first PowerShell window open**, then open a **NEW** PowerShell window and run:

```powershell
cd "C:\Users\alvin\OneDrive\Documents\Desktop\rk_kidaflow\antigravity_ad_landing_page"
npx localtunnel --port 8000
```

You'll see something like:
```
your url is: https://funny-cat-123.loca.lt
```

🎉 **That's your live link!** Share it with anyone!

## Important Notes

- **Keep both PowerShell windows open** - closing them will stop the server
- The link works as long as your computer is on and the server is running
- First time running `npx localtunnel` might take a minute to download

## Troubleshooting

**"node is not recognized"?**
- Install Node.js from https://nodejs.org/
- Restart PowerShell after installation

**Port 8000 already in use?**
- Close any other servers running
- Or change port in server.js to 8001 and use `--port 8001` in the tunnel command

**Tunnel shows a warning page?**
- Click "Continue" - this is normal for free tunnels
- Or use ngrok instead (see LIVE_DEPLOYMENT.md)

## Alternative: Even Simpler Option

If you want to skip the tunnel setup, just use **Netlify Drop**:
1. Go to https://app.netlify.com/drop
2. Drag your entire `antigravity_ad_landing_page` folder
3. Get instant live link (no account needed!)

---

**Need help?** The files are ready - you just need to run these 2 commands! 🚀
