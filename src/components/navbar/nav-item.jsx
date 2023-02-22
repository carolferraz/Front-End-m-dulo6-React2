import { Text } from "../../ui/text";
import { Avatar } from "../avatar/avatar";
import { Icon } from "../icon";
import * as S from "./styled";

export const NavItem = (props) => {
  return (
    <S.Navitem gap="5px" onClick={props.onClick}>
      {props.icon && (
        <Icon name={props.icon} label={props.text} size="24px" color="#fff" />
      )}

        {props.image && <Avatar size="12px" src={props.src}></Avatar>}

      <S.NavText>
        <Text size="16px">{props.text}</Text>
      </S.NavText>
    </S.Navitem>
  );
};
