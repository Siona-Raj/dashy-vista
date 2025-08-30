import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Network, GitBranch } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Graph = () => {
  const [isSOCMode, setIsSOCMode] = useState(false);
  const navigate = useNavigate();

  const SimpleGraph = () => (
  <div className="relative w-full h-96 bg-gradient-card rounded-lg border border-border p-4 overflow-auto">
    <svg viewBox="0 0 900 200" className="w-full h-full min-w-[700px]">
      <defs>
        <marker id="arrowhead-simple" markerWidth="10" markerHeight="7" 
          refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="hsl(200 100% 60%)" />
        </marker>
      </defs>

      {/* Entry */}
      <rect x="50" y="70" width="140" height="60" rx="8"
        fill="hsl(220 13% 16%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
      <text x="120" y="95" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="14" fontWeight="bold">Entry</text>
      <text x="120" y="112" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="11">User Access</text>

      {/* System */}
      <rect x="280" y="70" width="140" height="60" rx="8"
        fill="hsl(220 13% 16%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
      <text x="350" y="95" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="14" fontWeight="bold">System</text>
      <text x="350" y="112" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="11">Exploited</text>

      {/* Data */}
      <rect x="510" y="70" width="140" height="60" rx="8"
        fill="hsl(220 13% 16%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
      <text x="580" y="95" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="14" fontWeight="bold">Data</text>
      <text x="580" y="112" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="11">Compromised</text>

      {/* Exit */}
      <rect x="740" y="70" width="140" height="60" rx="8"
        fill="hsl(220 13% 16%)" stroke="hsl(0 84.2% 60.2%)" strokeWidth="2" />
      <text x="810" y="95" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="14" fontWeight="bold">Exit</text>
      <text x="810" y="112" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="11">Exfiltration</text>

      {/* Arrows */}
      <line x1="190" y1="100" x2="280" y2="100"
        stroke="hsl(200 100% 60%)" strokeWidth="2" markerEnd="url(#arrowhead-simple)" />
      <line x1="420" y1="100" x2="510" y2="100"
        stroke="hsl(200 100% 60%)" strokeWidth="2" markerEnd="url(#arrowhead-simple)" />
      <line x1="650" y1="100" x2="740" y2="100"
        stroke="hsl(0 84.2% 60.2%)" strokeWidth="2" markerEnd="url(#arrowhead-simple)" />

      {/* Labels above arrows */}
      <text x="235" y="60" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="11">Access</text>
      <text x="465" y="60" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="11">Exploit</text>
      <text x="695" y="60" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="11">Exfiltrate</text>
    </svg>
  </div>
);


  const DetailedGraph = () => (
    <div className="relative w-full h-96 bg-gradient-card rounded-lg border border-border p-4 overflow-auto">
      <svg viewBox="0 0 1000 400" className="w-full h-full min-w-[800px]">
        <defs>
          <marker id="arrowhead-detailed" markerWidth="10" markerHeight="7" 
            refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(200 100% 60%)" />
          </marker>
        </defs>
        
        {/* Initial Access */}
        <rect x="50" y="50" width="120" height="60" rx="8" fill="hsl(220 13% 16%)" stroke="hsl(200 100% 60%)" strokeWidth="2"/>
        <text x="110" y="75" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="12" fontWeight="bold">Initial Access</text>
        <text x="110" y="90" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="10">T1078</text>
        
        {/* Credential Access */}
        <rect x="250" y="50" width="120" height="60" rx="8" fill="hsl(220 13% 16%)" stroke="hsl(200 100% 60%)" strokeWidth="2"/>
        <text x="310" y="75" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="12" fontWeight="bold">Credential Access</text>
        <text x="310" y="90" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="10">T1003</text>
        
        {/* Lateral Movement */}
        <rect x="450" y="50" width="120" height="60" rx="8" fill="hsl(220 13% 16%)" stroke="hsl(200 100% 60%)" strokeWidth="2"/>
        <text x="510" y="75" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="12" fontWeight="bold">Lateral Movement</text>
        <text x="510" y="90" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="10">T1021</text>
        
        {/* Privilege Escalation */}
        <rect x="250" y="200" width="120" height="60" rx="8" fill="hsl(220 13% 16%)" stroke="hsl(25 100% 60%)" strokeWidth="2"/>
        <text x="310" y="225" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="12" fontWeight="bold">Privilege Escalation</text>
        <text x="310" y="240" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="10">T1055</text>
        
        {/* Data Exfiltration */}
        <rect x="650" y="125" width="120" height="60" rx="8" fill="hsl(220 13% 16%)" stroke="hsl(0 84.2% 60.2%)" strokeWidth="2"/>
        <text x="710" y="150" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="12" fontWeight="bold">Exfiltration</text>
        <text x="710" y="165" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="10">T1041</text>
        
        {/* Command & Control */}
        <rect x="450" y="200" width="120" height="60" rx="8" fill="hsl(220 13% 16%)" stroke="hsl(300 100% 60%)" strokeWidth="2"/>
        <text x="510" y="225" textAnchor="middle" fill="hsl(210 40% 98%)" fontSize="12" fontWeight="bold">Command & Control</text>
        <text x="510" y="240" textAnchor="middle" fill="hsl(215 20.2% 65.1%)" fontSize="10">T1071</text>
        
        {/* Arrows */}
        <line x1="170" y1="80" x2="250" y2="80" stroke="hsl(200 100% 60%)" strokeWidth="2" markerEnd="url(#arrowhead-detailed)"/>
        <line x1="370" y1="80" x2="450" y2="80" stroke="hsl(200 100% 60%)" strokeWidth="2" markerEnd="url(#arrowhead-detailed)"/>
        <line x1="310" y1="110" x2="310" y2="200" stroke="hsl(25 100% 60%)" strokeWidth="2" markerEnd="url(#arrowhead-detailed)"/>
        <line x1="370" y1="230" x2="450" y2="230" stroke="hsl(300 100% 60%)" strokeWidth="2" markerEnd="url(#arrowhead-detailed)"/>
        <line x1="570" y1="80" x2="650" y2="155" stroke="hsl(0 84.2% 60.2%)" strokeWidth="2" markerEnd="url(#arrowhead-detailed)"/>
        <line x1="570" y1="230" x2="650" y2="155" stroke="hsl(0 84.2% 60.2%)" strokeWidth="2" markerEnd="url(#arrowhead-detailed)"/>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-foreground hover:bg-accent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-muted-foreground">Normal</span>
            <Switch
              checked={isSOCMode}
              onCheckedChange={setIsSOCMode}
              className="data-[state=checked]:bg-primary"
            />
            <span className="text-sm text-muted-foreground">SOC Analyst</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Attack Graph</h1>
        </div>

        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              {isSOCMode ? <GitBranch className="w-5 h-5 mr-2 text-primary" /> : <Network className="w-5 h-5 mr-2 text-primary" />}
              {isSOCMode ? "MITRE ATT&CK Kill Chain Analysis" : "Simple Attack Flow"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSOCMode ? <DetailedGraph /> : <SimpleGraph />}
          </CardContent>
        </Card>

        {isSOCMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-primary">Initial Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Valid accounts compromise detected through suspicious login patterns</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-orange-400">Privilege Escalation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Process injection techniques used to elevate privileges</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-red-400">Data Exfiltration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Sensitive data transferred through encrypted channels</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Graph;