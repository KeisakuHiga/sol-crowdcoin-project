import React, { Component }from 'react';
import factory from '../ethereum/factory';
import { Card } from 'semantic-ui-react';

class CampaignIndex extends Component {
  state = {  }

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns }; // this object will be set as the props of this class
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>view campaign</a>,
        fluid: true // this allows cards to stretch
      };
    });

    return <Card.Group items={items} />;
  }
  
  render() { 
    return (
      <div>{this.renderCampaigns()}</div>
    );
  }
}

export default CampaignIndex;