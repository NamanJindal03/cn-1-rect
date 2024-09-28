/* or I can create the data here and pass on further */
import { useState } from "react"
import MovieCard from "./MovieCard"
import './style.css'
// create a array based state = [], having three values in it
//the three values can be altered with three increment buttons and three decrement buttons
export default function MovieList({movies}){
    const [starRating, setStarRating] = useState([0, 0, 0]);
    //if i print starRating over here => [0,0, 0]

    function handleMovieStarRating(){

    }
    return (
        <>
            <section className="movieListContainer">
                {
                    movies.map((movie)=>{
                        return(
                            <MovieCard movie={movie}/>
                        )
                    })
                }
            </section>
            <section>
                <h3>Change star rating</h3>
                <h4>Rating of 1st Movie</h4>
                    <button onClick={()=> handleMovieStarRating}>inc1</button>
                    <button onClick={()=> handleMovieStarRating}>dec1</button>
                <h4>Rating of 2nd Movie</h4>
                    <button onClick={()=> handleMovieStarRating}>inc2</button>
                    <button onClick={()=> handleMovieStarRating}>dec2</button>
                <h4>Rating of 3rd Movie</h4>
                    <button onClick={()=> handleMovieStarRating}>inc2</button>
                    <button onClick={()=> handleMovieStarRating}>dec2</button>
            </section>
        </>
    )

}