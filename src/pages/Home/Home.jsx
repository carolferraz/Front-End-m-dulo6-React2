import { Navbar } from "../../components/navbar/index";
import { Header } from "../../components/header/index";
import { Grid, GridItem } from "../../ui/grid/index";
import { Highlight } from "../../components/highlights/index";
import { Feed } from "../../components/feed/index";


function Home(props) {
  return (
    <Grid>
      <GridItem>
        <Navbar onClickGoToLogin={props.onClickGoToLogin}/>
      </GridItem>
      <GridItem>
        <Header/>
        <Highlight />
        <Feed/>
      </GridItem>
    </Grid>
  );
}

export default Home;
