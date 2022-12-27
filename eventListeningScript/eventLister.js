const Web3 = require("web3");
const { Event } = require("yaeti");
const contractAbi = '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"Winner","type":"event"},{"inputs":[],"name":"attempt","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
const web3 = new Web3("https://goerli.infura.io/v3/0316f6e21c3a41ea821741e98521f796")

async function eventLister() {
    try {
        const contractAddress = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502'
        const contractInstance = new web3.eth.Contract(JSON.parse(contractAbi), contractAddress)
        let latestBlockNo = await web3.eth.getBlockNumber();
        const events = await contractInstance.getPastEvents('Winner',{
          fromBlock:8208714,
          toBlock: latestBlockNo
        })
        let myArr = []

        for (let i = 0; i < events.length; i++) {
            myArr.push(events[i])
        }
        console.log(myArr)
        } catch (error) {
          console.log('error in event')
          console.log(error)
        }
}
eventLister();