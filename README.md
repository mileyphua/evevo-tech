# EvolveX - AI & Data Solutions for Enterprise Evolution

A modern, responsive website for EvolveX (Evevo Technologies Sdn Bhd) showcasing cutting-edge AI and data solutions for enterprise transformation, investment attraction, and competitive advantage.

## 🚀 Features

### Multi-Page Architecture
- **Home Page**: Main landing page with investment & growth focus
- **Industries Page**: Interactive carousel showcasing real-world AI implementations
- **Contact Page**: Comprehensive form with validation and backend simulation

### Interactive Components
- **Industry Carousel**: Smooth transitions between McDonald's, JPMorgan Chase, Dubai Real Estate, and Healthcare Tourism examples
<<<<<<< HEAD
- **Review Section**: Phone mockup with auto-advancing customer testimonials
=======
- **SVO.ai Review Section**: Phone mockup with auto-advancing customer testimonials
>>>>>>> 127f156 (Add new files and folders)
- **Contact Form**: Complete validation with industry selection and AI knowledge assessment
- **Responsive Navigation**: Mobile-friendly menu with smooth animations

### Design & Branding
- **EvolveX Branding**: Consistent logo integration and yellow/gold color scheme
- **Modern Dark Theme**: Professional aesthetic with animated backgrounds
- **Circuit Patterns**: Technology-focused visual elements
- **Company Logos**: Integrated McDonald's, Chase, AIR Properties, and Mayo Clinic logos

## 🛠 Technology Stack

- **React 19.1.0** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality component library
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
evolvex-website/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png                    # EvolveX logo
│   │   ├── svo-review.png             # SVO.ai review mockup
│   │   ├── mcdonalds-logo.png         # McDonald's logo
│   │   ├── chase-logo.png             # JPMorgan Chase logo
│   │   ├── air-properties-logo.jpg    # AIR Properties logo
│   │   └── mayo-clinic-logo.png       # Mayo Clinic logo
│   ├── components/
│   │   ├── ui/                        # Shadcn/UI components
│   │   ├── Industries.jsx             # Industry carousel page
│   │   └── Contact.jsx                # Contact form page
│   ├── App.jsx                        # Main application component
│   ├── App.css                        # Global styles
│   ├── index.css                      # Tailwind imports
│   └── main.jsx                       # Application entry point
├── index.html                         # HTML template
├── package.json                       # Dependencies and scripts
├── tailwind.config.js                 # Tailwind configuration
├── vite.config.js                     # Vite configuration
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd evolvex-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm run preview
# or
npm run preview
```

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with animated logo and call-to-action
- Investment & Growth Potential focus
- Agentic AI solutions showcase
- ROI metrics and market data
- SVO.ai customer review carousel
- Professional footer with contact information

### Industries Page (`/industries`)
- Interactive carousel with 4 industry examples:
  - **McDonald's**: Restaurant automation (300% efficiency improvement)
  - **JPMorgan Chase**: Banking AI excellence (1.7x average ROI)
  - **Dubai Real Estate**: Smart property solutions
  - **Healthcare Tourism**: AI-enhanced medical services
- Company logos and detailed achievement metrics
- Navigation dots with company branding

### Contact Page (`/contact`)
- Comprehensive contact form with validation
- Industry selection (11 options)
- AI knowledge assessment (5 levels)
- Help needed categories (10 options)
- Success state with next steps
- Contact information cards

## 🎨 Design System

### Colors
- **Primary**: Yellow/Gold (#F59E0B, #D97706)
- **Background**: Dark grays (#111827, #1F2937)
- **Text**: White and gray variants
- **Accents**: Circuit patterns and gradients

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body**: Clean, readable fonts
- **Emphasis**: Yellow highlights for key information

### Components
- **Cards**: Glassmorphism effects with backdrop blur
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Consistent styling with validation states
- **Navigation**: Smooth transitions and active states

## 📧 Contact Information

- **Email**: support@evevo-tech.com
- **Company**: Evevo Technologies Sdn Bhd
- **Focus**: Investment & Growth Potential through AI

## 🔧 Customization

### Adding New Industries
1. Add company logo to `src/assets/`
2. Import logo in `Industries.jsx`
3. Add new industry object to the `industries` array
4. Include logo property and company details

### Modifying Contact Form
1. Update form fields in `Contact.jsx`
2. Modify validation logic in `handleSubmit`
3. Adjust success message and next steps

### Changing Branding
1. Replace logo files in `src/assets/`
2. Update color scheme in `tailwind.config.js`
3. Modify company information throughout components

## 📄 License

This project is proprietary to Evevo Technologies Sdn Bhd.

## 🤝 Contributing

For internal development and updates, please follow the established code structure and design patterns.

---

**Built with ❤️ for Enterprise AI Evolution**
