//     modiul number 34   //
/****************************/
const loadPhones = async(searchText) =>{
  const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
}

//  ==========2nd function call===========
const displayPhones = phones =>{
  //* phone show maximum 20
  const showAll =document.getElementById('show-all');
  if(phones.length > 20){
    phones = phones.slice(0, 20);
    showAll.classList.remove('d-none')

  }
  else{
    showAll.classList.add('d-none')
  }
  // display no phone found 
  const noPhones =document.getElementById('alart-section');
  if(phones.length === 0){
   noPhones.classList.remove('d-none')
  }
  else{
   noPhones.classList.add('d-none')
  };
  
  const phonesContainer =document.getElementById('phones-container');

   phonesContainer.innerText ='';
  // ===========loop throe here =============
  phones.forEach(phone =>{
    const phoneDiv =document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    <div class="card">
      <img class="w-75 m-auto p-5" src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Detales</button>
      </div>
    </div>
    `;
    phonesContainer.append(phoneDiv);
  })
  // stop spenner 
  togglySpenner(false)
  console.log(phones);
}
// search button onclink function =================
document.getElementById('button-addon2').addEventListener('click', function(){
  // loader start 
  togglySpenner(true);
  const inputField =document.getElementById('input-field');
  const searchText =inputField.value;
  loadPhones(searchText)
  console.log(searchText)
})
//  function for loader
const togglySpenner = isLoader =>{
  const loaderSection =document.getElementById('loader');
  if(isLoader){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }
}

// button detaile show ====== modiul 34-6,7=======
const loadPhoneDetails = async id =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayLodeDetails(data.data)
}
const displayLodeDetails = details =>{
  const detailsTitals =document.getElementById('details-titale');
  detailsTitals.innerText =details.name;
  const modalBody =document.getElementById('modal-body');
  modalBody.innerHTML =`
  <p>Publiced:${details.releaseDate ? details.releaseDate : 'No release date found'}</p>
  <p>Storage:${details.mainFeatures.memory}</p>
  `;
  
 
  console.log(details)
}
//============ 1st function call here ============
// loadPhones('phone')





// Get the input field enter press work
var input = document.getElementById("input-field");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button-addon2").click();
  }
});