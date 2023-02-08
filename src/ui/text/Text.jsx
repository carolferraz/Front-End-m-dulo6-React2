import * as S from "./styles"

export const Text = (props) => {
    return <S.TextWrapper {...props}>{props.children} </S.TextWrapper>
}

//Usando o spred operator {...props} as propriedades que foram definidas no Text, lá no arquivo app.jsx, são incorporadas e passadas todas para o TextWrapper com o styled. 

