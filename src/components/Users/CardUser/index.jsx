import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DivCardUser,
  DivDataGroupUser,
  DivUserDataBase,
  DivTitleUser,
  DivTitleGroup,
} from "./styled";
import { getOneGroupThunk } from "../../../store/modules/get-one-groups/thunks";

const CardUser = ({ user }) => {
  const dispatch = useDispatch();
  let group = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(
      getOneGroupThunk(`https://kabit-api.herokuapp.com/groups/${user.group}/`)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DivCardUser>
      <DivUserDataBase>
        <DivTitleUser>Dados do Usuario</DivTitleUser>
        <p>
          <span style={{ fontWeight: 600, marginRight: "2px", lineHeight: 2 }}>
            Nome do usuário:
          </span>{" "}
          {user.username} - {user.id}
        </p>
        <p>
          <span style={{ fontWeight: "600", lineHeight: 2 }}>Email: </span>{" "}
          {user.email}
        </p>
      </DivUserDataBase>

      {user.group && (
        <>
          <DivTitleGroup>Dados do Grupo</DivTitleGroup>
          <DivDataGroupUser>
            <p>
              <span style={{ fontWeight: "600" }}>Name: </span> {group.name}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Categoria: </span>
              {group.category}
            </p>
          </DivDataGroupUser>

          <p>
            <span style={{ fontWeight: "600" }}>Descrição: </span>
            {group.description}
          </p>
        </>
      )}
    </DivCardUser>
  );
};

export default CardUser;
