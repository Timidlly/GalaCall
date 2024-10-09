import { useEffect } from 'react';

export default function OTPVerificationChannelPartnerConnect() {
  useEffect(() => {
    window.otpless = (otplessUser) => {
      if (otplessUser?.identities?.[0]?.verified) {
        const identityValue = otplessUser.identities[0].identityValue;
        const phoneNumberWithoutCountryCode = identityValue.replace(/^91/, '');

        // Store the number in a cookie
        document.cookie = `identityValue=${phoneNumberWithoutCountryCode}; path=/;`;

        // Redirect to the previous page
        window.location.href="/channel-partner-connect"
      }
    };
  }, []);

  return <div id="otpless-login-page"></div>;
}