import { NavItem } from "./nav-item";
import { Title } from "../title";
import * as S from "./styled"

const itens = [
  "Página inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
];

export const Navbar = (props) => {
  return (
    <>
      <S.NavbarWrapper>
        <S.Box>
          <S.Box>
            <Title />
          </S.Box>
          <S.Box flex column spaceBetween>
            {itens.map((item) => (
              <NavItem key={item} text={item} />
            ))}
          </S.Box>
        </S.Box>
        <NavItem text="Mais" />
      </S.NavbarWrapper>
    </>
  );
};
