// from data.js
var tableData = data;


// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);



// function to filter the data
function updateData(filterData){
    // clean data
    tbody.html("")

    //  Refactor to use Arrow Functions!
    
        filterData.forEach((filterData) => {
            var row = tbody.append("tr");
            Object.entries(filterData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    
};






// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);





// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
  
    // Select the input element and get the raw HTML node
    var inputElement = form.select("input");
  
    // Get the value property of the input element
    var userInput = inputElement.property("value");
  
    // Use the form input to filter the data by blood type
    var matchingResults = tableData.filter(view => view.datetime == userInput);

    //print in console the input value and the number of results
   
    console.log(`printing ${userInput},  total results found : ${matchingResults.length}.`);
    
    //  show  the results, 
    updateData(matchingResults);
    

};

// display all the databa before be filter

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// display all the data before the first filter.
updateData(tableData);