const apikey="cbc0a4434e3efa79b2d15f145eea4919";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox =document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");




async function checkweather(city) {
    const Response= await fetch(apiurl +city+ `&appid=${apikey}`);
    var data =await Response.json();
    if(Response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
        
        if(data.weather[0].main=="Clouds"){
            weathericon.src="images/clouds.png";
    
        }
        else if(data.weather[0].main=="rain") {
            weathericon.src="images/rain.png";
    
        }
        else if(data.weather[0].main=="clear") {
            weathericon.src="images/clear.png";
        }
        else if(data.weather[0].main=="snow") {
            weathericon.src="images/snow.png";
        }
        else if(data.weather[0].main=="mist") {
            weathericon.src="images/mist.png";
        }
        else if(data.weather[0].main=="drizzle") {
            weathericon.src="images/drizzle.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    
   
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value) 
})  
