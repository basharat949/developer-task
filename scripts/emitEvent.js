
const hre = require('hardhat');

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';


async function main() {

    accounts = await hre.ethers.getSigners();
    owner = accounts[0];

    const Event_Contract = await hre.ethers.getContractFactory('Contract');
    const event_contract = await Event_Contract.connect(owner).deploy();
  
    await event_contract.connect(owner).deployed();
    console.log(event_contract.address)


    const EmitwinnerEvent = await hre.ethers.getContractFactory('EmitwinnerEvent');
    const emitwinnerEvent = await EmitwinnerEvent.deploy();
  
    await emitwinnerEvent.deployed();
    console.log('emitwinnerEvent deployed to', emitwinnerEvent.address);
  const instanceEmitWinnerEvent = await hre.ethers.getContractAt('EmitwinnerEvent', emitwinnerEvent.address);

  const tx = await instanceEmitWinnerEvent.connect(owner).callAttempt(CONTRACT_ADDRESS);
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});