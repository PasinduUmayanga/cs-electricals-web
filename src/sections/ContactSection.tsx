// ========================================
// sections/ContactSection.tsx
// ========================================
export default function ContactSection() {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form
          className="grid gap-4 max-w-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input
              type="email"
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <textarea
              rows={4}
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
              placeholder="How can we help?"
            />
          </label>
          <button
            type="submit"
            className="rounded-2xl bg-gray-900 text-white px-4 py-2 font-medium hover:opacity-95 active:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm text-sm text-gray-600">
        <p>
          <strong>Email:</strong> hello@yourcompany.com
        </p>
        <p>
          <strong>Phone:</strong> +94 77 123 4567
        </p>
        <p>
          <strong>Address:</strong> 123 Galle Rd, Colombo, Sri Lanka
        </p>
      </div>
    </div>
  );
}
