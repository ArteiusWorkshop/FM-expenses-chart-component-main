import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import styles from "./styles/Balance.module.css";

export const Balance = () => {
  return (
    <Box className={styles.header}>
      <Box className={styles.text}>
        <Typography fontWeight={400} variant="body2">
          My balance
        </Typography>
        <Typography fontWeight={700} variant="h5">
          $921.48
        </Typography>
      </Box>
      <Box className={styles.logo}>
        <Image
          height={48}
          width={72}
          src={"/img/logo.svg"}
          priority={true}
          alt="Logo"
        />
      </Box>
    </Box>
  );
};
