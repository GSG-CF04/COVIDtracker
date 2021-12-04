/* Definition of API */
const api ="https://api.ipgeolocation.io/ipgeo?apiKey=cf2be30a619a447897245a7857d48018"; // API location
const api2 ="https://api.covid19api.com/countries"; // API countries
/* Definition of DOM TREE */ 
const countries= document.querySelector("#countries"); //The input of data list
/* Get data from API */
async function getData(){
let data, data2;
    try{ const response = await fetch(api);// Get data from API location
        data = await response.json();
    }catch (error) {
    data = { country_name:"Palestinian Territory"}//handels an error and fixes the data to Palestine
    }
    try {
        const response2 = await fetch(api2); // Get data from API country   
        data2 = await response2.json(); 
        printData(data,data2);  // Call printData function
    } catch (error) {
        alert("ERROR: NO DATA")
        console.warn("Stupid network Error");
    }
}
/* print data from API to input field and list */
function printData(data,data2){
countries.value = data.country_name; //Add current user country in input field relates to IP location
/* PRINT DATALIST*/
countries.innerHTML =`<datalist  id="country"><option value="${data.country_name}">${data.country_name}</option>${data2.map( countriess => `<option vlaue="${countriess.ISO2}">${countriess.Country}</option>`)}</datalist>`
}
getData();// Call getData function
