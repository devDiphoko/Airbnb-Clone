import './App.css'
import Hero from './components/Hero';
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
    </div>
  )
}