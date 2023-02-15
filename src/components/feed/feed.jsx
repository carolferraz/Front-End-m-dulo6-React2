import { useState, useEffect } from "react";
import { fetcher } from "../../services";
import { Loading } from "../../ui/loading/loading";
import * as S from "./styled"


export const Feed = (props) =>{

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const makeRequestApi = async () => {
            setIsLoading(true)
            const response = await fetcher('photos')
            setTimeout(()=>{
                setIsLoading(false)
                setItems(response);
            }, "2000")
        }
    
        makeRequestApi()
      }, []);


    return (
        <S.FeedWrapper>
            {isLoading && <Loading/>}
            
            {items.map((item)=>(
                <S.FeedItem key={item.id}>
                    <S.FeedPhoto src={item.urls.small}/>
                </S.FeedItem>
                ))}
                
        </S.FeedWrapper>
    )
}