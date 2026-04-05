import { useState, useRef } from "react";
import { type Resource, type CommunityReview, CATEGORY_ICONS } from "@/data/mockResources";
import { MapPin, ChevronLeft, ChevronRight, ShieldCheck, Send, X, CheckCircle2 } from "lucide-react";
import { moderateReview } from "@/lib/moderateReview";
import { toast } from "sonner";
import type { User } from "@supabase/supabase-js";

interface Profile {
  display_name: string;
}

interface Props {
  resource: Resource | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddReview: (resourceId: string, review: CommunityReview) => void;
  user?: User | null;
  profile?: Profile | null;
  onRequestAuth?: () => void;
}

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
];

const CATEGORY_COLORS: Record<string, string> = {
  Education: "bg-blue-light text-primary",
  Technology: "bg-yellow-light text-accent-foreground",
  "Community Support": "bg-pink-light text-secondary",
};

const maskName = (name: string) => {
  if (name.length <= 2) return name[0] + "*";
  return name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
};

const ResourceDetailDialog = ({ resource, open, onOpenChange, onAddReview, user, profile, onRequestAuth }: Props) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [skippedAuth, setSkippedAuth] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  if (!resource || !open) return null;

  const images = resource.images?.length ? resource.images : PLACEHOLDER_IMAGES;
  const approvedReviews = (resource.reviews || []).filter((r) => r.approved);

  const prevImg = () => setImgIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImg = () => setImgIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  const handleSubmitReview = () => {
    const result = moderateReview(reviewText);

    if (!result.approved) {
      toast.error(result.reason || "Review was not approved.");
      return;
    }

    const isVerified = !!user;
    const displayName = isVerified ? (profile?.display_name || "User") : "Anonymous";

    const review: CommunityReview = {
      id: crypto.randomUUID(),
      author: displayName,
      text: reviewText.trim(),
      date: new Date().toLocaleDateString(),
      approved: true,
      verified: isVerified,
      verifiedName: isVerified ? displayName : undefined,
    };

    onAddReview(resource.id, review);
    setReviewText("");
    toast.success("Review added! Thanks for contributing.");
  };

  const categoryColor = CATEGORY_COLORS[resource.category] || "bg-muted text-muted-foreground";

  return (
    <div className="card-soft p-0 overflow-hidden h-full flex flex-col animate-fade-in">
      {/* Close button */}
      <button
        onClick={() => onOpenChange(false)}
        className="absolute right-3 top-3 z-10 bg-background/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-background transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Image Carousel */}
      <div className="relative w-full h-44 bg-muted overflow-hidden shrink-0">
        <img
          src={images[imgIdx]}
          alt={resource.name}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-background transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === imgIdx ? "bg-primary" : "bg-background/60"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5 space-y-3 overflow-y-auto flex-1">
        <h3 className="font-display text-lg font-bold leading-tight text-foreground">{resource.name}</h3>

        {/* Category badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColor}`}>
            {CATEGORY_ICONS[resource.category]} {resource.category}
          </span>
          {resource.isUCLinks && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">🎓 UC Links</span>
          )}
          {resource.isCommunitySubmitted && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent-foreground">Community</span>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>{resource.address}</span>
        </div>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${resource.lat},${resource.lng}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm font-semibold text-primary hover:underline"
        >
          Get Directions →
        </a>

        {resource.communityNote && (
          <div className="border-t border-border pt-3">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Community Note</p>
            <p className="text-sm italic text-foreground">"{resource.communityNote}"</p>
          </div>
        )}

        {/* Reviews */}
        <div className="border-t border-border pt-3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-display text-sm font-bold text-foreground">Community Reviews</h4>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" /> AI Moderated
            </span>
          </div>

          {approvedReviews.length === 0 && (
            <p className="text-sm text-muted-foreground mb-2">No reviews yet. Be the first!</p>
          )}

          <div className="space-y-2 max-h-32 overflow-y-auto mb-3">
            {approvedReviews.map((rev) => (
              <div key={rev.id} className="bg-muted/50 rounded-xl p-2.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1">
                    {rev.verified ? (
                      <>
                        {rev.verifiedName || rev.author}
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </>
                    ) : (
                      maskName(rev.author)
                    )}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{rev.date}</span>
                </div>
                <p className="text-sm text-foreground">{rev.text}</p>
              </div>
            ))}
          </div>

          {/* Review input */}
          {user ? (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                Posting as <strong className="text-foreground">{profile?.display_name || "User"}</strong>
                <CheckCircle2 className="w-3 h-3 text-primary inline ml-1" />
              </p>
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  placeholder="Write a review…"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={2}
                  className="flex-1 text-sm rounded-xl border border-border bg-background px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleSubmitReview}
                  disabled={!reviewText.trim()}
                  className="btn-primary self-end px-3 py-2 disabled:opacity-40"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Reviews are filtered by AI moderation before publishing.
              </p>
            </div>
          ) : skippedAuth ? (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                Posting as <strong className="text-foreground">Anonymous</strong> (no verified badge)
              </p>
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  placeholder="Write a review…"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={2}
                  className="flex-1 text-sm rounded-xl border border-border bg-background px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleSubmitReview}
                  disabled={!reviewText.trim()}
                  className="btn-primary self-end px-3 py-2 disabled:opacity-40"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Reviews are filtered by AI moderation before publishing.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <button
                onClick={() => onRequestAuth?.()}
                className="btn-primary text-sm py-2 w-full"
              >
                Sign in to leave a verified review
              </button>
              <button
                onClick={() => setSkippedAuth(true)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-center"
              >
                Skip and leave a review anyway →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailDialog;
