import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { 
  Brain, 
  FileText, 
  Search, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Proposal Generator",
      description: "Generate professional proposals using Google Gemini AI. Input project brief and portfolio to get structured proposals with scope, timeline, and cost estimates.",
      color: "bg-blue-500",
      available: true
    },
    {
      icon: FileText,
      title: "Structured Proposal Output",
      description: "Get well-formatted proposals with project summary, scope of work, assumptions, timeline, budget estimates, and risk analysis.",
      color: "bg-green-500",
      available: true
    },
    {
      icon: Search,
      title: "Job Matching Functionality",
      description: "Smart algorithm to match your skills and experience with relevant job opportunities. Find the perfect projects for your expertise.",
      color: "bg-gray-400",
      available: false
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Organize and manage your client relationships, track project progress, and maintain communication history in one place.",
      color: "bg-gray-400",
      available: false
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
              Jobless
            </span>
          </div>
          
          <Link href="/generate">
            <Button className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800">
              Get Started
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center rounded-md border px-4 py-1 text-xs font-medium mb-4">
          <Zap className="h-3 w-3 mr-1" />
          AI-Powered Career Assistant
        </div>
        
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-600 to-black bg-clip-text text-transparent">
          Your Career in Here
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Accelerate your career with AI-powered proposal generation, smart job matching, 
          and personalized career insights. Find your next opportunity today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/generate">
            <Button size="lg" className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-lg px-8 py-6">
              Start Generating Proposals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Watch Demo
          </Button>
        </div>


      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-md border px-4 py-1 text-xs font-medium mb-4">
            <CheckCircle className="h-3 w-3 mr-1" />
            Features
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Everything You Need for Career Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and AI-powered insights to accelerate your professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`group transition-all duration-300 border-0 shadow-md ${feature.available ? 'hover:shadow-xl' : 'opacity-75'}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center ${feature.available ? 'group-hover:scale-110' : ''} transition-transform`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {!feature.available && (
                    <div className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                      Coming Soon
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-gray-800 to-black rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who are already using Jobless to land their dream jobs
          </p>
          <Link href="/generate">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-gray-800 hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            Jobless
          </span>
        </div>
        <p className="text-gray-600">
          Made by{" "}
          <span className="font-semibold text-gray-800">Arya</span> •{" "}
          Powered by <span className="font-semibold">Google Gemini AI</span> •{" "}
          Built with <span className="font-semibold">Next.js & shadcn/ui</span>
        </p>
      </footer>
    </div>
  );
}