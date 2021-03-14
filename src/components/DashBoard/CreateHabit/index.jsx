import React from "react";

import {
  Form,
  InputsContainer,
  InputBox,
  IconBox,
  InfoIcon,
  Input,
  TagIcon,
  BarIcon,
  FrequencyIcon,
  FireIcon,
  SaveIcon,
  SaveButton,
} from "./styled";

const CreateHabit = () => {
  return (
    <Form>
      <h1>Adicione um novo hábito</h1>

      <InputsContainer>
        <InputBox>
          <IconBox>
            <InfoIcon />
          </IconBox>
          <Input placeholder="Título do hábito" />
        </InputBox>
        <InputBox>
          <IconBox>
            <TagIcon />
          </IconBox>
          <Input placeholder="Categoria do hábito" />
        </InputBox>
        <InputBox>
          <IconBox>
            <BarIcon />
          </IconBox>
          <Input placeholder="Dificuldade do hábito" />
        </InputBox>
        <InputBox>
          <IconBox>
            <FrequencyIcon />
          </IconBox>
          <Input placeholder="Frequência do hábito" />
        </InputBox>
        <InputBox>
          <IconBox>
            <FireIcon />
          </IconBox>
          <Input placeholder="Quanto já evoluiu?" />
        </InputBox>

        <InputBox>
          <IconBox>
            <SaveIcon />
          </IconBox>
          <SaveButton>Salvar hábito</SaveButton>
        </InputBox>
      </InputsContainer>
    </Form>
  );
};

export default CreateHabit;
