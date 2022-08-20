async function connect() {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return false;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  return accounts[0];
}

export default function Authentication(givenPublicAddress) {
  const account = connect();
  if (account && givenPublicAddress) {
    return account === givenPublicAddress;
  }
  return account;
}
