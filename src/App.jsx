import NavBar from './components/NavBar/NavBar'
import './App.css'
import PricingOptions from './components/PricingOptions/PricingOptions'
import { Suspense } from 'react'


const pricingPromise = fetch('pricing.json').then(res => res.json())



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
       </main>
    </>
  )
}

export default App
