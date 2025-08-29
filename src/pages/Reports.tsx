import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Filter } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      title: "Monthly Sales Report",
      description: "Comprehensive overview of sales performance",
      status: "Ready",
      date: "Dec 2024",
      type: "Sales"
    },
    {
      title: "User Engagement Analysis",
      description: "Detailed analysis of user behavior and engagement",
      status: "Processing",
      date: "Dec 2024",
      type: "Analytics"
    },
    {
      title: "Financial Summary",
      description: "Complete financial breakdown and insights",
      status: "Ready",
      date: "Nov 2024",
      type: "Finance"
    },
    {
      title: "Performance Metrics",
      description: "System and application performance report",
      status: "Ready",
      date: "Dec 2024",
      type: "Performance"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
            <p className="text-muted-foreground">
              Generate and download comprehensive business reports.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-gradient-primary">
              <FileText className="w-4 h-4 mr-2" />
              New Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {reports.map((report, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {report.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {report.description}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={report.status === 'Ready' ? 'default' : 'secondary'}
                    className={report.status === 'Ready' ? 'bg-emerald-100 text-emerald-800' : ''}
                  >
                    {report.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {report.date}
                    </div>
                    <Badge variant="outline">{report.type}</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled={report.status !== 'Ready'}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;