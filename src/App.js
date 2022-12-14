import Header from "./components/Header.jsx"
import { ThemeProvider } from "next-themes"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.js"

function App () {
  return(
    <ThemeProvider>
      <div className="max-w-6xl1 mx-auto p-4 space-y-24">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
      </div>
      <div>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App