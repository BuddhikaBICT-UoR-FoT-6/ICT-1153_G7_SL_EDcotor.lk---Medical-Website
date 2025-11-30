# 🏥 SL_EDcotor.lk - Medical Services Website

A comprehensive medical services platform built with HTML, CSS, and JavaScript for ICT-1153 Web Technologies course.

## 🌟 Features

### 🏠 **Homepage**
- Interactive image slideshow with navigation
- Doctor/Hospital search functionality
- Embedded video player with custom controls
- Service cards for key features
- Animated footer with wave effects

### 👨‍⚕️ **Doctor Channeling System**
- Browse doctors by specialty:
  - 🫀 Cardiologists
  - 👁️ Eye Surgeons  
  - 👶 Pediatricians
  - 🩺 General Physicians
- Individual doctor profiles (16 doctors)
- Online appointment booking
- Secure payment processing

### 🧪 **Laboratory Services**
- Comprehensive lab test information
- Service descriptions and pricing
- Contact details for appointments

### 📞 **Patient Support**
- Contact form with validation
- FAQ section with interactive elements
- Feedback system with video content
- About us page with location details

### 🔐 **User Management**
- User registration and login
- Form validation and security
- Responsive design for all devices

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with animations and responsive design
- **Media**: Video integration, image galleries
- **Validation**: Client-side form validation
- **Design**: Purple/Blue color scheme (#6930C3, #4EA8DE)

## 📁 Project Structure

```
Web Project/
├── Index.html              # Main homepage
├── login.html              # User login page
├── signup.html             # User registration
├── Css/                    # Stylesheets and assets
├── channel/                # Doctor channeling system
│   ├── chanaling_home.html
│   ├── Dr.*.html          # Individual doctor pages
│   └── *.html             # Specialty pages
├── Lab Test/               # Laboratory services
├── contact/                # Contact forms and validation
├── FAQ page/               # Frequently asked questions
├── Feedback page/          # User feedback system
├── aboutus/                # About us information
├── Images/                 # Homepage slideshow images
└── Temp/                   # Development templates
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best experience)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sl-edoctor-website.git
   cd sl-edoctor-website
   ```

2. **Open in browser**
   - Double-click `Index.html` to open in default browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. **Navigate to** `http://localhost:8000` (if using local server)

## 🎯 Usage

### For Patients
1. **Browse Services**: Explore available medical services from the homepage
2. **Find Doctors**: Use the search functionality to find doctors by name or hospital
3. **Book Appointments**: Navigate to the channeling section to book appointments
4. **Lab Tests**: Check available laboratory services and pricing
5. **Contact**: Use the contact form for inquiries or support

### For Developers
1. **Customize Styling**: Modify `Css/style.css` for design changes
2. **Add Doctors**: Create new doctor profile pages in the `channel/` directory
3. **Update Content**: Edit HTML files to update information
4. **Enhance Validation**: Modify JavaScript files for additional form validation

## 🔧 Configuration

### Adding New Doctors
1. Create a new HTML file in `channel/` directory
2. Follow the existing doctor page template
3. Add doctor to the dropdown in `Index.html`:
   ```html
   <option value="Dr. NewDoctor(Specialty)">Dr. NewDoctor(Specialty)</option>
   ```

### Customizing Colors
Update the CSS variables in `Css/style.css`:
```css
:root {
  --primary-color: #6930C3;
  --secondary-color: #4EA8DE;
  --accent-color: #48BFE3;
}
```

## 🐛 Known Issues & Fixes

- ✅ Fixed JavaScript validation errors
- ✅ Corrected variable name mismatches
- ✅ Improved email validation with regex
- ✅ Enhanced error handling with console logging
- ✅ Fixed navigation link case sensitivity

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Course**: ICT-1153 Web Technologies
- **Institution**: [Your Institution Name]
- **Academic Level**: Level 1, Semester 1

## 📞 Support

For support and questions:
- 📧 Email: info@sledoctor.lk
- 📱 Phone: +94753178064
- 🌐 Website: [Your Website URL]

## 🙏 Acknowledgments

- Course instructors and teaching assistants
- Medical professionals who provided domain expertise
- Open source community for inspiration and resources

---

**⭐ Star this repository if you found it helpful!**