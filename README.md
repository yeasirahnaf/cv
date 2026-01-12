# Yeasir Ahnaf Asif - CV Repository

![Generate CV](https://github.com/yeasirahnaf/cv/workflows/Generate%20CV%20(PDF%20and%20Word)/badge.svg)

This repository contains my professional CV in Markdown format with automated generation of PDF, Word, and HTML documents using GitHub Actions.

## 📄 Download CV

Download the latest version of my CV:

- **[Download PDF](https://github.com/yeasirahnaf/cv/releases/latest/download/Yeasir_Ahnaf_Asif_CV.pdf)**
- **[Download Word (DOCX)](https://github.com/yeasirahnaf/cv/releases/latest/download/Yeasir_Ahnaf_Asif_CV.docx)**
- **[View HTML Version](https://yeasirahnaf.github.io/cv/Yeasir_Ahnaf_Asif_CV.html)**

## ✨ Features

- **ATS-Certified CV**: Optimized format for Applicant Tracking Systems
- **Automated Generation**: GitHub Actions workflow generates PDF, DOCX, and HTML versions
- **Clean Styling**: Professional CSS styling for web view
- **Easy Updates**: Simply edit `CV.md` and push to trigger automatic generation
- **Multiple Formats**: PDF for printing, DOCX for editing, HTML for web viewing

## 🤖 Automatic Generation

The CV is automatically generated using GitHub Actions. Whenever you update `CV.md`:

1. GitHub Action workflow is triggered automatically
2. Pandoc converts the Markdown to PDF, Word, and HTML formats
3. Generated files are uploaded as artifacts
4. Files are deployed to GitHub Pages (HTML version)
5. On version tags, files are attached to GitHub Releases

## 📝 ATS Optimization

The CV is optimized for Applicant Tracking Systems with:

- ✅ **Simple, clean formatting** without tables or columns
- ✅ **Standard section headings** (Professional Summary, Technical Skills, Experience, Education)
- ✅ **Keyword optimization** relevant to target industry
- ✅ **Consistent date formatting** across all sections
- ✅ **No images or graphics** that could confuse ATS parsers
- ✅ **Standard fonts** (Arial, Helvetica) for readability
- ✅ **Clear section separation** for easy parsing
- ✅ **Plain text bullets** and formatting

## 🛠️ How to Update

1. Edit [CV.md](CV.md) with your updated information
2. Commit and push to the `main` or `master` branch
3. GitHub Actions will automatically generate all formats
4. Download artifacts from the Actions tab or view the latest release

## 📂 Repository Structure

```
.
├── CV.md                          # Source CV in Markdown (ATS-certified format)
├── cv-style.css                   # CSS styling for HTML/PDF generation
├── .github/
│   └── workflows/
│       └── generate-cv.yml        # GitHub Actions workflow
├── output/                        # Generated files (created by workflow)
│   ├── Yeasir_Ahnaf_Asif_CV.pdf  # Auto-generated PDF
│   ├── Yeasir_Ahnaf_Asif_CV.docx # Auto-generated Word document
│   └── Yeasir_Ahnaf_Asif_CV.html # Auto-generated HTML version
└── README.md                      # This file
```

## 🔧 Manual Generation (Local)

If you want to generate the CV files locally, install the required tools:

### Install Dependencies

**Windows:**
```powershell
choco install pandoc
choco install miktex
```

**macOS:**
```bash
brew install pandoc
brew install --cask mactex
```

**Linux:**
```bash
sudo apt-get install pandoc texlive-latex-base texlive-fonts-recommended texlive-fonts-extra texlive-latex-extra
```

### Generate Files

```bash
# Create output directory
mkdir output

# Generate PDF
pandoc CV.md -o output/Yeasir_Ahnaf_Asif_CV.pdf --pdf-engine=pdflatex -V geometry:margin=0.75in -V fontsize=10pt

# Generate Word document
pandoc CV.md -o output/Yeasir_Ahnaf_Asif_CV.docx --metadata title="Yeasir Ahnaf Asif - CV"

# Generate HTML
pandoc CV.md -o output/Yeasir_Ahnaf_Asif_CV.html --standalone --css=cv-style.css
```

## 🚀 Workflow Triggers

The GitHub Action runs automatically when:

- You push changes to `CV.md` or `cv-style.css` on main/master branch
- You manually trigger it from the Actions tab (workflow_dispatch)
- You create a version tag (e.g., `v1.0.0`) to create a GitHub Release with attached files

### Creating a Release

To create a versioned release:

```bash
git tag -a v1.0.0 -m "CV version 1.0"
git push origin v1.0.0
```

This automatically creates a GitHub Release with PDF and Word documents attached.

## 🌐 GitHub Pages Deployment

The workflow can optionally deploy the HTML version to GitHub Pages. To enable:

1. Go to **Settings** → **Pages** in your repository
2. Set **Source** to `gh-pages` branch
3. Your CV will be available at: `https://yourusername.github.io/cv/`

## 💡 Tips for Customization

1. **Update Personal Information**: Edit [CV.md](CV.md) with your details
2. **Modify Styling**: Adjust [cv-style.css](cv-style.css) for custom colors/fonts
3. **Change Margins**: Modify the `-V geometry:margin` parameter in the workflow
4. **Add Sections**: Follow the ATS-friendly format with clear headers

## 📈 ATS Best Practices

When updating your CV:

- Use standard section headings
- Include relevant keywords from job descriptions
- Avoid tables, text boxes, or multi-column layouts
- Keep formatting simple and consistent
- Use bullet points for achievements
- Include measurable results (numbers, percentages)
- Maintain chronological order for work experience

## 📫 Contact

**Yeasir Ahnaf Asif**
- **Email:** yeasir.ahnaf.1996@gmail.com
- **Phone:** +8801872262565
- **LinkedIn:** [linkedin.com/in/yeasir-ahnaf-asif](https://www.linkedin.com/in/yeasir-ahnaf-asif/)
- **GitHub:** [github.com/yeasirahnaf](https://github.com/yeasirahnaf)
- **Location:** Dhaka, Bangladesh

## 📜 License

This CV template is free to use and modify for your own purposes.

---

**Last Updated:** January 2026 | **Auto-Generated:** Yes ✅