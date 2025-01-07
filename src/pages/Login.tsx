import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-dracula-current border-dracula-purple">
        <CardHeader>
          <CardTitle className="text-2xl text-dracula-purple">Login</CardTitle>
          <CardDescription className="text-dracula-foreground/80">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-dracula-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dracula-background border-dracula-purple text-dracula-foreground"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-dracula-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-dracula-background border-dracula-purple text-dracula-foreground"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-dracula-purple hover:bg-dracula-pink text-dracula-background">
              Login
            </Button>
            <p className="text-center text-dracula-foreground/80">
              Don't have an account?{" "}
              <Link to="/register" className="text-dracula-pink hover:text-dracula-purple">
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;