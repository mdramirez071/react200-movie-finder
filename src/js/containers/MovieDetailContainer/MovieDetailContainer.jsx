import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getInfo } from  '../MovieSearchContainer/searchActions';

export default class MovieDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInfo(this.props.match.params.id));
  }

  render() {
    const { movieInfo } = this.props;

    return (
      <div className='content'>
        <div className='container'>
          <div className='jumbotron bg-dark text-white text-center'>
            <h1 className='display-2 text-center font-weight-bold'>Welcome To OMDB Movie Finder</h1>
            <h4 className='text-center font-weight-bold'>OMDB: The All Time Movie Collection</h4>
          </div>

          <div className='card border-0 mb-5'>
            <h1 className='card-header text-white bg-info font-weight-bold font-italic' id='movie-title'>{`${movieInfo.Title} (${movieInfo.Year})`}</h1>
            <div className='card-body'>
              <div className='card-block'>
                <div className='row'>
                  {/* movie poster */}
                  <div className='col-md-6 mb-2'>
                    <img src={`${movieInfo.Poster}`} className='img-fluid text-center mb-2 col-md-12' alt={movieInfo.Title} />
                    
                    <div className='row'>
                      <div className='text-center col-md-12'>
                          {/* movie genre and runtime */}
                          <span className='badge badge-success font-weight-bold mr-1' style={{ fontSize: '15px' }}>{ movieInfo.Genre }</span>
                          <span className='badge badge-info font-weight-bold' style={{ fontSize: '15px' }}>{ movieInfo.Runtime }</span>
                      </div>
                    </div>
                  </div>

                  {/* movie facts */}
                  <div className='col-md-6 mb-2'>
                    <table className='table table-borderless table-responsive mb-3' style={{ borderSpacing: '0' }}>
                      <tbody>
                        {/* plot */}
                        <tr>
                          <th className='border-top-0' style={{ fontSize: '20px' }} id='plot' scope='row'>Synopsis</th>
                          <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>{ movieInfo.Plot }</td>
                        </tr>
                        {/* rated */}
                        <tr>
                          <th className='border-top-0' style={{ fontSize: '20px' }} id='rated' scope='row'>Rated</th>
                          <td className='border-top-0 align-middle'>
                            <span className='badge badge-info font-weight-bold' style={{ fontSize: '23px' }}>{ movieInfo.Rated }</span>
                          </td>
                        </tr>
                        {/* release date */}
                        <tr>
                          <th className='border-top-0' style={{ fontSize: '20px' }} id='date' scope='row'>Release Date</th>
                          <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>{ movieInfo.Released }</td>
                        </tr>
                        {/* actors/cast */}
                        <tr>
                          <th className='border-top-0' style={{ fontSize: '20px' }} id='cast' scope='row'>Cast</th>
                          <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>{ movieInfo.Actors }</td>
                        </tr>
                        {/* director */}
                        <tr>
                          <th className='border-top-0' style={{ fontSize: '20px' }} id='director' scope='row'>Directed By</th>
                          <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>{ movieInfo.Director }</td>
                        </tr>
                        {/* language */}
                        <tr>
                          <th className='border-top-0' style={{ fontSize: '20px' }} id='language' scope='row'>Language</th>
                          <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>{ movieInfo.Language }</td>
                        </tr>
                        {/* metascore */}
                        <tr>
                          <th className='border-top-0' style={{ fontSize: '20px' }} id='metascore' scope='row'>Metascore</th>
                          <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>
                            <span className='badge badge-info font-weight-bold' style={{ fontSize: '23px' }}>{ movieInfo.Metascore } / 100</span>
                          </td>
                        </tr>
                        {/* imdb rating */}
                        <tr>
                          <th className='border-top-0' style={{ fontSize: '20px' }} id='imdbRating' scope='row'>IMDB Rating</th>
                          <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>
                            <span className='badge badge-info font-weight-bold' style={{ fontSize: '23px' }}>{ movieInfo.imdbRating } / 10</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Link to='/' className='btn btn-success mb-4' id='link'>Return to Search</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}