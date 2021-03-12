import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import api from "../../services/index";
import GroupCard from "../GroupCard";
import { CardFlex, CardSolo, H1Styled, HeaderStyled } from "./styled";

const GroupContainer = () => {
  const id = localStorage.getItem("id") || "";

  const token = localStorage.getItem("token") || "";

  const [user, setUser] = useState({});
  const [group, setGroup] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/users/${id}/`, {
        Headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data))
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    api
      .get(`/groups/${user.group}/`)
      .then((response) => {
        setGroup(response.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
    // }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const { name, description, category, users, goals, activities } = group;

  return (
    <>
      {loading ? (
        <CircularProgress color="primary" size={70} />
      ) : (
        <>
          <HeaderStyled>
            <figure></figure>
            <H1Styled>{name}</H1Styled>
            <h3>{description}</h3>
            <h3>
              Categoria: <span>{category}</span>
            </h3>
          </HeaderStyled>
          <CardSolo>
            <GroupCard list={users} />
          </CardSolo>
          <CardFlex>
            <CardSolo>
              <GroupCard list={goals} />
            </CardSolo>
            <CardSolo>
              <GroupCard list={activities} />
            </CardSolo>
          </CardFlex>
        </>
      )}
    </>
  );
};

export default GroupContainer;
