import Home from './components/home';
import News from "./components/news"
import { ConfigProvider } from 'antd'
const App = () => {
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: '#eb2f96' } }}>
        <Home ></Home>
        <News id={1}></News>
      </ConfigProvider >
    </>
  )
}

export default App
