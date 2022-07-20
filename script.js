const liElements = document.querySelectorAll("li");
const previewIframe = document.querySelector("iframe");

const showPreview = (e) => {
    e.preventDefault();
    const currentSrc = e.target.children[0];

    if (previewIframe.src) {
        currentSrc ? previewIframe.src =  currentSrc : setTimeout(previewIframe.src =  currentSrc, 3000);        
    }

    else {
        currentSrc ? previewIframe.setAttribute("src", currentSrc) : setTimeout(previewIframe.setAttribute("src", currentSrc), 3000);
    }
}

liElements.forEach(el => {
    el.addEventListener('click', showPreview);
})