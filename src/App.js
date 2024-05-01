import React from "react";
import "./App.css";
import "./Styles.css"
import BottomNavBar from "./components/BottomNavBar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules_Regulations from "./components/Rules & Regulations/Rules&Regulations";
import Refer from "./components/Refer Code/Refer";
import { ThemeProvider } from "./ThemeChanger";
const UnReadNews = React.lazy( ()=> import("./components/Unread News/UnReadNews"));
const AboutUs = React.lazy(() => import("./components/About Us/AboutUs"));
const Setting = React.lazy(() => import("./components/Settings/Settings"));
const Wildlife = React.lazy(() => import("./components/WildLife/WildLife"));
const IPL = React.lazy(() => import("./components/IPL/IPL"));
const DigitalMagzines = React.lazy(() =>import("./components/Digital-MagZines/Digital-Magzies"));
const Sports = React.lazy(() => import("./components/Sports/Sports"));
const ContactUs = React.lazy(() => import("./components/Contact-Us/ContactUs"));
const ISRO = React.lazy(() => import("./components/ISRO/ISRO"));
const Viral = React.lazy(() => import("./components/Viral/Viral"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./components/Search/SearchPage"));
const Trending = React.lazy(() => import("./components/Trending/Trending"));
const Feedback = React.lazy(() => import("./components/Feedback/Feedback"));
const LocalNewsSearch = React.lazy(() => import("./components/LocalNews/LocalNewsSearch"));

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  return (
    <Router>
      <div className="app1">
        <Header />
        <div className="content">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/wild-life" element={<Wildlife />} />
              <Route path="/digital-magzines" element={<DigitalMagzines />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/ipl" element={<IPL />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/isro" element={<ISRO />} />
              <Route path="/viral" element={<Viral />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/rules&regulations" element={<Rules_Regulations />}/>
              <Route path="/local-news" element={<LocalNewsSearch />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/refer-now" element={<Refer />} />
              <Route path="/unread-news" element={<UnReadNews />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
      <BottomNavBar />
    </Router>
  );
};

export default App;
