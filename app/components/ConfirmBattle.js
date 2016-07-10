import React from 'react';
import { Link } from 'react-router';
import { transparentBg, space } from '../styles';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';

const ConfirmBattle = (props) => {
  return props.isLoading
        ? <p>LOADING</p>
        : (
          <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
              <UserDetailsWrapper header='Player One'>
                <UserDetails info={props.playersInfo[0]} />
              </UserDetailsWrapper>
              <UserDetailsWrapper header='Player Two'>
                <UserDetails info={props.playersInfo[1]} />
              </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
              <div className='col-sm-12' style={space}>
                <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
              </div>
              <div className='col-sm-12' style={space}>
                <Link to='/playerOne'>
                  <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </Link>
              </div>
            </div>
          </div>
        );
}

ConfirmBattle.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  onInitiateBattle: React.PropTypes.func.isRequired
};

export default ConfirmBattle;