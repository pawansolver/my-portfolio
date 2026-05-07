import { Metadata } from 'next';
import Link from 'next/link';

// 🚀 SEO Metadata (World-Class Standard)
export const metadata: Metadata = {
    title: 'Refund & Cancellation | Nighwan Technology',
    description: 'Understand the refund, cancellation, and revision policies for digital services and SaaS subscriptions provided by Nighwan Technology.',
};

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc] pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
            <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">

                {/* --- HEADER --- */}
                <header className="border-b border-slate-100 pb-8 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Refund &amp; Cancellation Policy
                    </h1>
                    <p className="text-slate-500 mt-3 text-sm font-medium">
                        Effective Date: October 26, 2024
                    </p>
                </header>

                {/* --- CONTENT --- */}
                <div className="space-y-10 text-slate-600 leading-relaxed text-[15px] sm:text-base">

                    <section>
                        <p>
                            At <strong>Nighwan Technology Pvt. Ltd.</strong>, we maintain a fair and transparent policy for cancellations and refunds, considering the nature of digital services, resource allocation, and subscription-based offerings.
                        </p>
                    </section>

                    {/* SECTION 1 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-50 pb-2">1. Cancellation Policy</h2>

                        <div className="space-y-6 pl-2">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">a. Pre-Initiation Cancellation</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Clients may request cancellation within 24 hours of payment, provided work has not started.</li>
                                    <li>A processing fee of up to 5% may be deducted (payment gateway & admin charges).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">b. Post-Initiation Cancellation</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Once the project/service has started (design, development, deployment, or server setup), no refunds will be issued.</li>
                                    <li>Resources and time allocation are considered billable once work begins.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">c. SaaS Subscription Cancellation</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Users may cancel their subscription anytime from their dashboard or by contacting support.</li>
                                    <li>Cancellation will stop future billing only.</li>
                                    <li>No refunds will be provided for the current billing cycle.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">2. Refund Policy</h2>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Payments once made are generally non-refundable.</li>
                            <li>Completed milestones are strictly non-refundable.</li>
                            <li>Subscription fees are non-refundable after activation.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">Non-refundable items include:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Domain registration</li>
                            <li>Hosting / cloud services (AWS, etc.)</li>
                            <li>SSL certificates</li>
                            <li>Third-party APIs or licenses</li>
                            <li>Setup and onboarding fees</li>
                            <li>AMC (Annual Maintenance Contracts) once active</li>
                        </ul>
                    </section>

                    {/* SECTION 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">3. Exceptions (If Applicable)</h2>
                        <p className="mb-2">Refunds may be considered only if:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                            <li>The service has not been delivered due to our inability.</li>
                            <li>Duplicate payment has been made.</li>
                            <li>Technical errors occurred in payment processing.</li>
                        </ul>
                        <p className="italic text-slate-500 text-sm">All such cases are subject to internal review and approval.</p>
                    </section>

                    {/* SECTION 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">4. Revisions & Issue Resolution</h2>
                        <p className="mb-2">Instead of refunds, we prioritize client satisfaction through:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Free revisions within the agreed scope.</li>
                            <li>Bug fixes during the defined warranty/support period.</li>
                            <li>Support to align delivery with agreed requirements.</li>
                        </ul>
                    </section>

                    {/* SECTION 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">5. Refund Processing</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Approved refunds will be processed via Razorpay.</li>
                            <li>Refund timeline: <strong>7–10 working days</strong>.</li>
                            <li>The amount will be credited back to the original payment method.</li>
                        </ul>
                    </section>

                    {/* SECTION 6 - CONTACT BOX */}
                    <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 mt-12 border border-slate-200 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">6. Billing Disputes</h2>
                        <p className="text-sm mb-6 text-slate-600">For any billing-related concerns or to request a cancellation, please contact our billing team at:</p>

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
                        </address>
                    </section>

                </div>
            </article>
        </main>
    );
}
