import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CountryDetail from "./components/MainContent/CountryDetail";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <AppContainer className={themeContext.theme}>
        <Router>
          <Header />
          <ContentContainer>
            <Routes>
              <Route exact path="/" element={<MainContent />} />
              <Route path="/region/:regionName" element={<MainContent />} />
              <Route path="/search/:name" element={<MainContent />} />
              <Route path="/country/:countryName" element={<CountryDetail />} />
            </Routes>
          </ContentContainer>
        </Router>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 12px;
`;
