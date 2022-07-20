const liElements = document.querySelectorAll("li");
const previewIframe = document.querySelector("iframe");

const showPreview = (e) => {
    e.preventDefault();
    const currentSrc = e.target.children[0];

    if (previewIframe.src) {
        previewIframe.src =  currentSrc ? currentSrc : currentSrc;
    }

    else {
        previewIframe.setAttribute("src", currentSrc ? currentSrc : currentSrc);
    }
}

liElements.forEach(el => {
    el.addEventListener('click', showPreview);
})