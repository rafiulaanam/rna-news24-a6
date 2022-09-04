const catagories = () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => dataLoad(data.data.news_category));
};

const dataLoad = (data) => {
  const catUl = document.getElementById("catul");

  data.forEach((catdata) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");

    li.innerHTML = `

    <a onclick="card('${catdata.category_id}')" class="nav-link active mouse" aria-current="page"  >${catdata.category_name}</a>
    
    
    `;
    //  li= li.textContent('')
    catUl.appendChild(li);
  });
};

catagories();

const card = (cat_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${cat_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cardLoad(data.data));
};

const cardLoad = (data) => {
  const cardSec = document.getElementById("cardsec");
  cardSec.textContent = "";
  data.forEach((catdata) => {
    console.log(catdata);
    const cardBody = document.createElement("section");
    cardBody.classList.add("mt-4");
    cardBody.innerHTML = `
        
        <div class=" br p-3 bg-white rounded-3">
                    <div class="d-flex">
                      <div class="w-25">
                        <img src="${catdata.thumbnail_url}"  alt="" />
                      </div>
                      <div class="ps-5 pe-5">
                        <h4 class="fw-bold">
                         ${catdata.title}
                        </h4>
                        <p>
                          
                        ${catdata.details}
                        </p>
            
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="d-flex align-items-center">
                            <div><img src="images/Rectangle 19.png" alt="" /></div>
                            <div class="ms-2">
                              <span>Jane Cooper</span> <br>
                              <span class="date">Jan 10 2022</span>
                            </div>
                          </div>
            
                          <div>
                            <i class="fa-regular fa-eye"></i>
                            <span class="fw-bold">1.5M</span>
                          </div>
            
                          <div>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                          </div>
            
                          <div>
                          
                          
                          
                          <button onclick="newsDetails('${catdata._id}')" class="fa-solid fa-arrow-right fs-4 bg-white border border-white" data-bs-toggle="modal" data-bs-target="#exampleModal"></button></div>
                        </div>
                      </div>
                    </div>
                  </div>
        
        
        
        `;

    cardSec.appendChild(cardBody);

   

  });
  
};



const newsDetails = (news_id) => {
const url = `https://openapi.programming-hero.com/api/news/${news_id}`
fetch(url)
.then(response => response.json())
.then(json => modal(json.data))

}


const modal = (data) =>{
    

const modalTitle = document.getElementById('exampleModalLabel')
const modalBody = document.getElementById('modalbody')
modalBody.textContent = "";
data.forEach(modalData =>{
    // console.log(modalData);
modalTitle.innerText = modalData.author.name

const modalinside = document.createElement('div')
 
modalinside.innerHTML = `


<div>
<h4> ${modalData.title} </h4>

<p>${modalData.details}  </p>


</div>


`
modalBody.appendChild(modalinside)

})






}

