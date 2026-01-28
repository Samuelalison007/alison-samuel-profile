import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Financial Sophistication
 * - Deep slate blue (#1a3a52) and warm gold (#d4a574) color palette
 * - Generous whitespace and asymmetric layouts
 * - Subtle animations on scroll and hover
 * - Poppins for headings, Inter for body text
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">AS</div>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          <a
            href="https://www.linkedin.com/in/alison-samuel-ab26a0210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Alison Samuel
              </h1>
              <p className="text-xl text-white/90 font-light">
                MBA Finance | Leadership & Financial Expertise
              </p>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              Passionate about financial excellence, strategic decision-making, and driving operational
              impact. Currently Finance Assistant at Greenwich Students' Union with proven expertise in
              index governance, financial analysis, and stakeholder collaboration.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8"
              >
                <Download size={18} className="mr-2" />
                Resume
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center">
              <img
                src="/images/profile-accent.png"
                alt="Profile Accent"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                  About Me
                </span>
                <div className="h-1 w-12 bg-accent mt-2" />
              </div>

              <h2 className="text-4xl font-bold text-primary">
                Driven by Financial Excellence & Leadership
              </h2>

              <p className="text-lg text-foreground/80 leading-relaxed">
                With an MBA in Finance from the University of Greenwich (Merit) and a Master's in Commerce
                from Pune University (Distinction), I combine rigorous academic training with real-world
                financial expertise. My journey spans from underwriting at Bajaj Finserv to leading financial
                operations at Greenwich Students' Union, where I've consistently delivered measurable impact.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm passionate about index governance, financial reconciliation, process improvement, and
                strategic stakeholder communication. My approach centers on precision, accountability, and
                collaborative problem-solving—values that have earned me recognition including the GSU Value
                Award for Courage.
              </p>

              <div className="pt-4">
                <a
                  href="https://www.gre.ac.uk/articles/bus/alisons-mba-finance-journey-leadership-real-world-finance-and-professional-growth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-primary font-semibold transition-colors group"
                >
                  Read My MBA Journey
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/10">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-foreground/70 font-medium">
                  Record in Financial Reconciliation
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-lg border border-accent/10">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <p className="text-foreground/70 font-medium">
                  Years of Professional Finance Experience
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/10">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <p className="text-foreground/70 font-medium">
                  Financial Certifications & Professional Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container">
          <div className="space-y-12">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Professional Journey
              </span>
              <h2 className="text-4xl font-bold text-primary mt-4">Experience</h2>
            </div>

            <div className="space-y-8">
              {/* Current Role */}
              <div className="border-l-4 border-accent pl-8 py-4 hover:bg-white/50 transition-colors rounded-r-lg pr-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Finance Assistant</h3>
                    <p className="text-accent font-semibold">Greenwich Students' Union</p>
                  </div>
                  <span className="text-sm text-foreground/60 bg-accent/10 px-3 py-1 rounded-full">
                    Sept 2024 - Present
                  </span>
                </div>
                <p className="text-foreground/80 mb-4">London, United Kingdom</p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      Index Governance Support & Compliance: Managed high-volume financial operations and
                      governance documentation for £4M+ transactions, maintaining 100% accuracy record
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      Process Management & Improvement: Processed and reconciled invoices, payments, and
                      refunds using financial software systems (Twinfield, Basecone)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      Data Analysis & Reporting: Generated and updated financial reports on daily, weekly,
                      and monthly basis to support operational decision-making
                    </span>
                  </li>
                </ul>
              </div>

              {/* Previous Role */}
              <div className="border-l-4 border-primary/30 pl-8 py-4 hover:bg-white/50 transition-colors rounded-r-lg pr-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Assistant Manager – Underwriting</h3>
                    <p className="text-primary/70 font-semibold">Bajaj Finserv, India</p>
                  </div>
                  <span className="text-sm text-foreground/60 bg-primary/10 px-3 py-1 rounded-full">
                    Aug 2021 - April 2022
                  </span>
                </div>
                <p className="text-foreground/80 mb-4">Pune, India</p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <span className="text-primary/50 mr-3 mt-1">•</span>
                    <span>
                      Regulatory Compliance & Judgment: Applied sound judgment to assess financial portfolios
                      and ensure compliance with underwriting standards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary/50 mr-3 mt-1">•</span>
                    <span>
                      Stakeholder Coordination: Managed client portfolio updates and changes with multiple
                      internal and external stakeholders
                    </span>
                  </li>
                </ul>
              </div>

              {/* MBA Role */}
              <div className="border-l-4 border-primary/30 pl-8 py-4 hover:bg-white/50 transition-colors rounded-r-lg pr-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">MBA Finance Student Representative</h3>
                    <p className="text-primary/70 font-semibold">University of Greenwich</p>
                  </div>
                  <span className="text-sm text-foreground/60 bg-primary/10 px-3 py-1 rounded-full">
                    2023 - 2025
                  </span>
                </div>
                <p className="text-foreground/80 mb-4">London, United Kingdom</p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <span className="text-primary/50 mr-3 mt-1">•</span>
                    <span>
                      Organized 10+ workshops on market trends and financial analysis, demonstrating strong
                      organizational and communication skills
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary/50 mr-3 mt-1">•</span>
                    <span>
                      Investment Club Member: Conducted equity research, portfolio stress-testing, and
                      comparative investment analysis
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container">
          <div className="space-y-12">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Academic Background
              </span>
              <h2 className="text-4xl font-bold text-primary mt-4">Education</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/10 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">MBA Finance</h3>
                    <p className="text-accent font-semibold">University of Greenwich</p>
                  </div>
                  <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                    Merit
                  </span>
                </div>
                <p className="text-foreground/70 mb-4">London, United Kingdom | Jan 2026</p>
                <div className="space-y-2 text-foreground/70">
                  <p className="font-semibold text-primary">Relevant Coursework:</p>
                  <p>
                    Financial Modeling, Investment Analysis, Corporate Finance, Portfolio Management, Risk
                    Management
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-lg border border-accent/10 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Master of Commerce</h3>
                    <p className="text-accent font-semibold">Pune University</p>
                  </div>
                  <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                    Distinction
                  </span>
                </div>
                <p className="text-foreground/70 mb-4">Pune, India | June 2022</p>
                <div className="space-y-2 text-foreground/70">
                  <p className="font-semibold text-primary">Relevant Coursework:</p>
                  <p>Finance & Risk Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container">
          <div className="space-y-12">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Expertise
              </span>
              <h2 className="text-4xl font-bold text-primary mt-4">Core Competencies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Index Governance & Compliance</h3>
                <p className="text-foreground/70">
                  Audit Trail Maintenance, Regulatory Compliance, Policy Implementation, Detailed Record-Keeping,
                  Confidentiality, Financial Reconciliation, Risk Management
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Operational Excellence</h3>
                <p className="text-foreground/70">
                  Process Improvement, Project Management, Deadline Management, Meeting Preparation &
                  Documentation, Multi-tasking, Independent Deliverable Management
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Financial Markets & Data</h3>
                <p className="text-foreground/70">
                  Asset Management, Financial Benchmarks, Investment Analysis, Portfolio Management, Data Analysis,
                  Quantitative Skills, Bloomberg Terminal Proficiency
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Technology & Tools</h3>
                <p className="text-foreground/70">
                  Meeting Management Tools, Financial Software Systems (Twinfield, Basecone), Advanced Microsoft
                  Excel, Data Management Tools, Generative AI Applications
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Communication & Stakeholder</h3>
                <p className="text-foreground/70">
                  Excellent Written and Verbal Communication, Senior Stakeholder Liaison, Cross-functional Team
                  Collaboration, Multilingual (English, Hindi, Marathi)
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Professional Development</h3>
                <p className="text-foreground/70">
                  Financial Modeling & Valuation Analyst (Udemy), Bloomberg Finance Fundamentals, Bloomberg Market
                  Concepts Certification, Goldman Sachs & JPMorgan Simulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Get in Touch
              </span>
              <h2 className="text-4xl font-bold text-primary mt-4">Let's Connect</h2>
              <p className="text-lg text-foreground/70 mt-4">
                I'm always interested in discussing finance, leadership, and opportunities to create meaningful
                impact. Feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:samuelalisonl007@gmail.com"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/alison-samuel-ab26a0210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-primary px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-foreground/60 text-sm">
                London, United Kingdom | +44 7956673496
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container text-center">
          <p className="text-white/80">
            © 2026 Alison Samuel. Designed with precision and built with purpose.
          </p>
        </div>
      </footer>
    </div>
  );
}
