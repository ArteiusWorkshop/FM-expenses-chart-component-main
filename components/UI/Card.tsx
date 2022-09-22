import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import styles from "./styles/Card.module.css";
import Bars from "./Bar";
export const Card = () => {
  return (
    <Box className={styles.card}>
      <Box textAlign="start">
        <Typography className={styles.title}>Spending - Last 7 days</Typography>
      </Box>
      <Box>
        <Bars />
      </Box>
      <Box>
        <Divider variant="middle" />
      </Box>
      <Box className={styles.footer}>
        <Box className={styles.desc} alignSelf="start">
          <Typography className={styles.muted}>Total this month</Typography>
          <Typography className={styles.price}>$478.33</Typography>
        </Box>
        <Box className={styles.desc2} alignSelf="end">
          <Typography fontWeight={700}>+2.4%</Typography>
          <Typography className={styles.muted}>from last month</Typography>
        </Box>
      </Box>
    </Box>
  );
};
