import React from 'react';

class ViewMovieDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>View Movie Detail</h1>

        <p>Viewing movie {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default ViewMovieDetail;