import { Container, Content, Nav, Header, Main } from "./style";
import { api, getData } from "../../services";

import AddTech from "../../components/AddTech";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import CardTech from "../../components/CardTech";
import { toast } from "react-toastify";

function Dashboard({ authenticated, setAuthenticated }) {
  const [open, setOpen] = useState(false);
  const [techs, setTechs] = useState([]);

  useEffect(() => attTechs(), []);

  const removeTech = (id) => {
    api
      .delete(`/users/techs/${id}`)
      .then((response) => {
        console.log(response);
        toast.success("Tecnologia apagada com sucesso!");
        attTechs();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado!");
      });
  };

  const attTechs = () => {
    try {
      api.get(`/users/${getData().user.id}`).then((response) => {
        console.log(response.data);
        setTechs(response.data.techs);
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <Container>
      <Content>
        <Nav>
          <h2>KenzieHub</h2>
          <button
            onClick={() => {
              setAuthenticated(false);
              localStorage.clear();
            }}
          >
            Sair
          </button>
        </Nav>
        <Header>
          <p>Olá, {getData().user.name}</p>
          <span>{getData().user.course_module}</span>
        </Header>
        <Main>
          <div>
            <p>Tecnologias</p>
            <button onClick={() => setOpen(true)}> + </button>
          </div>
          <AddTech
            open={open}
            setClose={() => setOpen(false)}
            attTechs={attTechs}
          />

          <CardTech attTechs={attTechs} techs={techs} removeTech={removeTech} />
        </Main>
      </Content>
    </Container>
  );
}

export default Dashboard;
