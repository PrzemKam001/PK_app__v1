
import React, { useEffect, useState } from "react";
import useChain from "hooks/useChain";
import { Binance } from "./components";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";

/** TO DO
 * Use only one chain component with providing img links and chain names
 */

function Chains(props) {
  const { switchNetwork } = useChain();
  const { chainId: chain } = useMoralisDapp();
  const [chainId, setChainId] = useState();

  useEffect(() => setChainId(chain), [chain]);

  console.log(chain);

  const styles = {
    chains: {
      padding: "0 7px",
      height: "42px",
      gap: "5px",
      width: "fit-content",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div className="chains" style={styles.chains}>
      {props?.bsc && (
        <Binance onClick={() => switchNetwork("0x38")} activeChain={chainId === "0x38"} />
      )}
    </div>
  );
}

export default Chains;
