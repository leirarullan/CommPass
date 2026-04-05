import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  Layers,
  Users,
  Lightbulb,
  Lock,
  Globe,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How are you integrating the map?",
    answer:
      "When a user enters their ZIP code, we convert that into coordinates and center the map on their community. From there, we overlay two key layers:\n\n**Environmental impact context** (informed by CalEnviroScreen data)\n\n**Community resources** like libraries, educational programs, and support centers\n\nEach resource appears as a clickable marker that displays key information — what it offers, who it serves, and how to access it. We also include simple filters (like Education, Technology, and Community Support) so users can quickly find what they need.\n\nThe goal is to make the map not just visual, but **actionable**: turning location data into real, accessible opportunities.",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    question: "What exactly is CalEnviroScreen, and why do you use it?",
    answer:
      'CalEnviroScreen is a science-based tool created by the **California Office of Environmental Health Hazard Assessment (OEHHA)**. It maps which California communities are hit hardest by a combination of pollution, environmental hazards, and socioeconomic challenges — including poverty, housing insecurity, and lack of education.\n\nWe use CalEnviroScreen because it is **reliable and publicly available**. It\'s a great source of information to identify "high-burden" areas, mainly shown in orange or red on our map. Instead of guessing where help is most needed, CalEnviroScreen allows us to narrow our focus and start with the facts of which communities need the most help with resources.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    question: 'Does a "red" area mean my neighborhood is dangerous?',
    answer:
      '**No, it does not mean your neighborhood is dangerous.** It means that your community faces a higher environmental burden. For example, the area may have more air pollution from nearby factories, higher traffic density, or greater exposure to industrial waste — compared to other areas.\n\nThe colors on our map represent environmental and socioeconomic stress, not crime or personal safety. Many vibrant, strong communities fall in "red" zones — it simply means they deserve more attention and resources.',
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  {
    question: "How often is your map updated?",
    answer:
      'CalEnviroScreen\'s underlying data updates whenever the state releases a new version, which is roughly every **2–3 years**.\n\nHowever, for community resources, we aim for **monthly updates** based on programs and organizations in each area. Resources can also change **within hours** thanks to community contributions — anyone signed in can use the **"Add a Resource"** button to share a local program, library, or service they know about.',
    icon: <RefreshCw className="w-5 h-5" />,
  },
  {
    question: "What if my ZIP code is partly green and partly red?",
    answer:
      "That's actually very common! Environmental burden doesn't follow neat ZIP code boundaries. A single ZIP code can include neighborhoods with very different conditions — one block might be near a highway with high diesel emissions, while another block a mile away has cleaner air.\n\nOur tool uses the **overall percentile** for your ZIP code area, but we encourage you to also explore nearby ZIP codes to get a fuller picture. The resources we show are relevant to your broader community, not just one block.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    question: 'What is the "Compare Your Community" feature?',
    answer:
      "This feature lets you visually compare your community's environmental burden against a lower-burden reference city — like Palo Alto, Del Mar, or Saratoga.\n\nYou'll see a **side-by-side comparison** showing percentile scores, pollution factors, and access barriers. Our goal is to **make the disparity visible** so we can advocate for change and direct resources where they're needed most.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    question: "How can I contribute resources to CommPass?",
    answer:
      'If you know of a local library, program, community center, or service that others could benefit from, you can add it directly to the map!\n\n1. Search for your ZIP code or city\n2. Click **"Sign In"** to create a free account\n3. Click **"+ Add a Resource"** on the results page\n4. Fill in the details — name, description, category, and location\n\nYour contribution will appear on the map and help others in your community discover valuable resources they might not know about.',
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    question: "Is my data private?",
    answer:
      "**Yes.** We do not track your location, store your ZIP code searches, or share any personal information. When you sign in, we only store a display name and your email to attribute community contributions.\n\nAll environmental data comes from publicly available CalEnviroScreen datasets.",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    question: "Why does CommPass only cover California?",
    answer:
      "CalEnviroScreen is a California-specific tool, and it's one of the most comprehensive environmental justice datasets in the country. We chose to start here because the data is **robust, well-documented, and actionable**.\n\nThat said, our vision is to expand. Other states have their own environmental screening tools (like EJScreen at the federal level), and we hope to integrate those in the future to serve communities nationwide.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    question: "What is UC Links, and why is it on CommPass?",
    answer:
      "**UC Links** is a University of California program that partners with community organizations to provide after-school enrichment for underserved youth. Programs focus on digital literacy, college prep, STEM activities, and creative expression.\n\nWe feature UC Links on CommPass because these programs are often **free, research-backed, and located in the very communities** that face the highest environmental burdens. They're a powerful example of how universities and communities can work together to close opportunity gaps.",
    icon: <Users className="w-5 h-5" />,
  },
];

const FAQPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="section-container flex items-center justify-between py-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="font-display text-xl text-foreground">
              Comm<span className="text-primary">Pass</span>
            </span>
          </button>
          <div className="w-16" />
        </div>
      </header>

      <div className="section-container py-10 max-w-3xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-3">How CommPass Works</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know about how we map environmental burden, surface community resources, and empower
            neighborhoods across California.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`card-soft border transition-all duration-200 ${openIndex === i ? "border-primary/30 shadow-md" : "border-border"}`}
            >
              <button onClick={() => toggle(i)} className="w-full flex items-center gap-3 text-left py-1">
                <div
                  className={`p-2 rounded-lg shrink-0 transition-colors ${openIndex === i ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}
                >
                  {item.icon}
                </div>
                <span className="flex-1 font-semibold text-foreground text-sm sm:text-base">{item.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div
                  className="mt-3 pt-3 border-t border-border prose prose-sm max-w-none text-muted-foreground animate-fade-in"
                  dangerouslySetInnerHTML={{
                    __html: item.answer
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                      .replace(/\n\n/g, '</p><p class="mt-2">')
                      .replace(/^/, "<p>")
                      .replace(/$/, "</p>"),
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center card-soft bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/10">
          <h3 className="font-display text-lg text-foreground mb-2">Still have questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use the AI chat assistant on any results page, or explore your community by searching a ZIP code.
          </p>
          <button onClick={() => navigate("/")} className="btn-primary">
            Search Your Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
