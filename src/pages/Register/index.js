import { Redirect, useHistory } from "react-router-dom";
import { useInput, useForm } from "lx-react-form";
import { Container, Content } from "./style";
import api from "../../services/api.js";
import { toast } from "react-toastify";

function Register({ authenticated }) {
  const history = useHistory();

  const name = useInput({
    name: "name",
    customValidation: {
      regex: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      error: "Seu deve conter somente letras",
    },
  });

  const email = useInput({
    name: "email",
    validation: "email",
  });

  const password = useInput({
    name: "password",
    customValidation: {
      regex: /^(.{6,})$/,
      error: "A senha deve ter no mínimo 6 caracteres",
    },
  });

  const passwordConfirm = useInput({
    name: "passwordConfirm",
    same: password.value,
  });

  const bio = useInput({
    name: "bio",
  });

  const contact = useInput({
    name: "contact",
  });

  const course_module = useInput({
    name: "course_module",
  });

  const form = useForm({
    clearFields: true,
    formFields: [
      name,
      email,
      password,
      passwordConfirm,
      bio,
      contact,
      course_module,
    ],
    submitCallback: (formData) => {
      console.log(formData);
      api
        .post("/users", formData)
        .then((response) => {
          console.log(response.data);
          toast.success("Sucesso ao cadastrar usuário.");
          history.push("/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Erro ao criar conta. Email já existe.");
        });
    },
  });

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <Content>
        <div>
          <h2>Kenzie Hub</h2>
          <button onClick={() => history.push("/login")}>Voltar</button>
        </div>

        <form onSubmit={form.handleSubmit}>
          <div>
            <p>Crie sua conta</p>
            <span>Rápido e grátis, vamos nessa</span>
          </div>

          <div>
            <label>Nome</label>
            <input placeholder="Digite seu nome" {...name.inputProps}></input>
            {name.error && <p>*{name.error}</p>}

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

            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...passwordConfirm.inputProps}
            ></input>
            {passwordConfirm.error && <p>*{passwordConfirm.error}</p>}

            <label>Bio</label>
            <input placeholder="Escreva sobre você" {...bio.inputProps}></input>
            {bio.error && <p>*{bio.error}</p>}

            <label>Contato</label>
            <input
              placeholder="Adicione um contato"
              {...contact.inputProps}
            ></input>
            <span>Ex: linkedin, número de telefone...</span>
            {contact.error && <p>*{contact.error}</p>}

            <label>Selecionar módulo</label>
            <select
              placeholder="Selecione um módulo"
              {...course_module.inputProps}
            >
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend Avançado)</option>
            </select>
            {course_module.error && <p>*{course_module.error}</p>}

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}

export default Register;
