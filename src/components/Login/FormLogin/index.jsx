import {
  Container,
  FormStyled,
  DivRegister,
  PStyle,
  ButtonStyled,
  RegisterIcon,
  BsCodeStyled,
  TitleStyled,
  ContainerMain,
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
import { useState } from "react";
import { useEffect } from "react";

const FormLogin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const [viewIcon, setViewIcon] = useState(false);

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
    setViewIcon(true);
    reset();
    dispatch(loginThunk(data, history, setError, setValid));
  };

  useEffect(() => {
    setViewIcon(false);
    if (error) {
      toast.error(`😵 Seu login falhou `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(false);
    }
    if (valid) {
      toast.dark(`🚀   Bem vindo `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, valid]);

  return (
    <ContainerMain>
      <TitleStyled>Faça seu login</TitleStyled>

      <Container>
        <FormStyled onSubmit={handleSubmit(dataForm)}>
          <InputBase
            className={classes.root}
            name="username"
            inputRef={register}
            error={!!errors.username}
            placeholder="Usuario"
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
            placeholder="Senha"
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
            {!viewIcon ? "Entrar" : <BsCodeStyled size={27} />}
          </ButtonStyled>
          <DivRegister>
            <RegisterIcon />
            <PStyle onClick={() => history.push("/register")}>
              Não está registrado? Entra aqui!
            </PStyle>
          </DivRegister>
        </FormStyled>
      </Container>
    </ContainerMain>
  );
};

export default FormLogin;
