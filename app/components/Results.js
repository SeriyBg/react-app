import React, { PropTypes } from 'react';

const Results = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props, null, ' ')}</pre>
    </div>
  );
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
};

export default Results;