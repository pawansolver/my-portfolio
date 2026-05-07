import { Metadata } from 'next';
import Link from 'next/link';

// 🚀 SEO Metadata (World-Class Standard)
export const metadata: Metadata = {
  title: 'Terms & Conditions | Nighwan Technology',
  description: 'Read the terms of service and conditions for using Nighwan Technology SaaS software and IT services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">

        {/* --- HEADER --- */}
        <header className="border-b border-slate-100 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-500 mt-3 text-sm font-medium">
            Effective Date: October 26, 2024
          </p>
        </header>

        {/* --- CONTENT --- */}
        <div className="space-y-10 text-slate-600 leading-relaxed text-[15px] sm:text-base">

          <section>
            <p>
              Welcome to <strong>Nighwan Technology Pvt. Ltd.</strong>. By accessing or using our website, SaaS platform, or IT services, you agree to comply with and be bound by the following Terms &amp; Conditions.
            </p>
          </section>

          {/* SECTION 1 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">1. Services Provided</h2>
            <p className="mb-3">We provide:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>SaaS-based software solutions (ERP, HRMS, AI/ML tools, analytics)</li>
              <li>Website &amp; application development</li>
              <li>API integration</li>
              <li>IT consulting services</li>
            </ul>
            <p>
              The detailed scope, pricing, and timelines will be defined in a Statement of Work (SOW), subscription plan, or invoice.
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">2. User Accounts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to provide accurate and complete information.</li>
              <li>We reserve the right to suspend accounts for misuse or violation of terms.</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">3. Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All payments must be made as per the agreed pricing or subscription plan.</li>
              <li>Payments are securely processed via Razorpay.</li>
              <li>By making a payment, you agree to Razorpay&apos;s terms and policies.</li>
              <li>
                Failure to pay on time may result in:
                <ul className="list-[circle] pl-6 mt-2 space-y-1 text-sm text-slate-500">
                  <li>Suspension of services</li>
                  <li>Termination of account access</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">4. Subscription &amp; Billing (For SaaS)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Some services are offered on a subscription basis (monthly/yearly).</li>
              <li>Subscriptions may auto-renew unless cancelled.</li>
              <li>You are responsible for cancelling subscriptions before renewal.</li>
              <li>No partial refunds for unused subscription periods.</li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">5. Refund &amp; Cancellation</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Payments once made are non-refundable, unless otherwise stated.</li>
              <li>In case of duplicate payment or technical error, refund requests can be raised within 7 days.</li>
              <li>Approved refunds will be processed via the original payment method.</li>
            </ul>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">6. Intellectual Property Rights</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Upon full payment, ownership of custom deliverables is transferred to the client.</li>
              <li>
                We retain rights to:
                <ul className="list-[circle] pl-6 mt-2 space-y-1 text-sm text-slate-500">
                  <li>Pre-built modules</li>
                  <li>Frameworks and reusable components</li>
                  <li>Non-confidential code and libraries</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">7. Acceptable Use</h2>
            <p className="mb-3">You agree NOT to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Use the platform for illegal or unauthorized activities.</li>
              <li>Attempt to hack, disrupt, or reverse engineer systems.</li>
              <li>Upload malicious code or harmful content.</li>
            </ul>
            <p className="font-medium text-red-500 bg-red-50 py-2 px-4 rounded-lg inline-block text-sm border border-red-100">
              Violation may result in immediate termination.
            </p>
          </section>

          {/* SECTION 8 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">8. Service Availability</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We strive for high uptime but do not guarantee uninterrupted service.</li>
              <li>Maintenance, updates, or external factors may cause temporary downtime.</li>
            </ul>
          </section>

          {/* SECTION 9 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">9. Limitation of Liability</h2>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>
                We are not liable for:
                <ul className="list-[circle] pl-6 mt-2 space-y-1 text-sm text-slate-500">
                  <li>Data loss</li>
                  <li>Business interruption</li>
                  <li>Indirect or consequential damages</li>
                </ul>
              </li>
            </ul>
            <p className="italic text-slate-500 text-sm">Use of our services is at your own risk.</p>
          </section>

          {/* SECTION 10 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">10. Termination</h2>
            <p className="mb-2">We reserve the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Suspend or terminate accounts for violation of terms.</li>
              <li>Discontinue services with reasonable notice.</li>
            </ul>
          </section>

          {/* SECTION 11 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">11. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of India. Any disputes shall fall under the jurisdiction of courts in India.
            </p>
          </section>

          {/* SECTION 12 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">12. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of services constitutes acceptance of revised terms.
            </p>
          </section>

          {/* SECTION 13 - CONTACT BOX */}
          <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 mt-12 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">13. Contact Information</h2>

            <address className="not-italic flex flex-col gap-3 text-base text-slate-800">
              <div className="flex items-start gap-2">
                <strong className="text-slate-900 min-w-[80px]">Company:</strong>
                <span>Nighwan Technology Pvt. Ltd.</span>
              </div>
              <div className="flex items-start gap-2">
                <strong className="text-slate-900 min-w-[80px]">Email:</strong>
                <a href="mailto:support@nighwantech.com" className="text-brandOrange hover:text-[#5c2d91] transition-colors font-medium">
                  support@nighwantech.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <strong className="text-slate-900 min-w-[80px]">Phone:</strong>
                <span>+91 9523922090</span>
              </div>
              <div className="flex items-start gap-2">
                <strong className="text-slate-900 min-w-[80px]">Locations:</strong>
                <span>Patna (Bihar) & Hyderabad (Telangana), India</span>
              </div>
            </address>
          </section>

        </div>
      </article>
    </main>
  );
}
