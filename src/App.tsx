
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Shows from "./pages/Shows";
import Artists from "./pages/Artists";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Prices from "./pages/Prices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-dark-bg">
          <Navigation />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;