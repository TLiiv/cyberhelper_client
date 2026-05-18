import { Routes, Route, useLocation } from "react-router";
import HomePage from "./HomePage";
import TestPage from "./TestPage";
import TutorialPage from "./TutorialPage";
import ScamDonationPage from "./ScamDonationPage";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Theme } from "@chakra-ui/react";
import ScamFacebookLoginPage from "./ScamFacebookLoginPage";
import ScamPoliceIdLogin from "./ScamPoliceIdLogin";
import ScamJobOfferForm from "./ScamJobOfferForm";

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const scamPages = [
    "/www.dharmo.ee/donation",
    "/www.facebooke.com/security-alert/recover-account/context=Q7DVBAHu4mjUMkGURJPWF8C6M-6Q-pQtDrlfa",
    "/www.tara.politsei.ria.ee/login_challenge=0b3db40c06dc4eaca25b4ad304b48745",
    "/www.teliajobapplication.eu",
  ];

  const isScamPage = scamPages.includes(location.pathname);

  return (
    <>
      <Theme appearance={isScamPage ? "light" : "dark"}>
        {!isScamPage && <NavBar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route
            path="/www.dharmo.ee/donation"
            element={<ScamDonationPage />}
          />
          <Route
            path="/www.facebooke.com/security-alert/recover-account/context=Q7DVBAHu4mjUMkGURJPWF8C6M-6Q-pQtDrlfa"
            element={<ScamFacebookLoginPage />}
          />
          <Route
            path="/www.tara.politsei.ria.ee/login_challenge=0b3db40c06dc4eaca25b4ad304b48745"
            element={<ScamPoliceIdLogin />}
          />
          <Route
            path="/www.teliajobapplication.eu"
            element={<ScamJobOfferForm />}
          />
        </Routes>
        {!isScamPage && <Footer />}
      </Theme>
    </>
  );
};

export default AppRoutes;
