import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAvatar from "../../../assets/avatardefault.svg";
import { DivCardUser, UserAvatar, UserAvatarContainer } from "./styled";
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
      <UserAvatarContainer>
        <UserAvatar src={userAvatar} />
      </UserAvatarContainer>
      <p><b>Id:</b> {user.id}</p>
      <p><b>Nome do usuário:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      {user.group && (
        <>
          <p><b>Grupo:</b> {user.group}</p>
          <p><b>Name:</b> {group.name}</p>
          <p><b>Descrição:</b> {group.description}</p>
          <p><b>Categoria:</b> {group.category}</p>
        </>
      )}
    </DivCardUser>
  );
};

export default CardUser;
