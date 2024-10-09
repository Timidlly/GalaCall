import { useState, useEffect } from 'react';
import './ClientRegistrationForm.css'; // Custom styles
import { useNavigate } from 'react-router-dom';



const ChannelPartnerLeadGeneration = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [designation, setDesignation] = useState('');
  const [profession, setProfession] = useState('');
  const [lookingFor, setLookingFor] = useState('2 BHK');
  const [requirement, setRequirement] = useState('');
  const [purposeOfBuying, setPurposeOfBuying] = useState('');
  const [sourceOfFinance, setSourceOfFinance] = useState('');
  const [howDidYouKnow, setHowDidYouKnow] = useState('');
  const [callerName, setCallerName] = useState('');
  const [callerNumber, setCallerNumber] = useState('');
  const [referenceName, setReferenceName] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [channelPartnerName, setChannelPartnerName] = useState('');
  const [channelPartnerNumber, setChannelPartnerNumber] = useState('');
  const [channelPartnerRera, setChannelPartnerRera] = useState('');
  const [clientBudget, setClientBudget] = useState('');
  const [verified, setVerified] = useState(false);
  const [project, setProject] = useState('');
  const [sourcingManager, setSourcingManager] = useState('');


  // New state for errors and success
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  


  // Validation functions
  const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name) {
      isValid = false;
      newErrors.name = 'Name is required.';
    }

    if (!validatePhoneNumber(phoneNumber)) {
      isValid = false;
      newErrors.phoneNumber = 'Phone number must be a valid 10-digit number.';
    }

    if (!validateEmail(email)) {
      isValid = false;
      newErrors.email = 'Invalid email address.';
    }

    if (!address) {
      isValid = false;
      newErrors.address = 'Address is required.';
    }
    if (!sourcingManager) {
      isValid = false;
      newErrors.sourcingManager = 'Sourcing Manager selection is required.';
    }

    if (!employmentType) {
      isValid = false;
      newErrors.employmentType = 'Employment type is required.';
    }

    if ((employmentType === 'salaried' || employmentType === 'business') && !organizationName) {
      isValid = false;
      newErrors.organizationName = 'Organization name is required for salaried or business employment types.';
    }

    if (employmentType === 'professional' && !profession) {
      isValid = false;
      newErrors.profession = 'Profession is required for professionals.';
    }

    if (!requirement) {
      isValid = false;
      newErrors.requirement = 'Requirement is required.';
    }

    if (!purposeOfBuying) {
      isValid = false;
      newErrors.purposeOfBuying = 'Purpose of buying is required.';
    }

    if (!sourceOfFinance) {
      isValid = false;
      newErrors.sourceOfFinance = 'Source of finance is required.';
    }

    if (!clientBudget) {
      isValid = false;
      newErrors.clientBudget = 'Client budget is required.';
    }

    if (!howDidYouKnow) {
      isValid = false;
      newErrors.howDidYouKnow = 'How did you know about us is required.';
    }

    if (howDidYouKnow === 'Calling Name & Number' && !callerName) {
      isValid = false;
      newErrors.callerName = 'Caller name is required.';
    }
    if (!project) {
      isValid = false;
      newErrors.project = 'Please select a project.';
    }
    

    if (howDidYouKnow === 'Calling Name & Number' && !validatePhoneNumber(callerNumber)) {
      isValid = false;
      newErrors.callerNumber = 'Caller phone number must be a valid 10-digit number.';
    }

    if (howDidYouKnow === 'Reference' && !referenceName) {
      isValid = false;
      newErrors.referenceName = 'Reference name is required.';
    }

    if (howDidYouKnow === 'Reference' && !validatePhoneNumber(referenceNumber)) {
      isValid = false;
      newErrors.referenceNumber = 'Reference phone number must be a valid 10-digit number.';
    }

    if (howDidYouKnow === 'Channel Partner' && !channelPartnerName) {
      isValid = false;
      newErrors.channelPartnerName = 'Channel partner name is required.';
    }

    if (howDidYouKnow === 'Channel Partner' && !validatePhoneNumber(channelPartnerNumber)) {
      isValid = false;
      newErrors.channelPartnerNumber = 'Channel partner phone number must be a valid 10-digit number.';
    }

    if (howDidYouKnow === 'Channel Partner' && !channelPartnerRera) {
      isValid = false;
      newErrors.channelPartnerRera = 'Channel partner RERA number is required.';
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateBasicInfo = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required.';

    if (!validateEmail(email)) newErrors.email = 'Invalid email address.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (validateBasicInfo()) {
      document.cookie = `nameValue=${name}; path=/;`;
      document.cookie = `emailValue=${email}; path=/;`;
      window.location.href="/otp-verification-channel-partner"
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic
      alert("Form submitted successfully ")
      setFormSubmitted(true);
      const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      };
  
    
      // Delete cookies
      deleteCookie('nameValue');
      deleteCookie('emailValue');
      deleteCookie('identityValue');
      // Log all form fields to the console
      console.log('Form Submitted with the following details:', {
        name,
        phoneNumber,
        email,
        address,
        employmentType,
        organizationName,
        designation,
        profession,
        lookingFor,
        requirement,
        purposeOfBuying,
        sourceOfFinance,
        howDidYouKnow,
        callerName,
        callerNumber,
        referenceName,
        referenceNumber,
        channelPartnerName,
        channelPartnerNumber,
        channelPartnerRera,
        clientBudget,
        project
      });

      window.location.href="/channel-partner"

      // Reset form fields after submission
      setName('');
      setPhoneNumber('');
      setEmail('');
      setAddress('');
      setEmploymentType('');
      setOrganizationName('');
      setDesignation('');
      setProfession('');
      setLookingFor('2 BHK');
      setRequirement('');
      setPurposeOfBuying('');
      setSourceOfFinance('');
      setHowDidYouKnow('');
      setCallerName('');
      setCallerNumber('');
      setReferenceName('');
      setReferenceNumber('');
      setChannelPartnerName('');
      setChannelPartnerNumber('');
      setChannelPartnerRera('');
      setClientBudget('');
    } else {
      setFormSubmitted(false);
      console.error('Form submission failed due to validation errors.');
    }
};





  useEffect(() => {
    const cookieName = document.cookie
    .split('; ')
    .find(row => row.startsWith('nameValue='))
    ?.split('=')[1];

    const cookieEmail = document.cookie
    .split('; ')
    .find(row => row.startsWith('emailValue='))
    ?.split('=')[1];

    const cookiePhoneNumber = document.cookie
      .split('; ')
      .find(row => row.startsWith('identityValue='))
      ?.split('=')[1];
    
    if (cookiePhoneNumber) {
      setVerified(true);
      setPhoneNumber(cookiePhoneNumber);
      setName(cookieName);
      setEmail(cookieEmail)
    }
  }, []);


  return (
    <div className="container-fluid client-registration">
      <div className="row vh-100">
        <div className="background-section">
    
          <div className="form-section">
          <div className="form-container">
           <a href='/'> <img className='logo' src="https://call365.netlify.app/images/logo.jpg"/></a>
            <h2>Channel Partner Reference Client </h2>
            {formSubmitted && <div className="alert alert-success">Thank you for submitting the form!</div>}
            <p>Fill this form for registration</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  value={name}
                  disabled={verified}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>


              {verified && (
              <div className="mb-3">
                <label className="form-label">Mobile No.</label>
                <input
                  type="text"
                  className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                  value={phoneNumber}
                  disabled={verified}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                 {verified && <span className="verified-tick" style={{color:'green'}}>OTP Verified ✔️</span>}
                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
              </div>)}

              <div className="mb-3">
                <label className="form-label">Email ID</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={email}
                  disabled={verified}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {!verified && (
          <button type="button" onClick={handleNextClick} className="btn btn-primary">
            Next
          </button>
        )}



{verified && (
          <>

              <div className="mb-3">
                <label className="form-label">Client Name</label>
                <textarea
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>

              <div className="mb-3">
  <label className="form-label">Choose Project</label>
  <select
    className="form-select"
    value={project}
    onChange={(e) => setProject(e.target.value)}
  >
    <option value="">Choose project</option>
    <option value="Swayam">Swayam</option>
    <option value="Aakasa Worli">Aakasa Worli</option>
    <option value="Aakasa SP">Aakasa SP</option>
    <option value="Paramount">Paramount</option>
  </select>
  {errors.project && <div className="invalid-feedback">{errors.project}</div>}
</div>
<div className="mb-3">
  <label className="form-label">Sourcing Manager</label>
  <select
    className={`form-select ${errors.sourcingManager ? 'is-invalid' : ''}`}
    value={sourcingManager}
    onChange={(e) => setSourcingManager(e.target.value)}
  >
    <option value="">Choose sourcing manager</option>
    <option value="Yash">Yash</option>
    <option value="Rashmi">Rashmi</option>
    <option value="Arnav">Arnav</option>
  </select>
  {errors.sourcingManager && (
    <div className="invalid-feedback">{errors.sourcingManager}</div>
  )}
</div>




              <div className="mb-3">
                <label className="form-label">Choose employment type</label>
                <select
                  className={`form-select ${errors.employmentType ? 'is-invalid' : ''}`}
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                >
                  <option value="">Choose employment type</option>
                  <option value="salaried">Salaried</option>
                  <option value="business">Business</option>
                  <option value="professional">Professional</option>
                  <option value="homemaker">Homemaker</option>
                  <option value="defence">Defence</option>
                </select>
                {errors.employmentType && <div className="invalid-feedback">{errors.employmentType}</div>}
              </div>



              {(employmentType === 'salaried' || employmentType === 'business') && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Organization Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.organizationName ? 'is-invalid' : ''}`}
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                    {errors.organizationName && <div className="invalid-feedback">{errors.organizationName}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                </>
              )}

              {employmentType === 'professional' && (
                <div className="mb-3">
                  <label className="form-label">Which Profession?</label>
                  <input
                    type="text"
                    className={`form-control ${errors.profession ? 'is-invalid' : ''}`}
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                  {errors.profession && <div className="invalid-feedback">{errors.profession}</div>}
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Looking For</label>
                <select
                  className="form-select"
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                >
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Requirement</label>
                <select
                  className={`form-select ${errors.requirement ? 'is-invalid' : ''}`}
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                >
                  <option value="">Choose Requirement</option>
                  <option value="ready-to-move-in">Ready to Move in</option>
                  <option value="under-construction">Under Construction</option>
                </select>
                {errors.requirement && <div className="invalid-feedback">{errors.requirement}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Purpose of Buying</label>
                <select
                  className={`form-select ${errors.purposeOfBuying ? 'is-invalid' : ''}`}
                  value={purposeOfBuying}
                  onChange={(e) => setPurposeOfBuying(e.target.value)}
                >
                  <option value="">Choose purpose of buying</option>
                  <option value="end-use">End use</option>
                  <option value="investment">Investment</option>
                </select>
                {errors.purposeOfBuying && <div className="invalid-feedback">{errors.purposeOfBuying}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Source of Finance</label>
                <select
                  className={`form-select ${errors.sourceOfFinance ? 'is-invalid' : ''}`}
                  value={sourceOfFinance}
                  onChange={(e) => setSourceOfFinance(e.target.value)}
                >
                  <option value="">Select source of Finance</option>
                  <option value="home-loan">Home Loan</option>
                  <option value="self-funding">Self Funding</option>
                  <option value="sale-of-old-property">Sale of Old Property</option>
                  <option value="self-and-loan">Self and Loan</option>
                </select>
                {errors.sourceOfFinance && <div className="invalid-feedback">{errors.sourceOfFinance}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Client Budget</label>
                <select
                  className={`form-select ${errors.clientBudget ? 'is-invalid' : ''}`}
                  value={clientBudget}
                  onChange={(e) => setClientBudget(e.target.value)}
                >
                  <option value="">Select your budget</option>
                  <option value="1.50 CR - 1.99 CR">1.50 CR - 1.99 CR</option>
                  <option value="2.00 CR - 2.49 CR">2.00 CR - 2.49 CR</option>
                  <option value="2.50 CR - 4.50 CR">2.50 CR - 4.50 CR</option>
                </select>
                {errors.clientBudget && <div className="invalid-feedback">{errors.clientBudget}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">How did you come to know about us?</label>
                <select
                  className={`form-select ${errors.howDidYouKnow ? 'is-invalid' : ''}`}
                  value={howDidYouKnow}
                  onChange={(e) => setHowDidYouKnow(e.target.value)}
                >
                  <option value="">Select options</option>
                  <option value="Direct">Direct</option>
                  <option value="Online Marketing">Online Marketing</option>
                  <option value="Calling Name & Number">Calling Name & Number</option>
                  <option value="Reference">Reference</option>
                  <option value="Channel Partner">Channel Partner</option>
                </select>
                {errors.howDidYouKnow && <div className="invalid-feedback">{errors.howDidYouKnow}</div>}
              </div>

              {howDidYouKnow === 'Calling Name & Number' && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Caller Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.callerName ? 'is-invalid' : ''}`}
                      value={callerName}
                      onChange={(e) => setCallerName(e.target.value)}
                    />
                    {errors.callerName && <div className="invalid-feedback">{errors.callerName}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Caller Number</label>
                    <input
                      type="text"
                      className={`form-control ${errors.callerNumber ? 'is-invalid' : ''}`}
                      value={callerNumber}
                      onChange={(e) => setCallerNumber(e.target.value)}
                    />
                    {errors.callerNumber && <div className="invalid-feedback">{errors.callerNumber}</div>}
                  </div>
                </>
              )}

              {howDidYouKnow === 'Reference' && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Reference Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.referenceName ? 'is-invalid' : ''}`}
                      value={referenceName}
                      onChange={(e) => setReferenceName(e.target.value)}
                    />
                    {errors.referenceName && <div className="invalid-feedback">{errors.referenceName}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Reference Phone Number</label>
                    <input
                      type="text"
                      className={`form-control ${errors.referenceNumber ? 'is-invalid' : ''}`}
                      value={referenceNumber}
                      onChange={(e) => setReferenceNumber(e.target.value)}
                    />
                    {errors.referenceNumber && <div className="invalid-feedback">{errors.referenceNumber}</div>}
                  </div>
                </>
              )}

              {howDidYouKnow === 'Channel Partner' && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Channel Partner Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.channelPartnerName ? 'is-invalid' : ''}`}
                      value={channelPartnerName}
                      onChange={(e) => setChannelPartnerName(e.target.value)}
                    />
                    {errors.channelPartnerName && <div className="invalid-feedback">{errors.channelPartnerName}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Channel Partner Number</label>
                    <input
                      type="text"
                      className={`form-control ${errors.channelPartnerNumber ? 'is-invalid' : ''}`}
                      value={channelPartnerNumber}
                      onChange={(e) => setChannelPartnerNumber(e.target.value)}
                    />
                    {errors.channelPartnerNumber && <div className="invalid-feedback">{errors.channelPartnerNumber}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Channel Partner RERA</label>
                    <input
                      type="text"
                      className={`form-control ${errors.channelPartnerRera ? 'is-invalid' : ''}`}
                      value={channelPartnerRera}
                      onChange={(e) => setChannelPartnerRera(e.target.value)}
                    />
                    {errors.channelPartnerRera && <div className="invalid-feedback">{errors.channelPartnerRera}</div>}
                  </div>
                </>
              )}



              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              </>)}
            </form>
          </div>
        </div>
        </div>
   
      </div>
    </div>
  );
};

export default ChannelPartnerLeadGeneration;
