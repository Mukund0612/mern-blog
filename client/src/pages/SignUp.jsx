// Importing necessary components from the flowbite-react library
import { Button, Label, TextInput } from "flowbite-react"

// Importing the Link component from the react-router-dom library
import { Link } from "react-router-dom"

const SignUp = () => { // Defining the SignUp functional component

  // Rendering the JSX for the left side of the sign up page
  const leftSide = (
    <div className="flex-1">
      <Link to="/" className="font-bold dark:text-white text-4xl">
        {/* Mukund's Blog */}
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Mukund's</span>
        Blog
      </Link>
      <p className="text-sm mt-5">
        // This is a demo project. You can sign up with your email and password or with Google.
      </p>
    </div>
  )

  // Rendering the JSX for the right side of the sign up page
  const rightSide = (
    <div className="flex-1">
      <form className="flex flex-col gap-4">
        <div className="">
          <Label value="Your username" />
          <TextInput
            type="text"
            placeholder="Username"
            id="username"
          />
        </div>
        <div className="">
          <Label value="Your email" />
          <TextInput
            type="text"
            placeholder="name@company.com"
            id="email"
          />
        </div>
        <div className="">
          <Label value="Your password" />
          <TextInput
            type="text"
            placeholder="Password"
            id="password"
          />
        </div>
        <Button gradientDuoTone='purpleToPink' type="submit">
          // Sign Up
          Sign Up
        </Button>
      </form>
      <div className="flex gap-2 text-sm mt-5">
        <span>
          // Have an account?
          Have an account?
        </span>
        <Link to="/sign-in" className="text-blue-500">
          // Sign In
          Sign In
        </Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {leftSide}
        {rightSide}
      </div>
    </div>
  )
}

export default SignUp