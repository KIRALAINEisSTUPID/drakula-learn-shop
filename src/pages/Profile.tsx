import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Student",
    joinDate: "January 2024",
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto bg-dracula-current border-dracula-purple">
        <CardHeader>
          <CardTitle className="text-3xl text-dracula-purple">Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-dracula-purple flex items-center justify-center">
              <span className="text-4xl text-dracula-background">{user.name[0]}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-dracula-purple pb-2">
              <span className="text-dracula-pink">Name</span>
              <span className="text-dracula-foreground">{user.name}</span>
            </div>
            <div className="flex justify-between items-center border-b border-dracula-purple pb-2">
              <span className="text-dracula-pink">Email</span>
              <span className="text-dracula-foreground">{user.email}</span>
            </div>
            <div className="flex justify-between items-center border-b border-dracula-purple pb-2">
              <span className="text-dracula-pink">Role</span>
              <span className="text-dracula-foreground">{user.role}</span>
            </div>
            <div className="flex justify-between items-center border-b border-dracula-purple pb-2">
              <span className="text-dracula-pink">Member Since</span>
              <span className="text-dracula-foreground">{user.joinDate}</span>
            </div>
          </div>
          <Button className="w-full mt-6 bg-dracula-purple hover:bg-dracula-pink text-dracula-background">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;