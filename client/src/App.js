import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from './pages/Home';
import Project from './pages/Project'
import NotFound from './pages/NotFound';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'https://cocoon-api.onrender.com/graphql',
  // 'http://localhost:5000/graphql'
  cache: cache,
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project /> } />
              {/* Leave this at the end */}
              <Route path="*" element={<NotFound /> } />
            </Routes>
          </div>
      </ApolloProvider>
    </>
  );
}

export default App;
