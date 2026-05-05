import { Metadata } from 'next';
import Link from 'next/link';

// 🚀 SEO Metadata (World-Class Standard)
export const metadata: Metadata = {
    title: 'Privacy Policy | Nighwan Technology',
    description: 'Learn how Nighwan Technology collects, uses, and protects your personal and payment data.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
            <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">

                {/* --- HEADER --- */}
                <header className="border-b border-slate-100 pb-8 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 mt-3 text-sm font-medium">
                        Effective Date: October 26, 2024
                    </p>
                </header>

                {/* --- CONTENT --- */}
                <div className="space-y-10 text-slate-600 leading-relaxed text-[15px] sm:text-base">

                    <section>
                        <p>
                            At <strong>Nighwan Technology Pvt. Ltd.</strong>, we are committed to protecting your privacy and ensuring transparency in how your information is handled. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our SaaS platform, website, and services.
                        </p>
                    </section>

                    {/* SECTION 1 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-50 pb-2">1. Information We Collect</h2>
                        <p className="mb-4">We may collect the following types of information:</p>

                        <div className="space-y-6 pl-2">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">a. Personal Information</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Full name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company name</li>
                                    <li>Billing & shipping address</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">b. Payment Information</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Payments are securely processed via Razorpay.</li>
                                    <li>We do <strong>NOT</strong> store your card details, CVV, UPI PIN, or net banking credentials.</li>
                                    <li>We may store limited transaction details (like transaction ID, amount, status).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">c. Usage Data</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Device information</li>
                                    <li>Pages visited and session duration</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">2. How We Use Your Information</h2>
                        <p className="mb-3">We use your information for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To create and manage your account</li>
                            <li>To process payments and generate invoices</li>
                            <li>To provide and improve our SaaS services</li>
                            <li>To communicate updates, offers, and important notices</li>
                            <li>To provide customer support</li>
                            <li>To comply with legal and regulatory requirements</li>
                        </ul>
                    </section>

                    {/* SECTION 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">3. Sharing of Information</h2>
                        <p className="mb-3 font-medium text-slate-700">We do not sell or rent your personal data.</p>
                        <p className="mb-2">We may share your data with:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Payment gateway partners (Razorpay) for transaction processing</li>
                            <li>Cloud hosting providers for service delivery</li>
                            <li>Government authorities when required by law</li>
                        </ul>
                    </section>

                    {/* SECTION 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">4. Data Security</h2>
                        <p className="mb-3">We implement industry-standard security measures:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                            <li>SSL encryption</li>
                            <li>Secure cloud infrastructure</li>
                            <li>Access control and authentication</li>
                        </ul>
                        <p className="italic text-slate-500 text-sm">However, no system is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    {/* SECTION 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">5. Data Retention</h2>
                        <p className="mb-2">We retain your data:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                            <li>As long as your account is active</li>
                            <li>As required for legal, tax, and compliance purposes</li>
                        </ul>
                        <p>You may request deletion of your data at any time.</p>
                    </section>

                    {/* SECTION 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">6. Cookies & Tracking</h2>
                        <p className="mb-2">We use cookies to:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                            <li>Improve user experience</li>
                            <li>Analyze traffic and usage</li>
                            <li>Remember user preferences</li>
                        </ul>
                        <p>You can disable cookies via your browser settings.</p>
                    </section>

                    {/* SECTION 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">7. Your Rights</h2>
                        <p className="mb-2">You have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your data</li>
                            <li>Withdraw consent for marketing communications</li>
                        </ul>
                    </section>

                    {/* SECTION 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">8. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                        </p>
                    </section>

                    {/* SECTION 9 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-50 pb-2">9. Updates to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                        </p>
                    </section>

                    {/* SECTION 10 - CONTACT BOX */}
                    <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 mt-12 border border-slate-200 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
                        <p className="text-sm mb-6 text-slate-600">If you have any questions or concerns regarding this policy, you can contact us at:</p>

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