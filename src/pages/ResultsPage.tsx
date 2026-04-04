import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getZipData, getResourcesForZip, generateCommunityExplanation, type Resource, type ResourceCategory } from "@/data/mockResources";
import ResourceMap from "@/components/ResourceMap";
import ResourceList from "@/components/ResourceList";
import FilterBar from "@/components/FilterBar";
import AddResourceForm from "@/components/AddResourceForm";
import AIChatBox from "@/components/AIChatBox";

const STORAGE_KEY = "cg_community_resources";

const ResultsPage = () => {
  const { zip } = useParams<{ zip: string }>();
  const navigate = useNavigate();
  const data = getZipData(zip || "");
  const baseResources = getResourcesForZip(zip || "");

  const [communityResources, setCommunityResources] = useState<Resource[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const allResources = [...baseResources, ...communityResources];
  const [activeFilters, setActiveFilters] = useState<ResourceCategory[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const filtered = activeFilters.length === 0
    ? allResources
    : allResources.filter((r) => activeFilters.includes(r.category));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(communityResources));
  }, [communityResources]);

  const handleAddResource = (r: Resource) => {
    setCommunityResources((prev) => [...prev, r]);
    setShowAddForm(false);
  };

  const explanation = generateCommunityExplanation(data);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="section-container flex items-center justify-between py-3">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="font-display text-xl text-foreground">Common Ground</h1>
          <div className="w-16" />
        </div>
      </header>

      <div className="section-container py-8 space-y-8">
        {/* Community Insight */}
        <section className="card-soft">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl text-foreground mb-1">
                {data.city} — ZIP {data.zip}
              </h2>
              <p className="text-muted-foreground">
                Your area is in the <strong className="text-accent">top {data.percentile}%</strong> most environmentally impacted in California.
              </p>
            </div>
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="btn-primary flex items-center gap-2 shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              {showExplanation ? "Hide Details" : "Explain My Community"}
            </button>
          </div>
          {showExplanation && (
            <div className="mt-6 p-5 bg-muted/50 rounded-xl prose prose-sm max-w-none text-foreground animate-fade-in">
              <ReactMarkdown>{explanation}</ReactMarkdown>
            </div>
          )}
        </section>

        {/* Filters + Add */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <FilterBar activeFilters={activeFilters} onChange={setActiveFilters} />
          <button onClick={() => setShowAddForm(!showAddForm)} className="btn-accent text-sm py-2 px-4">
            + Add a Resource
          </button>
        </div>

        {showAddForm && (
          <AddResourceForm
            center={{ lat: data.lat, lng: data.lng }}
            onSubmit={handleAddResource}
            onCancel={() => setShowAddForm(false)}
          />
        )}

        {/* CalEnviroScreen Map */}
        <section className="card-soft">
          <h3 className="font-display text-xl text-foreground mb-3 flex items-center gap-2">
            🗺️ CalEnviroScreen 5.0 — Environmental Burden Map
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Explore environmental health data for communities across California. This map shows pollution burden and population vulnerability by census tract.
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
        </section>

        {/* Resource Map + List */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <ResourceMap
              center={[data.lat, data.lng]}
              resources={filtered}
              selected={selectedResource}
              onSelect={setSelectedResource}
            />
          </div>
          <div className="lg:col-span-2">
            <ResourceList
              resources={filtered}
              selected={selectedResource}
              onSelect={setSelectedResource}
            />
          </div>
        </div>

        {/* Community Submissions */}
        {communityResources.length > 0 && (
          <section>
            <h3 className="font-display text-xl text-foreground mb-4">🌟 From the Community</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {communityResources.map((r) => (
                <div key={r.id} className="card-soft border-l-4 border-l-accent">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Community Submitted</span>
                  <h4 className="font-semibold text-foreground mt-1">{r.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
                  {r.communityNote && (
                    <p className="text-sm italic text-muted-foreground mt-2 border-t border-border pt-2">
                      "{r.communityNote}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* AI Chat */}
      <AIChatBox />
    </div>
  );
};

export default ResultsPage;
