import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; // This App is 'App.js' file.

/* createRoot method creates basicaly the main entry point of the UI we are about to build with React.
Then, it tells react where this react app shouldbe placed in the webpage.
The webpage is the index.html file in the public directory. We can find 
inside it a <div> tag contains the id=root we pull in the next line.*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
