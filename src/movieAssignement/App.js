import Navbar from "./Navbar";
import MovieList from "./MovieList";

/* either I can pass the data of the movies from here */
const moviesArray = [
    {
        title: 'Avenger',
        description: 'A C.I.A. Agent steps in to stop a former Special Forces Operative on a for-hire mission that poses a global threat.',
        rating: '5.6',
        img: 'https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg'
    },
    {
        title: 'Jason',
        description: '	Maasja Ooms closely follows Jason as he struggles with the psychological effects of a traumatic childhood, which were only intensified when he was taken into juvenile residential care at the age of 16. During intense therapy sessi...',
        rating: '7.8',
        img: 'https://m.media-amazon.com/images/M/MV5BNjI1ZDU1M2MtNDI3OC00OWYyLWIzMWQtY2UwYjNhYzA3YjA3XkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_SX300.jpg'
    },
    {
        title: 'Disney Gallery: The Mandalorian',
        description: 'A behind the scenes look at the making of the Disney+ series',
        rating: '8.3',
        img: 'https://m.media-amazon.com/images/M/MV5BYjY0YWEzNTMtZjRlZi00MzQ1LThkMTAtMTk4OTE5MWVkYzFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg'
    }
]
export default function App(){
    return(
        <>
            <Navbar title='Movie Website'/>
            <MovieList movies={moviesArray}/>
        </>
    )
}