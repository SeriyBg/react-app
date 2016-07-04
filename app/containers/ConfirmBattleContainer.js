import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

class ConfirmBattleContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  componentDidMount() {
    var query = this.props.location.query;
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;