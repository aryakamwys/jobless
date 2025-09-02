"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function GeneratePage() {
  const [brief, setBrief] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [proposal, setProposal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!brief.trim()) {
      alert("Brief tidak boleh kosong");
      return;
    }
    if (!apiKey.trim()) {
      alert("API Key tidak boleh kosong");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({
          brief,
          portfolio: portfolio || null,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProposal(data.draft);
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setBrief("");
    setPortfolio("");
    setProposal("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Generate Proposal
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Create AI-powered proposals for your projects
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Section */}
          <div className="space-y-6">
            {/* API Key Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🔑 Konfigurasi
                </CardTitle>
                <CardDescription>
                  Masukkan API key Google Gemini Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="apikey">GEMINI_API_KEY</Label>
                  <Input
                    id="apikey"
                    type="password"
                    placeholder="Masukkan API key Anda..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Input Form Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📝 Generate Proposal
                </CardTitle>
                <CardDescription>
                  Isi brief proyek dan portofolio untuk mendapatkan proposal AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="brief">Brief Proyek Klien</Label>
                  <Textarea
                    id="brief"
                    placeholder="Contoh: Kami butuh website company profile dengan multi bahasa..."
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Ringkasan Portofolio (Opsional)</Label>
                  <Textarea
                    id="portfolio"
                    placeholder="Contoh: Saya pernah membuat landing page untuk fintech..."
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={handleGenerate} 
                    disabled={isLoading}
                    className="flex-1"
                  >
                    {isLoading ? "Generating..." : "🚀 Generate"}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleClear}
                    disabled={isLoading}
                  >
                    🗑️ Clear
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📄 Draft Proposal
                </CardTitle>
                <CardDescription>
                  Proposal yang dihasilkan oleh AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="min-h-[400px] p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 dark:border-slate-100"></div>
                    </div>
                  ) : proposal ? (
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {proposal}
                    </div>
                  ) : (
                    <div className="text-slate-500 dark:text-slate-400 italic text-center pt-16">
                      Belum ada proposal. Isi brief dan klik Generate untuk memulai.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-500 dark:text-slate-400">
          <p className="text-sm">
            Made by{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-300">Arya</span> •{" "}
            Powered by <span className="font-semibold">Google Gemini AI</span> •{" "}
            Built with <span className="font-semibold">Next.js & shadcn/ui</span>
          </p>
        </div>
      </div>
    </div>
  );
}
