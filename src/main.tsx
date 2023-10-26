import App from './App';
import ReactDOM from 'react-dom';

setTimeout(() => {
    ReactDOM.render(
        <App />,
        document.getElementsByClassName("right-bar")[0]
    )
}, 3000)

