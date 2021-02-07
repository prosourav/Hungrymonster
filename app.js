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
    //    displayData(data.meals[0].strMeal);
       displayData(data);
       });
 const displayData = (items)=>{
    console.log(items);
    let meals='';
    for (let i = 0; i < items.meals.length; i++) {
       
        meals +=`<h1>${items.meals[i].strMeal}</h1> 
        <img src="" >
        ` ;
       
    }
    console.log(element);
 }
})
 
