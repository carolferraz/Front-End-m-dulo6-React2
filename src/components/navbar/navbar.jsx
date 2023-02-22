import { NavItem } from "./nav-item";
import { Title } from "../title";
import addIcon from "./../../assets/user.png";
import * as S from "./styled";
import { Icon } from "../icon";
import { Button } from "../../ui/button/button";
import { Text } from "../../ui/text";

const itensNavbar = [
  {
    id: 1,
    page: "Página inicial",
    icon: "home",
  },
  {
    id: 2,
    page: "Pesquisa",
    icon: "search",
  },
  {
    id: 3,
    page: "Explorar",
    icon: "discovery",
  },
  {
    id: 4,
    page: "Reels",
    icon: "reels",
  },
  {
    id: 5,
    page: "Mensagens",
    icon: "direct",
  },
  {
    id: 6,
    page: "Notificações",
    icon: "notifications",
  },
  {
    id: 7,
    page: "Criar",
    icon: "create",
  },
];

export const Navbar = (props) => {
  const onClickGoToLoginHandler = () => {
    props.onClickGoToLogin("Login");
  };

  return (
    <>
      <S.NavbarWrapper>
        <S.Box>
          <S.BoxTitle>
            <Title height="30px"/>
          </S.BoxTitle>

          <S.Box>
            {itensNavbar.map((item) => (
              <NavItem 
              key={item.page} 
              text={item.page} 
              icon={item.icon} />
            ))}

            <NavItem text="Perfil" src=""/>
          </S.Box>
        </S.Box>

        <S.Box>
          <NavItem text="Mais" icon="more"/>
          <NavItem text="Sair"  icon="close" size="60px" onClick={onClickGoToLoginHandler} />
        </S.Box>
      </S.NavbarWrapper>
    </>
  );
};
