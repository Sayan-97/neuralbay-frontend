import { ClerkProvider } from "@clerk/clerk-react"
import { BrowserRouter as Router } from "react-router-dom"
import Layout from "./layouts/Layout"

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  if (!clerkPubKey) {
    throw new Error("Missing Publishable Key")
  }
  return (
    <Router>
      {/* <ClerkProvider publishableKey={clerkPubKey}> */}
        <section className='relative w-full min-h-screen flex flex-col'>
          <Layout />
        </section>
      {/* </ClerkProvider> */}
    </Router>
  )
}

export default App
