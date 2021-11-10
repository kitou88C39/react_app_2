import { Grid } from "@mui/material";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <Grid container direction="column">
      <Header />
      <div style={{ padding: 30 }}>
        <Content />
      </div>
    </Grid>
  );
}
export default App;
