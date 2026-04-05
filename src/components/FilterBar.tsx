import { type ResourceCategory, CATEGORY_ICONS } from "@/data/mockResources";
import { Checkbox } from "@/components/ui/checkbox";

const CATEGORIES: ResourceCategory[] = ["Education", "Technology", "Community Support"];

interface Props {
  activeFilters: ResourceCategory[];
  onChange: (filters: ResourceCategory[]) => void;
}

const FilterBar = ({ activeFilters, onChange }: Props) => {
  const toggle = (cat: ResourceCategory) => {
    onChange(
      activeFilters.includes(cat)
        ? activeFilters.filter((f) => f !== cat)
        : [...activeFilters, cat]
    );
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      {CATEGORIES.map((cat) => {
        const active = activeFilters.includes(cat);
        return (
          <label
            key={cat}
            className="flex items-center gap-2 cursor-pointer select-none text-sm"
          >
            <Checkbox
              checked={active}
              onCheckedChange={() => toggle(cat)}
            />
            <span className={active ? "text-foreground font-medium" : "text-muted-foreground"}>
              {CATEGORY_ICONS[cat]} {cat}
            </span>
          </label>
        );
      })}
      {activeFilters.length > 0 && (
        <button
          onClick={() => onChange([])}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default FilterBar;
