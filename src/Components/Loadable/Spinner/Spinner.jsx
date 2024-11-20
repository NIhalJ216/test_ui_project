import { Backdrop } from "@mui/material";
import "./Spinner.css";

const Spinner = ({ open = true }) => (
  <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <div className="fallback-spinner">
      <div className="loading component-loader">
        <div className="effect-1 effects" />
        <div className="effect-2 effects" />
        <div className="effect-3 effects" />
      </div>
    </div>
  </Backdrop>
);

export default Spinner;
