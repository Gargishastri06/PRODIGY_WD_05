async function getWeather() {
     const apiKey="8050e8a31c7a1b4797dbe9a0a3498891";
     const city=document.getElementById("city").value;
     if(!city){
        alert("please enter a city")
        return;
     }
     const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try{
        const response=await fetch(apiUrl)
        const data=await response.json()
        document.getElementById("temp").innerHTML=`<i class="fa-solid fa-temperature-three-quarters" style="color: #ff4c4c;"></i>Temprature: ${data.main.temp}°C`
        document.getElementById("humidity").innerHTML=`<i class="fa-solid fa-droplet" style="color: #3498db;"></i>Humidity: ${data.main.humidity}%`
        document.getElementById("wind_speed").innerHTML=`🌬️ Wind speed: ${data.wind.speed} km/h`
        document.getElementById("forecast").innerHTML=`<i class="fa-solid fa-cloud-sun" style="color: #f1c40f;"></i> forecast: ${data.weather[0].main}`
        document.getElementById("main").style.display = "flex";

    }
    catch (error) {
        console.error("Error fetching weather:", error);
    }



}