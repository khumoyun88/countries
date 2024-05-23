import { showSpinner } from "./utils.js";

// IIFE
(async function () {
    const countries = await fetchCounties(); // array

    renderCountries(countries); 
})();



async function fetchCounties() {
    showSpinner(true, document.body.querySelector('.header'))

    

    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        // console.log(countries[0].name);
        return countries 
        
    } catch (error) {
      console.error(error);
    } finally {
      showSpinner(false, document.body.querySelector('.header'))
      console.log("still working");
    }
}



function renderCountries(countries){
    const container = document.createElement("div")
    container.className = "container"
    document.body.append(container)
    

    countries.forEach(function(country){

        const img = document.createElement("img");
        img.src = country.flags.png;
        container.append(img);

        const name = document.createElement("h2");
        name.textContent = country.name.common;
        container.append(name);

        const capital = document.createElement("h3");
        capital.textContent = country.capital;
        container.append(capital);

    });

}



