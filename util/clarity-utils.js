// src/util/clarity-utils.js

import {
    AnchorMode,
    broadcastTransaction,
    createSmartContractResponse,
    makeContractCall,
    makeContractDeploy,
    standardPrincipalCV,
    StacksTestnet,
    TxBroadcastResultOk,
    TxBroadcastResultRejected,
  } from '@stacks/transactions';
  import { getConnect } from '@stacks/connect';
  
  // Stacks blockchain configuration (use Testnet for development)
  const network = new StacksTestnet();
  
  // Function to deploy a Clarity smart contract
  export const deployContract = async (codeBody, contractName) => {
    const deployTx = makeContractDeploy({
      contractName,
      codeBody,
      senderKey: process.env.STACKS_KEY,
      network,
    });
  
    const result = await broadcastTransaction(deployTx, network);
    if (result && result.hasOwnProperty('contents')) {
      if (result.contents instanceof TxBroadcastResultOk) {
        return createSmartContractResponse(result.contents);
      } else if (result.contents instanceof TxBroadcastResultRejected) {
        throw new Error(`Transaction rejected: ${result.contents.reason}`);
      }
    }
  
    throw new Error('Failed to broadcast transaction');
  };
  
  // Function to call a public function of a Clarity smart contract
  export const callContractFunction = async (contractAddress, contractName, functionName, functionArgs) => {
    const txOptions = {
      contractAddress,
      contractName,
      functionName,
      functionArgs,
      senderKey: process.env.STACKS_KEY,
      network,
      anchorMode: AnchorMode.Any,
    };
  
    const result = await makeContractCall(txOptions);
  
    if (result && result.hasOwnProperty('contents')) {
      if (result.contents instanceof TxBroadcastResultOk) {
        return createSmartContractResponse(result.contents);
      } else if (result.contents instanceof TxBroadcastResultRejected) {
        throw new Error(`Transaction rejected: ${result.contents.reason}`);
      }
    }
  
    throw new Error('Failed to call contract function');
  };
  
  // Function to get the user's Clarity balance
  export const getClarityBalance = async (stxAddress) => {
    const userData = await getConnect().lookupProfile(stxAddress);
  
    if (userData?.profile?.stxAddress === stxAddress) {
      return userData.profile.clarityBalance;
    }
  
    return 0;
  };
  
  // Example usage of the clarity-utils functions
  const exampleUsage = async () => {
    // Deploy a Clarity smart contract
    const deployResult = await deployContract('(define-public (hello-world) "Hello, world!")', 'hello-world');
    console.log('Deploy result:', deployResult);
  
    // Call a public function of the deployed contract
    const callResult = await callContractFunction(
      deployResult.contractAddress,
      'hello-world',
      'hello-world',
      [],
    );
    console.log('Call result:', callResult);
  
    // Get the user's Clarity balance
    const clarityBalance = await getClarityBalance(process.env.STACKS_KEY);
    console.log('Clarity balance:', clarityBalance);
  };
  
  // Uncomment the line below to test the example usage
  // exampleUsage();
  