import { type UCLinksProgram } from "@/data/ucLinksPrograms";
import { ExternalLink } from "lucide-react";

interface Props {
  programs: UCLinksProgram[];
  allPrograms: UCLinksProgram[];
}

const UCLinksSection = ({ programs, allPrograms }: Props) => {
  if (allPrograms.length === 0) return null;

  return (
    <section className="card-soft bg-blue-light/30 border-primary/20">
      <div className="text-center mb-6">
        <h3 className="font-display text-2xl text-foreground flex items-center justify-center gap-2">
          🎓 UC Links
        </h3>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm">
          UC Links is a University of California network connecting university students with K-12 youth in
          underserved communities. Through after-school programs, digital literacy workshops, and mentoring, UC
          Links bridges the gap between higher education and the communities that need it most.
        </p>
      </div>

      {/* Local programs */}
      {programs.length > 0 && (
        <div className="mb-6">
          <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-3">
            Programs Near You
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programs.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="bg-card rounded-2xl p-5 hover:shadow-md transition-shadow group block"
              >
                <div className="flex gap-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=200&h=200&fit=crop"; }}
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">{p.campus}</span>
                    <h5 className="font-semibold text-foreground text-sm mt-0.5 group-hover:text-primary transition-colors">{p.name}</h5>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-3">{p.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* All California programs */}
      <details className="group">
        <summary className="cursor-pointer font-display text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2 hover:text-foreground transition-colors">
          <span>All California Programs ({allPrograms.length})</span>
          <span className="text-xs group-open:rotate-90 transition-transform">▶</span>
        </summary>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {allPrograms.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="bg-card rounded-xl p-4 hover:shadow-md transition-shadow group block"
            >
              <div className="flex gap-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-14 h-14 rounded-lg object-cover shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=200&h=200&fit=crop"; }}
                />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">{p.campus}</span>
                  <h5 className="font-semibold text-foreground text-xs mt-0.5 group-hover:text-primary transition-colors line-clamp-2">{p.name}</h5>
                  <span className="text-[10px] text-muted-foreground">{p.city}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </details>

      <div className="mt-4 text-center">
        <a
          href="https://uclinks.berkeley.edu/programs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View all UC Links programs <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

export default UCLinksSection;
