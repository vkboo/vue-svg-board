export const svgToBase64 = svgDOM => new Promise(resolve => {
    const svgCon = svgDOM.outerHTML;
    const src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgCon)));
    const img = new Image();
    img.src = src;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        const ImgBase64 = canvas.toDataURL('image/png');
        resolve(ImgBase64);
    };
});
