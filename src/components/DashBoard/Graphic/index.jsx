import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

import { Box } from "./styled";

const Graphic = ({ habits }) => {
  const [habitData, setHabitData] = useState({ datasets: [], labels: [] });

  useEffect(() => {
    if (habits) {
      const labels = habits.map((habit) => habit.title);
      const progress = habits.map((habit) => habit.how_much_achieved);

      const backgroundColors = habits.map(
        (habit) =>
          `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 1)`
      );
      const hoverColors = habits.map(
        (habit) =>
          `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 0.8)`
      );

      const data = {
        labels: labels,
        datasets: [
          {
            data: progress,
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverColors,
          },
        ],
      };

      setHabitData(data);
    }
  }, [habits]);

  return (
    <Box>
      <h2>Seu progresso</h2>
      <Doughnut data={habitData} />
    </Box>
  );
};

export default Graphic;
