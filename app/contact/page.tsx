'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, Clock } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4">
              Get in Touch
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-balance"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              We would love to{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                hear from you
              </span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a product suggestion, spotted an error, or want to collaborate? Drop us a message and we will get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              <Card className="p-6 border-2">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Email</h3>
                <p className="text-sm text-muted-foreground">hello@easyco.com</p>
              </Card>

              <Card className="p-6 border-2">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Press & Partnerships</h3>
                <p className="text-sm text-muted-foreground">press@easyco.com</p>
              </Card>

              <Card className="p-6 border-2">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Response Time</h3>
                <p className="text-sm text-muted-foreground">Usually within 24 hours on weekdays</p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-2">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Message Sent
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thanks for reaching out. We will get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="mt-2"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold">First Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Marcus"
                          className="px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary transition text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold">Last Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Webb"
                          className="px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary transition text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary transition text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold">Subject</label>
                      <select className="px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary transition text-sm text-muted-foreground">
                        <option>Product suggestion</option>
                        <option>Error or correction</option>
                        <option>Partnership or collaboration</option>
                        <option>Press inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold">Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us what is on your mind..."
                        className="px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary transition text-sm resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-bold"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
