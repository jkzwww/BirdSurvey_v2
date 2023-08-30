
// import 'unfetch/polyfill';

var participant_ID = 0
const startBtn = document.querySelector("#goBtn");
startBtn.addEventListener("click",genID);


// Generate unique id for record
function zeroPad(number, length) {
    return (number < 10 ? '0' : '') + number;
}

function genID()
{
    const currentTime = new Date();
    const hours = zeroPad(currentTime.getHours(), 2);
    const minutes = zeroPad(currentTime.getMinutes(), 2);
    const seconds = zeroPad(currentTime.getSeconds(), 2);
    
//     var uniqueId = `${hours}${minutes}${seconds}`;
//     participant_ID = uniqueId
    participant_ID  = hours + minutes + seconds
}


var participant_resp = false
function recordReact(reaction)
{
    participant_resp = reaction
}


var birbNames = ["magpie","lorikeet","cockatoo","miner","galah","wattlebird","honeyeater","currawong"]
var birbSeen = []   // checkboxes of birds checked
var birbIdx = []    // indices of birds submitted
var birbTime = [] // timing of birds seen

const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click",recordBird);


const birbCheck = document.getElementsByName('birdSeen');
for(var i=0; i<birbCheck.length; i++)
{
    birbCheck[i].addEventListener('change',checkBird);
}


// To toggle confirm button based on valid selection
function checkBird()
{
    birbSeen = document.querySelectorAll('input[name=birdSeen]:checked');
    if(birbSeen.length > 0)
    {
        confirmBtn.classList.remove("disabled");
    }
    else
    {
        confirmBtn.classList.add("disabled");
    }
}


// To record the indices of birds selected
function recordBird()
{  
    if(birbSeen)
    {
        for(var i=0; i<birbSeen.length; i++)
        {
            birbIdx.push(parseInt(birbSeen[i].value));
        }
        console.log(birbIdx);
        showBird()
    } 
    // push to csv file or database   
}


// To reset the selection of birds
function resetBird()
{
    confirmBtn.classList.add("disabled");
    // confirmBtn.disabled = "disabled";
    participant_resp = false
    birbIdx = [];
    birbTime = [];
    for(var i=0; i<birbCheck.length; i++)
    {
        birbCheck[i].checked = false;
    }

    confirmBtn.disabled = true;
    var birdListDiv = document.getElementById('birdList');
    birdListDiv.innerHTML = ''
}


// Show the birds chosen and ask for timing
function showBird()
{
    
    var birdListDiv = document.getElementById('birdList');

    var options = [
        "This week",
        "This month",
        "Last 3 months",
        "Last 6 months",
        "Last 12 months",
        "A year and above"
    ];

    for (var i = 0; i < birbIdx.length; i++) {
        var selectElement = document.createElement("select"); 
        selectElement.id = "popupSelect_" + i; 
    
        for (var j = 0; j < options.length; j++) {
            var option = document.createElement("option");
            option.value = "t_" + j;
            option.textContent = options[j];
            selectElement.appendChild(option);
        }
    
        var paragraphElement = document.createElement("p"); 
        paragraphElement.textContent = birbNames[birbIdx[i]] + "    :   ";
    
        // Append both the <p> and <select> elements to the container
        birdListDiv.appendChild(paragraphElement);
        paragraphElement.appendChild(selectElement);
    }
    
}

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click",recordTiming);
submitBtn.addEventListener("click",postData);
submitBtn.addEventListener("click",tellBird);


// Record the timing of birds sighted
function recordTiming(){

    for(var i=0; i<birbIdx.length; i++)
    {
        timeBoxId = "popupSelect_" + i; 
        var timeBoxVal = document.getElementById(timeBoxId).value;
        birbTime.push(timeBoxVal)
    }

}


const bird_data_names = ["Australian Magpie","Rainbow Lorikeet","Sulphur-crested Cockatoo","Noisy Miner"
,"Galah","Red Wattlebird","White-plumed Honeywater","Pied Currawong"];

const bird_data_facts1 = ["can sing complex tunes and mimic human speech!","are super playful and loves acrobatics and games!","exhibits high intelligence and imitates various sounds!","communicates through a range of loud calls and songs!",
"are known for intelligence, mimicking human speech and sounds!","are melodious vocalists,producing complex and diverse calls!","have a distinctive white streak on their wings.","immitates other birds'call and urban sounds with precision!"];

const bird_data_facts2 = ["will dive-bomb you to guard their nests!","feed on nectar,pollen and fruits majorly instead of worms!","can live up to 70 years and form livelong bonds!","aggresively attack other birds to defend territory!",
"perform sky-pointing displays during courtship rituals!","fiercely protect feeding and nesting areas with aggresive behaviours!","follow flowering patterns and migrate in search of nectar-rich plants!","uses sticks to extract inserts from tree barks!"];


// Tell facts on chosen bird
function tellBird()
{
    chosenBirbIdx = birbIdx[0];
    console.log(birbNames[chosenBirbIdx])
    var birdInfoDiv = document.getElementById('birdInfo');

    var name_str = bird_data_names[chosenBirbIdx] 
    var img_src = "styles/images/" + birbNames[chosenBirbIdx] + ".jpg"
    var fact1_str =  bird_data_facts1[chosenBirbIdx]
    var fact2_str = bird_data_facts2[chosenBirbIdx]
    
    info_string = ""
    info_string += "<img src='" + img_src + "' alt='bird image' height='180'>"
    info_string += "<h2>" + name_str + "</h2>"
    info_string += "<p>" + fact1_str + "</p>"
    info_string += "<p>" + fact2_str + "</p"   

    birdInfoDiv.innerHTML = info_string 
    // birdInfoDiv.innerHTML = `
    //     <img src="${img_src}" alt="bird image" height="180">
    //     <h2>${name_str}</h2>
    //     <p>${fact1_str}</p>
    //     <p>${fact2_str}</p>
    // `;
}


// new post data to pepper local file
function postData()
{
    
    var participantData = [
        participant_ID,
        participant_resp,
        birbIdx,
        birbTime,
        'creditability'
    ];
    
    var data_formatted = participantData.join(",");

    recordData(data_formatted);
}


// old post data to server
// function postData()
// {

    // var serverDebugDiv = document.getElementById('serverDebug');

    // var participantData = {
    //     subject_id: participant_ID,
    //     response: participant_resp,
    //     birds_seen: birbIdx,
    //     birds_timing: birbTime,
    //     strategy: 'creditability'
    // };

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://118.138.50.220:8000/send-birbdata", true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //             var data = JSON.parse(xhr.responseText);
    //             console.log("Server response:", data);
    //             serverDebugDiv.innerHTML = "Server response:" + data
    //         } else {
    //             console.error("Request failed with status:", xhr.status);
    //             serverDebugDiv.innerHTML = "Request failed with status:" + xhr.status
    //         }
    //     }
    // };
    
    // var jsonData = JSON.stringify(participantData);
    // xhr.send(jsonData);

    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://118.138.50.220:8000/test-req", true);

    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //             console.log("Response:", xhr.responseText);
    //         } else {
    //             console.error("Request failed with status:", xhr.status);
    //         }
    //     }
    // };

    // xhr.send();
// }




