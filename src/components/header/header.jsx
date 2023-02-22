import { Avatar } from "../avatar/avatar";
import { Button } from "../../ui/button/button";
import { Text } from "../../ui/text";
import { Icon } from "../icon/index";
import { TextLink } from "../../ui/text/Text";
import * as S from "./styled";

export const Header = (props) => {
  return (
    <S.HeaderWrapper>
      <S.AvatarWrapper>
        <Avatar src="https://via.placeholder.com/150" />
      </S.AvatarWrapper>

      <S.FollowArea>
        <S.Data gap="5px" justifyContent="flex-start">
          <S.Data>
            <Text margin="0 10px 0" bold size="20px">
              @adatechbr
            </Text>
          </S.Data>
          {/* <Button maxWidth="100px">
            <S.Data marginBottom="none" gap="5px">
              <Text color="#000">Seguindo</Text>
              <Icon name="arrowDown" size="14px" color="#000" />
            </S.Data>
          </Button> */}
          <Button maxWidth="100px">
            <Text color="#000">Editar perfil</Text>
          </Button>
          
          
            <Icon name="options" size="24px" color="#fff" />

        </S.Data>

        <S.Data justifyContent="flex-start">
          <Text>211 publicações</Text>
          <Text>44,2 mil seguidores</Text>
          <Text>2 seguindo</Text>
        </S.Data>

        <S.ProfileText>
          <Text bold size="12px">
            Ada Tech
          </Text>
          <Text color="#898989" size="12px">
            Educação
          </Text>
          <Text size="12px">Ada. A nova Educação.</Text>
          <TextLink bold href="http://beacons.ai/adatechbr">
            beacons.ai/adatechbr
          </TextLink>
        </S.ProfileText>

        <S.Data gap="5px" justifyContent="flex-start">
          <Text color="#898989" size="12px">
            Seguido(a) por{" "}
          </Text>
          <Text size="12px"> machado_bru, cariosilva__, fellipearb </Text>
          <Text color="#898989" size="12px">
            e outras 2 pessoas
          </Text>
        </S.Data>
      </S.FollowArea>
    </S.HeaderWrapper>
  );
};
