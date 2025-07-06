import { Search, ShoppingCart, User, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-header-dark text-header-text">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">STARDUCT</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Find products, categories you want..."
                className="pl-10 bg-white border-0 text-gray-900 placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Truck className="w-4 h-4" />
              <div>
                <div className="text-xs">Tracking</div>
                <div className="text-xs opacity-80">my order</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <div className="relative">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <div>
                <div className="text-xs">Your cart</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <User className="w-4 h-4" />
              <div>
                <div className="text-xs">My account</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                Introduction
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                Products
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                Projects
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                News
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                Library
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                Career
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                Contact us
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="text-white hover:bg-primary-hover text-sm">
                VIE
              </Button>
              <span className="text-white">|</span>
              <Button variant="ghost" className="text-white hover:bg-primary-hover text-sm font-bold">
                ENG
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;