import Modal from "@mui/material/Modal";
import { Box, Form } from "./style";
import { useForm, useInput } from "lx-react-form";
import { api } from "../../services";
import { toast } from "react-toastify";

function UpdateTech({ open, setClose, attTechs, item }) {
  const title = useInput({
    name: "title",
    initialValue: item.title,
  });

  const status = useInput({
    name: "status",
    initialValue: item.status,
  });

  const form = useForm({
    clearFields: true,
    formFields: [status],
    submitCallback: (formData) => {
      console.log(formData);
      api
        .put(`/users/techs/${item.id}`, formData)
        .then((response) => {
          console.log(response);
          setClose();
          attTechs();
          toast.success("Tecnologia atualizade com sucesso!");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Ops, algo deu errado!");
        });
    },
  });
  return (
    <>
      <Modal open={open} onClose={setClose}>
        <Box>
          <div>
            <p>Detalhes da tecnologia</p>
            <button onClick={setClose}>x</button>
          </div>
          <Form onSubmit={form.handleSubmit}>
            <label>Nome</label>
            <input
              placeholder="Nome da tecnologia"
              {...title.inputProps}
              disabled
            ></input>

            <label>Selecionar Status</label>
            <select {...status.inputProps}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            {status.error && <p>*{status.error}</p>}

            <button type="submit">Salvar alterações</button>
          </Form>
        </Box>
      </Modal>
    </>
  );
}

export default UpdateTech;
