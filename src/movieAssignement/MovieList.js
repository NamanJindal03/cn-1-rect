/* or I can create the data here and pass on further */
import { useState } from "react"
import MovieCard from "./MovieCard"
import './style.css'
// create a array based state = [], having three values in it
//the three values can be altered with three increment buttons and three decrement buttons
export default function MovieList({movies}){
    const [starRating, setStarRating] = useState([0, 0, 0]);
    //if i print starRating over here => [0,0, 0]

    function handleMovieStarRating(movieIndex, isIncrement){
        console.log(movieIndex);
        console.log(isIncrement ? "increase by 1": "decrease by 1");
        isIncrement = isIncrement ? 1 : -1;
        let tempStarRating = [...starRating];
        tempStarRating[movieIndex] = tempStarRating[movieIndex] + isIncrement;
        console.log(tempStarRating);
        // starRating[movieIndex] = starRating[movieIndex] + isIncrement
        // console.log(starRating);
        // setStarRating(starRating);
        setStarRating(tempStarRating);
    }
    return (
        <>
            <section className="movieListContainer">
                {
                    movies.map((movie, index)=>{
                        return(
                            <MovieCard movie={movie} starRating={starRating[index]}/>
                        )
                    })
                }
            </section>
            <section>
                <h3>Change star rating</h3>
                <h4>Rating of 1st Movie: {starRating[0]}</h4>
                    <button onClick={()=> handleMovieStarRating(0, true)}>inc1</button>
                    <button onClick={()=> handleMovieStarRating(0, false)}>dec1</button>
                <h4>Rating of 2nd Movie: {starRating[1]}</h4>
                    <button onClick={()=> handleMovieStarRating(1, true)}>inc2</button>
                    <button onClick={()=> handleMovieStarRating(1, false)}>dec2</button>
                <h4>Rating of 3rd Movie: {starRating[2]}</h4>
                    <button onClick={()=> handleMovieStarRating(2, true)}>inc2</button>
                    <button onClick={()=> handleMovieStarRating(2, false)}>dec2</button>
            </section>
        </>
    )

}