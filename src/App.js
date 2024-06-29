import "./assets/styles/index.css";
import { RouterProvider } from "react-router-dom";

// context
import SnackbarContextProvider from "././components/store/SnackbarContext";
import TaskDoneContextProvider from "././components/store/TaskDoneContext";

import { routes } from "./routes/routes";

function App() {
  return (
    <TaskDoneContextProvider>
      <SnackbarContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </SnackbarContextProvider>
    </TaskDoneContextProvider>
  );
}

export default App;
