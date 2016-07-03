import React from 'react';

function ConfirmBattle(props){
  return props.isLoading
      ? <p>LOADING !</p>
      : <p>CONFIRM BATTLE</p>;
}

export default ConfirmBattle;