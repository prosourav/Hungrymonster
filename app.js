function toggleButton(){
    const btn  = document.getElementById("btn");
    btn.disabled = false;
 }
const button = document.getElementById("btn").addEventListener("click",()=>{
   const dishName = document.getElementById("add-text").value;
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
       .then(res => res.json())
       .then(data=>{
       displayData(data.meals);
    //    console.log(data.meals);
      
       });
 const displayData = (items) => {
   const dishList = document.getElementById("dish-list");
    items.forEach((dish) => {
    const div = document.createElement("div");
     div.className="dish";
     div.innerHTML = `
         <img src="${dish.strMealThumb}"/>
         <h2>${dish.strMeal}<h2>
        <button onclick="showDetail('${dish.strMeal}')"> Details </button>
        
     `;
     dishList.appendChild(div);
    });

   


 }
 
})
 const showDetail=(name)=>{
     console.log(name);
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  .then(res => res.json())
  .then(data => displayDetail(data.meals[0]));

  const displayDetail=(item)=>{
      console.log(item);
      const sec = document.getElementById("dish-detail");
    // console.log(item.strIngredient1);
    // console.log(item.strIngredient3);
    // console.log(item.strIngredient2);
  const ingredient = `
  <img src="${item.strMealThumb}"/>
 <h2>Ingredients are :<h2>
 <h4>${item.strIngredient1}<h4>
 <h4>${item.strIngredient2}<h4>
 <h4>${item.strIngredient3}<h4>
  `
  const div = document.createElement("div");
  div.className="ingredients";
  div.innerHTML = ingredient;
  sec.appendChild(div);
  }
 }