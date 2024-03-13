import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { HiInformationCircle } from 'react-icons/hi';

// SignUp component for user registration
const SignUp = () => {
  // State variables for form data, error message, and loading state
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setErrorMessage(null);

      // Basic form validation
      const requiredFields = ['username', 'email', 'password'];
      const isValid = requiredFields.every(field => formData[field]);
      if (!isValid) throw new Error('Please fill out all fields.');

      // Sending form data to the server
      const res = await fetch('/api/v1/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      // Handling server response
      if (!res.ok) throw new Error(data.message.statusMessage);

      // Redirecting to sign-in page upon successful registration
      setFormData({});
      navigate('/sign-in');
    } catch (err) {
      // Handling errors
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          {/* Logo and project description */}
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Mukund's</span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password or with Google.
          </p>
        </div>
        <div className="flex-1">
          {/* Display error message if exists */}
          {errorMessage && <ErrorAlert message={errorMessage} />}
          {/* Sign-up form */}
          <SignUpForm
            formData={formData}
            loading={loading}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          {/* Link to sign-in page */}
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component to display error message
const ErrorAlert = ({ message }) => (
  <Alert className="mt-5" color='failure' icon={HiInformationCircle}>
    <span className="font-medium">Error!</span> {message}
  </Alert>
);

// Component for sign-up form
const SignUpForm = ({ formData, loading, onSubmit, onChange }) => (
  <form className="flex flex-col gap-4" onSubmit={onSubmit}>
    <div className="">
      <Label value="Your username" />
      <TextInput
        type="text"
        placeholder="Username"
        id="username"
        value={formData.username || ''}
        onChange={onChange}
      />
    </div>
    <div className="">
      <Label value="Your email" />
      <TextInput
        type="text"
        placeholder="name@company.com"
        id="email"
        value={formData.email || ''}
        onChange={onChange}
      />
    </div>
    <div className="">
      <Label value="Your password" />
      <TextInput
        type="password"
        placeholder="Password"
        id="password"
        value={formData.password || ''}
        onChange={onChange}
      />
    </div>
    {/* Sign-up button with loading indicator */}
    <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
      {loading ? <LoadingButtonContent /> : 'Sign Up'}
    </Button>
  </form>
);

// Component for loading button content
const LoadingButtonContent = () => (
  <>
    <Spinner size='sm' />
    <span className="pl-3">Loading...</span>
  </>
);

export default SignUp;
