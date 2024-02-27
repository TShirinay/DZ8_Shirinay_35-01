let modal = document.getElementById('myModal')
let confirmPurchase = document.getElementById('btn')

const movies = [
    {title: 'Grown ups', rating: 6, year: 2010, director: 'Denis Dugan'},
    {title: 'We are the Millers', rating: 7, year: 2013, director: 'Rawson M.Thurber'},
    {title: 'Twilight', rating: 8, year: 1990, director: 'Chris Columbus'},
    {title: 'Willy Wonka', rating: 3, year: 2024, director: 'Christopher Nolan'},
]

function formatMovieInfo(movie){
    return `${movie.title} (${movie.year}), directed by ${movie.director}, 
    rating: ${movie.rating}, additional info: ${movie.additionalInfo}`
}

function getMovieDetails(movie) {
    return{
        title: movie.title,
        rating: movie.rating,
        years: movie.years,
        director: movie.director,
        additionalInfo: movie.additionalInfo,
    }
}

const newMoviesArray = movies
    .filter((movie)=> movie.rating >= 6)
    .map(getMovieDetails)
    .sort((a, b) => b.year - a.year)

newMoviesArray.forEach((movie)=>{
    console.log(formatMovieInfo(movie))
})

const table = document.querySelector('table')
movies.forEach(movie => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.rating}</td>
                <td>${movie.year}</td>
                <td>${movie.director}</td>
                <td><button class='buyButton'>Buy</button></td>
            `
    table.appendChild(newRow);
    const buyButton = newRow.querySelector('button')
    table.addEventListener('click', (e) =>{
        if (e.target && e.target.className === 'buyButton') {
            modal.style.display = 'block'
            selectedCell = e.target.parentElement
        }
    })
    buyButton.addEventListener('click', () => {
        modal.style.display='block'
    })
    confirmPurchase.onclick = () => {
        selectedCell.classList.add('background')
        selectedCell.innerHTML = ''
        modal.style.display = 'none'
    }
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'
        }
    }

})

