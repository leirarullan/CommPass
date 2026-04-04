import { useState } from "react";
import { type Resource, type ResourceCategory } from "@/data/mockResources";

interface Props {
  center: { lat: number; lng: number };
  onSubmit: (resource: Resource) => void;
  onCancel: () => void;
}

const CATEGORIES: ResourceCategory[] = ["Education", "Technology", "Community Support"];

const AddResourceForm = ({ center, onSubmit, onCancel }: Props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ResourceCategory>("Education");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [communityNote, setCommunityNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;
    onSubmit({
      id: `community-${Date.now()}`,
      name: name.trim(),
      category,
      address: address.trim() || "Community location",
      description: description.trim(),
      lat: center.lat + (Math.random() - 0.5) * 0.01,
      lng: center.lng + (Math.random() - 0.5) * 0.01,
      distance: "Nearby",
      isCommunitySubmitted: true,
      communityNote: communityNote.trim() || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card-soft border-l-4 border-l-accent space-y-4 animate-fade-in">
      <h3 className="font-display text-lg text-foreground">Add a Resource</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          placeholder="Resource name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ResourceCategory)}
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <input
        placeholder="Address (optional)"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <textarea
        placeholder="Description *"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows={2}
        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
      />
      <textarea
        placeholder="Why this matters to your community (optional)"
        value={communityNote}
        onChange={(e) => setCommunityNote(e.target.value)}
        rows={2}
        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
      />
      <div className="flex gap-3">
        <button type="submit" className="btn-primary text-sm py-2">Submit Resource</button>
        <button type="button" onClick={onCancel} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
      </div>
    </form>
  );
};

export default AddResourceForm;
