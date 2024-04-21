function showPopup(type) {
        if (type==="Email"){
            alert("My Email is : BeeHappy@gmail.com");
        } else if (type==="Phone"){
            alert("My Phone is : 5879559685");
        } else if (type==="Address"){
            alert("My Address is : 123 Bakery Street, Cityville");
        }
    }
    function flipCard(card) {
    card.classList.toggle('card-flip');
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

var more = document.getElementById("more");
var moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener('click', ()=>{
  more.style.display='block';
  moreBtn.style.display='none';
})


    // JavaScript for accordion functionality
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

// Fetch weather info
    const apiKey = '0fc0a8002a8e4a26bf2171723242104';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=0fc0a8002a8e4a26bf2171723242104&q=Calgary&aqi=no`;
    
    async function fetchWeather() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const temp = `${data.current.temp_c}°C`;
            const location = `${data.location.name}`;
            //const weatherInfo = `${data.current.temp_c}°C, ${data.location.name}`;
            document.querySelector('.weather-info').textContent = "Temperature in " +location+ " now is "+ temp;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            document.querySelector('.weather-info').textContent = 'Weather unavailable';
        }
    }
    
    // Call the function to fetch weather data when the page loads
    fetchWeather();
    