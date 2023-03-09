import React from "react";
import styles from "./Logo.module.css";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <EnergySavingsLeafIcon sx={{ color: "#0ab28b" }} />
      <Link className={styles.link} to={"/"}>
        ENERGY APP
      </Link>
    </div>
  );
};
