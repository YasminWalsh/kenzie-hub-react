import { Redirect, useHistory } from "react-router-dom";
import { useInput, useForm } from "lx-react-form";
import { Container, Content } from "./style";
import { api, storeData } from "../../services";
import { toast } from "react-toastify";

function Login({ authenticated, setAuthenticated }) {
  const history = useHistory();

  const email = useInput({
    name: "email",
  });

  const password = useInput({
    name: "password",
  });

  const form = useForm({
    clearFields: true,
    formFields: [email, password],
    submitCallback: (formData) => {
      console.log(formData);
      api
        .post("/sessions", formData)
        .then((response) => {
          console.log(response.data);
          storeData(response.data);
          setAuthenticated(true);
          toast.success("Sucesso no login.");
          history.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Erro no login. Email ou senha inválidos.");
        });
    },
  });

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <h2>Kenzie Hub</h2>

        <form onSubmit={form.handleSubmit}>
          <div>
            <p>Login</p>
          </div>

          <div>
            <label>Email</label>
            <input placeholder="Digite seu email" {...email.inputProps}></input>
            {email.error && <p>*{email.error}</p>}

            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...password.inputProps}
            ></input>
            {password.error && <p>*{password.error}</p>}

            <button type="submit">Entrar</button>
          </div>

          <div>
            <p>Ainda não possui uma conta?</p>
            <button onClick={() => history.push("/register")}>
              Cadastre-se
            </button>
          </div>
        </form>
      </Content>
    </Container>
  );
}
export default Login;
