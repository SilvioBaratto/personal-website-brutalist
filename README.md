# Personal Website - Neo-Brutalist

A modern personal portfolio website built with Angular 20 and Tailwind CSS, featuring a bold Neo-Brutalist design aesthetic.

## Features

- **About** - Personal introduction and background
- **Side Projects** - Showcase of technical projects and work
- **AI Chat** - Interactive chatbot powered by BAML and OpenAI
- **Curriculum** - Professional CV with PDF export functionality
- **Contact** - Contact form and information

## Tech Stack

- **Framework**: Angular 20
- **Styling**: Tailwind CSS 4
- **AI Integration**: BAML + OpenAI API
- **Deployment**: Vercel
- **PDF Export**: Puppeteer (for CV)

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── side-projects/
│   │   │   ├── chatbot/
│   │   │   ├── curriculum/
│   │   │   └── contact/
│   │   └── shared/
│   └── assets/
├── api/                  # Vercel serverless functions
├── curriculum/           # Standalone CV HTML for PDF export
└── public/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:SilvioBaratto/personal-website-brutalist.git

# Navigate to project directory
cd personal-website-brutalist

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Configure the following variables:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### Development

```bash
# Start development server
npm start

# Build for production
npm run build
```

The app will be available at `http://localhost:4200`

## CV PDF Export

The `curriculum/` directory contains a standalone HTML version of the CV optimized for PDF export.

```bash
# Navigate to curriculum directory
cd curriculum

# Install dependencies
npm install

# Export to PDF
npm run export
```

This generates `cv-output.pdf` with A4 format and print-optimized styling.

## Deployment

The project is configured for deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Design System

This website follows Neo-Brutalist design principles:

- **Colors**: High saturation, vibrant palette
- **Borders**: Thick black strokes (4px)
- **Shadows**: Hard drop shadows (X=4, Y=4, no blur)
- **Typography**: Bold sans-serif fonts (Inter, JetBrains Mono)
- **No gradients**: Flat, solid colors only

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Purple | `#9723C9` | Primary accent |
| Golden | `#F4D738` | Highlights |
| Coral Red | `#FF6B6B` | Alerts, emphasis |
| Green | `#7FBC8C` | Success states |
| Black | `#111111` | Text, borders |

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

**Silvio Angelo Baratto**

- Website: [silviobaratto.com](https://silviobaratto.com)
- GitHub: [@SilvioBaratto](https://github.com/SilvioBaratto)
- LinkedIn: [silvioangelobarattoroldan](https://www.linkedin.com/in/silvioangelobarattoroldan)
