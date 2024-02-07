import styled from "styled-components";

type PropsType = {
  text: string;
  onClick: () => void;
};
export const Button = (props: PropsType) => {
  const { text, onClick } = props;
  return <SButton onClick={() => onClick()}>{text}</SButton>;
};

const SButton = styled.button`
  background-color: "#fff";
`;
