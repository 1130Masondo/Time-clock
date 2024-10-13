function updateTime() {

    let parisElement = documentquerySelector("#paris");
    if (parisElement) {
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".Time");
        let parisTime = moment().tz("American/paris");

        parisDateElement.innerHTML = parisTime.formant("MMM DO YYYY");
        parisTimeElement.innerHTML = parisTime.formant("h:mm:ss [<small>]A[<small>]"

        );

    }

}



let pretoriaElement = documentquerySelector("#pretoria");
let pretoriaateElement = pretoriaElement.querySelector(".date");
let parisTimeElement = pretorialement.querySelector(".Time");
let pretoriaTime = moment().tz("africa/johennerburg");

pretoriaDateElement.innerHTML = pretoriaTime.formant("MMM DO YYYY");
pretoriaTimeElement.innerHTML = pretoriaTime.formant("h:mm:ss [<small>]A[<small>]");

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
     <div>
      <h2>${cityTimeZone}</h2>
      <div class="date">${cityTime.formant("MMM DO YYYY")}</div>
        </div>
        <div class="time">${cityTime.formant("h:mm:ss")} <smal>${cityTime.formant("A")}</small> </div>
    </div>
    
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);