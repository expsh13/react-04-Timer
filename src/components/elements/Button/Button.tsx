import styled from "styled-components";

type PropsType = {
  text: string;
  disable: boolean;
  onClick: () => void;
};
export const Button = (props: PropsType) => {
  const { text, disable, onClick } = props;
  return (
    <SButton $isDisable={disable} onClick={() => onClick()} disabled={disable}>
      {text}
    </SButton>
  );
};

const SButton = styled.button<{ $isDisable: boolean }>`
  background: none;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #fff;
  background-color: ${(props) => (props.$isDisable ? "gray" : "blue")};
  &:hover {
    border: none;
  }
  &:focus {
    outline: none;
  }
`;
