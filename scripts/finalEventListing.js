const hre = require('hardhat');

const CONTRACT_ADDRESS = '0x96C580f28594Ae0318f21DfBBa9241Ed25AA7a2C';

const event_contract = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502'

async function main() {
  const AttemptWinner = await hre.ethers.getContractAt(
    'AttemptWinnerCaller',
    CONTRACT_ADDRESS
  );

  const tx = await AttemptWinner.callAttempt(event_contract);
  await tx.wait();
}