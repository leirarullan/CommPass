import { type Resource, CATEGORY_ICONS } from "@/data/mockResources";
import { MapPin } from "lucide-react";

interface Props {
  resources: Resource[];
  selected: Resource | null;
  onSelect: (r: Resource) => void;
}

const ResourceList = ({ resources, selected, onSelect }: Props) => (
  <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
    {resources.length === 0 && (
      <p className="text-muted-foreground text-sm text-center py-8">No resources match your filters.</p>
    )}
    {resources.map((r) => (
      <button
        key={r.id}
        onClick={() => onSelect(r)}
        className={`w-full text-left card-soft p-4 transition-all duration-150 hover:shadow-md ${
          selected?.id === r.id ? "ring-2 ring-primary" : ""
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl shrink-0">{r.isUCLinks ? "🎓" : CATEGORY_ICONS[r.category]}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-semibold text-foreground text-sm">{r.name}</h4>
              {r.isUCLinks && (
                <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">UC LINKS</span>
              )}
              {r.isCommunitySubmitted && (
                <span className="text-[10px] bg-accent/10 text-accent font-bold px-2 py-0.5 rounded-full">COMMUNITY</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{r.description}</p>
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>{r.distance || r.address}</span>
            </div>
          </div>
        </div>
      </button>
    ))}
  </div>
);

export default ResourceList;
