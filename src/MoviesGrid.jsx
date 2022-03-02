import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import movies from "./movies.json";

export function MoviesGrid(){
return (
    <ul className={styles.moviesGrid}>
        { movies.map( (movie) => {
            return <MovieCard key={movie.id} movie={movie}/>
        })}
    </ul>
    );
}