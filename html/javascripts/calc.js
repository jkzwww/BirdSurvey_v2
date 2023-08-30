
// token initialisation & constraint
const MAX_TOKEN = 3;
// var token = 0;

// buttons reference
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const confirmBtn = document.querySelector("#confirmBtn");

// add event listeners
plusBtn.addEventListener("click",addToken);
minusBtn.addEventListener("click",minusToken);
// confirmBtn.addEventListener("click",playPbAnimation);
// disable confirm button
// confirmBtn.disabled = true;


function addToken()
{
    var token = Number(document.getElementById("numToken").innerHTML);

    if(token < MAX_TOKEN)
    {
        token += 1;
        // confirmBtn.disabled = false;
    }

    document.getElementById("numToken").innerHTML = token;
}

function minusToken()
{
    var token = Number(document.getElementById("numToken").innerHTML);

    if(token > 1)
    {
        token -= 1;

        // if(token == 0){confirmBtn.disabled = true;}
    }

    document.getElementById("numToken").innerHTML = token;
}

function resetToken()
{
    var token = Number(document.getElementById("numToken").innerHTML);

    if(token > 1)
    {
        token = 1;
        // confirmBtn.disabled = true;
    }

    document.getElementById("numToken").innerHTML = token;
}


function playPbAnimation()
{
    const bar = document.getElementById("pb");
    // bar.classList.toggle("pbAnimation")
    bar.classList.add("pbAnimation");
}