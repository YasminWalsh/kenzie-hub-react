import { Redirect, useHistory } from "react-router-dom";
import { Container, Content } from "./style";

function PageInitial({ authenticated }) {
  const history = useHistory();

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <Content>
        <h1>KenzieHub</h1>
        <button onClick={() => history.push("/login")}>Iniciar</button>
      </Content>
    </Container>
  );
}

export default PageInitial;
