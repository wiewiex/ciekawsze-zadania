const liElements = document.querySelectorAll("li");
const previewIframe = document.querySelector("iframe");

const showPreview = (e) => {

    if (e.target.children[0].href) {
        
        if (previewIframe.src) {
            previewIframe.src =  e.target.children[0].href;      
        }

        else {
            previewIframe.setAttribute("src", e.target.children[0].href);
        }
        }
}

const hidePreview = (e) => {

    if (previewIframe.src) {
        previewIframe.removeAttribute("src");      
    }
}

liElements.forEach(el => {
    el.addEventListener('mouseenter', showPreview);
    el.addEventListener('mouseleave', hidePreview);
})