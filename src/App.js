import "./assets/styles/index.css";
import { RouterProvider } from "react-router-dom";

// context
import SnackbarContextProvider from "././components/store/SnackbarContext";

import { routes } from "./routes/routes";

function App() {
  return (
    <SnackbarContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </SnackbarContextProvider>
  );
}

export default App;
