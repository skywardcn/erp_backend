import RoutesList from '@/router';

import NavContainer from '@/components/nav'

import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <NavContainer></NavContainer>
      <RoutesList></RoutesList>
    </BrowserRouter>
  )
}

export default App
