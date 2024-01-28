
//fetch API

var ourMeals = [];

var x = new XMLHttpRequest;
x.open("GET","https://www.themealdb.com/api/json/v1/1/categories.php");
x.send();
x.addEventListener("readystatechange",function(){
    if (x.readyState == 4 && x.status == 200)
    {
           ourMeals = JSON.parse(x.response)
           
       
     
    }
    
})


function meals()
{
    for(var i = 0 ; i < ourMeals.length ; i++)
    {
        console.log(ourMeals.length)
    }
}









