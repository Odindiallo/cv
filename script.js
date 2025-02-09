document.getElementById('downloadPDF').addEventListener('click', function() {
    const element = document.getElementById('cv-content');
    const options = {
        margin: 1,
        filename: 'CV-Ina.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
});
