import { Router } from "./Router"
import { client } from './lib/apollo'
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Footer } from "./components/Footer"


function App() {
 return (
  <div>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
    <Footer />
  </div>
 )
}

export default App
