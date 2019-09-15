import Web3 from 'web3';

// this is trying to access to Metamask
const web3 = new Web3(window.web3.currentProvider);

// const getProvider = async () => {
//   await window.web3.currentProvider.enable();
// }
// getProvider();

// const web3 = new Web3(window.ethereum);

export default web3;
