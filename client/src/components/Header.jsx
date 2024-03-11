import { Button, Navbar, TextInput } from "flowbite-react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon } from "react-icons/fa"

// Define the Header component
const Header = () => {
  // Get the current pathname from the location object
  const path = useLocation().pathname;

  // Render the Navbar component with the following structure
  return (
    <Navbar className="border-b-2">
      {/* Render the brand link with a gradient background and the site title */}
      <Link to='/' className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Mukund's</span>
        Blog
      </Link>
      {/* Render a hidden search form for large screens */}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      {/* Render a search button for small screens */}
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* Render a flex container with a gap between elements */}
      <div className="flex gap-2 md:order-2">
        {/* Render a gray button with a moon icon */}
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        {/* Render a link to the sign-in page with a gradient button */}
        <Link to='/sign-in'>
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        {/* Render the Navbar.Toggle component */}
        <Navbar.Toggle />
      </div>

      {/* Render the Navbar.Collapse component with the following Navbar.Link components */}
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'} >
          <Link to='/about'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

// Export the Header component
export default Header