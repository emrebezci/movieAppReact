import React from 'react';


class SearchBar extends React.Component {
    

    // Form gönderilince sayfa yenilenmesini iptal ediyorum
    handleForm = function (event){
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleForm}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input onChange={this.props.searchMovieProp} type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;