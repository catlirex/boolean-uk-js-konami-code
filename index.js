// Konami code
// Up, Up, Down, Down, Left, Right, Left, Right, B, A

// - Create a section after the logo with the code sequence inside as a reference for the User, You can come up with the style for it.
function addSequenceDisplay(){

let logoImg = document.querySelector(".konami-logo")
let sequenceSection = document.createElement("section")
let h3El = document.createElement("h3")
h3El.innerText = "Konami Code Sequence"

let paraEl = document.createElement("p")
paraEl.innerText = "Up, Up, Down, Down, Left, Right, Left, Right, B, A"

sequenceSection.append(h3El, paraEl)
logoImg.after(sequenceSection)
}

// - Listen for keyboard inputs, and keep track if the user is pressing the keys sequence in the right order. The code should reset if you make a mistake



// - If the User input the right sequence, make the logo spin



// Run the code
addSequenceDisplay()