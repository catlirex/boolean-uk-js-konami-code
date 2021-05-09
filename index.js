
// - Create a section after the logo with the code sequence inside as a reference for the User, You can come up with the style for it.
function addSequenceDisplay(sequence){

    let logoImg = document.querySelector(".konami-logo")
    let sequenceSection = document.createElement("section")
    sequenceSection.setAttribute("style","text-align: center;")

    let h3El = document.createElement("h3")
    h3El.innerText = sequence.name
    h3El.setAttribute("style","display: inline-block; padding:10px;")

    let paraEl = document.createElement("p")
    paraEl.innerText = sequence.sequenceOrder.join(" > ")

    let playBtn = document.createElement("button")
    playBtn.innerText = "Play"
    playBtn.setAttribute("style","width:100px; height:30px; display:inline-box")

    playBtn.addEventListener("click",function(){
        let allSections = document.querySelectorAll("section")
        
        for (section of allSections){
            section.setAttribute("style",`text-align: center; background-color: none; padding:20px`)
        }

        sequenceSection.setAttribute("style", `text-align: center; background-color: black; padding:20px`)
        playSelectedSequence(sequence)
    })

    sequenceSection.append(h3El, playBtn, paraEl)
    logoImg.after(sequenceSection)
}

function playSelectedSequence(sequence){
    playSequence = sequence;
    document.body.removeEventListener("keydown", trackListener)

    document.body.addEventListener("keydown",  trackListener)
    console.log("Sequence:",sequence)
}

function trackListener (event){
    key = event.key
    trackUserInput(playSequence)
}


function trackUserInput(sequence){
   playSequence = sequence

    let bodyEl = document.body

    if (sequence.sequenceOrder[numOfRightInput].toLowerCase() === key.toLowerCase()){
        numOfRightInput++

        bodyEl.setAttribute("style", `background-color: ${getRandomColor()};`)
        
        if(numOfRightInput === sequence.sequenceOrder.length){
            spinLogo();
            numOfRightInput = 0
            inputSequence.length = 0
        }
    }
    else{
        numOfRightInput = 0
        inputSequence.length = 0
        bodyEl.setAttribute("style", `background-color: white;`)
    }
    
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


// - If the User input the right sequence, make the logo spin
function spinLogo(){
    let logo = document.querySelector(".konami-logo")

    imageCurrentPosition += 360

    logo.setAttribute( "style", `transform: rotate(${imageCurrentPosition}deg)`)
    
}


// Run the code

let numOfRightInput = 0
let imageCurrentPosition = 0
let playSequence = []
const inputSequence = []

const KonamiSequence = {
    name: "Konami Sequence",
    sequenceOrder : ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
}

const CoolSequence = {
    name: "Cool Sequence",
    sequenceOrder : ["C","O","O","L","ArrowUp", "ArrowDown","ArrowUp", "ArrowDown","L","O","O","C"]
}

addSequenceDisplay(KonamiSequence)
addSequenceDisplay(CoolSequence)



