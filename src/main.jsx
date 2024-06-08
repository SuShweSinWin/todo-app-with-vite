import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { ChakraProvider, extendTheme,  } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Josefin Sans', san-serif",
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
);
