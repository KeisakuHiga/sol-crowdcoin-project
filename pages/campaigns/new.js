import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class CampaignNew extends Component {
  state = {  }
  render() { 
    return (
      <Layout>
        <h3>Create a Campaign</h3>

        <Form>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input label="wei" labelPosition="right" />
          </Form.Field>
          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;