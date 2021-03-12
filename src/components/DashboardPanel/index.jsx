import { Content, DivH1 } from "./styled";
import Container from "../../components/Container";
import GroupContainer from "../GroupContainer";
import GetUsersPage from "../GetUsersPage";

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
        <Container>
          <DivH1>
            <h1>Usuários</h1>
          </DivH1>
          <GetUsersPage />
        </Container>
      </div>
    </Content>
  );
};

export default DashboardPanel;
