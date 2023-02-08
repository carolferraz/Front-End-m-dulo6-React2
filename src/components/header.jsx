import styled from "styled-components";
import { Avatar } from "./avatar";
import { Button } from "./button";
import { Text } from "../ui/text";

export const Header = (props) => {
  return (
    <>
      <Avatar />
      <Text bold>@adatechbr</Text>
      <Button>
        <Text>Seguindo</Text>
      </Button>
      <Button>
        <Text>Seguidores</Text>
      </Button> 
      <Text>211 publicações</Text>
      <Text>44,2 mil seguidores</Text>
      <Text>2 seguindo</Text>
    </>
  );
};
