import React, { Component }from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

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
      <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
            />
          <h3>Open Campaigns</h3>
          <Button
            content="Create Campaign"
            icon="add circle"
            primary
            floated="right"
            />
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;