import { Button } from "./components/button"
import { Navbar } from "./components/navbar"
import { NavItem } from "./components/nav-item"
import { Title } from "./components/title"
import { Header } from "./components/header"
import { Avatar } from "./components/avatar"
import { Text } from "./components/Text/index"

const itens = [
  "Página inicial", 
  "Pesquisa", 
  "Explorar",
  "Reels",
  "Mensagens", 
  "Notificações", 
  "Criar", 
  "Perfil",
  "Mais",
]

function App() {
  return (
    <>
    <Navbar>
      <Title/>
      {itens.map((item) =>
        <NavItem key={item} text={item}  />
      )}
    </Navbar>

    <Header>
      <Avatar />
      <Text bold={true}>@adatechbr</Text>
      <Button>Seguindo</Button>
      <Button>Enviar mensagem</Button>

    </Header>
    </>
  )
}

export default App
