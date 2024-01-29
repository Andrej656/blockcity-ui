// Import necessary libraries and dependencies
import { stacksSession, StacksMainnet } from '@stacks/connect';
import { Buffer } from 'buffer';

// Function to initialize a Stacks session
export async function initStacksSession() {
  const appConfig = new StacksMainnet();
  const session = new stacksSession({ appConfig });
  return session;
}

// Function to authenticate with Stacks
export async function authenticate() {
  try {
    const session = await initStacksSession();
    await session.userSession?.isUserSignedIn();
    return session;
  } catch (error) {
    console.error('Error authenticating with Stacks:', error);
    throw error;
  }
}

// Function to sign a message
export async function signMessage(session, message) {
  try {
    const signature = await session.userSession?.signMessage(message);
    return signature;
  } catch (error) {
    console.error('Error signing message:', error);
    throw error;
  }
}

// Function to verify a signature
export async function verifySignature(publicKey, message, signature) {
  try {
    const keyBuffer = Buffer.from(publicKey, 'hex');
    const signatureBuffer = Buffer.from(signature, 'hex');
    const isVerified = await stacksSession.verifySignature(keyBuffer, message, signatureBuffer);
    return isVerified;
  } catch (error) {
    console.error('Error verifying signature:', error);
    throw error;
  }
}

// Other Stacks-related functions can be added as needed
