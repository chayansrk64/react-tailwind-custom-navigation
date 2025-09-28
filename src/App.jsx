import NavBar from './components/NavBar/NavBar'
import './App.css'
import PricingOptions from './components/PricingOptions/PricingOptions'
import { Suspense } from 'react'
import ResultsChart from './components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'


const pricingPromise = fetch('pricing.json').then(res => res.json());
const marksPromise = axios.get('marksData.json');



function App() {

  return (
    <>
       <header>
         <NavBar></NavBar>
       </header>

       <main>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          </Suspense>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
             <MarksChart marksPromise={marksPromise}></MarksChart>
          </Suspense>
          <ResultsChart></ResultsChart>
       </main>
    </>
  )
}

export default App
