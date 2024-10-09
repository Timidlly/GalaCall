// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientRegistrationForm from './components/ClientRegistrationForm';
import ChannelPartnerLeadGeneration from './components/ChannelPartnerLeadGeneration';
import ChannelPartnerConnect from './components/ChannelPartnerConnect';
import OTPVerification from './components/OTPVerification';
import OTPVerificationChannelPartner from './components/OTPVerificationChannelPartner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/client-registration" element={<ClientRegistrationForm />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/otp-verification-channel-partner" element={<OTPVerificationChannelPartner />} />
        <Route path="/otp-verification-channel-partner-connect" element={<OTPVerificationChannelPartner />} />


        <Route path="/channel-partner" element={<ChannelPartnerLeadGeneration />} />
        <Route path="/channel-partner-connect" element={<ChannelPartnerConnect />} />
      </Routes>
    </Router>
  );
}

export default App;
