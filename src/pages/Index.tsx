const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-dracula-purple mb-4">Welcome to School Portal</h1>
      <p className="text-xl text-dracula-foreground/80 max-w-2xl text-center mb-8">
        Your one-stop destination for school resources, community, and supplies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="p-6 bg-dracula-current rounded-lg text-center">
          <h2 className="text-2xl font-bold text-dracula-pink mb-2">Learn</h2>
          <p className="text-dracula-foreground/80">Access educational resources and materials</p>
        </div>
        <div className="p-6 bg-dracula-current rounded-lg text-center">
          <h2 className="text-2xl font-bold text-dracula-green mb-2">Connect</h2>
          <p className="text-dracula-foreground/80">Join our vibrant student community</p>
        </div>
        <div className="p-6 bg-dracula-current rounded-lg text-center">
          <h2 className="text-2xl font-bold text-dracula-orange mb-2">Shop</h2>
          <p className="text-dracula-foreground/80">Get all your school supplies here</p>
        </div>
      </div>
    </div>
  );
};

export default Index;