import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Compass, BookOpen, Users, Wifi, GraduationCap, ArrowRight, Heart, Sparkles, Database } from "lucide-react";
import { getAllUCLinksPrograms } from "@/data/ucLinksPrograms";
import logo from "@/assets/logo.png";
import { lookupCityToZip } from "@/data/mockResources";
import UCLinksSection from "@/components/UCLinksSection";

const Index = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const allPrograms = getAllUCLinksPrograms();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    
    // Check if it's a ZIP code (all digits, 5 chars)
    if (/^\d{5}$/.test(trimmed)) {
      navigate(`/results/${trimmed}`);
      return;
    }
    
    // Try city name lookup
    const zip = lookupCityToZip(trimmed);
    if (zip) {
      navigate(`/results/${zip}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-light via-pink-light/40 to-yellow-light/60" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-light rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-light rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-light rounded-full blur-3xl opacity-40" />
        
        <div className="section-container relative py-20 sm:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
              <Compass className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Community · Environment · Education</span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src={logo} alt="CommPass logo" className="w-14 h-14 sm:w-20 sm:h-20" />
              <h1 className="font-display text-5xl sm:text-7xl text-foreground leading-tight">
                Comm<span className="text-primary">Pass</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">
              Finding Common Ground Within Our Communities
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-lg mx-auto">
              Discover environmental data and nearby educational resources for your California community — all in one place.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by city, ZIP, or neighborhood"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-lg shadow-sm"
                />
              </div>
              <button type="submit" className="btn-primary flex items-center justify-center gap-2 py-4 text-lg">
                Explore <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              Try: National City · Oakland · Fresno · 90011 · 92113
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "Community Insights", desc: "Understand environmental burdens in your neighborhood with clear, accessible data.", color: "bg-blue-light text-primary" },
            { icon: Wifi, title: "Resource Map", desc: "Find libraries, Wi-Fi spots, tutoring, and tech access near you.", color: "bg-pink-light text-secondary" },
            { icon: Users, title: "Community Voice", desc: "Share and discover resources from your neighbors.", color: "bg-yellow-light text-accent-foreground" },
          ].map((f) => (
            <div key={f.title} className="card-soft flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UC Links */}
      <section className="bg-blue-light/40 py-16">
        <div className="section-container">
          <UCLinksSection programs={[]} allPrograms={allPrograms} />
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-secondary" />
            <h2 className="font-display text-3xl text-foreground">Why This Matters</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In California, the communities most burdened by pollution are often the same ones with the least access to quality education, technology, and support services. This isn't a coincidence — it's a pattern rooted in decades of disinvestment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">CommPass</strong> exists to make the invisible visible. By mapping environmental data alongside community resources, we empower residents to advocate for themselves and connect to the support they deserve.
          </p>
        </div>
      </section>

      {/* Where Do We Get Our Data? */}
      <section className="bg-muted/40 py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl text-foreground">Where Do We Get Our Data?</h2>
            </div>
            <p className="text-muted-foreground">
              Our environmental data comes from <strong className="text-foreground">CalEnviroScreen 5.0</strong>, a tool developed by the California Office of Environmental Health Hazard Assessment (OEHHA). It identifies communities most affected by pollution and vulnerability using 21 indicators across pollution burden and population characteristics.
            </p>
          </div>
          <div className="card-soft max-w-4xl mx-auto">
            <h3 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
              🗺️ CalEnviroScreen 5.0 — Environmental Burden Map
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Explore environmental health data for communities across California. This interactive map shows pollution burden and population vulnerability by census tract.
            </p>
            <div className="rounded-xl overflow-hidden border border-border" style={{ height: "500px" }}>
              <iframe
                src="https://experience.arcgis.com/experience/8c5c5c91ebb8481a8a3d92c897faf8ed/page/Overall-Results"
                title="CalEnviroScreen 5.0"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              <a
                href="https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-40"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary font-semibold hover:underline"
              >
                Learn more about CalEnviroScreen →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 bg-card">
        <div className="section-container text-center text-sm text-muted-foreground">
          <p className="font-display text-base text-foreground mb-1">CommPass</p>
          <p>Finding Common Ground Within Our Communities 💛</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
