import React, { Component }from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  state = {  }

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns }; // this object will be set as the props of this class
  }
  
  render() { 
    const { campaigns } = this.props;
    const [first, ...rest] = campaigns
    return (
      <div>{first}</div>
    );
  }
}

export default CampaignIndex;