import React from "react";
import { Layout } from "./features/Layout/Layout";
import { AppRouting } from "./routes/AppRouting";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

function App() {
  return (
    <CustomMuiTheme>
      <AppRouting>
        <Layout />
      </AppRouting>
    </CustomMuiTheme>
  );
}

export default App;
