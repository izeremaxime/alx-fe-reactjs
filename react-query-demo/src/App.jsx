  import React from "react";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
  import PostsComponent from "./components/PostsComponent"

  const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    );
  }

  export default App