import { useState, useEffect } from "react";
import { fetcher } from "../../services";
import * as S from "./styled"


export const Feed = (props) =>{

    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        const makeRequestApi = async () => {
         const response = await fetcher('photos')
          setItem(response);
        }
    
        makeRequestApi()
      }, []);


    return (
        <S.FeedWrapper>
            {item.map((item)=>(
                <S.FeedItem key={item.id}>
                    <S.FeedPhoto src={item.urls.small}/>
                </S.FeedItem>
                ))}
                
        </S.FeedWrapper>
    )
}