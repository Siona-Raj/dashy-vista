import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, BarChart3 } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-card shadow-card-hover border-border">
        <CardContent className="p-8 text-center space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">SentinelMind</h1>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            <Button
              onClick={() => navigate('/report')}
              className="w-full h-16 text-lg font-semibold bg-gradient-primary hover:opacity-90 shadow-button transition-all duration-300 rounded-xl"
              size="lg"
            >
              <FileText className="w-6 h-6 mr-3" />
              Report
            </Button>
            
            <Button
              onClick={() => navigate('/graph')}
              className="w-full h-16 text-lg font-semibold bg-gradient-primary hover:opacity-90 shadow-button transition-all duration-300 rounded-xl"
              size="lg"
            >
              <BarChart3 className="w-6 h-6 mr-3" />
              Graph
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Landing;