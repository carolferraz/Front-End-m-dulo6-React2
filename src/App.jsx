import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header";
import { Grid, GridItem } from "./ui/grid/index"

function App() {
  return (
      <Grid>
        <GridItem>
          <Navbar />
        </GridItem>
        <GridItem>
          <Header />
        </GridItem>
      </Grid>
  );
}

export default App;
