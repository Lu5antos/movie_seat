const container = document.querySelector('.container')// will select just one node element
const seat = document.querySelectorAll('.row .seat:not(.occupied)') //will select multiple nodes and arrange them in an array. you can then use array methods on them
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

