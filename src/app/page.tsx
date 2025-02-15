import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  FileText,
  FlaskRoundIcon as Flask,
  GraduationCap,
  Leaf,
  Microscope,
  Search,
  Sprout,
  Upload,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="responsive-container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">PlantID</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
            <Button asChild>
              <Link href="/analyze">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-green-50 py-20">
          <div className="responsive-container relative z-10">
            <div className="mx-auto max-w-[800px] space-y-8 text-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm font-medium text-green-600">
                  <Sprout className="h-4 w-4" />
                  <span>POWERED BY AI</span>
                  {/* <span>POWERED BY GEMINI AI</span> */}
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Discover and Learn About
                  <span className="block text-green-600">Any Plant</span>
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                  Upload a photo and instantly get detailed information about
                  plants, their properties, and research opportunities.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                {/* <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Upload className="mr-2 h-5 w-5" />
                  Analyze Plant
                </Button> */}
                <Link href="/analyze">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Upload className="mr-2 h-5 w-5" />
                    Analyze Plant
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-white">
          <div className="responsive-container py-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">10k+</div>
              <div className="text-sm text-muted-foreground">
                Plants Analyzed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">5k+</div>
              <div className="text-sm text-muted-foreground">
                Species Database
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">98%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-muted-foreground">
                Instant Analysis
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="responsive-container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Plant Analysis
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about any plant
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full w-12 h-12 bg-green-100 flex items-center justify-center">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Detailed Identification
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    Common Names
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    Scientific Classification
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    African Traditional Names
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full w-12 h-12 bg-green-100 flex items-center justify-center">
                  <Flask className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Medicinal Properties
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    Traditional Uses
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    Modern Applications
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    Health Benefits
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full w-12 h-12 bg-green-100 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Research Topics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    Academic Research Areas
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    Study Opportunities
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-4 w-4 mr-2 text-green-600" />
                    PDF Report Generation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-slate-50 py-24">
          <div className="responsive-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground">
                Three simple steps to analyze any plant
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 rounded-full w-16 h-16 bg-green-100 flex items-center justify-center mx-auto">
                  <Upload className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Upload Photo</h3>
                <p className="text-sm text-muted-foreground">
                  Take or upload a clear photo of any plant you want to identify
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 rounded-full w-16 h-16 bg-green-100 flex items-center justify-center mx-auto">
                  <Microscope className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI instantly analyzes and identifies the plant species
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 rounded-full w-16 h-16 bg-green-100 flex items-center justify-center mx-auto">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Get Report</h3>
                <p className="text-sm text-muted-foreground">
                  Download detailed PDF report with all plant information
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="responsive-container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about the Plant Analysis Tool
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What types of plants can I analyze?
                </AccordionTrigger>
                <AccordionContent>
                  You can analyze any plant species by uploading a clear photo.
                  The tool works best with well-lit images that show the
                  plant&apos;s distinctive features like leaves, flowers, or
                  fruits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How accurate is the plant identification?
                </AccordionTrigger>
                <AccordionContent>
                  Our tool uses Google&apos;s Gemini AI technology for accurate
                  plant identification. While highly reliable, we recommend
                  cross-referencing with other sources for critical
                  applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What information is included in the PDF report?
                </AccordionTrigger>
                <AccordionContent>
                  The PDF report includes detailed identification (common name,
                  scientific name, African names), plant description, medicinal
                  properties, traditional uses, and suggested research topics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I use this tool for research purposes?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! The tool is designed to support academic research with
                  detailed information and suggested research topics. It&apos;s
                  particularly useful for students in botany, medicine, and
                  related fields.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}
