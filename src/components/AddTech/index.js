import Modal from "@mui/material/Modal";
import { Box, Form } from "./style";
import { useForm, useInput } from "lx-react-form";
import { api } from "../../services";
import { toast } from "react-toastify";

function AddTech({ open, setClose, attTechs }) {
  const title = useInput({
    name: "title",
  });

  const status = useInput({
    name: "status",
    initialValue: "Iniciante",
  });

  const form = useForm({
    clearFields: true,
    formFields: [title, status],
    submitCallback: (formData) => {
      console.log(formData);
      api
        .post("/users/techs", formData)
        .then((response) => {
          console.log(response.data);

          setClose();
          attTechs();
          toast.success("Tecnologia cadastrada com sucesso.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            "Já existe uma tecnologia com esse nome. Faça uma atualização."
          );
        });
    },
  });
  return (
    <>
      <Modal open={open} onClose={setClose}>
        <Box>
          <div>
            <p>Cadastrar tecnologia</p>
            <button onClick={setClose}>x</button>
          </div>
          <Form onSubmit={form.handleSubmit}>
            <label>Nome</label>
            <input
              placeholder="Nome da tecnologia"
              {...title.inputProps}
            ></input>
            {title.error && <p>*{title.error}</p>}

            <label>Selecionar Status</label>
            <select {...status.inputProps}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            {status.error && <p>*{status.error}</p>}

            <button type="submit">Cadastrar tecnologia</button>
          </Form>
        </Box>
      </Modal>
    </>
  );
}

export default AddTech;
