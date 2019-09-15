// getting an instance of web3
import web3 from './web3';

// creating a campaignFactory instance of the contract
// we will make use of this to create a new campaign instance 
import CampaignFactory from './build/CampaignFactory.json';
// the 1st argument: ABI
// the 2nd argument: the contract address which is given when you deploy the contract to the Rinkeby network
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7F0299Dd7E6d741B99D213230469a6C097067Dba'
);

export default instance;