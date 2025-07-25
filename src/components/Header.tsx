import React, { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Krisp</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>AI Meeting Assistant</DropdownMenuItem>
                <DropdownMenuItem>Noise Cancellation</DropdownMenuItem>
                <DropdownMenuItem>Accent Conversion</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>For Teams</DropdownMenuItem>
                <DropdownMenuItem>For Enterprise</DropdownMenuItem>
                <DropdownMenuItem>For Developers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Company
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-indigo-600">
              Sign In
            </Button>
            <Button className="gradient-bg text-white hover:opacity-90">
              Get Started Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Products
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Solutions
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Resources
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Company
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
                <Button className="w-full gradient-bg text-white">
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}