import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../../store/modules/get-users/thunks";
import userAvatar from "../../../assets/avatardefault.svg";
import { UserAvatar } from "./styled";
import { getOneGroupThunk } from "../../../store/modules/get-one-groups/thunks";

const CardUser = () => {

  const dispatch = useDispatch();
  let user = useSelector((state) => state.users);
  let group = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(getUsersThunk(`https://kabit-api.herokuapp.com/users/${19}/`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getOneGroupThunk(`https://kabit-api.herokuapp.com/groups/${user.group}/`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>ID: {user.id}</p>
      <p>Nome do usuário: {user.username}</p>
      <p>Email: {user.email}</p>
    {user.group && 
    <> 
        <p>Grupo: {user.group}</p>
        <p>Name: {group.name}</p>
        <p>Descrição: {group.description}</p>
        <p>Categoria: {group.category}</p>
    </>
    }
    </div>
  );
};

export default CardUser;
