import React from 'react';

function ConfirmBattle(props){
  return props.isLoading
      ? <p>LOADING !</p>
      : <p>CONFIRM BATTLE: <pre>{JSON.stringify(props, null, ' ')}</pre></p>;
}

export default ConfirmBattle;