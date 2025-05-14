"use client";

import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data Submitted:", data);
    // Send the data to server or API here
    event.currentTarget.reset();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col gap-4 w-6/12 mx-auto">
        <h2 className="text-2xl font-extrabold leading-none tracking-tight mb-5 text-center">
          Thank You
        </h2>

        <p className="text-lg font-semibold leading-snug text-center mb-10">
          Your information was submitted to our team of immigration attorneys.
          Expect an email from hello@tryalma.ai.
        </p>

        <button
          className="bg-black text-white p-2 rounded font-semibold w-8/12 mx-auto"
          onClick={() => setSubmitted(false)}
        >
          Go Back to Homepage
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="w-6/12 mx-auto mb-10 text-center">
        <h2 className="text-2xl font-extrabold leading-none tracking-tight mb-5">
          Want to understand your visa options?
        </h2>
        <p className="text-lg font-semibold leading-snug">
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your case
          based on your goals.
        </p>
      </section>

      <form
        className="flex flex-col gap-4 w-6/12 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          name="firstName"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          name="lastName"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          name="email"
          required
        />
        <input
          type="url"
          placeholder="LinkedIn / Personal Website URL"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          name="url"
          required
        />

        <div className="flex items-center justify-center w-full mb-5">
          <label
            htmlFor="dropzoneFile"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload a resume</span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                .PDF, .DOC or .DOCX (MAX. 5MB)
              </p>
            </div>
            <input
              id="dropzoneFile"
              type="file"
              className="hidden"
              name="resume"
            />
          </label>
        </div>

        <h2 className="text-2xl font-extrabold leading-none tracking-tight mb-5 text-center">
          Visa categories of interest?
        </h2>

        <h2 className="text-2xl font-extrabold leading-none tracking-tight text-center">
          How can we help you?
        </h2>

        <textarea
          id="additionalInfo"
          rows={4}
          placeholder="What is your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residency or short-term employment visa or both? Are there any timeline considerations?"
          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          name="additionalInfo"
          required
        />

        <button
          type="submit"
          className="bg-black text-white p-2 rounded font-semibold"
        >
          Submit
        </button>
      </form>
    </>
  );
}
