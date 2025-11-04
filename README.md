# Artist Portfolio Website

A modern, responsive portfolio website for artist Priyanshu Mithagari showcasing artwork, bio, skills, and contact information.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎨 What the Project Does

This is a professional artist portfolio website featuring:

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Interactive Gallery** - Lightbox functionality for artwork viewing
- **Modern UI/UX** - Clean, elegant design with smooth animations
- **Contact Form** - Functional contact form with validation
- **Performance Optimized** - Fast loading and SEO-friendly

## ✨ Key Features

- **Mobile-First Navigation** - Hamburger menu for mobile devices
- **Image Lightbox** - Click to enlarge artwork with details
- **Smooth Scrolling** - Seamless navigation between sections
- **Scroll Animations** - Fade-in effects as you scroll
- **Responsive Gallery** - Grid layout that adapts to screen size
- **Contact Form** - Client-side validation and submission handling
- **Social Media Integration** - Links to professional profiles

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PIYUSHMITHAGARI/Artist-Portfolio.git
   cd artist-portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open portfolio.html in your browser
   open portfolio.html
   ```

3. **Or serve with local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

### Customization

To personalize this portfolio for your own use:

1. **Update content in `portfolio.html`**
   - Replace artist name and contact information
   - Update bio, skills, and experience sections
   - Add your own images to the `Images/` folder

2. **Modify styling in `style.css`**
   - Change color scheme by updating CSS variables
   - Adjust fonts, spacing, and layout as needed
   - Customize animations and transitions

3. **Update functionality in `script.js`**
   - Modify form submission handling
   - Add new interactive features
   - Customize lightbox behavior

## 📁 Project Structure

```
artist-portfolio/
│
├── portfolio.html          # Main HTML file
├── style.css              # All styling and responsive design
├── script.js              # Interactive functionality
├── Images/                # Artwork and portfolio images
│   ├── landscape1.jpg
│   ├── landscape2.jpg
│   ├── potrait1.jpg
│   └── potrait2.jpg
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Interactive features and DOM manipulation
- **Font Awesome** - Professional icons
- **Google Fonts (Poppins)** - Modern typography

## 🎯 Usage Examples

### Adding New Artwork

Add new artwork to the gallery section in `portfolio.html`:

```html
<figure class="art-item fade-in" 
        data-title="Your Artwork Title" 
        data-desc="Medium, Year" 
        data-src="Images/your-image.jpg">
    <img src="Images/your-image.jpg" alt="Artwork description">
    <figcaption>Your Artwork Title — Year</figcaption>
</figure>
```

### Customizing Colors

Modify the color scheme in `style.css`:

```css
:root {
    --accent: #your-color;        /* Primary brand color */
    --accent-light: #lighter;     /* Hover states */
    --accent-dark: #darker;       /* Active states */
    --bg: #ffffff;                /* Background */
    --text: #111111;              /* Primary text */
    --muted: #666666;             /* Secondary text */
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

- **Documentation**: Check the code comments for detailed explanations
- **Issues**: Open a GitHub issue for bugs or feature requests
- **Questions**: Contact the maintainer directly

## 👥 Maintainers

- **Piyush Mithagari** - [GitHub Profile](https://github.com/piyushmithagari)
- **Atharva Shirodkar** - [GitHub Profile](https://github.com/atharvashirodkar)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Font Awesome for beautiful icons
- Google Fonts for typography
- Modern CSS techniques and best practices

---

**Ready to showcase your art?** Clone this repository and start customizing your professional portfolio today!