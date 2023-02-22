import { TabsWrapper } from "./styled";
import { TabItems } from "./tabItem";


export const TabControl = (props) => {
  return (
    <TabsWrapper>
      <TabItems
        isCurrentTab={props.currentTab === "feed"}
        onClick={() => props.changeTabTo("feed")}
        icon="grid"
        text="Feed"

      />

      <TabItems
        isCurrentTab={props.currentTab === "saved"}
        onClick={() => props.changeTabTo("saved")}
        icon="save"
        text="Salvo"
      />

      <TabItems
        isCurrentTab={props.currentTab === "marked"}
        onClick={() => props.changeTabTo("marked")}
        icon="marked"
        text="Marcado"
      />
    </TabsWrapper>
  );
};
