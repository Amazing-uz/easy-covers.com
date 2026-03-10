import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="text-muted-foreground">Last updated: March 10, 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the EasyCo website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our site. We reserve the right to modify these terms at any time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Content and Accuracy</h2>
              <p>
                All product comparisons, reviews, and ratings on EasyCo are based on our independent testing and research. We strive for accuracy but cannot guarantee that all information is complete or up to date. Product specifications and prices may change without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Affiliate Links</h2>
              <p>
                Some links on EasyCo are affiliate links. This means we may earn a small commission if you make a purchase through our links, at no additional cost to you. This does not influence our editorial decisions or product rankings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Intellectual Property</h2>
              <p>
                All content on EasyCo — including text, images, graphics, and comparison data — is the property of EasyCo and is protected by copyright law. You may not reproduce, distribute, or republish any content without our written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Limitation of Liability</h2>
              <p>
                EasyCo is not liable for any loss or damage arising from your reliance on information published on this site. All purchasing decisions are made at your own risk. We recommend verifying product details directly with the manufacturer or retailer before buying.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. User Conduct</h2>
              <p>
                You agree not to use this site for any unlawful purpose, to transmit spam or harmful content, or to attempt to gain unauthorized access to any part of our systems. We reserve the right to block access to users who violate these rules.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the United States. Any disputes arising from use of this site shall be subject to the exclusive jurisdiction of the courts of New York, NY.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
