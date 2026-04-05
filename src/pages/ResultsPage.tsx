import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, Search } from "lucide-react";
import { getZipData, getResourcesForZip, generateCommunityExplanation, type Resource, type ResourceCategory, type CommunityReview } from "@/data/mockResources";
import { SD_LIBRARIES } from "@/data/sdLibraries";
import { LA_LIBRARIES } from "@/data/laLibraries";
import { FRESNO_LIBRARIES } from "@/data/fresnoLibraries";
import { getUCLinksProgramsForCity, getUCLinksResourcesForCity, getAllUCLinksPrograms } from "@/data/ucLinksPrograms";
import ResourceMap from "@/components/ResourceMap";
import ResourceList from "@/components/ResourceList";
import FilterBar from "@/components/FilterBar";
import AddResourceForm from "@/components/AddResourceForm";
import AIChatBox from "@/components/AIChatBox";
import ResourceDetailDialog from "@/components/ResourceDetailDialog";
import UCLinksSection from "@/components/UCLinksSection";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "cg_community_resources";
const REVIEWS_KEY = "cg_resource_reviews";

const ResultsPage = () => {
  const { zip } = useParams<{ zip: string }>();
  const navigate = useNavigate();
  const data = getZipData(zip || "");
  const mockResources = getResourcesForZip(zip || "");
  const cityLibraries = data.city === "San Diego" ? SD_LIBRARIES
    : data.city === "Los Angeles" ? LA_LIBRARIES
    : data.city === "Fresno" ? FRESNO_LIBRARIES
    : [];
  const baseResources = [...mockResources, ...cityLibraries];

  const [communityResources, setCommunityResources] = useState<Resource[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [reviews, setReviews] = useState<Record<string, CommunityReview[]>>(() => {
    try {
      const saved = localStorage.getItem(REVIEWS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const [showCommunity, setShowCommunity] = useState(true);
  const [activeFilters, setActiveFilters] = useState<ResourceCategory[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  // Merge reviews into resources
  const enrichResources = (resources: Resource[]) =>
    resources.map((r) => ({ ...r, reviews: reviews[r.id] || [] }));

  const allResources = showCommunity
    ? enrichResources([...baseResources, ...communityResources])
    : enrichResources(baseResources);

  const filtered = allResources.filter((r) => {
    const matchesCategory = activeFilters.length === 0 || activeFilters.includes(r.category);
    const matchesSearch = searchQuery.trim() === "" ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(communityResources));
  }, [communityResources]);

  useEffect(() => {
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const handleAddResource = (r: Resource) => {
    setCommunityResources((prev) => [...prev, r]);
    setShowAddForm(false);
  };

  const handleSelectResource = (r: Resource) => {
    setSelectedResource(r);
    setDetailOpen(true);
  };

  const handleAddReview = (resourceId: string, review: CommunityReview) => {
    setReviews((prev) => ({
      ...prev,
      [resourceId]: [...(prev[resourceId] || []), review],
    }));
    // Update selected resource so dialog shows it immediately
    if (selectedResource?.id === resourceId) {
      setSelectedResource((prev) =>
        prev ? { ...prev, reviews: [...(prev.reviews || []), review] } : prev
      );
    }
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
          <h1 className="font-display text-xl text-foreground">Comm<span className="text-primary">Pass</span></h1>
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
            <div className="mt-6 p-5 bg-muted/50 rounded-xl prose prose-sm max-w-none text-foreground animate-fade-in"
              dangerouslySetInnerHTML={{ __html: explanation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') }}
            />
          )}
        </section>

        {/* Search + Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources by name, description, or address..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <FilterBar activeFilters={activeFilters} onChange={setActiveFilters} />
              <div className="flex items-center gap-2">
                <Switch
                  id="community-toggle"
                  checked={showCommunity}
                  onCheckedChange={setShowCommunity}
                />
                <Label htmlFor="community-toggle" className="text-sm text-muted-foreground cursor-pointer">
                  Community places
                </Label>
              </div>
            </div>
            <button onClick={() => setShowAddForm(!showAddForm)} className="btn-accent text-sm py-2 px-4">
              + Add a Resource
            </button>
          </div>
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

        {/* Resource Map + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className={detailOpen && selectedResource ? "lg:col-span-3" : "lg:col-span-3"}>
            <ResourceMap
              center={[data.lat, data.lng]}
              resources={filtered}
              selected={selectedResource}
              onSelect={handleSelectResource}
            />
          </div>
          <div className="lg:col-span-2 relative">
            {detailOpen && selectedResource ? (
              <ResourceDetailDialog
                resource={selectedResource}
                open={detailOpen}
                onOpenChange={setDetailOpen}
                onAddReview={handleAddReview}
              />
            ) : (
              <ResourceList
                resources={filtered}
                selected={selectedResource}
                onSelect={handleSelectResource}
              />
            )}
          </div>
        </div>

        {/* Community Submissions */}
        {communityResources.length > 0 && showCommunity && (
          <section>
            <h3 className="font-display text-xl text-foreground mb-4">🌟 From the Community</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {communityResources.map((r) => (
                <button
                  key={r.id}
                  onClick={() => handleSelectResource(r)}
                  className="card-soft border-l-4 border-l-accent text-left hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Community Submitted</span>
                  <h4 className="font-semibold text-foreground mt-1">{r.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
                  {r.communityNote && (
                    <p className="text-sm italic text-muted-foreground mt-2 border-t border-border pt-2">
                      "{r.communityNote}"
                    </p>
                  )}
                </button>
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
