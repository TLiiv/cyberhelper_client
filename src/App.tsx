import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import AppRoutes from "./pages/AppRoutes";

const App: React.FC = () => {
  return (
    <ChakraProvider value={system}>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
};

export default App;
