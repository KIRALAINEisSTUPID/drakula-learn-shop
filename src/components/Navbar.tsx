import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border-b border-dracula-current">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-dracula-purple hover:text-dracula-pink transition-colors">
            School Portal
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/store">
              <Button variant="ghost" className="text-dracula-foreground hover:text-dracula-pink">Store</Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" className="text-dracula-foreground hover:text-dracula-pink">Profile</Button>
            </Link>
            <Link to="/login">
              <Button className="bg-dracula-purple hover:bg-dracula-pink text-dracula-background">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};