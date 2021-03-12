import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import api from "../../services/index";
import GroupCard from "../GroupCard";
import { CardFlex, CardSolo } from "./styled";

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
    <div>
      {loading ? (
        <CircularProgress color="primary" size={70} />
      ) : (
        <>
          <header>
            <figure></figure>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <h3>
              Categoria: <span>{category}</span>
            </h3>
          </header>
          <CardSolo>
            <GroupCard list={users} />
          </CardSolo>
          <CardFlex>
            <GroupCard list={goals} />
            <GroupCard list={activities} />
          </CardFlex>
        </>
      )}
    </div>
  );
};

export default GroupContainer;
