import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersContainer } from "../CardGetUsers/styled";
import { getUsersThunk } from "../../store/modules/get-users/thunks";
import { BiUserPin } from "react-icons/bi";

const CardGetUsers = () => {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState(false);
  const [pg, setPG] = useState(1);
  const api = `https://kabit-api.herokuapp.com/users/?page=${pg}`;
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users);
  console.log(usersList);
  // const nextPg =  JSON.parse(localStorage.getItem('next-page'));
  // const prevPg =  JSON.parse(localStorage.getItem('prev-page'));

  
  useEffect(() => {
    dispatch(getUsersThunk(api));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getUsersThunk(api));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, ]);

  const nextPage = async () => {
    if (pg < 6){
      setPG(pg + 1);
    }
  }

  const previewPage = async () => {
    if (pg > 1){
      setPG(pg - 1);
    }
    
  }

  const handleInput = async (e) => {
    setInput(e.target.value);
    setFiltered(true);
    if (input === "") {
      setFiltered(false);
    }
  };

  console.log(input);

  console.log(api)


  return (
    <>
      <UsersContainer>
      <h2>Users</h2>
      <input placeholder="Buscar" value={input} onChange={handleInput} /> 
       

        <table>
          <thead>
            <tr>
              <th style={{ width: "20%" }}>NOME DO USUÁRIO</th>
              <th style={{ width: "20%" }}>EMAIL</th>
              <th style={{ width: "7%" }}>GRUPO</th>
              <th style={{ width: "7%" }}>USUÁRIO</th>
            </tr>
          </thead>

          {usersList.map((user, index) => {
            return (
              <tbody key={index}>
                <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.group}</td>
                <td>
                  <BiUserPin
                    style={{ cursor: "pointer" }}
                    onClick={() => console.log("Usuário ID:", user.id)}
                  ></BiUserPin>
                </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </UsersContainer>
      <button onClick={previewPage}> &lt;&lt; </button>
      <button onClick={nextPage}> &gt;&gt; </button>
      <h2>Página {pg}</h2>
    </>
  );
};

export default CardGetUsers;
