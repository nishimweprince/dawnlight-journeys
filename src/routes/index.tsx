import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home/Home'
import CountryDetails from '@/pages/CountryDetails'
import RegionDetails from '@/pages/RegionDetails'
import About from '@/pages/About'
import NotFoundPage from '@/pages/non-functional/NotFoundPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/africa/:country" element={<CountryDetails />} />
      <Route path="/africa/:country/:region" element={<RegionDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes;
