setInterval(function() {
    let parisElement = documentquerySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".Time");
    let parisTime = moment().tz("American/paris");

    parisDateElement.innerHTML = parisTime.formant("MMM DO YYYY");
    parisTimeElement.innerHTML = parisTime.formant("h:mm:ss [<small>]A[<small>]"

    );

}, 1000);


let pretoriaElement = documentquerySelector("#pretoria");
let pretoriaateElement = pretoriaElement.querySelector(".date");
let parisTimeElement = pretorialement.querySelector(".Time");
let pretoriaTime = moment().tz("africa/johennerburg");

pretoriaDateElement.innerHTML = pretoriaTime.formant("MMM DO YYYY");
pretoriaTimeElement.innerHTML = pretoriaTime.formant("h:mm:ss [<small>]A[<small>]");