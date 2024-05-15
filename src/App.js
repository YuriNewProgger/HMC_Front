import './App.css';
import { AppRoute } from './route/AppRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


function App() {
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRoute/>
      </QueryClientProvider>      
    </div>
  );
}

export default App;
