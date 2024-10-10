import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './NavigationComponent';
import Logo from '../assets/images/SWAPI.png';

export const Dashboard: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex w-64 flex-col">
          <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 px-6 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img className="h-15 w-auto" src={Logo} alt="Your Company" />
              </div>
              <Navigation />
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  {/* Mobile menu button */}
                  <button 
                    type="button" 
                    className="lg:hidden"
                    onClick={toggleMobileMenu}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  {/* You can add search functionality here if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} fixed inset-0 z-40 bg-zinc-900`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <img className="h-8 w-auto" src={Logo} alt="Your Company" />
              <button onClick={toggleMobileMenu} className="text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Navigation isMobile={true} closeMobileMenu={() => setMobileMenuOpen(false)} />
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};