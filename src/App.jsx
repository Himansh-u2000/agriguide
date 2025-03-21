import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from './layout/RootLayout'
import Home from './components/home/Home'
import AboutUs from "./pages/aboutUs/AboutUs";
import CropAdvisor from "./pages/cropAdvisor/CropAdvisor";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="advisor" element={<CropAdvisor />} />
          <Route path="agribot" element={<CropAdvisor />} />
          <Route path="about" element={<AboutUs />} />

        </Route>

        <Route path="*" element={<> Page Not Found</>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
