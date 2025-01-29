import html2canvas from 'html2canvas';

export function saveCanvasAsImage() {
    const divToSave = document.getElementById('canvas');

    html2canvas(divToSave).then(canvas => {
        // Convert canvas to data URL
        const dataURL = canvas.toDataURL('image/png');

        // Create a link element and trigger a download
        const link = document.createElement('a');
        link.download = 'canvas.png'; // Specify filename for the downloaded image
        link.href = dataURL;
        link.click();
    });
}