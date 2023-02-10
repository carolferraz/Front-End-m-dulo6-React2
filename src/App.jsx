import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { Grid, GridItem } from "./ui/grid/index";
import { Highlight } from "./components/highlights/highlight";


function App() {
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Feed/>
        <Highlight />
      </GridItem>
    </Grid>
  );
}

export default App;
