# Website Customization Guide

## 🎯 Quick Reference - File Locations

| Section | File Path | Purpose |
|---------|-----------|---------|
| **Navigation** | `src/components/Navbar.tsx` | Top navigation bar |
| **Hero Section** | `src/components/Hero.tsx` | Main landing area |
| **Gallery** | `src/components/Gallery.tsx` | Image carousel |
| **Products** | `src/components/ProductCarousel.tsx` | Product showcase |
| **Statistics** | `src/components/FeedbackStats.tsx` | Numbers & metrics |
| **Partners** | `src/components/Collaborators.tsx` | Company logos |
| **FAQ** | `src/components/FAQ.tsx` | Questions & answers |
| **Footer** | `src/components/Footer.tsx` | Bottom section |
| **Design System** | `src/index.css` | Colors, fonts, styles |
| **Main Layout** | `src/pages/Index.tsx` | Page structure |

---

## 🎨 Design System Customization

### **File:** `src/index.css`
**What to customize:**
- **Colors:** Change `--primary`, `--secondary`, `--accent` values
- **Gradients:** Modify `--gradient-primary`, `--gradient-dark`
- **Fonts:** Update font families and sizes
- **Shadows:** Adjust `--shadow-elegant`, `--shadow-glow`

```css
/* Example: Change primary color */
:root {
  --primary: 220 100% 50%; /* Blue */
  --primary: 0 100% 50%;   /* Red */
  --primary: 120 100% 50%; /* Green */
}
```

### **File:** `tailwind.config.ts`
**What to customize:**
- Font families
- Additional colors
- Spacing values
- Animation timings

---

## 🧭 Navigation Bar

### **File:** `src/components/Navbar.tsx`
**What to customize:**
- **Logo text:** Change "Sid" to your brand name
- **Menu items:** Add/remove navigation links
- **Colors:** Glass effect, text colors
- **Mobile menu:** Burger menu behavior

**Key areas to modify:**
```tsx
// Logo text (around line 25)
<span className="text-2xl font-bold">Your Brand</span>

// Navigation items (around line 35)
<a href="#about">About</a>
<a href="#services">Services</a>
```

---

## 🎬 Hero Section

### **File:** `src/components/Hero.tsx`
**What to customize:**
- **Main heading:** "Welcome to Sid" text
- **Subtitle:** Description text
- **Button labels:** "Explore Products", "Learn More"
- **Button actions:** Add onClick handlers
- **Background:** Gradient colors

**Key areas to modify:**
```tsx
// Main heading (around line 44)
<span className="gradient-text">Welcome to</span>
<span className="text-pure-dark">Your Brand</span>

// Subtitle (around line 61)
where design meets creativity and exclusivity.

// Buttons (around line 74-82)
<button>Your CTA Text</button>
```

---

## 🖼️ Gallery Section

### **File:** `src/components/Gallery.tsx`
**What to customize:**
- **Images:** Replace product1.jpg, product2.jpg, product3.jpg
- **Title:** "Our Gallery" text
- **Description:** Gallery subtitle
- **Animation speed:** Carousel timing

**Key areas to modify:**
```tsx
// Images (around line 4-6)
import yourImage1 from '@/assets/your-image1.jpg';

// Title (around line 33)
<h2>Your Gallery Title</h2>

// Description (around line 36)
<p>Your gallery description</p>
```

**Image requirements:**
- **Location:** `src/assets/`
- **Format:** .jpg, .png, .webp
- **Recommended dimensions:**
  - **Gallery images:** 1920x1080px (16:9 aspect ratio) for best quality
  - **Product images:** 800x800px (1:1 square aspect ratio)
  - **Hero background:** 1920x1080px minimum
  - **Logo/icons:** 512x512px (SVG preferred for scalability)
- **File size:** Keep under 2MB per image for optimal loading
- **Quality:** Use 80-90% JPEG quality or PNG for transparency needs

---

## 🛍️ Product Carousel

### **File:** `src/components/ProductCarousel.tsx`
**What to customize:**
- **Product data:** Names, prices, descriptions
- **Product images:** Image files
- **Section title:** "Featured Products"
- **Button text:** "Add to Cart"

**Key areas to modify:**
```tsx
// Product data (around line 15)
const products = [
  {
    id: 1,
    name: "Your Product Name",
    price: "$99",
    image: yourProductImage,
  }
];

// Section title (around line 45)
<h2>Your Products Section</h2>
```

---

## 📊 Statistics Section

### **File:** `src/components/FeedbackStats.tsx`
**What to customize:**
- **Statistics numbers:** Customer count, satisfaction rate
- **Stat labels:** "Happy Customers", "Success Rate"
- **Background colors:** Section styling
- **Counter animation:** Speed and effects

**Key areas to modify:**
```tsx
// Statistics data (around line 15)
const stats = [
  { number: 5000, label: "Your Metric", suffix: "+" },
  { number: 98, label: "Your Percentage", suffix: "%" },
];
```

---

## 🤝 Collaborators/Partners

### **File:** `src/components/Collaborators.tsx`
**What to customize:**
- **Partner logos:** Company logo images
- **Section title:** "Our Partners"
- **Scrolling speed:** Marquee animation
- **Logo sizing:** Image dimensions

**Key areas to modify:**
- **Logo files:** Add to `src/assets/`
- **Import logos:** Reference in component
- **Adjust sizing:** Logo container styles

---

## ❓ FAQ Section

### **File:** `src/components/FAQ.tsx`
**What to customize:**
- **Questions:** FAQ content
- **Answers:** Detailed responses
- **Section title:** "Frequently Asked Questions"
- **Accordion behavior:** Expand/collapse

**Key areas to modify:**
```tsx
// FAQ data (around line 15)
const faqs = [
  {
    question: "Your Question?",
    answer: "Your detailed answer..."
  }
];
```

---

## 🦶 Footer

### **File:** `src/components/Footer.tsx`
**What to customize:**
- **Company info:** Name, address, contact
- **Social links:** Social media URLs
- **Footer sections:** Services, about, contact
- **Copyright:** Year and company name

**Key areas to modify:**
```tsx
// Company name (around line 20)
<h3>Your Company</h3>

// Contact info (around line 25)
<p>your@email.com</p>
<p>+1 (555) 123-4567</p>

// Social links (around line 40)
<a href="https://your-social-link">
```

---

## 🔧 Advanced Customizations

### **Adding New Sections**
1. Create new component: `src/components/YourSection.tsx`
2. Import in: `src/pages/Index.tsx`
3. Add to layout between existing sections

### **Changing Fonts**
1. **Add Google Font to** `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

2. **Update** `tailwind.config.ts`:
```js
fontFamily: {
  'your-font': ['Your Font', 'sans-serif'],
}
```

3. **Use in components:**
```tsx
<h1 className="font-your-font">Text</h1>
```

### **Adding New Colors**
1. **Update** `src/index.css`:
```css
:root {
  --your-color: 200 100% 50%;
}
```

2. **Use in components:**
```tsx
<div className="bg-your-color">Content</div>
```

---

## 📱 Responsive Design

All components are built with responsive design:
- **Mobile:** Default styles
- **Tablet:** `md:` prefix classes
- **Desktop:** `lg:` prefix classes

To modify responsive behavior, adjust Tailwind classes:
```tsx
<div className="text-sm md:text-lg lg:text-xl">
  Responsive text
</div>
```

---

## 🎯 Quick Customization Checklist

- [ ] Update brand name in Navbar and Hero
- [ ] Replace product images in `/src/assets/`
- [ ] Modify product data in ProductCarousel
- [ ] Update statistics in FeedbackStats
- [ ] Add your FAQ content
- [ ] Update footer contact information
- [ ] Customize colors in `index.css`
- [ ] Test on mobile and desktop

---

---

## 🚀 Deployment Guide

### **Step 1: Connect to GitHub**
1. **In Lovable:** Click the GitHub button in the top right
2. **Authorize:** Connect your GitHub account to Lovable
3. **Create Repository:** Let Lovable create a new repository with your code
4. **Automatic Sync:** All future changes in Lovable will automatically push to GitHub

### **Step 2: Deploy Your App**

#### **Option A: Using Lovable (Easiest)**
1. **Click Publish** in the top right of Lovable editor
2. **Get staging URL:** Your app will be live at `yourproject.lovable.app`
3. **Connect custom domain:** Go to Project Settings → Domains

#### **Option B: Deploy to Vercel/Netlify**
1. **Fork/Clone** your GitHub repository
2. **Connect to hosting:** Link your GitHub repo to Vercel/Netlify
3. **Auto-deploy:** Pushes to main branch will automatically deploy

#### **Option C: Self-Host**
```bash
# Clone your repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies
npm install

# Build for production
npm run build

# Serve the dist folder with any web server
```

### **Step 3: Custom Domain Setup**

#### **For Lovable Hosting:**
1. **Go to:** Project Settings → Domains in Lovable
2. **Add domain:** Enter your domain (e.g., `yourdomain.com`)
3. **DNS Setup:** Add these records at your domain registrar:
   - **Type:** A Record
   - **Name:** @ (for root domain)
   - **Value:** 185.158.133.1
   - **Name:** www
   - **Value:** 185.158.133.1
4. **Wait:** DNS propagation takes 24-48 hours
5. **SSL:** Automatically provisioned by Lovable

#### **For Other Hosting (Vercel/Netlify):**
1. **In hosting dashboard:** Go to domain settings
2. **Add domain:** Enter your custom domain
3. **Follow provider instructions** for DNS setup
4. **SSL:** Automatically handled by hosting provider

### **Step 4: DNS Configuration Tips**
- **Use DNSChecker.org** to verify your DNS settings
- **Remove old records** that might conflict
- **CAA records:** Ensure they allow Let's Encrypt for SSL
- **Subdomain setup:** First add root domain, then add subdomain
- **Troubleshooting:** Wait up to 48 hours for DNS propagation

### **Step 5: Environment Variables (If Needed)**
If your app uses APIs or secrets:
```bash
# Create .env file (for self-hosting)
VITE_API_KEY=your_api_key
VITE_API_URL=your_api_url
```

For Lovable/Vercel/Netlify: Add environment variables in their respective dashboards.

---

## 🆘 Need Help?

1. **Visual Edits:** Use the Visual Edits feature for quick text/color changes
2. **Chat:** Ask specific questions about any section
3. **Documentation:** Check component comments for additional guidance
4. **Deployment Issues:** 
   - Check DNS settings with DNSChecker.org
   - Verify GitHub connection in Lovable
   - Contact support with domain name and DNS screenshots

---

*Remember: Always test changes on different screen sizes and deploy regularly!*