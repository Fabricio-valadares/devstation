import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import api from "../../../../services/index";
import GroupCardActivities from "../GroupCardActivities";
import GroupCardGoals from "../GroupCardGoals";
import GroupCardUsers from "../GroupCardUsers";
import { CardFlex, H1Styled, HeaderStyled, Main, WhiteBall } from "./styled";

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
            <figure>
              <WhiteBall />
            </figure>
            <H1Styled>{name}</H1Styled>
            <h3>{description}</h3>
            <h3>
              Categoria: <span>{category}</span>
            </h3>
          </HeaderStyled>
          <GroupCardUsers users={users} />
          <CardFlex>
            <GroupCardGoals goals={goals} />
            <GroupCardActivities activities={activities} />
          </CardFlex>
        </>
      )}
    </Main>
  );
};

export default GroupContainer;
