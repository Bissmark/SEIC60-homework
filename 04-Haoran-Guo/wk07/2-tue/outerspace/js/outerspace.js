// initilaise global variables 
const myCoordinate = {
    lat: 0.0,
    lng: 0.0
}

// eventListener: number of people in the space 
$('.spacemen').on('submit', function(event){
    event.preventDefault();

    // connect to "Number of people in the space" api 
    $.ajax("http://api.open-notify.org/astros.json").done(function(data){
        // create an object to record the ISS and their personnel 
        const record = {}; 
        let spacemenText = '';

        // console.log(data);
        // get the number of people in the space 
        let peopleNo = data.number;

        // get the details of each person in the space 
        const peopleDetails = data.people;
        // console.log(peopleDetails);
        // loop through the array to get the info: craft and personnel 
        for (let i = 0; i < peopleDetails.length; i++) {
            let key = peopleDetails[i].craft 
            let val = peopleDetails[i].name 
            if (record.hasOwnProperty(key)) {
                record[key] += ', ' + val;
            } else {
                record[key] = val;
            }
        }
        
        //create a p tag and pass the text to it
        for (const property in record){
            $('.space').append(`<p>There are ${record[property]} flying in <strong>${property}</strong>. </p><br>`)
        }
    })
})

// eventlisenter: current location of ISS
$('.location').on('submit', function(event){

    event.preventDefault();

    // connect to the "ISS Current Location" api 
    $.ajax(`http://api.open-notify.org/iss-now.json`).done(function(data){
        let latitude = data.iss_position.latitude;
        let longitude = data.iss_position.longitude;
        console.log(latitude, longitude);

        // show the latitude and longitude on the page 
        $('#coord-title').html(`Current Location`)
        $('#coordinates').html(`Latitude: ${latitude} <br> Longitude: ${longitude}`);

        // store the latitude and longitude in the variable myCoordinate
        myCoordinate.lat = parseFloat(latitude)
        myCoordinate.lng = parseFloat(longitude)
        
    })

    // call the google map api 
    window.initMap = initMap
    initMap();   
})




// function to initialize the map
function initMap(){
    console.log(myCoordinate)
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 3,
        center: myCoordinate,
    })

    const marker = new google.maps.Marker({
        position: myCoordinate,
        map: map,
    });
}