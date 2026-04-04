import { type ResourceCategory } from "@/data/mockResources";

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
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => {
        const active = activeFilters.includes(cat);
        return (
          <button
            key={cat}
            onClick={() => toggle(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 border ${
              active
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/40"
            }`}
          >
            {cat}
          </button>
        );
      })}
      {activeFilters.length > 0 && (
        <button
          onClick={() => onChange([])}
          className="px-3 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default FilterBar;
