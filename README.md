# AI Solutions ROI Calculator

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live-222222?style=for-the-badge&logo=github&logoColor=white)](https://qbitloop.github.io/roi-calculator/)
[![License](https://img.shields.io/badge/License-MIT-990F3D?style=for-the-badge)](LICENSE)

Interactive calculator for estimating cost savings from Voice AI and Intelligent Automation deployments in public safety agencies.

## Live Demo

**[View Live Demo](https://qbitloop.github.io/roi-calculator/)**

## Features

- **Agency Configuration**: Input officer count and salary parameters
- **9 Use Cases**: Select from validated AI capabilities
  - Voice Database Queries (NCIC, DMV, warrants)
  - Real-Time Transcription
  - AI Policy Lookup (RAG-powered)
  - Real-Time Translation (95+ languages)
  - Automated Report Generation
  - Voice Radio Control
  - Intelligent BOLO Alerts
  - Training Assistant
  - Smart Evidence Tagging
- **ROI Metrics**: Annual savings, time saved, 3-year ROI, payback period
- **Cost Breakdown**: Implementation costs, license fees, net savings
- **Category Analysis**: Efficiency, Safety, Compliance breakdowns

## Technology Stack

- **React 19** + TypeScript
- **Vite** for build tooling
- **CSS Variables** for theming (NVIDIA green accent)
- **GitHub Pages** for hosting

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project uses GitHub Pages with automated deployment via GitHub Actions.

```bash
# Build and deploy manually
npm run build
# Push dist/ folder to gh-pages branch
```

## ROI Calculations

Based on real-world public safety AI deployments:

| Use Case | Savings/Officer/Year | Time Saved/Year |
|----------|---------------------|-----------------|
| Voice Database Queries | $4,200 | 156 hours |
| Real-Time Transcription | $3,600 | 120 hours |
| AI Policy Lookup | $2,400 | 80 hours |
| Automated Report Generation | $5,400 | 180 hours |

## Author

Built by [QbitLoop](https://github.com/QbitLoop) - Solutions Architect specializing in AI for Public Safety

## License

MIT License
