    const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "name": "minPrice",
                "type": "uint256"
            }
        ],
        "name": "acceptBidForPunk",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "allInitialOwnersAssigned",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "buyPunk",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "enterBidForPunk",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "getPunk",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "name": "minSalePriceInWei",
                "type": "uint256"
            }
        ],
        "name": "offerPunkForSale",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "name": "minSalePriceInWei",
                "type": "uint256"
            },
            {
                "name": "toAddress",
                "type": "address"
            }
        ],
        "name": "offerPunkForSaleToAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "punkNoLongerForSale",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "setInitialOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "addresses",
                "type": "address[]"
            },
            {
                "name": "indices",
                "type": "uint256[]"
            }
        ],
        "name": "setInitialOwners",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "transferPunk",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "withdrawBidForPunk",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "Assign",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "PunkTransfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "minValue",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "toAddress",
                "type": "address"
            }
        ],
        "name": "PunkOffered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "fromAddress",
                "type": "address"
            }
        ],
        "name": "PunkBidEntered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "fromAddress",
                "type": "address"
            }
        ],
        "name": "PunkBidWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "fromAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "toAddress",
                "type": "address"
            }
        ],
        "name": "PunkBought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "punkIndex",
                "type": "uint256"
            }
        ],
        "name": "PunkNoLongerForSale",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "allPunksAssigned",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "claimPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "imageCommit",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "nextPunkIndexToAssign",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "pendingWithdrawals",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "punkBids",
        "outputs": [
            {
                "name": "hasBid",
                "type": "bool"
            },
            {
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "name": "bidder",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "punkIndexToAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "punksOfferedForSale",
        "outputs": [
            {
                "name": "isForSale",
                "type": "bool"
            },
            {
                "name": "punkIndex",
                "type": "uint256"
            },
            {
                "name": "seller",
                "type": "address"
            },
            {
                "name": "minValue",
                "type": "uint256"
            },
            {
                "name": "onlySellTo",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "punksRemainingToAssign",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "standard",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

const address = '0x0c7d60593e1D439663fBfF599c73AFC49a63e655';

async function getCurIndex() {
    web3 = new Web3(web3.currentProvider);

    const contract = new web3.eth.Contract(abi, address);

    var curIndex = await contract.methods.nextPunkIndexToAssign().call();
    curIndex = parseInt(curIndex) + 1;

    return curIndex;
}

function loadPicAtIndex(index) {
    var newUrl = "url('https://github.com/AXO/AXO/blob/main/AXO/AXO-" + index.toString() + ".png?raw=true')"
    console.log(newUrl)

    const totalBits = 2500;

    document.getElementById("number").innerHTML = index;
    document.getElementById("amountLeft").innerHTML = "BITS LEFT: " + (totalBits - index + 1).toString();
    document.getElementById("sprite-image").style.background = newUrl;
    document.getElementById("sprite-image").style.backgroundPositionX = "0px";
    document.getElementById("sprite-image").style.backgroundPositionY = "-76px";
}

async function updatePic() {
    var index = 1;
    const chainId = await ethereum.request({
        method: 'eth_chainId'
    });
    if (chainId == "0x61") {
        index = await getCurIndex();
    }
    loadPicAtIndex(index);
}

async function bitViewer() {
    var inputVal = document.getElementById("input-box").value;
    console.log(inputVal);
    if (inputVal == "") {
        return;
    }
    if (parseInt(inputVal) < 1 || parseInt(inputVal) > 2500) {
        alert("Please input a valid BNB Bits ID!");
        return;
    }
    var newUrl = "url('https://github.com/AXO/AXO/blob/main/AXO/AXO-" + inputVal.toString() + ".png?raw=true')"
    document.getElementById("sprite-image").style.background = newUrl;
    document.getElementById("sprite-image").style.backgroundPositionX = "0px";
    document.getElementById("sprite-image").style.backgroundPositionY = "-76px";
    document.getElementById("bitNo").innerHTML = "BNB Bit " + inputVal.toString();
}

function startProcess() {
    updatePic();
    ETHAppDeploy.loadEthereum();
}

ETHAppDeploy = {
    loadEthereum: async () => {
        if (typeof window.ethereum !== 'undefined') {
            ETHAppDeploy.web3Provider = ethereum;
            const chainId = await ethereum.request({
                method: 'eth_chainId'
            });
            console.log(chainId);
            if (chainId !== '0x38') {
                alert("You are not on the Binance Smart Chain Network, please change Metamask to point to a BSC endpoint");
                return;
            }
            ETHAppDeploy.requestAccount(ethereum);
        } else {
            alert(
                "Not able to locate an Ethereum connection, please install a Metamask wallet"
            );
        }
    },

    requestAccount: async (ethereum) => {
        ethereum
            .request({
                method: 'eth_requestAccounts'
            })
            .then((resp) => {
                console.log(resp[0])
                ETHAppDeploy.payNow(ethereum, resp[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    },

    payNow: async (ethereum, from) => {
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [{
                    from: from,
                    to: address,
                    value: '0x' + ((1 * 1000000000000000000).toString(16)),
                    data: '0xbed2af80',
                }, ],
            })
            .then(async (txHash) => {
                if (txHash) {
                    console.log(txHash);
                    var index = await getCurIndex();
                    loadPicAtIndex(index + 1);
                } else {
                    console.log("Something went wrong. Please try again");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
}
