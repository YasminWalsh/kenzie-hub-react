import { Container } from "./style";
import { FiTrash2 } from "react-icons/fi";
import UpdateTech from "../updateTech/index";
import { useState } from "react";

function CardTech({ techs, removeTech, attTechs }) {
  const [open, setOpen] = useState();
  return (
    <Container>
      <ul>
        {techs.length > 0 ? (
          techs.map((item, index) => (
            <li key={index}>
              <p
                onClick={() => {
                  setOpen(item.id);
                  console.log("testes", item);
                }}
              >
                {item.title}
              </p>

              {open === item.id && (
                <UpdateTech
                  removeTech={removeTech}
                  attTechs={attTechs}
                  item={item}
                  open={open}
                  setClose={() => setOpen()}
                />
              )}

              <div>
                <span>{item.status}</span>

                <FiTrash2 onClick={() => removeTech(item.id)} />
              </div>
            </li>
          ))
        ) : (
          <li>
            <p>
              {" "}
              Ainda não possui nenhuma tecnologia. Que tal adicionar alguma?
              Clique no botão + acima.
            </p>
          </li>
        )}
      </ul>
    </Container>
  );
}

export default CardTech;
