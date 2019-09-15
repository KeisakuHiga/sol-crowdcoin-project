import Web3 from 'web3';
require('dotenv').config({path: '../.env'})

// this is trying to access to Metamask


// const getProvider = async () => {
//   await window.web3.currentProvider.enable();
// }
// getProvider();


// 'window' variable is usually defined on browser side
// Next.js uses a server side rendering system(SSR)
// therefor 'window' variable should be defined on
// the server side.
// const web3 = new Web3(window.web3.currentProvider);
// const web3 = new Web3(window.ethereum);

let web3;

// if see 
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/' + process.env.RINKEBY_API
  );
  web3 = new Web3(provider)
}

export default web3;
