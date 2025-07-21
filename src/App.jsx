// Import Outlet to render child routes in the layout
import { Outlet } from "react-router-dom";

// Import the navigation bar component
import Navbar from "./components/Navbar";

// Import Redux Provider to supply the store to the entire app
import { Provider } from "react-redux";

// Import the Redux store configuration
import store from "./redux/store.js";

// App component serves as the root layout for all pages
function App() {
  return (
    <>
      {/* Wrap the entire app with Redux Provider to give access to the store */}
      <Provider store={store}>

        {/* Display the navigation bar on all pages */}
        <Navbar />

        {/* Render the matched child route component here */}
        <Outlet />
        
      </Provider>
    </>
  );
}

// Export the App component to be used in router setup
export default App;
