# QUICK START GUIDE - Tanishq Sharma Portfolio

## ✅ What I Fixed From Your HTML:

1. **Fixed Portfolio Structure** - Removed duplicate modal elements, kept only ONE modal at the end
2. **Cleaned HTML** - Proper closing tags and structure
3. **Updated Branding** - Changed "YOUR BRAND" to "Tanishq Sharma" throughout
4. **Updated Links** - Instagram and LinkedIn already set correctly
5. **Video Modal** - Single modal instance that works with all portfolio items

## 📦 Files You Have:

```
your-portfolio/
├── index.html          ✅ Ready (with your info)
├── styles.css          ✅ Ready
├── script.js           ✅ Ready (video modal working)
├── package.json        ✅ Ready
├── vercel.json         ✅ Ready
└── README.md          ✅ Ready

NEED TO ADD:
├── after-effects.png   ❌ Add this logo
├── photoshop.png       ❌ Add this logo
├── premiere-pro.png    ❌ Add this logo
├── canva.png           ❌ Add this logo
└── thumbnail.jpg       ❌ Add video thumbnails
```

## 🎯 What You Need To Do:

### 1. Add Logo Images (4 files)
Place these PNG files in the same folder:
- `after-effects.png`
- `photoshop.png`
- `premiere-pro.png`
- `canva.png`

**Where to get them:**
- Google: "after effects logo png transparent"
- Download each logo
- Save with exact names above
- Place in portfolio folder

### 2. Add Video Thumbnails
In the portfolio section, each item needs a thumbnail:
- Replace `thumbnail.jpg` with your actual video thumbnails
- Name them: `video1-thumb.jpg`, `video2-thumb.jpg`, etc.
- Update the `<img src="">` in each portfolio item

### 3. Add YouTube Video Links
For each portfolio item, replace:
```html
data-video="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

**How to get YouTube embed URL:**
1. Go to your video on YouTube
2. Click "Share"
3. Click "Embed"
4. Copy the URL from `src="..."`
5. It looks like: `https://www.youtube.com/embed/dQw4w9WgXcQ`

**Example:**
```html
<!-- Before -->
<div class="portfolio-item" data-video="https://www.youtube.com/embed/YOUR_VIDEO_ID">

<!-- After -->
<div class="portfolio-item" data-video="https://www.youtube.com/embed/dQw4w9WgXcQ">
```

### 4. Update Portfolio Project Info
In each portfolio item, update:
- `<h3 class="portfolio-title">` - Your project name
- `<span class="stat">` - View count
- Second `<span class="stat">` - Category/client name
- `<div class="portfolio-badge">` - Video type

### 5. Customize Content (Optional)
- Hero subtitle (line 47-49)
- About text (line 95-98)
- Service descriptions
- Testimonials (use real client quotes if you have them)
- FAQ answers

## 🚀 Deploy to Vercel:

**Option 1: Drag & Drop (Easiest)**
1. Go to vercel.com
2. Sign up/Login
3. Drag your entire folder
4. Done!

**Option 2: CLI**
```bash
cd your-portfolio-folder
vercel
```

## 🎨 Your Branding:

Already updated in the code:
- ✅ Name: "Tanishq Sharma"
- ✅ Instagram: https://www.instagram.com/isthat.tanishq/
- ✅ LinkedIn: https://www.linkedin.com/in/tanishq-sharma-a61906261/
- ✅ Calendly: https://calendly.com/sharmatanishq891/30min

## ⚡ Quick Test:

1. Open `index.html` in browser
2. Click navigation links - should scroll smoothly
3. Click FAQ questions - should expand
4. Mobile: Hamburger menu should work
5. Portfolio items: Should show play button on hover
6. Video modal: Will work once you add real YouTube IDs

## 🐛 Common Issues:

**Logo images not showing?**
- Check file names match EXACTLY (case-sensitive)
- Make sure PNGs are in same folder as index.html

**Videos not playing?**
- Make sure you replaced `YOUR_VIDEO_ID` with real YouTube IDs
- Check the format: `https://www.youtube.com/embed/VIDEO_ID`

**Mobile menu not working?**
- Make sure `script.js` is in the same folder
- Check browser console for errors (F12)

## 📱 File Names Summary:

```
Images you need:
✅ after-effects.png
✅ photoshop.png  
✅ premiere-pro.png
✅ canva.png
✅ thumbnail.jpg (or video1-thumb.jpg, video2-thumb.jpg, etc.)
```

## 🎉 You're Almost Done!

Just add the 4 logo images and your video thumbnails, then deploy!

---

**Need Help?** Check the full README.md for detailed instructions.
