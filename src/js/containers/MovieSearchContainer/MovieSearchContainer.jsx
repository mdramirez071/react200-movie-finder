import React, { Component } from 'react';
import { updateSearchInput, getMovie } from './searchActions';
import { Link } from 'react-router-dom';

export default class MovieSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearchInput(value));
  }
  
  handleSearch() {
    const { title, dispatch } = this.props;
    dispatch(getMovie(title));
  }

  render() {
    const { value, movies } = this.props;

    return (
      <div className='content'>
        <div className='container mb-5'>
          <div className='jumbotron bg-dark text-white text-center'>
            <h1 className='display-2 text-center font-weight-bold' id='app'>Welcome To OMDB Movie Finder</h1>
            <h3 className='text-center font-weight-bold font-italic'>OMDB: The All Time Movie Collection</h3>
          </div>

          <div className='input-group mb-4' id='searchBar'>
            <input type='text' className='form-control' id='searchInput' value={ value } onChange={ this.handleSearchInput } placeholder='Enter Movie Name' aria-label='Movie Search' aria-describedby='basic-addon2'/>
            <div className='input-group-append'>
              <button className='btn btn-success' id='searchButton' type='button' onClick={ this.handleSearch }>Search Movie</button>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='d-flex justify-content-center' style={{ display: 'flex', flexWrap: 'wrap' }}> {
                movies.slice(0, 9).map((movie, i) => {
                  return (
                    <div className='card border-0' style={{ margin: '10px' }} key={ i }>
                      {/* movie title and release date */}
                      <h1 className='card-header text-white text-center bg-info font-weight-bold font-italic' style={{ fontSize: '30px', width: '20rem' }}>{`${movie.Title} (${movie.Year})`}</h1>
                      {/* movie facts */}
                      <div className='card-body mb-1 pb-1' style={{ width: '20rem' }}>
                        <img src={ `${movie.Poster}` } className='img-fluid' alt={ movie.Title } />
                      </div>
                      {/* more information button */}
                      <div className='text-center mb-3'>
                        <Link to={ `/movie/${movie.imdbID}` } className='btn btn-danger' id='link'>Movie Information</Link>
                      </div>
                    </div>
                  )}
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}