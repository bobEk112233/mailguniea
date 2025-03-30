
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 border-b border-border bg-background">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-2xl font-bold text-mailpunch-600">MailPunch</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-foreground hover:text-mailpunch-500 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-foreground hover:text-mailpunch-500 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-foreground hover:text-mailpunch-500 transition-colors">
            About
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex">
            Log In
          </Button>
          <Button className="bg-mailpunch-600 hover:bg-mailpunch-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
