const accessKey = "QdWPTTGxJkd3SGTY7LzzMlaYMfNIYLcmCcutUzypj7M";


const searchForm = document.getElementById("form");
const searchBox = document.getElementById("search-box");
const searchReasult = document.getElementById("search-reasult");
const showMoreButton = document.getElementById("show");

let keyword = "";
let page = 1;

async function search() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const reasult = data.reasult;

    reasult.map((reasult) => {
        const img = document.createElement("img");
        img.src = reasult.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href = reasult.links.html;
        imgLink.target = "_blank";

        imgLink.appendChild(img);
        searchReasult.appendChild(imgLink);
    })

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    search();
})