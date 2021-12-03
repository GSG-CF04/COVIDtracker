/* Definition of API */
const api ="https://api.ipgeolocation.io/ipgeo?apiKey=cf2be30a619a447897245a7857d48018"; // API location
/* Definition of DOM TREE */ 
const countries= document.querySelector("#countries"); //The input of data list
/* Get data from API */
async function getData(){
var data;
    try{ const response = await fetch(api);// Get data from API location
        data = await response.json();
        printData(data);  // Call printData function
    }catch (error) {
        alert("ERROR: NO DATA")
        console.warn("Stupid network Error");
    }
}
/* print data from API to input field and list */
function printData(data){
countries.value = data.country_name; //Add current user country in input field relates to IP location
}
getData();// Call getData function
