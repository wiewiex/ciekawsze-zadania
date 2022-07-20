const liElements = document.querySelectorAll("li");
const previewIframe = document.querySelector("iframe");

const showPreview = (e) => {
    e.preventDefault();
    previewIframe.setAttribute("src", e.target.children[0].href);
    console.log(e.target.children[0].href);
}


liElements.forEach(el => {
    el.addEventListener('click', showPreview);
})