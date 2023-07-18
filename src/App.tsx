import { Box } from "@mui/material";
import Balance from "./components/Balance";
import PurchaseButton from "./components/PurchaseButton";
import AddmoneyButton from "./components/AddmoneyButton";

function App() {
  
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Balance />
        
        <Box>
          <AddmoneyButton />
          <PurchaseButton />
        </Box>
      </Box>
    </>
  );
}

export default App;
