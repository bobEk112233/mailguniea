
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simple diagnostic to check if the app is mounting properly
    console.log("App component mounted");
    
    // Check if the DOM is properly loaded
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      
      // Failsafe in case the load event doesn't fire
      setTimeout(() => setLoading(false), 2000);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }

    // Check for common issues
    try {
      // Test local storage (common source of errors)
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
    } catch (e) {
      setError("Browser storage error: " + (e instanceof Error ? e.message : String(e)));
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-6 max-w-md mx-auto">
          <p className="text-lg mb-4">Loading application...</p>
          <div className="h-2 w-40 mx-auto bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-mailguinea-600 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-6 max-w-md mx-auto border border-red-200 rounded-lg bg-red-50">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
          <p className="mb-4">{error}</p>
          <p className="text-sm text-gray-600 mb-4">
            If you're seeing this after DNS changes, your browser might be caching old resources.
            Try clearing your cache or opening in an incognito window.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-mailguinea-600 text-white rounded hover:bg-mailguinea-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p>Loading content...</p>
          </div>
        }>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
