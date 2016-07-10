import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';

class ConfirmBattleContainer extends React.Component {
  constructor() {
    super();
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  handleInitiateBattle(){
    this.context.router.push({
      pathname: '/results',
      state:{
        playersInfo: this.state.playersInfo
      }
    });
  }

  async componentDidMount() {
    try {
      const { query } = this.props.location;
      const players = await getPlayersInfo([query.playerOne, query.playerTwo]);
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      });
    } catch (error) {
      console.warn('Error in componentDidMount', error);
    }
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;