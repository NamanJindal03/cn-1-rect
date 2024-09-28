export default function MovieCard({movie}){
    const {title, description, img, rating} = movie;
    return (
        <div className="movieCard">
            <div className="imgContainer">
                <img src={img} className="img"/>
            </div>
            <div className="movieInfo">
                <div>{title}</div>
                <div>{description}</div>
                <div className="flex flexCenter">
                    <span>Rating: {rating}</span>
                    <div>
                        <button>Save For Later</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}