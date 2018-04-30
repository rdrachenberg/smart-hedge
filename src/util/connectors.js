// export let uport = new Connect('TruffleBox')

import { Connect, SimpleSigner } from "uport-connect";

let uport = new Connect("Smart Hedge App", {
  clientId: "2oz49Cu3bnSn61qh3XzJwBV6DSRVJ63Z3Ht",
  network: "rinkeby",
  signer: SimpleSigner("18aae596730351a7e968c58eec5ed3bb318e316f6dc85eb03c3f59319d5a134e")
});
const web3 = uport.getWeb3();
// let MNID = uport.MNID();
export { web3, uport };