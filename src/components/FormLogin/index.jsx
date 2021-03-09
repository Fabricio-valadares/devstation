import { Container, FormStyled } from "./styled";
import { Button, TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { loginThunk } from "../../store/dataLogin/thunk";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FormLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string("Somente texto").required("Campo obrigatório"),
    password: yup
      .number()
      .typeError("Somente numero")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const dataForm = (data) => {
    reset();
    dispatch(loginThunk(data, history));
  };

  return (
    <Container>
      <FormStyled onSubmit={handleSubmit(dataForm)}>
        <TextField
          name="username"
          inputRef={register}
          error={!!errors.username}
          helperText={errors.username?.message}
          label="User"
          variant="outlined"
        />
        <TextField
          name="password"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
          label="Senha"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Entrar
        </Button>
      </FormStyled>
    </Container>
  );
};

export default FormLogin;
