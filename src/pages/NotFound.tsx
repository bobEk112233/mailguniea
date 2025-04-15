
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NotFound = () => {
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Show a toast notification
    toast({
      title: "Page Not Found",
      description: `The page ${location.pathname} doesn't exist.`,
      variant: "destructive"
    });
  }, [location.pathname, toast]);

  return (
    <div className="not-found-container">
      <Logo size={80} className="mb-6" />
      <h1 className="text-5xl font-bold mb-4 text-mailguinea-600">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! This page seems to have scurried away
      </p>
      <Button 
        asChild 
        className="bg-mailguinea-600 hover:bg-mailguinea-700"
      >
        <a href="/">Return to Home</a>
      </Button>
    </div>
  );
};

export default NotFound;
