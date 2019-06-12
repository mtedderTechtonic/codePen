var cities = [
    "Denver",
    "Boulder",
    "Black Hawk",
    "Aurora"
  ]
  
  // loop through the cities array
  for (var i = 0; i < cities.length; i++) {
    // create the <li> element
    var liElement = document.createElement("LI")
    // create cities text element
    var createCitiesText = document.createTextNode(cities[i])
    // append cities text to <li> element
    liElement.appendChild(createCitiesText)
    // append <li> elements as a child of <ul> element
    document.querySelector("ul.list-cities").appendChild(liElement)
  }