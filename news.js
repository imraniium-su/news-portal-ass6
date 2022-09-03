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

loadnews();
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
    for (const News of news) {
        const divnews = document.createElement("div");
        divnews.innerHTML = `
      <div class='card mt-3'>
      <div class="row">
                      <div class="col-md-3">
                          <img src="${News.thumbnail_url}" class="img-fluid rounded-start h-100" alt="...">
                      </div>
                      <div class="col-md-9 d-flex align-items-center justify-content-center px-5 bg-explore">
  
                          <div class="card-body">
                              <h2 class="card-title">${News.title}</h2>
                              <p class="card-text text-short">${News.details} </p>
                              <div class="d-flex mt-5 justify-content-around">
                                  <div class="d-flex ">
                                      <div class="me-4">
                                          <img src="${News.author.img}" class="rounded-circle imgep" alt="...">
                                      </div>
                                      <div>
                                          <h5>${News.author.name}</h5>
                                          <p>${News.author.published_date}</p>
                                      </div>
                                  </div>
                                  <div class=" d-flex  d-grid gap-4">
                                  <i class="fa-regular fa-eye pt-2 fs-4"></i>
                                      <p class="fs-4 fw-bold">${News.total_view}</p>
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
                                  <div>
                                  <button onclick="loadnewsDetails('${News._id}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right "></i></button>
                            </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
      </div>
      `;
        newsid.appendChild(divnews);
    }
    togglespiner(false);
};


// spninner add function  
const togglespiner = isloading => {
    const loadeersection = document.getElementById('loader');
    if (isloading) {
        loadeersection.classList.remove('d-none');
    }
    else {
        loadeersection.classList.add('d-none');
    }
}
//  add modal
const loadnewsDetails = _id => {
    const url = `https://openapi.programming-hero.com/api/news/${_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsdetials(data.data[0]))
}
const displayNewsdetials = News => {
    console.log(News);
    const modaltittle = document.getElementById('newsbtnmodal');
    modaltittle.innerText = `${News.title}`;
    const phonedetails = document.getElementById('newS-details');
    phonedetails.innerHTML = `
    <img src="${News.thumbnail_url}" class="img-fluid rounded-start h-100 mb-2" alt="...">
    <p class="card-text text-short">${News.details} </p>
    <div class="d-flex mt-5 justify-content-around">
    <div class="d-flex ">
    <div class="me-4">
        <img src="${News.author.img}" class="rounded-circle imgep" alt="...">
    </div>
    <div>
        <h5>${News.author.name}</h5>
        <p>${News.author.published_date}</p>
    </div>
</div>
<div class=" d-flex  d-grid gap-4">
<i class="fa-regular fa-eye pt-2 fs-4"></i>
    <p class="fs-4 fw-bold">${News.total_view}</p>
</div>
    </div>
    `;

}