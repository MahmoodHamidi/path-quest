import './App.css'
import StoryViwer from './components/StoryViewer';
import { GlobalProvider } from './contexts/GlobalContext';
import QuestionBox from "./components/question-box/QuestionBox";
import StoryQuestioner from './components/storyQuetioner/StoryQuestioner';
import HeroPage from "../src/components/HeroPage/HeroPage";
import SplineBackground from "../src/components/3D/SplineBackground";
import LoadingScreen from "../src/components/LoadingScreen/LoadingScreen";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Switch from "./components/darkmode/Switch";
import SwitchLanguage from "./components/language/SwitchLanguage";
import StoryPage from "./components/storypage/StoryPage";



function App() {
  /* const [isLoading, setIsLoading] = useState(true); */
  return (
    <GlobalProvider>
      {/* {isLoading ? (
        <LoadingScreen setIsLoading={setIsLoading} />
      ) : (
        <div className="app-container">
          <div className="background-wrapper">
            <SplineBackground />
            <div className="gradient-overlay" />
            <div className="content-wrapper">
              <HeroPage />
            </div>
          </div>
        </div>
      )} */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeroPage />} />
          <Route path='/story/:id' element={<StoryQuestioner />} />
          <Route path='/view/:id/:result' element={<StoryPage />}/>
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      {/* <StoryQuestioner /> */}
      {/* <Switch />

      <SwitchLanguage /> */}

{/*       <StoryPage /> */}
    </GlobalProvider>
  )
}

export default App;
