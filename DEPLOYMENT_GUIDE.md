# Deployment Guide for Vaccine Talk Website

## Important Note
Your Next.js application includes API routes (chat functionality), which requires **Node.js server hosting**. GoDaddy's basic shared hosting does NOT support Next.js applications.

## Option 1: Deploy to Vercel (Recommended - FREE & Easy)
Vercel is the company behind Next.js and offers the best deployment experience:

### Steps:
1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Sign up at Vercel** (https://vercel.com) - Free tier available

3. **Import your GitHub repository**
   - Click "New Project"
   - Select your repository
   - Vercel auto-detects Next.js settings

4. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add: `GROQ_API_KEY` = your Groq API key

5. **Deploy**
   - Click "Deploy"
   - Vercel automatically builds and deploys
   - You'll get a URL like: `your-project.vercel.app`

6. **Connect GoDaddy Domain** (Optional)
   - In Vercel: Settings → Domains
   - Add your GoDaddy domain
   - Update DNS records in GoDaddy as instructed by Vercel

## Option 2: GoDaddy VPS or Managed WordPress Plus (Paid)
If you have GoDaddy VPS or Managed WordPress Plus with Node.js support:

### Steps:
1. **Build the application**
   ```bash
   npm run build
   ```

2. **Upload files via FTP/SFTP**
   - Upload the entire project folder
   - Make sure `.next` folder is included

3. **Install dependencies on server**
   ```bash
   npm install --production
   ```

4. **Set environment variables**
   - Create `.env` file with: `GROQ_API_KEY=your_key`

5. **Start the server**
   ```bash
   npm start
   ```

6. **Use PM2 for process management** (recommended)
   ```bash
   npm install -g pm2
   pm2 start npm --name "vaccine-talk" -- start
   pm2 save
   pm2 startup
   ```

## Option 3: GoDaddy Shared Hosting (NOT Recommended - Won't Work)
GoDaddy shared hosting does NOT support:
- Node.js runtime
- Next.js server-side features
- API routes

**This option will NOT work for your application.**

## Option 4: Other Hosting Providers
- **Netlify** (Free tier, but limited API support)
- **Railway** (Free tier available)
- **Render** (Free tier available)
- **DigitalOcean App Platform** (Paid, but affordable)

## Environment Variables Required
Make sure to set these in your hosting platform:
- `GROQ_API_KEY` - Your Groq API key for chat functionality

## Build Command
```bash
npm run build
```

## Start Command
```bash
npm start
```

## Recommended: Vercel
For Next.js applications, Vercel is the best choice because:
- ✅ Free tier available
- ✅ Automatic deployments from GitHub
- ✅ Built-in CDN and optimizations
- ✅ Easy domain connection
- ✅ Environment variable management
- ✅ Automatic SSL certificates
- ✅ Zero configuration needed

## Need Help?
If you need assistance with deployment, let me know which option you'd like to use!

