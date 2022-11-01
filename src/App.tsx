import { Divider, Stack } from '@mui/material';
import './App.css';
import Jumbotron from './views/Jumbotron';
import GradientAppBarContainer from './views/GradientAppBarContainer';
import ExperienceTimelineView from './views/ExperienceTimelineView';
import SkillsTabView from './views/SkillsTabView';
import EducationView from './views/EducationView';
import PortfolioTabView from './views/PortfolioTabView';
import ContactInfoView from './views/ContactInfoView';

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <GradientAppBarContainer>
        <Stack divider={<Divider/>} spacing={8}>
          <ContactInfoView/>
          <ExperienceTimelineView/>
          <EducationView/>
          <SkillsTabView/>
          <PortfolioTabView/>
        </Stack>
      </GradientAppBarContainer>
    </div>
  );
}

export default App;
