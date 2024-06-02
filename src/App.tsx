import './App.css'
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'

function App() {

  return (
    <>
      <main className='overflow-hidden'>
        <Router>
          <Routes>             
            <Route path="/" element={<Layout />}>
              <Route path='' element={<Home/>} />
            </Route>
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
