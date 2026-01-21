# Video Editor Portfolio Website

A modern, responsive portfolio website for video editors with smooth animations, elegant design, and professional presentation.

## 🎨 Features

- **Modern Design**: Clean, professional aesthetic with gradient accents
- **Fully Responsive**: Works perfectly on all devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Interactive Elements**: FAQ accordion, hover effects, and more
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Fast Loading**: Optimized assets and minimal dependencies
- **Easy Customization**: Well-organized code with clear sections

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript for interactivity
├── package.json        # Project metadata
├── vercel.json         # Vercel deployment config
├── README.md          # This file
│
└── (Add your images)
    ├── after-effects.png    # Tool logo 1
    ├── photoshop.png        # Tool logo 2
    ├── premiere-pro.png     # Tool logo 3
    ├── canva.png            # Tool logo 4
    └── thumbnail.jpg        # Portfolio video thumbnails
```

## 🚀 Quick Start

### 1. Customize Your Content

Open `index.html` and replace the placeholder content:

**Navigation & Branding:**
- Line 19: Change "YOUR BRAND" to your name/brand
- Line 22-27: Update navigation links if needed

**Hero Section:**
- Line 39: Update the "NEW" badge or remove it
- Line 40-44: Edit your main headline
- Line 45-48: Write your own subtitle/bio
- Line 60-68: Add your logo images - place these PNG files in the same folder as index.html:
  - `after-effects.png` (or rename to img1.png)
  - `photoshop.png` (or rename to img2.png)
  - `premiere-pro.png` (or rename to img3.png)
  - `canva.png` (or rename to img4.png)

**About Section:**
- Line 90: Replace the image URL with your own photo
- Line 96-98: Update the section title
- Line 99-103: Write your own about text
- Line 108-127: Update your statistics (views, projects, years, etc.)
- Line 132-153: Add your actual social media links

**Services Section:**
- Lines 166-280: Customize each service card with your offerings
- Update titles, descriptions, and icons as needed

**Portfolio Section:**
- Lines 294-413: Replace placeholder images and project info
- Update project titles, view counts, and categories
- **To add videos**: Add `data-video="YOUR_YOUTUBE_EMBED_URL"` to portfolio items
  - Example: `<div class="portfolio-item" data-video="https://www.youtube.com/embed/VIDEO_ID">`
  - Get YouTube embed URL: Go to video → Share → Embed → Copy the src URL
  - For Vimeo: `https://player.vimeo.com/video/VIDEO_ID`
  - Videos will open in a modal when clicked

**Testimonials:**
- Lines 428-482: Replace with real client testimonials
- Update client names, photos, and quotes

**FAQ Section:**
- Lines 498-557: Customize questions and answers for your business

**Contact Section:**
- Line 530: Already updated with your Calendly link (https://calendly.com/sharmatanishq891/30min)

**Footer:**
- Lines 602-639: Update footer links and information

### 2. Customize Colors & Fonts

Open `styles.css` and edit the CSS variables (lines 5-28):

```css
:root {
    --accent-primary: #ff6b35;      /* Change to your brand color */
    --accent-secondary: #f7931e;     /* Secondary accent */
    --accent-tertiary: #ffd23f;      /* Tertiary accent */
    
    /* Update gradients */
    --gradient-1: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
    
    /* Change fonts */
    --font-display: 'Playfair Display', serif;  /* Heading font */
    --font-body: 'Syne', sans-serif;            /* Body font */
}
```

To use different fonts, update the Google Fonts link in `index.html` (line 8).

### 3. Add Your Images

Replace placeholder images with your own:

- **Client/Tool logos**: Add 4 logo images named exactly as:
  - `after-effects.png`
  - `photoshop.png`
  - `premiere-pro.png`
  - `canva.png`
  - Place these files in the SAME folder as index.html (root level)
  - Recommended: PNG format with transparent background, ~200px width
  - These show the tools you use (you can rename/replace with your own tool logos)
  
- **Portfolio thumbnails**: Replace `thumbnail.jpg` with your actual video thumbnails
- **About section photo**: Line 90 in index.html (currently uses placeholder)
- **Testimonial photos**: Lines use pravatar.cc (can replace with real client photos)

**Where to find images:**
- Use your own photos/screenshots
- Free stock photos: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)
- Generate avatars: [Pravatar](https://pravatar.cc), [UI Faces](https://uifaces.co)

### 5. Add Your Videos

To make portfolio items open videos in a modal:

**Step 1:** Add `data-video` attribute to portfolio item:
```html
<div class="portfolio-item" data-video="https://www.youtube.com/embed/dQw4w9WgXcQ">
```

**Step 2:** Get your video embed URL:

**For YouTube:**
1. Go to your video on YouTube
2. Click "Share" button
3. Click "Embed"
4. Copy the URL from `src="..."` (looks like: `https://www.youtube.com/embed/VIDEO_ID`)

**For Vimeo:**
1. Go to your video on Vimeo
2. Click "Share"
3. Use format: `https://player.vimeo.com/video/VIDEO_ID`

**Example:**
```html
<!-- Before (image only) -->
<div class="portfolio-item">
    <div class="portfolio-thumbnail">
        <img src="thumbnail.jpg" alt="Project">
        ...
    </div>
</div>

<!-- After (opens video in modal) -->
<div class="portfolio-item" data-video="https://www.youtube.com/embed/dQw4w9WgXcQ">
    <div class="portfolio-thumbnail">
        <img src="thumbnail.jpg" alt="Project">
        ...
    </div>
</div>
```

**Features:**
- Click thumbnail to open video in fullscreen modal
- Press ESC or click X to close
- Click outside video to close
- Auto-plays when opened
- Works with YouTube, Vimeo, and direct video URLs

### 4. Add Your Videos

Update portfolio items to link to your actual videos:

```html
<div class="portfolio-item">
    <a href="https://youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank">
        <div class="portfolio-thumbnail">
            <img src="your-thumbnail.jpg" alt="Project Name">
            <!-- Rest of the code -->
        </div>
    </a>
</div>
```

## 📦 Deployment to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to your project folder:
```bash
cd your-portfolio-folder
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name? Enter your desired name
   - In which directory is your code? **./**

5. Your site will be live! Vercel will give you a URL.

### Method 2: Using Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "New Project"
4. Import your GitHub repository (push your code to GitHub first)
5. Vercel will automatically detect it's a static site
6. Click "Deploy"

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Sign in
3. Drag your entire project folder onto the Vercel dashboard
4. Wait for deployment to complete

## 🎨 Customization Tips

### Change Color Scheme

1. Pick a color palette from [Coolors](https://coolors.co) or [Adobe Color](https://color.adobe.com)
2. Update CSS variables in `styles.css`
3. Test contrast ratios for accessibility

### Add New Sections

1. Copy an existing section structure from `index.html`
2. Add appropriate styling in `styles.css`
3. Add scroll animations in `script.js` if needed

### Modify Animations

In `styles.css`, adjust:
- Animation duration: Change values in `@keyframes`
- Transition speed: Modify `--transition-smooth` variable
- Scroll effects: Edit values in Intersection Observer

### Add Contact Form

Replace the button section with a form:

```html
<form id="contactForm">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

Then add form handling in `script.js` or use a service like [Formspree](https://formspree.io).

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- 968px (tablet)
- 640px (mobile)

Test on different devices using browser DevTools.

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Minify CSS/JS**: Use tools like [CSS Minifier](https://cssminifier.com)
4. **CDN**: Vercel automatically provides CDN

## 🆘 Troubleshooting

**Navigation not working?**
- Check that all `href="#section-id"` match actual section IDs

**Animations not playing?**
- Make sure JavaScript is enabled
- Check browser console for errors

**Images not loading?**
- Verify image URLs are correct
- Check image file paths

**Mobile menu not opening?**
- Ensure `script.js` is properly linked
- Check for JavaScript errors

## 📄 License

This project is free to use for personal and commercial projects.

## 🤝 Support

For questions or issues:
- Check the code comments
- Review this README
- Test in browser DevTools

## 🎉 You're All Set!

Your portfolio website is ready to showcase your amazing video editing work. Good luck! 🚀

---

**Pro Tips:**
- Update your portfolio regularly with new projects
- Get testimonials from satisfied clients
- Share your portfolio URL on social media
- Add analytics to track visitors (Google Analytics, Plausible, etc.)
- Keep loading times under 3 seconds
- Test on multiple devices before launching
