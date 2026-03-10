import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Page Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4">
              Legal
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: March 10, 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral max-w-none space-y-10 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                EasyCo collects information you provide directly to us, such as when you subscribe to our newsletter, submit a contact form, or leave a comment. This may include your name and email address. We do not collect payment information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to send you our newsletter, respond to your inquiries, improve the quality of our content, and analyse traffic patterns on our website. We will never sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to measure traffic and understand how visitors use our site. You can control cookies through your browser settings at any time. Disabling cookies may affect certain features of the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Third-Party Services</h2>
              <p>
                Our site may contain links to third-party websites and affiliate links. We are not responsible for the privacy practices of those sites. We recommend reviewing the privacy policy of any third-party site you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. You may request deletion of your data at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete any personal information we hold about you. To exercise any of these rights, please contact us at privacy@easyco.com. We will respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Continued use of the site constitutes acceptance of the revised policy.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
