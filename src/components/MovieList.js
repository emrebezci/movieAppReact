import React from 'react';


const MovieList = (props) => {
     // HER OBJECT İÇİN MAP FONKSİYONUYLA DÖNEREK CARD YAPIYORUZ
        return (
            <div className="row">
                
                {props.movies.map((movie) =>
                    <div className="col-sm-4" key={movie.id}>
                        <div className="card mb-3 shadow-sm">
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="card-img-top" alt="examplemg" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="f-flex justify-content-between align-items-center">
                                    <button type="button" className="btn btn-md btn-outline-danger" onClick={(event) => props.deleteMovieP(movie)}>Remove</button>
                                    <h2><span className="badge badge-info bg-primary">{movie.vote_average}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }


export default MovieList;