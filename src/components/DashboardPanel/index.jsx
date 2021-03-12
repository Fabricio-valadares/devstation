import { Content } from "./styled";
import Container from "../../components/Container";

const DashboardPanel = () => {
  return (
    <Content>
      <div id="habits-card">
        <Container />
      </div>
      <div id="group-card">
        <Container />
      </div>
      <div id="activities-card">
        <Container />
      </div>
    </Content>
  );
};

export default DashboardPanel;
