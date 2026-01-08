const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function exportPDF() {
    console.log('Starting PDF export...');

    // Launch browser (use Microsoft Edge on macOS)
    const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Get the absolute path to the HTML file
        const htmlPath = path.join(__dirname, 'index.html');
        const htmlUrl = `file://${htmlPath}`;

        console.log(`Loading HTML from: ${htmlPath}`);

        // Load the HTML file
        await page.goto(htmlUrl, {
            waitUntil: 'networkidle0'
        });

        // Define output path
        const outputPath = path.join(__dirname, 'cv-output.pdf');

        // Generate PDF with A4 format
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        });

        console.log(`✓ PDF successfully exported to: ${outputPath}`);
        console.log(`File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);

    } catch (error) {
        console.error('Error during PDF export:', error);
        throw error;
    } finally {
        await browser.close();
    }
}

// Run the export
exportPDF()
    .then(() => {
        console.log('Export completed successfully!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Export failed:', error);
        process.exit(1);
    });
