import { BrowserRouter } from "react-router-dom";

import Link from "./components/link";

function App() {
  return (
    <BrowserRouter>
      <Link href="/demo" />
    </BrowserRouter>
  );
}

export default App;
