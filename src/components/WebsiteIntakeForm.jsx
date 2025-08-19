// IntakeForm.jsx
import { useState } from "react";

export default function IntakeForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    data.set("form-name", "website-intake");

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    });

    if (res.ok) {
      window.location.assign("/thank-you");
    } else {
      alert("Something went wrong. Please try again or email hello@ghoststackdesigns.com.");
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-white py-12 px-6 md:px-10">
      <div className="mx-auto bg-gray-100 max-w-4xl rounded-2xl border border-gray-200 p-6 md:p-10 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 header-font blue-word">Project Intake</h1>
        <p className="mt-1 text-gray-600">
          Fill this out to kick off your build. You’ll get a confirmation email.
        </p>

        <form
          name="website-intake"
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="mt-8 space-y-10"
        >
          <input type="hidden" name="form-name" value="website-intake" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* Contact & Business */}
          <Section title="Contact & Business">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Business name" required>
                <input
                  name="business_name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
              <Field label="Tagline / slogan">
                <input
                  name="tagline"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
              <Field label="Contact name" required>
                <input
                  name="contact_name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
              <Field label="Contact email" required>
                <input
                  type="email"
                  name="contact_email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
              <Field label="Phone">
                <input
                  name="phone"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
              <Field label="Business address">
                <input
                  name="address"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
              <Field label="Social links (comma separated)" full>
                <input
                  name="social_links"
                  placeholder="https://instagram.com/..., https://facebook.com/..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
            </div>
          </Section>

          {/* Goals & Strategy */}
          <Section title="Goals & Strategy">
            <Field label="Primary goal of the website" required full>
              <input
                name="primary_goal"
                required
                placeholder="Generate leads, book clients, sell products, etc."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
            <Field label="Target audience" required full>
              <textarea
                name="target_audience"
                required
                placeholder="Who are we trying to reach? Age, profession, interests..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Do you have an existing website?" required>
                <select
                  name="has_existing_site"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                >
                  <option value="">Select…</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Maybe</option>
                </select>
              </Field>
              <Field label="Current website URL">
                <input
                  name="current_site_url"
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
            </div>
            <Field label="What do you like/dislike about it?" full>
              <textarea
                name="likes_dislikes"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
            <Field label="Desired launch date / timeframe" full>
              <input
                name="desired_launch"
                placeholder="e.g., Sept 30 or ‘in 4–6 weeks’"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
          </Section>

          {/* Pages & Features */}
          <Section title="Pages & Features">
            <fieldset>
              <legend className="mb-2 block text-sm font-medium text-gray-800">
                Pages (check all that apply)
              </legend>
              <div className="flex flex-wrap gap-4">
                {["Home", "About", "Services", "Contact", "Blog", "Gallery", "FAQ"].map((p) => (
                  <label key={p} className="flex items-center gap-2 text-sm text-gray-800">
                    <input type="checkbox" name="pages" value={p} className="h-4 w-4 text-gray-900" /> {p}
                  </label>
                ))}
              </div>
              <input
                name="pages_other"
                placeholder="Other pages…"
                className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </fieldset>

            <fieldset className="mt-6">
              <legend className="mb-2 block text-sm font-medium text-gray-800">
                Features (check all that apply)
              </legend>
              <div className="flex flex-wrap gap-4">
                {["Contact form", "Online booking", "Blog", "Photo/video gallery"].map((f) => (
                  <label key={f} className="flex items-center gap-2 text-sm text-gray-800">
                    <input type="checkbox" name="features" value={f} className="h-4 w-4 text-gray-900" /> {f}
                  </label>
                ))}
              </div>
              <input
                name="features_other"
                placeholder="Other features…"
                className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </fieldset>

            <Field label="Inspiration websites (links + what you like)" full>
              <textarea
                name="inspiration"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
          </Section>

          {/* Branding & Content */}
          <Section title="Branding & Content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Branding status" required>
                <select
                  name="branding_status"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                >
                  <option value="">Select…</option>
                  <option>Yes — I’ll provide it</option>
                  <option>No — I need help</option>
                  <option>Some — needs updates</option>
                </select>
              </Field>
              <Field label="Brand colors & fonts (if known)">
                <input
                  name="brand_notes"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                />
              </Field>
            </div>
            <Field label="About section (story/mission/team)" full>
              <textarea
                name="about"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
            <Field label="Services (title + short description each)" full>
              <textarea
                name="services"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
            <Field label="Team bios (if applicable)" full>
              <textarea
                name="team"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
            <Field label="Testimonials (if any)" full>
              <textarea
                name="testimonials"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
          </Section>

          {/* Wrap-up */}
          <Section title="Wrap-up">
            <Field label="Content readiness" required>
              <select
                name="content_ready"
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              >
                <option value="">Select…</option>
                <option>Yes — all text/images ready</option>
                <option>No — I need help creating content</option>
                <option>Some — I’ll need help finishing</option>
              </select>
            </Field>
            <Field label="Anything else we should know?">
              <textarea
                name="extra_notes"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
            </Field>
          </Section>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 disabled:opacity-50 blueon-white-btn header-font"
            >
              {submitting ? "Submitting…" : "Submit Intake"}
            </button>
            <p className="mt-2 text-xs text-gray-500">
              By submitting, you agree to our terms.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children, required, full }) {
  return (
    <label className={`${full ? "col-span-full" : ""} block`}>
      <span className="mb-1 block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}
