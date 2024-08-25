// Simulate an asynchronous task (e.g., fetching data)
function fetchData(callback) {
    setTimeout(function() {
        console.log("Data fetched");
        // Call the next callback after fetching data
        callback(processData);
    }, 2000);
}

// Simulate another asynchronous task (e.g., processing the fetched data)
function processData(callback) {
    setTimeout(function() {
        console.log("Data processed");
        // Call the final callback after processing data
        callback();
    }, 2000);
}

// The final callback to be executed after everything is done
function finalCallback() {
    console.log("All tasks complete");
}

// Start the asynchronous operations
fetchData(function(nextStep) {
    // Pass processData as a callback
    nextStep(function() {
        // Finally, call the finalCallback
        finalCallback();
    });
});