# Larson Jean-Louis - Portfolio Website

A professional portfolio website showcasing coding projects and skills.

## 📋 Features

- ✨ Modern, responsive design
- 📱 Mobile-friendly layout
- 🎮 Project showcase with live demos
- 📧 Contact information
- 🎯 Bio and skills section
- 🎨 Clean, professional styling

## 🚀 Getting Started

### View Locally

1. Open `portfolio.html` in your web browser
2. Click on projects to view code and run them

### Deploy to GitHub Pages

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Food-Bank-Thing.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** (top right)
   - Scroll down to **Pages** section
   - Under "Source", select "Deploy from a branch"
   - Choose **main** branch and **root** folder
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/Food-Bank-Thing/`

3. **Access your portfolio:**
   - Main portfolio: `https://YOUR_USERNAME.github.io/Food-Bank-Thing/portfolio.html`
   - Or set `portfolio.html` as your default by renaming it to `index.html`

## 📁 File Structure

```
Food-Bank-Thing/
├── portfolio.html       # Main portfolio page
├── index.html          # Geometry Dash game
├── README.md           # This file
└── (add your other projects here)
```

## ✏️ How to Add Projects

To add a new project to your portfolio:

1. **Add HTML/JavaScript project:**
   - Create a new `.html` file in this folder
   - Update `portfolio.html` to add a new project card in the projects grid

2. **Update project card:**
   ```html
   <div class="project-card">
     <h3>Your Project Name</h3>
     <p>Brief description of your project</p>
     <div class="tech-tags">
       <span class="tech-tag">Technology</span>
     </div>
     <div class="project-buttons">
       <button onclick="viewProject('project-id')">View Code</button>
       <button onclick="runProject('project-id')">Run</button>
     </div>
   </div>
   ```

3. **Add project modal:**
   ```html
   <div id="projectIdModal" class="modal">
     <div class="modal-content">
       <span class="close" onclick="closeProject('project-id')">&times;</span>
       <h2>Your Project Name</h2>
       <!-- Project details -->
     </div>
   </div>
   ```

4. **Update JavaScript function:**
   ```javascript
   function runProject(projectId) {
     if (projectId === 'project-id') {
       window.location.href = 'your-project-file.html';
     }
   }
   ```

## 🔗 For Java Projects

Since Java doesn't run directly in browsers, you have these options:

1. **Show Source Code:**
   - Display the `.java` file in a code viewer
   - Link to a GitHub repository

2. **Convert to JavaScript:**
   - Use tools like GWT (Google Web Toolkit) or j2js
   - Rewrite in JavaScript for web deployment

3. **Create Web Wrapper:**
   - Build an HTML/JavaScript GUI that calls backend Java code
   - Deploy using a service like Heroku

## 📚 Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [HTML5 Canvas MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## 📧 Contact

- Email: 2706188@students.norwalkps.org
- Location: Norwalk, CT

## 📄 License

This project is open source and available for personal use.

---

**Tips for Success:**
- 💡 Add a new project every time you finish one
- 🎨 Keep the design consistent
- 📱 Test on mobile devices
- 🔒 Keep sensitive information out of code
- 🚀 Update GitHub Pages whenever you add new content
