import { InjectedConnector } from "@web3-react/injected-connector";
import "./App.css";
import { useWeb3React } from "@web3-react/core";
import { Fragment, useEffect, useState } from "react";
import { app } from "./firebase";
import { collection, getFirestore, addDoc, getDocs } from "firebase/firestore";

const connector = new InjectedConnector({
  supportedChainIds: [1, 5],
});
function App() {
  const { account, activate } = useWeb3React();
  const [isAdded, setAdded] = useState(false);
  const handleConnect = () => {
    if (window.ethereum) {
      activate(connector);
    }
  };

  const handleRegister = async () => {
    const db = getFirestore(app);
    await addDoc(collection(db, "wallets"), { address: account });
    setAdded(true);
  };
  useEffect(() => {
    const get = async () => {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "wallets"));
      querySnapshot.forEach((doc) => {
        if(doc.data().address === account){
          setAdded(true);
        }
      });
    };
    if(account){
      get();
    }
  }, [account]);
  return (
    <div>
      <div className="app">
        <div className="banner">
          <h1>The Bored Lion Apes Raffle</h1>
          {!account && (
            <Fragment>
              <p className="text">Please Connect</p>
              <button onClick={handleConnect} className="btn">
                Connect
              </button>
            </Fragment>
          )}
          {account && (
            <Fragment>
              <h4>{`Wallet address: ${account}`}</h4>
              {!isAdded ? (
                <button onClick={handleRegister} className="btn">
                  Register to Raffle
                </button>
              ) : (
                <span>Your wallet is registered to Raffle!</span>
              )}
            </Fragment>
          )}
        </div>
        <p>
          Please make sure you are connected to the right network (Ethereum
          Mainnet).
        </p>
      </div>
    </div>
  );
}

export default App;
