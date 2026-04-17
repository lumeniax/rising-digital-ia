import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-950 to-black">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-yellow-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-blue-900 mb-2">404</h1>

          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Page Introuvable
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas.
            <br />
            Elle a peut-être été déplacée ou supprimée.
          </p>

          <Button
            onClick={() => setLocation("/")}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Home className="w-4 h-4 mr-2" />
            Retour à l'Accueil
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
