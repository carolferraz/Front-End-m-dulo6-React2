import { Title } from "../../components/title";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import { Text, TextLink } from "../../ui/text";
import ImageLogin from "./../../assets/phones-loginPage.png";
import ImgGetAppGooGlePlay from "./../../assets/getAppOnGooglePlay.png";
import ImgGetAppMicrosoft from "./../../assets/getAppOnMicrosoft.png"

import * as S from "./styled.js";
import { useState } from "react";

function Login(props) {

  const onClickHomeHandler = () => {
    props.onClickGoToHome("Home");
  };

  const [userCode, setUserCode] = useState("");
  const [password, setPassword] = useState("");


  return (
    <S.PageLoginWrapper>

      <S.BoxWrapper alignItems="flex-end">
        <S.ImgPageLogin 
        src={ImageLogin} 
        width={"400px"} />
      </S.BoxWrapper>


      <S.BoxWrapper alignItems="flex-start" maxHeight="500px">

        <S.FormBox>
          <S.LogoWrapper>
            <Title height="51" />
          </S.LogoWrapper>

          <S.FormWrapper>
            <Input 
            placeholder="Telefone, nome de usuário ou email"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            ></Input>
            <Input 
            placeholder="Senha" 
            hide
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </S.FormWrapper>

          <Button 
          background={"#0095f6"} 
          color={"#fff"}
          width={"268px"} 
          height="32px" 
          margin={"0 0 10px"} 
          hoverBackground="#1877F2"
          onClick={onClickHomeHandler}
          >Entrar</Button>

          <TextLink size="11px" 
          hoverTextDecoration="none"
          >Esqueceu a senha?</TextLink>
        </S.FormBox>

        <S.SignUpBox>
          <Text 
          size="12px" 
          margin="0 3px 0 0"
          >Não tem uma conta?</Text>
          <TextLink 
          size="12px" 
          hoverTextDecoration="none" 
          bold 
          color="#0095f6"
          >Cadastre-se</TextLink>
        </S.SignUpBox>

        <S.GetApp>
          <Text size="12px" 
          margin="0 3px 0 0"
          >Obtenha o aplicativo.</Text>
          <S.ImgAppWrapper>
            <Button background="transparent">
                <S.ImgApp 
                src={ImgGetAppGooGlePlay} 
                height="40px"></S.ImgApp>
            </Button>
            <Button background="transparent">
              <S.ImgApp 
              src={ImgGetAppMicrosoft} 
              height="40px"></S.ImgApp>
            </Button>
          </S.ImgAppWrapper>
        </S.GetApp>

      </S.BoxWrapper>
    </S.PageLoginWrapper>
  );
}

export default Login;
