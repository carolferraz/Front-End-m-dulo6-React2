import { Feed } from "../../feed"

export const TabContent = ( props ) => {
    return (
        <>
        {props.currentTab === "feed" && <Feed />}
        </>
    )
}