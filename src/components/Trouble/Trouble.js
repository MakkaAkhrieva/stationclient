import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../index";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import styles from "./Trouble.module.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ChatIcon from "@mui/icons-material/Chat";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(244, 244, 253)",
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow:
    "rgb(255 255 255 / 70%) -2px -2px 4px, rgb(208 208 230) 2px 2px 4px",
  /* padding: "10px", */
  minWidth: "fit-content",
  marginBottom: "20px",
}));

const Trouble = () => {
  const { store } = useContext(Context);

  const stationid = localStorage.getItem("stationid");

  useEffect(() => {
    store.getStation(stationid);
  }, []);

  return (
    <>
      <p style={{ marginBottom: "20px" }}>
        Have any problem? Tell us about it please
      </p>
      <Item className={styles.item}>
        <p className={styles.p}>Station:</p>
        <TextField
          defaultValue={`${store.station.address}`}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          fullWidth
          disabled={true}
        />
      </Item>
      <Item className={styles.item}>
        <p className={styles.p}>Problem:</p>
        <TextField
          defaultValue={`${store.user.name}`}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          fullWidth
        />
      </Item>
      <Button>report a problem</Button>
      <div style={{ position: "absolute", bottom: 50, right: 100 }}>
        <ChatIcon fontSize="large" sx={{ color: "#0AB28B" }} />
      </div>
    </>
  );
};

export default observer(Trouble);
