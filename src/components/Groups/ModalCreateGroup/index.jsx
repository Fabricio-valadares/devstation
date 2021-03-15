import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { DivButtonAdd } from "./styled";

import api from "../../../services";
import { FormHelperText, InputBase, Button } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "33vh",
    left: "35vw",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalCreateGroup() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = JSON.parse(localStorage.getItem("token"));

  const subscribeInGroup = () => {};

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const dataForm = (data) => {
    reset();

    api
      .post(`/groups/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));

    console.log(data);
  };

  return (
    <div>
      <DivButtonAdd type="button" id="buttonAdd" onClick={handleOpen}>
        +
      </DivButtonAdd>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <form onSubmit={handleSubmit(dataForm)}>
            <InputBase
              name="name"
              inputRef={register}
              error={!!errors.username}
              placeholder="Title"
              variant="outlined"
            />
            <FormHelperText>{errors.name?.message}</FormHelperText>
            <InputBase
              name="description"
              inputRef={register}
              error={!!errors.description}
              placeholder="Descrição"
              variant="outlined"
            />
            <FormHelperText>{errors.description?.message}</FormHelperText>
            <InputBase
              name="category"
              inputRef={register}
              error={!!errors.category}
              placeholder="Categoria"
              variant="outlined"
            />
            <FormHelperText>{errors.category?.message}</FormHelperText>
            <Button type="submit">Criar</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

//   return (
//     <>

//     </>
//   );
// };

// export default ModalCreateGroup;
