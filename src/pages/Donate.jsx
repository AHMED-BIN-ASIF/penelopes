import React, { useState } from "react";
import "../css/Donate.css";
import Hero from "../components/Hero";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobileNumber: "",
    address: "",
    city: "",
    additionalInfo: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    agreeTerms: false,
    receiveUpdates: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading spinner

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading spinner

    try {
      const response = await fetch("https://peneloperae.org/donation-handler.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          agreeTerms: checkboxes.agreeTerms,
          receiveUpdates: checkboxes.receiveUpdates,
        }),
      });

      const text = await response.text(); // Get the raw response text
      let data = {};
      try {
        data = JSON.parse(text); // Try to parse as JSON
      } catch (error) {
        console.error("Error parsing response as JSON:", error);
        console.log("Raw response:", text);
      }

      if (response.ok) {
        toast.success("Donation submitted successfully! 🎉");
        // Clear the form after success
        setFormData({
          firstName: "",
          email: "",
          mobileNumber: "",
          address: "",
          city: "",
          additionalInfo: "",
        });
        setCheckboxes({ agreeTerms: false, receiveUpdates: false });
      } else {
        toast.error(`Failed to submit donation: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the donation.");
    } finally {
      setIsSubmitting(false); // Stop loading spinner
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Your Donation Makes a Difference"
        subHeading="Be the Change You Want to See"
        detail="Together, we can create brighter futures and stronger communities. Every contribution counts and brings us closer to transforming lives. Start making an impact today!"
        linkText="Subscribe Now"
        linkHref="#donate-form"
        className="hero-donate"
      />

      {/* Donation Form Section */}
      <section id="donate-form" className="donate">
        <div className="container-small">
          <div className="donate-form">
            <h2 className="secondary-heading">Subscribe Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-fields">
                <div className="donate-row">
                  {/* Left Column */}
                  <div className="col">
                    <label>
                      First Name
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                      />
                    </label>
                    <label>
                      Email
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </label>
                    <label>
                      Mobile Number
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                      />
                    </label>
                    <label>
                      Address
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                      />
                    </label>
                    <label>
                      City
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                      />
                    </label>
                  </div>

                  {/* Right Column */}
                  <div className="col">
                    
                    <label>
                      Additional Information
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Any message or details"
                      />
                    </label>
                    {/* Checkbox Group */}
                    <div className="checkbox-group">
                      <label>
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={checkboxes.agreeTerms}
                          onChange={handleCheckboxChange}
                        />
                        <span>I agree to the Terms and Conditions.</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="receiveUpdates"
                          checked={checkboxes.receiveUpdates}
                          onChange={handleCheckboxChange}
                        />
                        <span>I would like to receive updates about the cause.</span>
                      </label>
                    </div>
                    <button className="primary-btn donate-btn" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Subscribe"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Donate;
