import { CircularProgress } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import { useEffect, useState } from "react";
import api from "../../services/index";
import GroupCard from "../GroupCard";
import { CardFlex, CardSolo, H1Styled, HeaderStyled, Main } from "./styled";

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
    // }, 50000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const { name, description, category, users, goals, activities } = group;

  return (
    <Main>
      {loading ? (
        <CircularProgress color="primary" size={70} />
      ) : (
        <>
          <HeaderStyled>
            {/* <figure> */}
            <div
              style={{
                backgroundColor: "white",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            {/* </figure> */}
            <H1Styled>{name}</H1Styled>
            <h3>{description}</h3>
            <h3>
              Categoria: <span>{category}</span>
            </h3>
          </HeaderStyled>
          <GroupCard users={users} />
          <CardFlex>
            <GroupCard goals={goals} />
            <GroupCard activities={activities} />
          </CardFlex>
        </>
      )}
    </Main>
  );
};

export default GroupContainer;
