var cities = [
    "Denver",
    "Boulder",
    "Black Hawk",
    "Aurora"
  ]
  
  for (var i = 0; i < cities.length; i++) {
    // create the <li>
    var liElement = document.createElement("LI")
    // append cities text to <li> element
    var createCitiesText = document.createTextNode(cities[i])
    
    liElement.appendChild(createCitiesText)
    // append li elements as a child of ul element
    document.querySelector("ul.list-cities").appendChild(liElement)
  }