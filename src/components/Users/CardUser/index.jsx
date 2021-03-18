import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DivCardUser,
  DivDataGroupUser,
  DivUserDataBase,
  DivTitleUser,
  DivTitleGroup,
  InfoIcon,
  MailIcon,
  CloseButton,
  CloseIcon,
  GroupIcon,
  TagIcon,
  DescriptionIcon,
} from "./styled";
import { getOneGroupThunk } from "../../../store/modules/get-one-groups/thunks";

const CardUser = ({ user, close }) => {
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
      <DivTitleUser>Dados do Usuario</DivTitleUser>
      <DivUserDataBase>
        <p>
          <InfoIcon />
          {user.username}
        </p>
        <p>
          <MailIcon />
          {user.email}
        </p>
      </DivUserDataBase>

      {user.group && (
        <>
          <DivTitleGroup>Dados do Grupo</DivTitleGroup>
          <DivDataGroupUser>
            <p>
              <GroupIcon />
              {group.name}
            </p>
            <p>
              <TagIcon />
              {group.category}
            </p>
            <p>
              <DescriptionIcon />
              {group.description}
            </p>
          </DivDataGroupUser>
        </>
      )}
      <CloseButton onClick={close}>
        <CloseIcon />
      </CloseButton>
    </DivCardUser>
  );
};

export default CardUser;
