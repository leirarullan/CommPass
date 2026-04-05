import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Compass, BookOpen, Users, Wifi, GraduationCap, ArrowRight, Heart, Sparkles } from "lucide-react";
import { getAllUCLinksPrograms } from "@/data/ucLinksPrograms";
import UCLinksSection from "@/components/UCLinksSection";

const Index = () => {
  const [zip, setZip] = useState("");
  const navigate = useNavigate();
  const allPrograms = getAllUCLinksPrograms();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.trim().length >= 5) {
      navigate(`/results/${zip.trim()}`);
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
            <h1 className="font-display text-5xl sm:text-7xl text-foreground mb-3 leading-tight">
              Comm<span className="text-primary">Pass</span>
            </h1>
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
                  placeholder="Enter your ZIP code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-lg shadow-sm"
                />
              </div>
              <button type="submit" className="btn-primary flex items-center justify-center gap-2 py-4 text-lg">
                Explore <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              Try: 90011 · 93706 · 92113 · 94601 · 95116
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
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl text-foreground">UC Links</h2>
            </div>
            <p className="text-muted-foreground">
              UC Links is a University of California network connecting university students with K-12 youth in underserved communities. Through after-school programs, digital literacy workshops, and mentoring, UC Links bridges the gap between higher education and the communities that need it most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { name: "UC Links Digital Storytelling Lab", city: "Los Angeles", desc: "Teens learn digital media creation, video editing, and storytelling with UC mentors." },
              { name: "UC Links Youth STEM Program", city: "Fresno", desc: "Hands-on science and coding workshops for underserved students, led by UC students." },
            ].map((p) => (
              <div key={p.name} className="card-soft">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{p.city}</span>
                <h4 className="font-display text-lg text-foreground mt-1">{p.name}</h4>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
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

      {/* Footer */}
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
