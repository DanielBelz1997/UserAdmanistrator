import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserManagement from "./components/UserManagement";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <UserManagement />
      </div>
    </QueryClientProvider>
  );
}

export default App;
