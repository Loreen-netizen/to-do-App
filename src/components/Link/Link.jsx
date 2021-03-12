import styled from "styled-components";

const LinkElement = styled.a`
  font-weight: 800;
  padding: 1rem;
  display: inline-block;
  text-transform: uppercase;
  user-select: none;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 1em;
  background: #b4b8c5;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  color: ${(props) => (props.disabled ? "#999" : "#222")};

  &:hover {
    background: ${(props) => (props.disabled ? "#EEE" : "#BBB")};
  }

  &:active {
    background: ${(props) => (props.disabled ? "#EEE" : "#999")};
  }
`;

const Link = (props) => {
  const { children, disabled, url } = props;
  return (
    <LinkElement href={disabled ? undefined : url} disabled={disabled}>
      {children}
    </LinkElement>
  );
};

export default Link;
