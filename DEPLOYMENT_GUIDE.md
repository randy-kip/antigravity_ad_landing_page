# Vercel Deployment Guide for Bookkeeping Landing Page

## Prerequisites
1. **Node.js and npm** - Download from https://nodejs.org/ (LTS version recommended)
2. **Vercel Account** - Sign up for free at https://vercel.com/signup

## Deployment Steps

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI globally**
   Open WSL terminal and run:
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project directory**
   ```bash
   cd /mnt/c/Users/alvin/OneDrive/Documents/Desktop/rk_kidaflow/antigravity_ad_landing_page
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate (you can use email, GitHub, GitLab, or Bitbucket)

4. **Deploy to Vercel**
   ```bash
   vercel
   ```
   - Press Enter to accept the default settings
   - Your site will be deployed and you'll get a live URL!

5. **Deploy to Production (Optional)**
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Web Interface (Easiest)

1. **Go to Vercel Dashboard**
   Visit https://vercel.com/new

2. **Import Project**
   - Click "Add New..." → "Project"
   - Choose "Import Git Repository" OR "Deploy from CLI"
   - Alternatively, drag and drop your project folder

3. **Configure Project**
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Get your live URL!

### Option 3: Quick Deploy with Drag & Drop

1. **Visit Vercel Deploy**
   Go to https://vercel.com/new

2. **Drag and Drop**
   Simply drag the entire `antigravity_ad_landing_page` folder into the browser

3. **Get Your Link**
   Vercel will automatically deploy and give you a live URL!

## Your Live URL
After deployment, you'll receive a URL like:
- `https://bookkeeping-landing-page-xxxxx.vercel.app`

You can also set up a custom domain in the Vercel dashboard!

## Troubleshooting

### If WSL commands don't work:
- Use PowerShell or Command Prompt instead
- Or use the Vercel web interface (Option 2 or 3)

### If you don't have Node.js:
- Download from https://nodejs.org/
- Or use Option 3 (drag & drop) which doesn't require any installation!

## Files Created for Deployment
- `package.json` - Project metadata
- `vercel.json` - Vercel configuration
- `DEPLOYMENT_GUIDE.md` - This guide

## Need Help?
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
