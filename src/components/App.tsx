import { BrowserRouter, Routes, Route } from "react-router-dom";
import BadGate from "./BadGate";
import ErrorBoundary from "./ErrorBoundary";
import MainPage from "./MainPage";
import Settings from "./Settings";

function App() {
  return (
    <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        <Route path="" element={<MainPage />} />
{/*         <Route path="/settings" element={user ? <Settings /> : <BadGate />} />
 */}        <Route path="*" element={<BadGate />} />
      </Routes>
    </ErrorBoundary>
  </BrowserRouter >
  );
}

export default App;
