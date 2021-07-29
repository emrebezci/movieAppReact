import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
require('dotenv').config()


class App extends React.Component {
    
    state = {
        movies: [],
        SearchF: ""
    }


    async componentDidMount(){
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`) 
        this.setState({movies: response.data.results})
    }
    // en-Us tr-TR


    // FİLM SİLME FONKSİYONU
    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            f => f.id !== movie.id
        );
                this.setState(state => ({movies: newMovieList}))
    }
            // f => f.id == movie.id  tıklanan filmi tek başına ekrana getirir, ! seçilen elemanı kaldırır.

    searchMovie = (event) => {
        // console.log(event.target.value)
        this.setState({SearchF: event.target.value})
    }
    
    

    render(){
// Film filtereyerek değişikliği searchf e yazarak movie ismi ile karşılaştırarak uyuşmayanları göster.
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLocaleLowerCase().indexOf(this.state.SearchF.toLocaleLowerCase()) !== -1
            }
        )

        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchBar searchMovieProp={this.searchMovie}/>  

                    </div>
                </div>
                <MovieList 
                movies={filteredMovies}

                // prop ile deleteMovieP gönderiyoruz movielist.js de propu yakalayarak kullanıyoruz
                deleteMovieP={this.deleteMovie}
                />
            </div>
        )
    }
}


export default App;