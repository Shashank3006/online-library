// Import the ReactDOM client to render the React application
import { createRoot } from "react-dom/client";

// Import global CSS styles
import "./index.css";

// Import the main App component
import App from "./App.jsx";

// Import routing utilities from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import React utilities for code-splitting/lazy loading
import { lazy, Suspense } from "react";

// Lazy load route components to enable code-splitting
const Home = lazy(() => import("./pages/Home.jsx"));
const BrowseBooks = lazy(() => import("./pages/BrowseBooks.jsx"));
const BookDetails = lazy(() => import("./pages/BookDetails.jsx"));
const AddBook = lazy(() => import("./pages/AddBook.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

// Define a fallback loading UI for when lazy-loaded components are still loading
const Loading = <div className="p-10 text-center text-lg">Loading...</div>;

// Define routes using React Router
const router = createBrowserRouter([
  {
    // Root route (base layout for all children)
    path: "/",
    element: <App />,

    // Fallback UI when route is not found (404)
    errorElement: (
      <App>
        <Suspense fallback={Loading}>
          <NotFound />
        </Suspense>
      </App>
    ),

    // Nested child routes rendered inside App
    children: [
      {
        // Default (index) route => "/"
        index: true,
        element: (
          <Suspense fallback={Loading}>
            <Home />
          </Suspense>
        ),
      },
      {
        // Route for browsing books by category => "/books/:category"
        path: "books/:category",
        element: (
          <Suspense fallback={Loading}>
            <BrowseBooks />
          </Suspense>
        ),
      },
      {
        // Route for individual book details => "/book/:id"
        path: "book/:id",
        element: (
          <Suspense fallback={Loading}>
            <BookDetails />
          </Suspense>
        ),
      },
      {
        // Route to add a new book => "/add"
        path: "add",
        element: (
          <Suspense fallback={Loading}>
            <AddBook />
          </Suspense>
        ),
      },
      {
        // Catch-all route for any unknown path => 404
        path: "*",
        element: (
          <Suspense fallback={Loading}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <main />
  </RouterProvider>
);
