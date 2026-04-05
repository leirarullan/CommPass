import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, Search, Edit2, LogIn, LogOut, CheckCircle2 } from "lucide-react";
import { getZipData, getResourcesForZip, generateCommunityExplanation, lookupCityToZip, type Resource, type ResourceCategory, type CommunityReview } from "@/data/mockResources";
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
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";
import { toast } from "sonner";

const STORAGE_KEY = "cg_community_resources";
const REVIEWS_KEY = "cg_resource_reviews";

const LocationSearch = ({ city, zip, percentile, onNavigate }: { city: string; zip: string; percentile: number; onNavigate: (zip: string) => void }) => {
  const [editing, setEditing] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) { setEditing(false); return; }
    if (/^\d{5}$/.test(trimmed)) {
      onNavigate(trimmed);
      setEditing(false);
      return;
    }
    const found = lookupCityToZip(trimmed);
    if (found) {
      onNavigate(found);
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={() => { if (!query.trim()) setEditing(false); }}
              placeholder="City name or ZIP code"
              className="w-full pl-9 pr-4 py-2 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-base"
            />
          </div>
          <button type="submit" className="btn-primary py-2 px-4 text-sm">Go</button>
          <button type="button" onClick={() => setEditing(false)} className="text-sm text-muted-foreground hover:text-foreground">Cancel</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => { setQuery(""); setEditing(true); }}
        className="group flex items-center gap-2 mb-1"
      >
        <h2 className="font-display text-2xl text-foreground">
          {city} — ZIP {zip}
        </h2>
        <Edit2 className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      <p className="text-muted-foreground">
        Your area is in the <strong className="text-accent">top {percentile}%</strong> most environmentally impacted in California.
      </p>
    </div>
  );
};

const ResultsPage = () => {
  const { zip } = useParams<{ zip: string }>();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const data = getZipData(zip || "");
  const mockResources = getResourcesForZip(zip || "");
  const sdAreaCities = ["San Diego", "National City", "Chula Vista", "San Ysidro"];
  const laAreaCities = ["Los Angeles", "Huntington Park", "South Gate", "Compton"];
  const cityLibraries = sdAreaCities.includes(data.city) ? SD_LIBRARIES
    : laAreaCities.includes(data.city) ? LA_LIBRARIES
    : data.city === "Fresno" ? FRESNO_LIBRARIES
    : [];
  const ucLinksResources = getUCLinksResourcesForCity(data.city);
  const ucLinksPrograms = getUCLinksProgramsForCity(data.city);
  const allUCLinksPrograms = getAllUCLinksPrograms();
  const baseResources = [...mockResources, ...cityLibraries, ...ucLinksResources];

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
  const [showOverlay, setShowOverlay] = useState(true);
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
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="font-display text-xl text-foreground">Comm<span className="text-primary">Pass</span></span>
          </button>
          <div className="w-16" />
        </div>
      </header>

      <div className="section-container py-8 space-y-8">
        {/* Community Insight */}
        <section className="card-soft">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <LocationSearch
              city={data.city}
              zip={data.zip}
              percentile={data.percentile}
              onNavigate={(newZip) => navigate(`/results/${newZip}`)}
            />
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
              <div className="flex items-center gap-2">
                <Switch
                  id="overlay-toggle"
                  checked={showOverlay}
                  onCheckedChange={setShowOverlay}
                />
                <Label htmlFor="overlay-toggle" className="text-sm text-muted-foreground cursor-pointer">
                  Pollution overlay
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

        {/* Resource Map + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className={detailOpen && selectedResource ? "lg:col-span-3" : "lg:col-span-3"}>
            <ResourceMap
              center={[data.lat, data.lng]}
              resources={filtered}
              selected={selectedResource}
              onSelect={handleSelectResource}
              percentile={data.percentile}
              showOverlay={showOverlay}
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

        {/* UC Links Programs */}
        <UCLinksSection programs={ucLinksPrograms} allPrograms={allUCLinksPrograms} />


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
