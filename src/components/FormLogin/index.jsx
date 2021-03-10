import { Container, FormStyled } from "./styled";
import { Button, TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { loginThunk } from "../../store/modules/dataLogin/thunk";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";

const FormLogin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string("Somente texto").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
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
          className={"MuiFormControl-root"}
          name="username"
          inputRef={register}
          error={!!errors.username}
          helperText={errors.username?.message}
          placeholder="User"
          variant="outlined"
        />
        <TextField
          className={"MuiFormControl-root MuiFormHelperText-root"}
          name="password"
          type="password"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
          placeholder="Password"
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
