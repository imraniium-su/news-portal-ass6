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
                <a onclick="showtotalnews('${data.category_id}' ,'${data.category_name}')" class="nav-link "  href="#"><button
                        class=" text-secondary border border-0 bg-0  fs-5 bg-light me-4 p-2">${data.category_name}</button></a>
            </div>

        `;
        newscontioner.appendChild(div);
    });

}
// show details
const showtotalnews = (category_id, catagoriname) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => totaldisplay(data.data, catagoriname))

}
const totaldisplay = (datatotal, catagoriname) => {
    const totalid = document.getElementById('diplay-total-news');
    totalid.innerText = `${datatotal.length} items found for category ${catagoriname}`;
    displayid(datatotal);
}

// news details
const newsdetails = category_id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayid(data.data))

}
const displayid = (news) => {
    console.log(news);
    const newsid = document.getElementById("news-continer");
    newsid.innerHTML = ``;
    for (const single_news of news) {
        const divnews = document.createElement("div");
        divnews.innerHTML = `
      <div class='card mt-3'>
      <div class="row">
                      <div class="col-md-3">
                          <img src="${single_news.thumbnail_url}" class="img-fluid rounded-start h-100" alt="...">
                      </div>
                      <div class="col-md-9 d-flex align-items-center justify-content-center px-5 bg-explore">
  
                          <div class="card-body">
                              <h2 class="card-title">${single_news.title}</h2>
                              <p class="card-text text-short">${single_news.details} </p>
                              <div class="d-flex mt-4 justify-content-around">
                                  <div class="d-flex ">
                                      <div class="me-4">
                                          <img src="${single_news.author.img}" class="rounded-circle imgep" alt="...">
                                      </div>
                                      <div>
                                          <h5>${single_news.author.name}</h5>
                                          <p>${single_news.author.published_date}</p>
                                      </div>
                                  </div>
                                  <div class=" d-flex  d-grid gap-4">
                                  <i class="fa-regular fa-eye pt-2"></i>
                                      <p class="fs-4 fw-bold">${single_news.total_view}</p>
                                  </div>
                                  <div class="me-5">
                                      <div>
                                          <i class="fa-solid fa-star-half-stroke "></i>
                                          <i class="fa-solid fa-star filled "></i>
                                          <i class="fa-solid fa-star filled "></i>
                                          <i class="fa-solid fa-star filled "></i>
                                          <i class="fa-solid fa-star filled "></i>
  
  
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      </div>
      `;
        newsid.appendChild(divnews);
    }
};
loadnews();