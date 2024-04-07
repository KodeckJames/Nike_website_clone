import React from 'react'

import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections'

import Nav from './components/Nav'

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className=" xl:padding-l wide:padding-r padding-b bg-gradient-to-b from-slate-100 via-yellow-400 to-slate-100">
        <Hero/>
      </section>
      <section className="padding bg-gradient-to-t from-slate-100 via-yellow-400 to-slate-100">
        <PopularProducts/> 
      </section>
      <section className="padding bg-gradient-to-b from-slate-100 via-yellow-400 to-orange-100">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10 bg-gradient-to-t from-yellow-300 via-yellow-400 to-yellow-300">
        <Services/>
      </section>
      <section className="padding bg-gradient-to-b from-slate-100 via-yellow-400 to-slate-100">
        <SpecialOffer/>
      </section>
      <section className="bg-pale-blue padding bg-gradient-to-t  from-slate-100 via-yellow-400 to-slate-100">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full bg-gradient-to-b from-slate-100 via-yellow-400 to-orange-400">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8 ">
        <Footer/>
      </section>
  </main>
  )
}

export default App