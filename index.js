let add_home = document.getElementById("counter_home")
let add_guest = document.getElementById("counter_guest")
let new_game = document.getElementById("newgame")
let home_counter = 0
let guest_counter = 0


// home addition
function add1_home() {
    home_counter += 1
    add_home.textContent = home_counter
}

function add2_home() {
    home_counter += 2
    add_home.textContent = home_counter
}

function add3_home() {
    home_counter += 3
    add_home.textContent = home_counter
}


// guest addition
function add1_guest() {
    guest_counter += 1
    add_guest.textContent = guest_counter
}

function add2_guest() {
    guest_counter += 2
    add_guest.textContent = guest_counter
}

function add3_guest() {
    guest_counter += 3
    add_guest.textContent = guest_counter
}


function resetCounter() {
    add_guest.textContent = 0
    add_home.textContent = 0

}






