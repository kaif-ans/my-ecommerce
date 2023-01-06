import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export default function OrderPlaced() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="order-placed-box">
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <Box sx={{ m: 1, position: "relative"}}>
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <FormatListBulletedIcon />}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              sx={{
                color: green[500],
                position: "absolute",
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
          >
            {success ? "Order Placed" : "Accept terms & conditions"}
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </Box>
      <div>
        <ul className="ul-order-placed">
          {success ? (
            <li>Your order has been successfully placed.</li>
          ) : (
            <div>
              <li>Your order will be delivered within 3 to 4 working days.</li>
              <li>Once delivered you can return the product within 3 days if there's any fault.</li>
              <li>The amount will be credited to your bank account after 24 hours.</li>
              <li>Payment options include COD & Online transfer.</li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
