let result = document.getElementById("result");
let search= document.getElementById("btn");
let city=document.getElementById("city");

let key='020d191d43be09bb79c4349744904d41';

let GetW =()=>{
let cityvalue=city.value;
if(cityvalue.length==0){
    result.innerHTML=`<h2>Please Enter a city name <h3>`
}else{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
    fetch(url)
    .then((response)=> response.json())
    .then(data => {
        result.innerHTML= 
        ` 
           <div class="meteo">
                <h1>${cityvalue}</h1>  
                <h2>${data.weather[0].description}</h2>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"></img>
                <h1>${data.main.temp} °C</h1>
                <h3>min : ${data.main.temp_min}</h3>
                <h3>max : ${data.main.temp_max}</h3>
            </div>


        `
    }).catch(()=>{
        result.innerHTML=`<h2>City not found </h2>`
    })
}

   
};

search.addEventListener("click",GetW);