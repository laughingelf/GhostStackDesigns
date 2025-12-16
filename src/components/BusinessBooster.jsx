import React, { useState } from "react";

const API_BASE_URL = "https://local-biz-booster-api.onrender.com";

const LocalBusinessBooster = () => {
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [mainService, setMainService] = useState("");
  const [yourWebsite, setYourWebsite] = useState(""); // your site URL (optional)
  const [competitorsText, setCompetitorsText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    const competitor_urls = competitorsText
      .split("\n")
      .map((u) => u.trim())
      .filter(Boolean);

    if (!API_BASE_URL) {
      setError("API URL is not configured.");
      return;
    }

    if (competitor_urls.length === 0) {
      setError("Please add at least one competitor URL.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_name: businessName,
          location,
          industry,
          main_service: mainService,
          website_url: yourWebsite || null, // IMPORTANT: must match backend field
          competitor_urls,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      console.log("API /analyze response:", data); // DEBUG
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while analyzing competitors.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main
        id="booster-tool"
        className="min-h-screen bg-slate-950 text-slate-100 flex justify-center px-4 py-10 md:py-14"
      >
        <div className="w-full max-w-5xl">
          {/* Intro / tag */}
          <section className="mb-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0DB6CC]/30 bg-slate-900/70 px-3 py-1 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#0DB6CC] animate-pulse" />
              <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#0DB6CC]">
                GhostStack Tools · Free Checker
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
              Local Business Booster
            </h1>

            <p className="text-slate-300 text-sm md:text-base">
              Drop in a few competitor sites and get a quick, no-fluff snapshot
              of what they’re doing, and where you can make yours stronger.
              <span className="block font-semibold text-[#0DB6CC] mt-1">
                Free, no login, built for small businesses.
              </span>
            </p>
          </section>

          {/* Form */}
          <section className="bg-slate-900/80 rounded-2xl border border-[#0DB6CC]/20 shadow-[0_0_40px_rgba(13,182,204,0.15)] p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
              <h2 className="text-lg md:text-xl font-semibold">
                Step 1: Tell us who you are
              </h2>
              <p className="text-[11px] text-slate-400">
                No login · No email required · Takes ~10–20 seconds
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your Business Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DB6CC]"
                    placeholder="Lone Star Property Maintenance"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    City &amp; State
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DB6CC]"
                    placeholder="Fort Worth, TX"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DB6CC]"
                    placeholder="Lawn care, power washing, HVAC..."
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Main Service
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DB6CC]"
                    placeholder="Lawn mowing &amp; yard cleanups"
                    value={mainService}
                    onChange={(e) => setMainService(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Your website URL (optional) */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Website URL{" "}
                  <span className="text-xs text-slate-400">(optional)</span>
                </label>
                <input
                  type="url"
                  className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DB6CC]"
                  placeholder="https://your-business-website.com"
                  value={yourWebsite}
                  onChange={(e) => setYourWebsite(e.target.value)}
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  If you have a site already, we&apos;ll compare it against your
                  competitors using the same checks.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Competitor URLs{" "}
                  <span className="text-xs text-slate-400">
                    (1–3 sites, one per line)
                  </span>
                </label>
                <textarea
                  className="w-full min-h-[110px] rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DB6CC]"
                  placeholder={`https://competitor-one.com\nhttps://competitor-two.com`}
                  value={competitorsText}
                  onChange={(e) => setCompetitorsText(e.target.value)}
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-400 bg-red-950/40 border border-red-700 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0DB6CC] hover:bg-[#13c8e8] text-slate-950 font-semibold px-5 py-2 text-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Analyzing..." : "Run Quick Website Check"}
                </button>
                <p className="text-[11px] text-slate-500">
                  This is a quick, high-level check – not a full SEO audit. For a
                  deeper breakdown and custom strategy,{" "}
                  <a
                    href="/contact"
                    className="text-[#0DB6CC] font-semibold hover:underline"
                  >
                    book a call with GhostStack.
                  </a>
                </p>
              </div>
            </form>
          </section>

          {/* Results */}
          {result && (
            <section className="space-y-8">
              {/* Competitors Table */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h2 className="text-2xl font-bold">
                    Competitor Snapshot (Lite)
                  </h2>
                  <span className="text-[11px] text-slate-400">
                    We&apos;re scanning for trust signals, clarity, and calls to action.
                  </span>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900/90">
                      <tr>
                        <th className="px-3 py-2 text-left">URL</th>
                        <th className="px-3 py-2 text-left">Title</th>
                        <th className="px-3 py-2 text-center">Testimonials</th>
                        <th className="px-3 py-2 text-center">Gallery</th>
                        <th className="px-3 py-2 text-center">FAQ</th>
                        <th className="px-3 py-2 text-center">Clear CTA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.competitors?.map((c) => (
                        <tr
                          key={c.url}
                          className="border-t border-slate-800 odd:bg-slate-950/40"
                        >
                          <td className="px-3 py-2 align-top max-w-xs break-words">
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#0DB6CC] underline underline-offset-2"
                            >
                              {c.url}
                            </a>
                          </td>
                          <td className="px-3 py-2 align-top max-w-xs truncate">
                            {c.title || "-"}
                          </td>
                          <td className="px-3 py-2 text-center">
                            {c.has_testimonials ? "✅" : "—"}
                          </td>
                          <td className="px-3 py-2 text-center">
                            {c.has_gallery ? "✅" : "—"}
                          </td>
                          <td className="px-3 py-2 text-center">
                            {c.has_faq ? "✅" : "—"}
                          </td>
                          <td className="px-3 py-2 text-center">
                            {c.has_clear_cta ? "✅" : "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Your Site at a Glance */}
              {result.your_site && (
                <div className="bg-slate-900/80 border border-[#0DB6CC]/25 rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-3">
                    Your Site at a Glance
                  </h2>

                  {result.your_site.error ? (
                    <p className="text-sm text-red-300">
                      We tried to scan your site{" "}
                      <span className="font-mono">{result.your_site.url}</span>{" "}
                      but ran into an issue: {result.your_site.error}
                    </p>
                  ) : (
                    <>
                      <p className="text-sm text-slate-300 mb-4">
                        This is a quick snapshot of{" "}
                        <span className="text-[#0DB6CC] font-semibold">
                          {result.your_site.url}
                        </span>{" "}
                        based on the same checks we ran on your competitors.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <p>
                            <span className="font-semibold text-slate-200">
                              Title:{" "}
                            </span>
                            {result.your_site.title || "—"}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-200">
                              Meta description:{" "}
                            </span>
                            {result.your_site.meta_description || "—"}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p>
                            <span className="font-semibold text-slate-200">
                              Testimonials section (quick scan):{" "}
                            </span>
                            {result.your_site.has_testimonials
                              ? "✅"
                              : "Not detected"}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-200">
                              Gallery / our work (quick scan):{" "}
                            </span>
                            {result.your_site.has_gallery
                              ? "✅"
                              : "Not detected"}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-200">
                              FAQ section (quick scan):{" "}
                            </span>
                            {result.your_site.has_faq ? "✅" : "Not detected"}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-200">
                              Clear call-to-action (quick scan):{" "}
                            </span>
                            {result.your_site.has_clear_cta
                              ? "✅"
                              : "Not detected"}
                          </p>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-3">
                        This is a fast, automated scan of your page&apos;s HTML.
                        Some modern sites (especially React / JavaScript-heavy
                        builds) load sections like FAQs or galleries after the
                        page loads, so they may not be detected here even if they
                        exist on your live site.
                      </p>
                      <p className="text-xs text-slate-500 mt-3">
                        For a deeper, customized review of your site and a
                        step-by-step game plan, you can always{" "}
                        <a
                          href="/contact"
                          className="text-[#0DB6CC] font-semibold hover:underline"
                        >
                          book a strategy call with GhostStack.
                        </a>
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Quick Wins */}
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  Quick Wins for Your Website
                </h2>
                <ul className="space-y-2 text-sm text-slate-100">
                  {result.recommendations?.map((r, i) => (
                    <li
                      key={i}
                      className="bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2"
                    >
                      • {r}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-400 mt-3">
                  This is the lite version we share publicly. If you want a full
                  GhostStack-style breakdown with design suggestions, keyword
                  ideas, and a custom one-page strategy, we bundle that into our
                  website packages and strategy sessions.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default LocalBusinessBooster;
