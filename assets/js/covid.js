const newInfected = document.getElementById("new_infected");
const totalInfected = document.getElementById("total_infected");
const totalDeths = document.getElementById("total_deaths");
const totalRecovered = document.getElementById("total_recovered");

fetch("https://disease.sh/v3/covid-19/countries/czechia")
  .then((response) => response.json())
  .then(({ cases, recovered, deaths, todayCases }) => {
    newInfected.innerHTML =
      todayCases >= 0 ? todayCases : "Pobieranie danych...";
    totalInfected.innerHTML = cases ? cases : "Pobieranie danych...";
    totalDeths.innerHTML = deaths ? deaths : "Pobieranie danych...";
    totalRecovered.innerHTML = recovered ? recovered : "Pobieranie danych...";
  })
  .catch((error) => console.error(error));
