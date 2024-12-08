import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Root.module.css";
import WalletContext from "../../context/WalletContext";

const Root = () => {
  return (
    <WalletContext>
      <div className="root">
        <Navbar />
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </WalletContext>
  );
};

export default Root;
