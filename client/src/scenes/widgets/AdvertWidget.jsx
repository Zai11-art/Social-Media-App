import React from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <Typography color={dark} variant="h5" fontWeight="500">
        Sponsored
      </Typography>
      <Typography color={medium}>Create Ad</Typography>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Cosmetics</Typography>
        <Typography color={medium}>MikaCosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Make Everything beautiful as it is as they way you like it.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
