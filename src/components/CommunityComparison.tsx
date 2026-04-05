import { useState } from "react";
import { ArrowRight, TrendingDown, TrendingUp, AlertTriangle, Shield, BarChart3 } from "lucide-react";
import { ZIP_DATA, type ZipData } from "@/data/mockResources";

interface ComparisonCity {
  zip: string;
  label: string;
}

const REFERENCE_CITIES: ComparisonCity[] = [
  { zip: "94301", label: "Palo Alto" },
  { zip: "95014", label: "Cupertino" },
  { zip: "94022", label: "Los Altos" },
  { zip: "92014", label: "Del Mar" },
  { zip: "95070", label: "Saratoga" },
  { zip: "93921", label: "Carmel-by-the-Sea" },
  { zip: "90265", label: "Malibu" },
];

function getBurdenLevel(p: number): { label: string; color: string; bg: string } {
  if (p >= 80) return { label: "Very High", color: "text-destructive", bg: "bg-destructive/10" };
  if (p >= 60) return { label: "High", color: "text-orange-600", bg: "bg-orange-100" };
  if (p >= 40) return { label: "Moderate", color: "text-yellow-600", bg: "bg-yellow-100" };
  return { label: "Low", color: "text-emerald-600", bg: "bg-emerald-100" };
}

export default function CommunityComparison({ data }: { data: ZipData }) {
  const [selectedRef, setSelectedRef] = useState<string>(
    // Pick a reference city that isn't the same as the user's city
    REFERENCE_CITIES.find((c) => c.zip !== data.zip)?.zip || "94301"
  );

  const refData = ZIP_DATA[selectedRef];
  if (!refData) return null;

  const userLevel = getBurdenLevel(data.percentile);
  const refLevel = getBurdenLevel(refData.percentile);
  const gap = data.percentile - refData.percentile;

  // Find issues user has that reference doesn't
  const uniquePollution = data.pollutionFactors.filter(
    (f) => !refData.pollutionFactors.includes(f)
  );
  const uniqueAccess = data.accessIssues.filter(
    (i) => !refData.accessIssues.includes(i)
  );

  return (
    <section className="card-soft overflow-hidden">
      <div className="flex items-center gap-2 mb-5">
        <BarChart3 className="w-5 h-5 text-primary" />
        <h3 className="font-display text-xl text-foreground">Compare Your Community</h3>
      </div>

      {/* Reference selector */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className="text-sm text-muted-foreground">Compare with:</span>
        {REFERENCE_CITIES.filter((c) => c.zip !== data.zip).map((c) => (
          <button
            key={c.zip}
            onClick={() => setSelectedRef(c.zip)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors font-medium ${
              selectedRef === c.zip
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Side-by-side comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* User's community */}
        <div className="rounded-xl border-2 border-secondary/40 bg-secondary/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Your Community</span>
          </div>
          <h4 className="font-display text-lg text-foreground">{data.city}</h4>
          <p className="text-sm text-muted-foreground mb-3">ZIP {data.zip}</p>

          <div className="flex items-center gap-2 mb-4">
            <span className={`text-3xl font-bold ${userLevel.color}`}>{data.percentile}%</span>
            <span className={`text-xs px-2 py-1 rounded-full font-semibold ${userLevel.bg} ${userLevel.color}`}>
              {userLevel.label} Burden
            </span>
          </div>

          {/* Pollution bar */}
          <div className="mb-3">
            <span className="text-xs text-muted-foreground block mb-1">Environmental Burden</span>
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary to-destructive transition-all duration-700"
                style={{ width: `${data.percentile}%` }}
              />
            </div>
          </div>

          <div className="space-y-1">
            {data.pollutionFactors.map((f) => (
              <span key={f} className="inline-block text-xs bg-secondary/10 text-secondary rounded-full px-2 py-0.5 mr-1 mb-1">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Reference community */}
        <div className="rounded-xl border-2 border-emerald-300/40 bg-emerald-50/50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Reference Community</span>
          </div>
          <h4 className="font-display text-lg text-foreground">{refData.city}</h4>
          <p className="text-sm text-muted-foreground mb-3">ZIP {refData.zip}</p>

          <div className="flex items-center gap-2 mb-4">
            <span className={`text-3xl font-bold ${refLevel.color}`}>{refData.percentile}%</span>
            <span className={`text-xs px-2 py-1 rounded-full font-semibold ${refLevel.bg} ${refLevel.color}`}>
              {refLevel.label} Burden
            </span>
          </div>

          {/* Pollution bar */}
          <div className="mb-3">
            <span className="text-xs text-muted-foreground block mb-1">Environmental Burden</span>
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-700"
                style={{ width: `${refData.percentile}%` }}
              />
            </div>
          </div>

          <div className="space-y-1">
            {refData.pollutionFactors.map((f) => (
              <span key={f} className="inline-block text-xs bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5 mr-1 mb-1">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Impact statement */}
      {gap > 0 && (
        <div className="rounded-xl bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 border border-secondary/20 p-5 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-2 rounded-full bg-secondary/15">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-foreground font-semibold mb-2">
                Compared to {refData.city} ({refLevel.label.toLowerCase()} burden), your area in {data.city} faces{" "}
                <span className="text-secondary font-bold">{gap} percentile points</span> more environmental burden.
              </p>
              {uniquePollution.length > 0 && (
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Additional pollution risks:</strong> {uniquePollution.join(", ")}
                </p>
              )}
              {uniqueAccess.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  <strong>Additional access barriers:</strong> {uniqueAccess.join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {gap <= 0 && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-2 rounded-full bg-emerald-100">
              <TrendingDown className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-foreground">
              Your community in {data.city} has a similar or lower environmental burden compared to {refData.city}. That's great — but there may still be localized access issues to explore.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
