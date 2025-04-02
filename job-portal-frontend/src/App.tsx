import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import './App.css'
import LandingPage from './pages/LandingPage'
import PostedJobs from './pages/PostedJobs'
import PostedJobPage from './pages/PostedJobPage'
import ApplyJobForm from './pages/ApplyJobForm'
import PortfolioPage from './pages/PortfolioPage'
import CompanyInfo from './pages/CompanyInfo'
import ViewJob from './pages/ViewJob'
import PostJobForm from './pages/PostJobForm'
import FindTalentPageWithData from './pages/FindTalentPage'
import FindJob from './pages/FindJob'
import SavedJobs from './pages/SavedJobs'
import CompaniesPage from './pages/CompanyPage'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "*" element = {<LandingPage />} />
        <Route path = "/auth" element = {<AuthPage />} />
        <Route path = "/posted-jobs" element = {<PostedJobs />} />
        <Route path = "/posted-job/:id" element = {<PostedJobPage />} />
        <Route path="/apply" element={<ApplyJobForm />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/company" element={<CompanyInfo />} />
        <Route path="/view-job" element={<ViewJob />} />
        <Route path="/post" element={<PostJobForm />} />
        <Route path = "/find-job" element = {<FindJob />} />
        <Route path = "/saved-job" element = {<SavedJobs />} />
        <Route path = "/companies" element = {<CompaniesPage />} />
        <Route path = "/find-talent" element = {<FindTalentPageWithData />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
