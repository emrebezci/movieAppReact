import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';




class App extends React.Component {
    
    state = {
        movies: [
            {
                "id": 1,
                "name": "Joker",
                "raiting": 5,
                "overwiev": "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı",
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3DeEAwO42j4VmRdI4KSSN1VloM.jpg"
            },
            {
                "id": 2,
                "name": "Testere",
                "raiting": 8,
                "overwiev": "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı",
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oa3vFRANEmx2RtAp0Q3mKxqhTVV.jpg"
            },
            {
                "id": 3,
                "name": "Breach",
                "raiting": 8.3,
                "overwiev": "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı",
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/13B6onhL6FzSN2KaNeQeMML05pS.jpg"
            }
        ],
        SearchF: ""
    }
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
                return movie.name.toLocaleLowerCase().indexOf(this.state.SearchF.toLocaleLowerCase()) !== -1
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