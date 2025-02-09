document.getElementById('downloadPDF').addEventListener('click', function() {
    // Get the content element
    const element = document.getElementById('cv-content');
    
    // Save current styles
    const originalStyle = element.style.cssText;
    
    // Apply print-specific styles before generating PDF
    element.style.width = '21cm';
    element.style.padding = '2cm';
    element.style.backgroundColor = 'white';
    
    const opt = {
        margin: 0,
        filename: 'cv-ina.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true,
            width: 794, // A4 width in pixels at 96 DPI
            height: 1123 // A4 height in pixels at 96 DPI
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait'
        }
    };

    // Hide download button before generating PDF
    const downloadBtn = document.getElementById('downloadPDF');
    downloadBtn.style.display = 'none';
    
    // Generate PDF
    html2pdf().set(opt).from(element).save()
    .then(function() {
        // Restore original styles
        element.style.cssText = originalStyle;
        // Show download button after PDF is generated
        downloadBtn.style.display = 'block';
    })
    .catch(function(error) {
        console.error('Error generating PDF:', error);
        // Restore original styles
        element.style.cssText = originalStyle;
        // Show download button
        downloadBtn.style.display = 'block';
    });
});
