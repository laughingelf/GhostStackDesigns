// ExpressForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const steps = ["Contact Info", "Business Info", "Website Goals", "Domain Info"];

const initialValues = {
  fullName: "",
  businessName: "",
  phone: "",
  email: "",
  contactMethod: [],

  yearsInBusiness: "",
  businessDescription: "",
  servicesOffered: "",
  slogan: "",
  differentiator: "",
  hasAssets: "",
  uploadPreference: "",

  websiteGoal: "",
  tone: "",
  colorPreferences: "",
  referenceWebsites: "",

  hasDomain: "",
  domainName: "",
  displayEmail: "",
  displayPhone: "",
  serviceAreas: "",
  additionalInfo: "",
  referralSource: "",
};

const validationSchemas = [
  Yup.object({
    fullName: Yup.string().required("Required"),
    businessName: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    contactMethod: Yup.array().min(1, "Select at least one method"),
  }),
  Yup.object({
    yearsInBusiness: Yup.number().typeError("Must be a number"),
    businessDescription: Yup.string().required("Required"),
    servicesOffered: Yup.string().required("Required"),
    slogan: Yup.string(),
    differentiator: Yup.string(),
    hasAssets: Yup.string().required("Required"),
    uploadPreference: Yup.string().when("hasAssets", {
      is: "yes",
      then: Yup.string().required("Choose a platform"),
    }),
  }),
  Yup.object({
    websiteGoal: Yup.string().required("Required"),
    tone: Yup.string(),
    colorPreferences: Yup.string(),
    referenceWebsites: Yup.string(),
  }),
  Yup.object({
    hasDomain: Yup.string().required("Required"),
    domainName: Yup.string().when("hasDomain", {
      is: "yes",
      then: Yup.string().required("Enter your domain"),
    }),
    displayEmail: Yup.string().email("Invalid email"),
    displayPhone: Yup.string(),
    serviceAreas: Yup.string(),
    additionalInfo: Yup.string(),
    referralSource: Yup.string(),
  }),
];

const labelClass = "block text-gray-100 text-lg header-font font-medium mb-1";
const inputClass = "w-full md:w-2/3 px-4 py-2 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500";
const textareaClass = `${inputClass}`;
const errorClass = "text-red-500 text-sm mt-1";

const ExpressProjectForm = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const renderFields = (values) => {
    switch (step) {
      case 0:
        return (
          <>
            <label className={labelClass}>Full Name</label>
            <Field name="fullName" className={inputClass} />
            <ErrorMessage name="fullName" component="div" className={errorClass} />
            

            <label className={labelClass}>Business Name</label>
            <Field name="businessName" className={inputClass} />
            <ErrorMessage name="businessName" component="div" className={errorClass} />

            <label className={labelClass}>Phone</label>
            <Field name="phone" className={inputClass} />
            <ErrorMessage name="phone" component="div" className={errorClass} />

            <label className={labelClass}>Email</label>
            <Field name="email" type="email" className={inputClass} />
            <ErrorMessage name="email" component="div" className={errorClass} />

            <label className={labelClass}>Preferred Method of Contact</label>
            <p className="text-md text-gray-400 mb-2">Select all that apply</p>
            <div className="flex flex-row justify-center items-center gap-4">
            {["Call", "Text", "Email"].map((method) => (
                <label key={method} className="inline-flex items-center text-gray-100">
                <Field
                    type="checkbox"
                    name="contactMethod"
                    value={method}
                    className="mr-2 h-6 w-6 md:h-4 md:w-4"
                />
                {method}
                </label>
            ))}
            </div>
            <ErrorMessage name="contactMethod" component="div" className={errorClass} />
          </>
        );
      case 1:
        return (
          <>
            <label className={labelClass}>Years in Business</label>
            <Field name="yearsInBusiness" className={inputClass}  />
            <ErrorMessage name="yearsInBusiness" component="div" className={errorClass} />
            
            <label className={labelClass}>Slogan or Tagline</label>
            <Field as="textarea" name="slogan" className={textareaClass} rows={2} />

            <label className={labelClass}>Describe your business</label>
            <Field as="textarea" name="businessDescription" className={textareaClass} rows={4} placeholder='Describe what you do...' />
            <ErrorMessage name="businessDescription" component="div" className={errorClass} />

            <label className={labelClass}>Services you offer</label>
            <Field as="textarea" name="servicesOffered" className={textareaClass} rows={4} placeholder='List all services you provide...' />
            <ErrorMessage name="servicesOffered" component="div" className={errorClass} />

            <label className={labelClass}>What makes your business different?</label>
            <Field as="textarea" name="differentiator" className={textareaClass} rows={3} placeholder='What sets you apart?' />

            <label className={labelClass}>Will you provide assets?</label>
            <Field as="select" name="hasAssets" className={inputClass}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
            <ErrorMessage name="hasAssets" component="div" className={errorClass} />

            {values.hasAssets === "yes" && (
              <>
                <label className={labelClass}>Preferred Upload Platform</label>
                <Field as="select" name="uploadPreference" className={inputClass}>
                  <option value="">Select</option>
                  <option value="Google Drive">Google Drive</option>
                  <option value="OneDrive">OneDrive</option>
                </Field>
                <ErrorMessage name="uploadPreference" component="div" className={errorClass} />
              </>
            )}
          </>
        );
      case 2:
        return (
          <>
            <label className={labelClass}>Main goal of the website</label>
            <Field as="textarea" name="websiteGoal" className={textareaClass} rows={4} placeholder='(Examples: Show professionalism, provide basic info, make it easy to contact you, highlight your work, etc.)' />
            <ErrorMessage name="websiteGoal" component="div" className={errorClass} />

            <label className={labelClass}>Preferred tone</label>
            <Field as="textarea" name="tone" className={textareaClass} rows={2} placeholder='(Examples: Friendly, modern, bold, clean, down-to-earth, etc.)' />

            <label className={labelClass}>Color preferences</label>
            <Field as="textarea" name="colorPreferences" className={textareaClass} rows={2} />

            <label className={labelClass}>Reference websites</label>
            <Field as="textarea" name="referenceWebsites" className={textareaClass} rows={3} placeholder='(Feel free to drop links)' />
          </>
        );
      case 3:
        return (
          <>
            <label className={labelClass}>Do you own a domain?</label>
            <Field as="select" name="hasDomain" className={inputClass}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
            <ErrorMessage name="hasDomain" component="div" className={errorClass} />

            {values.hasDomain === "yes" && (
              <>
                <label className={labelClass}>Domain Name</label>
                <Field name="domainName" className={inputClass} />
                <ErrorMessage name="domainName" component="div" className={errorClass} />
              </>
            )}

            <label className={labelClass}>Email to display</label>
            <Field name="displayEmail" className={inputClass} />
            <ErrorMessage name="displayEmail" component="div" className={errorClass} />

            <label className={labelClass}>Phone to display</label>
            <Field name="displayPhone" className={inputClass} />

            <label className={labelClass}>Service areas</label>
            <Field as="textarea" name="serviceAreas" className={textareaClass} rows={3} placeholder='(for online service, type N/A)' />

            <label className={labelClass}>Anything else you'd like us to know?</label>
            <Field as="textarea" name="additionalInfo" className={textareaClass} rows={3} placeholder='Anything extra you want to let us know...' />

            <label className={labelClass}>How did you hear about us?</label>
            <Field name="referralSource" className={inputClass} />
          </>
        );
      default:
        return null;
    }
  };

  return submitted ? (
    <div className="text-center text-lg text-gray-100">
      <h2 className="text-3xl header-font blue-word mb-4">Form Submitted ✅</h2>
      <p className="mb-2">
        We appreciate you taking the time to fill out the form — your details are on their way to us.
        </p>
        <p className="mb-2">
        You're one step closer to launching your new site with GhostStack Express. We'll review everything you submitted and follow up shortly if we need anything else.
        </p>
        <p className="mb-2">
        If you indicated that you have assets to upload, keep an eye on your inbox — we'll be sending a shared folder link via {`Google Drive or OneDrive`} based on your selection.
        </p>
        <p className="mb-2">
        If you have questions in the meantime or want to chat about anything specific, feel free to reach out at <a href="mailto:ghoststackdesigns@gmail.com" className="underline blue-word">ghoststackdesigns@gmail.com</a>
        </p>
        <p className="mt-4 font-semibold">Let’s build something solid.</p>
        <p className="text-2xl mt-2 mb-12">— The GhostStack Team 👻</p>

        <Link className="blue-btn text-2xl px-6 py-2 rounded-lg header-font hover:scale-105">
            Back to Home
        </Link>
    </div>
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas[step]}
      onSubmit={(values) => {
        console.log("Form submitted", values);
        setSubmitted(true);
      }}
    >
      {({ values }) => (
        <Form
            className="space-y-6"
            name="express-project"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="express-project" />
            <input type="hidden" name="bot-field" />
          {renderFields(values)}
          <div className="flex justify-between mt-10">
            {step > 0 && (
              <button type="button" onClick={prevStep} className="white-btn text-2xl header-font px-4 py-1 rounded-lg hover:scale-105 transition">Back</button>
            )}
            {step < steps.length - 1 ? (
              <button type="button" onClick={nextStep} className="blue-btn text-2xl header-font px-4 py-1 rounded-lg hover:scale-105 transition">Next</button>
            ) : (
              <button type="submit" className="blue-btn header-font text-2xl px-4 py-1 rounded-lg hover:scale-105 transition">Submit</button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ExpressProjectForm;
