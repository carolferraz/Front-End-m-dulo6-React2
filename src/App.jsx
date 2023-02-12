import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { Grid, GridItem } from "./ui/grid/index";
import { Highlight } from "./components/highlights/highlight";
import { Feed } from "./components/feed/feed";


function App() {
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlight />
        <Feed/>
      </GridItem>
    </Grid>
  );
}

export default App;
