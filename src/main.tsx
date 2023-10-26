import App from './App';
import ReactDOM from 'react-dom';


window.onload = () => {
    ReactDOM.render(
        <App />,
        document.getElementsByClassName("right-bar")[0]
    )
}
