import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

export const ProductCard = ({ title, description, price, image }: ProductCardProps) => {
  return (
    <Card className="bg-dracula-current border-dracula-purple">
      <CardHeader>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <CardTitle className="text-dracula-pink">{title}</CardTitle>
        <CardDescription className="text-dracula-foreground/80">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-dracula-green">${price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-dracula-purple hover:bg-dracula-pink text-dracula-background">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};