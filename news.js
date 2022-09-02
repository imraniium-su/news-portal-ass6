const loadnews = () => {
    const url = ` https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displaynews(data.data.news_category))
}
const displaynews = datas => {
    const newscontioner = document.getElementById('display-news');
    datas.forEach(data => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
                <a class="nav-link "  href="#"><button
                        class=" text-secondary border border-0 bg-0  fs-5 bg-light me-4 p-2">${data.category_name}</button></a>
            </div>

        `;
        newscontioner.appendChild(div);
    });

}
loadnews();