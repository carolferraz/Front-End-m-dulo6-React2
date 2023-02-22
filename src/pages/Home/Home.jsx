import { Navbar } from "../../components/navbar/index";
import { Header } from "../../components/header/index";
import { Grid, GridItem } from "../../ui/grid/index";
import { Highlight } from "../../components/highlights/index";
import { Feed } from "../../components/feed/index";
import { ContentWrapper } from "./styled";
import { TabControl } from "../../components/tabs/tabControl";
import { useState } from "react";
import { TabContent } from "../../components/tabs/tabContent/tabContent";


function Home(props) {

  const [currentTab, setCurrentTab] = useState("feed");

  return (
    <Grid>
      <GridItem>
        <Navbar onClickGoToLogin={props.onClickGoToLogin} />
      </GridItem>
      <GridItem>
        <ContentWrapper>
          <Header />
          <Highlight />
          <TabControl 
            currentTab={currentTab}
            changeTabTo={setCurrentTab}
          />
          <TabContent currentTab={currentTab} />
        </ContentWrapper>
      </GridItem>
    </Grid>
  );
}

export default Home;
