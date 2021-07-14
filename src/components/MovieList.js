import React from 'react';


class MovieList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <div className="card mb-3 shadow-sm">
                        <img src="" className="card-img-top" alt="examplemg" />
                        <div className="card-body">
                            <h5 className="card-title">Example movie</h5>
                            <p className="card-text">Example movie desc</p>
                            <div className="f-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Del</button>
                                <h2><span className="badge badge-info bg-dark">7.5</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieList;