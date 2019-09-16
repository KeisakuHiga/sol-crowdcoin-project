import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import CampaignInstance from '../../ethereum/campaign';

class CampaignShow extends Component {
  state = {  }
  static async getInitialProps(props) {
    const campaign = CampaignInstance(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return { 
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      contributorsCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      contributorsCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }
    ];

    return <Card.Group items={items} />
  }

  render() { 
    return (
      <Layout>
        <h3>Campaign Shows</h3>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default CampaignShow;