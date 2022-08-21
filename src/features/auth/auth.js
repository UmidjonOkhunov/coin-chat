async function connect() {
  if (!window.keplr) {
    alert("Pls install keplr extension and register your wallet!");
    return false;
  }

  const chainId = "cosmoshub-4";
  await window.keplr.enable(chainId);
  const offlineSigner = window.keplr.getOfflineSigner(chainId);
  const accounts = await offlineSigner.getAccounts();  
  return accounts[0].address;
}

export default function Authentication(givenPublicAddress) {
  const account = connect();
  if (account && givenPublicAddress) {
    return account === givenPublicAddress;
  }
  return account;
}
