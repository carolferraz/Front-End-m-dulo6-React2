import * as S from "./styled"

export const Button = (props) => {
  return (
    <>
      <S.Btn {...props} > 
      {/* O uso do spread operator nesse caso repassa (espalha) todas as propriedades do botão para o componente Button, assim não precisa ser declarada cada propriedade (props) antes de ser usada diretamente no componente. Do contrário, se não for declarado 'onClick={onClick}', por exemplo, o uso do onClick vai falhar onde esse componente for utilizado. Ou ainda em casos que muitas props são necessárias, assim facilita não precisar declarar todas. */}
        {props.children}
      </S.Btn>
    </>
  );
};
