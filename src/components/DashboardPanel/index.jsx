import { Content } from "./styled";
import Container from "../../components/Container";
import GroupContainer from "../GroupContainer";

const DashboardPanel = () => {
  return (
    <Content>
      <div id="habits-card">
        <Container />
      </div>
      <div id="group-card">
        <Container>
          <GroupContainer />
        </Container>
      </div>
      <div id="activities-card">
        <Container />
      </div>
    </Content>
  );
};

export default DashboardPanel;
