import { Text } from "../../ui/text";
import * as S from "./styled"

export const NavItem = (props) => {
    return (
        <S.Navitem>
        <Text>{props.text}</Text>
        </S.Navitem>
    );
};