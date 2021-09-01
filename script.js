const container = document.querySelector('.container')// will select just one node element
const seats = document.querySelectorAll('.row .seat:not(.occupied)') //will select multiple nodes and arrange them in an array. you can then use array methods on them
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;


// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setsItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
} 

// Movie select event
movieSelect.addEventListener('change',(e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})


// Seat click event 
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')

        updateSelectedCount();
    }
})