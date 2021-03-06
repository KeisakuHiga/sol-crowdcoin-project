import Web3 from 'web3';

let web3;

// const getProvider = async () => {
//   await window.web3.currentProvider.enable(); // request authentication
// };
// getProvider();
  
  
  // if see 
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
  } else {
    // we are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/38d8affd8ee14505a8485d2725bcd6df'
      );
      web3 = new Web3(provider)
}

export default web3;
