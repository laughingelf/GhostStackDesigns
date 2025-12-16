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
    <main className="min-h-screen bg-slate-950 mt-24 text-slate-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-5xl">
        {/* Hero / Intro */}
        <section className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-2">
            GhostStack Tools
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Local Business Booster
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Drop in a few competitor sites and get a quick, no-fluff snapshot of
            what they&apos;re doing on their websites – and where you can make
            yours stronger.{" "}
            <span className="font-semibold text-emerald-300">
              Free, no login, built for small businesses.
            </span>
          </p>
        </section>

        {/* Form */}
        <section className="bg-slate-900/80 rounded-2xl border border-slate-800 shadow-xl p-6 md:p-8 mb-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Business Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="https://your-business-website.com"
                value={yourWebsite}
                onChange={(e) => setYourWebsite(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Competitor URLs{" "}
                <span className="text-xs text-slate-400">
                  (1–3 sites, one per line)
                </span>
              </label>
              <textarea
                className="w-full min-h-[110px] rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-2 text-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Analyzing..." : "Run Quick Website Check"}
            </button>

            <p className="text-[11px] text-slate-500">
              This is a quick, high-level check – not a full SEO audit. For a
              deeper breakdown and custom strategy,{" "}
              <span className="text-emerald-300 font-medium">
                book a call with GhostStack.
              </span>
            </p>
          </form>
        </section>

        {/* Results */}
        {result && (
          <section className="space-y-8">
            {/* Competitors Table */}
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Competitor Snapshot (Lite)
              </h2>
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
                            className="text-emerald-300 underline"
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
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-3">Your Site at a Glance</h2>

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
                      <span className="text-emerald-300 font-semibold">
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
                            Testimonials section:{" "}
                          </span>
                          {result.your_site.has_testimonials ? "✅" : "—"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-200">
                            Gallery / our work:{" "}
                          </span>
                          {result.your_site.has_gallery ? "✅" : "—"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-200">
                            FAQ section:{" "}
                          </span>
                          {result.your_site.has_faq ? "✅" : "—"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-200">
                            Clear call-to-action:{" "}
                          </span>
                          {result.your_site.has_clear_cta ? "✅" : "—"}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                      For a deeper, customized review of your site and a
                      step-by-step game plan, you can always book a strategy call
                      with GhostStack.
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
                Want a deeper breakdown with design suggestions, keyword ideas,
                and a custom one-page strategy PDF? This is the lite version we
                share publicly – the full audit is part of our website packages
                and strategy sessions.
              </p>
            </div>

            {/* OPTIONAL: Raw debug output (remove once you're happy) */}
            {/* <pre className="text-[10px] text-slate-400 bg-slate-900/80 border border-slate-800 rounded-xl p-3 overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre> */}
          </section>
        )}
      </div>
    </main>
  );
};

export default LocalBusinessBooster;
