function toggleButton(){
    const btn  = document.getElementById("btn");
    btn.disabled = false;
 }
const button = document.getElementById("btn").addEventListener("click",()=>{
   const dishName = document.getElementById("add-text").value;
       console.log(dishName);
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
       .then(res => res.json())
       .then(data=>{
       displayData(data.meals);
      //  console.log(data.meals);
      
       });
 const displayData = (items) => {
   const dishList = document.getElementById("dish-list");
    items.forEach((dish) => {
    const div = document.createElement("div");
     div.className="dish";
     div.innerHTML = `
         <img src="${dish.strMealThumb}"/>
         <h2>${dish.strMeal}<h2>
         <button>Details</button>
     `;
    });
    
   
   }

})
 
