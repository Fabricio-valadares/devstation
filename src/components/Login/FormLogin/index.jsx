import {
  Container,
  FormStyled,
  DivRegister,
  PStyle,
  ButtonStyled,
} from "./styled";
import { FormHelperText, InputBase } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { loginThunk } from "../../../store/modules/dataLogin/thunk";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";

import { toast } from "react-toastify";

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

  toast.success("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  toast.error("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  toast.dark("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  toast.info("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  toast("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  toast.warning("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <Container>
      <FormStyled onSubmit={handleSubmit(dataForm)}>
        <InputBase
          className={classes.root}
          name="username"
          inputRef={register}
          error={!!errors.username}
          placeholder="User"
          variant="outlined"
        />
        <FormHelperText className={classes.error}>
          {errors.username?.message}
        </FormHelperText>
        <InputBase
          className={classes.root}
          name="password"
          type="password"
          inputRef={register}
          error={!!errors.password}
          placeholder="Password"
          variant="outlined"
        />
        <FormHelperText className={classes.error}>
          {errors.password?.message}
        </FormHelperText>
        <ButtonStyled
          size="large"
          type="submit"
          variant="contained"
          color="primary"
        >
          Entrar
        </ButtonStyled>
        <DivRegister>
          <PStyle onClick={() => history.push("/register")}>Registra-se</PStyle>
        </DivRegister>
      </FormStyled>
    </Container>
  );
};

export default FormLogin;
