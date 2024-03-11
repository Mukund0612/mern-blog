import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { About, Dashboard, Home, SignIn, SignUp } from './pages/pages';
import Projects from './pages/Projects';
import Header from './components/Header';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'>
          <Route Index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App