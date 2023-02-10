import { FeedPhoto } from "./styled"

export const Feed = (props) =>{
    return (
        <>
        <FeedItem>
            <FeedPhoto src={props.src}/>
        </FeedItem>
        </>
    )
}