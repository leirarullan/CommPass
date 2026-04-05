import { useState, useEffect, useCallback } from "react";
import { type UCLinksProgram } from "@/data/ucLinksPrograms";
import { ExternalLink, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  programs: UCLinksProgram[];
  allPrograms: UCLinksProgram[];
}

const CAROUSEL_IMAGES = [
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/panopoly_image_original/public/run1.png?itok=ysiGXoBY&timestamp=1545331490", alt: "21st Century Community Learning Centers" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/richmond_mural_painting.jpg?itok=CNIkbaQl&timestamp=1551250711", alt: "Y-PLAN mural painting" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/child_and_ugrad_with_camera.jpg?itok=k55YRhEi&timestamp=1551252761", alt: "Democracy Lab" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/lcm_photo_from_lceg_website.jpeg?itok=Hla7pKoV&timestamp=1630521166", alt: "La Clase Mágica" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/poetry_0.jpg?itok=pFcixfLi&timestamp=1552346453", alt: "Club Proteo" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/1_-_cardboard_prototype_blurry_crop.jpg?itok=m703dHkQ&timestamp=1552344590", alt: "Beta Lab Links" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/ballet_folklorico.jpg?itok=W821s4q-&timestamp=1551251846", alt: "El Sol Conexión" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/dsc_0566.jpg?itok=tJZPkCQL&timestamp=1553617239", alt: "Corre la Voz" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/kids_and_ipad_in_space.jpeg?itok=S-SDl6S0&timestamp=1551248404", alt: "Fifth Dimension" },
  { src: "https://uclinks.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_thumbnail/public/img_8618.jpg?itok=r4NZtog3&timestamp=1553641218", alt: "Community Based Literacies" },
];

const UCLinksSection = ({ programs, allPrograms }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (allPrograms.length === 0) return null;

  const displayedPrograms = showAll ? allPrograms : programs;

  return (
    <section className="card-soft bg-blue-light/30 border-primary/20 overflow-hidden">
      {/* Image Carousel */}
      <div className="relative -mx-6 -mt-6 mb-6 h-56 sm:h-72 overflow-hidden rounded-t-2xl">
        {CAROUSEL_IMAGES.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        ))}
        {/* Caption */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="text-white/90 text-xs font-medium drop-shadow-lg">
            {CAROUSEL_IMAGES[currentSlide]?.alt}
          </p>
        </div>
        {/* Nav buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 right-4 z-10 flex gap-1.5">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? "bg-white w-4" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Header */}
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

      {/* Local programs header */}
      {programs.length > 0 && !showAll && (
        <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-3">
          Programs Near You
        </h4>
      )}

      {showAll && (
        <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-3">
          All California Programs ({allPrograms.length})
        </h4>
      )}

      {/* Program cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedPrograms.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="bg-card rounded-2xl p-4 hover:shadow-md transition-shadow group block"
          >
            <div className="flex gap-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-16 h-16 rounded-xl object-cover shrink-0"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=200&h=200&fit=crop"; }}
              />
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">{p.campus} · {p.city}</span>
                <h5 className="font-semibold text-foreground text-sm mt-0.5 group-hover:text-primary transition-colors line-clamp-2">{p.name}</h5>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More / Show Less */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/10 rounded-full px-5 py-2"
        >
          {showAll ? (
            <>Show Less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>Show All {allPrograms.length} Programs <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
        <a
          href="https://uclinks.berkeley.edu/programs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          Visit UC Links <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

export default UCLinksSection;
