import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, Target, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const [isSOCMode, setIsSOCMode] = useState(false);
  const navigate = useNavigate();

  const normalData = {
    totalEvents: "1,247",
    indicators: "23",
    severity: "Medium",
    summary: "Your network activity shows normal patterns with some security alerts that require attention. We detected 23 potential security indicators across 1,247 monitored events. The overall risk level is Medium, suggesting routine monitoring is sufficient."
  };

  const socData = {
    mitreAttacks: ["T1078 - Valid Accounts", "T1021 - Remote Services", "T1055 - Process Injection"],
    attackPath: "Initial Access → Credential Access → Lateral Movement → Data Exfiltration",
    logEntries: [
      { timestamp: "2024-01-15 14:32:01", source: "DC01", event: "Failed login attempt - suspicious IP" },
      { timestamp: "2024-01-15 14:35:12", source: "WEB01", event: "Unusual outbound traffic detected" },
      { timestamp: "2024-01-15 14:38:45", source: "DB01", event: "Privileged account access anomaly" }
    ],
    threatLevel: "AMBER",
    recommendations: [
      "Implement additional MFA controls",
      "Monitor lateral movement patterns",
      "Review privileged account usage"
    ]
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
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
          <h1 className="text-3xl font-bold text-foreground">Security Report</h1>
        </div>

        {!isSOCMode ? (
          /* Normal Mode */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-card shadow-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-primary" />
                    Total Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{normalData.totalEvents}</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Indicators Found
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{normalData.indicators}</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                    Severity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-400">{normalData.severity}</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{normalData.summary}</p>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* SOC Analyst Mode */
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-red-400">THREAT LEVEL: {socData.threatLevel}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">MITRE ATT&CK Techniques:</h3>
                    <ul className="space-y-1">
                      {socData.mitreAttacks.map((attack, index) => (
                        <li key={index} className="text-sm text-muted-foreground font-mono">• {attack}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Attack Path:</h3>
                    <p className="text-sm text-muted-foreground font-mono">{socData.attackPath}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader>
                <CardTitle>Security Log Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socData.logEntries.map((log, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-2">
                      <div className="text-xs text-muted-foreground font-mono">{log.timestamp}</div>
                      <div className="text-sm text-foreground">
                        <span className="text-primary font-semibold">[{log.source}]</span> {log.event}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {socData.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">▶</span>
                      <span className="text-muted-foreground">{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;