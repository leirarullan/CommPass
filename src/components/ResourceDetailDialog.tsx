import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { type Resource, type CommunityReview, CATEGORY_ICONS } from "@/data/mockResources";
import { MapPin, ChevronLeft, ChevronRight, ShieldCheck, Send } from "lucide-react";
import { moderateReview } from "@/lib/moderateReview";
import { toast } from "sonner";

interface Props {
  resource: Resource | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddReview: (resourceId: string, review: CommunityReview) => void;
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

const ResourceDetailDialog = ({ resource, open, onOpenChange, onAddReview }: Props) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  if (!resource) return null;

  const images = resource.images?.length ? resource.images : PLACEHOLDER_IMAGES;
  const approvedReviews = (resource.reviews || []).filter((r) => r.approved);

  const prevImg = () => setImgIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImg = () => setImgIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  const handleSubmitReview = () => {
    const author = authorName.trim() || "Anonymous";
    const result = moderateReview(reviewText);

    if (!result.approved) {
      toast.error(result.reason || "Review was not approved.");
      return;
    }

    const review: CommunityReview = {
      id: crypto.randomUUID(),
      author,
      text: reviewText.trim(),
      date: new Date().toLocaleDateString(),
      approved: true,
    };

    onAddReview(resource.id, review);
    setReviewText("");
    setAuthorName("");
    toast.success("Review added! Thanks for contributing.");
  };

  const categoryColor = CATEGORY_COLORS[resource.category] || "bg-muted text-muted-foreground";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-0 rounded-3xl border-border">
        {/* Image Carousel */}
        <div className="relative w-full h-52 bg-muted overflow-hidden rounded-t-3xl">
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

        <div className="p-6 space-y-4">
          <DialogHeader>
            <DialogTitle className="font-display text-xl leading-tight">{resource.name}</DialogTitle>
          </DialogHeader>

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

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>

          {/* Address + directions */}
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

          {/* Community Notes */}
          {resource.communityNote && (
            <div className="border-t border-border pt-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Community Note</p>
              <p className="text-sm italic text-foreground">"{resource.communityNote}"</p>
            </div>
          )}

          {/* Reviews */}
          <div className="border-t border-border pt-4">
            <div className="flex items-center gap-2 mb-3">
              <h4 className="font-display text-base font-bold text-foreground">Community Reviews</h4>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> AI Moderated
              </span>
            </div>

            {approvedReviews.length === 0 && (
              <p className="text-sm text-muted-foreground mb-3">No reviews yet. Be the first!</p>
            )}

            <div className="space-y-3 max-h-40 overflow-y-auto mb-4">
              {approvedReviews.map((rev) => (
                <div key={rev.id} className="bg-muted/50 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-foreground">{rev.author}</span>
                    <span className="text-[10px] text-muted-foreground">{rev.date}</span>
                  </div>
                  <p className="text-sm text-foreground">{rev.text}</p>
                </div>
              ))}
            </div>

            {/* Review form */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your name (optional)"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full text-sm rounded-xl border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
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
                  className="btn-primary self-end px-4 py-2 disabled:opacity-40"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Reviews are filtered by AI moderation before publishing.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceDetailDialog;
