import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres, year}){
    return(
        <div className={styles.movie}>
            <img className={styles.img} src={coverImg} alt={title} />
            <h2 className={styles.title}><Link to={`/movie/${id}`}>{title}</Link></h2>
            {/* <p>{summary.length>235 ? `${summary.slice(0)}...` : summary}</p> */}
            {/* <ul>{genres.map((g)=>(<li key={g}>{g}</li>))}</ul> */}
            <p className={styles.year}>{year}</p>
            {genres.map((g)=>(<span className={styles.genres}key={g}>{g} </span>))}
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    // summary : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;