# Yeasir Ahnaf Asif - CV Repository

![Generate CV](https://github.com/yeasirahnaf/cv/workflows/Generate%20CV%20(PDF%20&%20Word)/badge.svg)

This repository contains my professional CV in markdown format, with automated generation of PDF and Word documents.

## 📄 Download CV

- **[Download PDF](https://github.com/yeasirahnaf/cv/raw/main/generated/Yeasir_Ahnaf_Asif_CV.pdf)**
- **[Download Word](https://github.com/yeasirahnaf/cv/raw/main/generated/Yeasir_Ahnaf_Asif_CV.docx)**

## 🤖 Automatic Generation

This CV is automatically generated using GitHub Actions. Whenever `CV.md` is updated:

1. A GitHub Action workflow is triggered
2. Pandoc converts the markdown to PDF and Word formats
3. The generated files are saved in the `generated/` folder
4. Files are committed back to the repository

## 📝 CV Format

The CV is designed to be:
- ✅ **ATS-Friendly** - Simple formatting that passes Applicant Tracking Systems
- ✅ **Single Page** - Fits all information on one page
- ✅ **Professional** - Clean, readable layout
- ✅ **Up-to-date** - Auto-generated from the latest markdown

## 🛠️ How to Update

1. Edit `CV.md` with your updated information
2. Commit and push to the `main` branch
3. GitHub Actions will automatically generate new PDF and Word files
4. Download the updated files from the `generated/` folder

## 📂 Repository Structure

```
.
├── CV.md                          # Source CV in Markdown
├── cv-style.css                   # CSS styling for PDF generation
├── .github/
│   └── workflows/
│       └── generate-cv.yml        # GitHub Actions workflow
├── generated/
│   ├── Yeasir_Ahnaf_Asif_CV.pdf  # Auto-generated PDF
│   └── Yeasir_Ahnaf_Asif_CV.docx # Auto-generated Word document
└── README.md                      # This file
```

## 🔧 Technical Details

**Tools Used:**
- Pandoc - Document converter
- LaTeX - PDF engine
- GitHub Actions - Automation

**Styling:**
- Font: Arial/Helvetica (ATS-friendly)
- Font Size: 10pt
- Margins: 0.6 inches
- Line Height: 0.95

## 📫 Contact

- **Email:** yeasir.ahnaf.1996@gmail.com
- **LinkedIn:** [linkedin.com/in/yeasir-ahnaf-asif](https://www.linkedin.com/in/yeasir-ahnaf-asif/)
- **GitHub:** [github.com/yeasirahnaf](https://github.com/yeasirahnaf)

---

**Last Updated:** January 2026 | **Auto-Generated:** Yes ✅