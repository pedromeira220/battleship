createHTMLTable()


const view = {
    displayMessage: function(message) {
        document.getElementById("messageArea").innerHTML = message;
    },
    displayHit: function(location) {
        document.getElementById(location).setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        document.getElementById(location).setAttribute("class", "miss");
    }
}