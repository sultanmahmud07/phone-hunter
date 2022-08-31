const loadPhones = async(searchText) =>{
  const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
}

//  ==========2nd function call===========
const displayPhones = phones =>{
  //********* */ phone show maximum 20 ********
   phones = phones.slice(0, 20);

   
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
      </div>
    </div>
    `;
    phonesContainer.append(phoneDiv);
  })
  
  console.log(phones);
}

document.getElementById('button-addon2').addEventListener('click', function(){
  const inputField =document.getElementById('input-field');
  const searchText =inputField.value;
  loadPhones(searchText)
  console.log(searchText)
})

//============ 1st function call here ============
loadPhones()