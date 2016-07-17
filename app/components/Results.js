import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { transparentBg, space } from '../styles';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';

const Results = (props) => {
  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Looser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-12' style={space}>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-danger' >Start Over</button>
        </Link>
      </div>
    </div>
  );
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
};

export default Results;