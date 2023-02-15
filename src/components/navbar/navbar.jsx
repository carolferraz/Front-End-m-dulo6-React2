import { NavItem } from "./nav-item";
import { Title } from "../title";
import addIcon from "./../../assets/user.png";
import * as S from "./styled"
import { Icon } from "../icon";
import { Button } from "../../ui/button/button";
import { Text } from "../../ui/text";

const itens = [
  {
    page: "Página inicial",
    icon: "",
  },
  {
    page: "Pesquisa",
    icon: "",
  },
  {
    page: "Explorar",
    icon: "",
  },
  {
    page: "Reels",
    icon: "",
  },
  {
    page: "Mensagens",
    icon: "",
  },
  {
    page: "Notificações",
    icon: "",
  },
  {
    page: "Criar",
    icon: "",
  },
  {
    page: "Perfil",
    icon: "",
  },
];

export const Navbar = (props) => {

  const onClickGoToLoginHandler = () => {
    props.onClickGoToLogin("Login");
}

  return (
    <>
      <S.NavbarWrapper>
        <S.Box>
          <S.Box>
            <Title />
          </S.Box>
          <S.Box flex column spaceBetween>
            {itens.map((item, index) => (
              <NavItem key={index} text={item.page} />
            ))}
          </S.Box>
        </S.Box>

        <NavItem text="Mais" />
        <Button background="transparent" onClick={onClickGoToLoginHandler}>
            <Text color="#fff">
              Sair
            </Text>
          </Button>
      </S.NavbarWrapper>
    </>
  );
};
