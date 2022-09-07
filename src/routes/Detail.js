import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    // console.log(id); //아이디가 출력된다.
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]); ////{}인지 []인지?? - 강의에선 []였음.
    const [genres,setGenres] = useState();

    const getMovie = useCallback(async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie); /////movies가 아니라 여기선 movie여야겠지.
        setLoading(false);
        setGenres(json.data.movie.genres);
    }, [id]);

    // const getMovie = async()=>{
    //     const json = await(
    //         await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    //     ).json();
    //     // console.log(json); //영화의 정보들이 출력된다.
    // };
    useEffect(() => {
        getMovie();
    },[getMovie]);
    
    return (
        <div>
        {loading ? (<h1>Loading...</h1>) : (
            <div className={styles.container}>
                <img src={movie.large_cover_image} alt={movie.large_cover_image}></img>
                <div className={styles.txtContaier}>
                    <div><h1 className={styles.title}>{movie.title}</h1></div>
                    <div>Year : {movie.year}</div>
                    <div>Genres : {genres.map((g) => (
                        <span key={g}>{g} </span>
                    ))}</div>
                    <div>Run time : {movie.runtime}분</div>
                    <div>Rating : {movie.rating}</div>
                    <div>Synopsis : {movie.description_full}</div>
                </div>
            </div>)}
        </div>
    );
}

export default Detail;