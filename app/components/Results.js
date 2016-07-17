import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { transparentBg, space } from '../styles';
import MainContainer from './MainContainer';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import Loading from './Loading';

const Tie = () => {
  return (
    <MainContainer>
      <h1>It's a Tie!</h1>
      <StartOver />
    </MainContainer>
  );
};

const StartOver = () => {
  return (
    <div className='col-sm-12' style={space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  );
}

const Results = (props) => {
  if(props.isLoading){
    return <Loading />;
  }
  if(props.scores[0] === props.scores[1]){
    return (
      <Tie />
    );
  }
  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Looser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  );
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
};

export default Results;