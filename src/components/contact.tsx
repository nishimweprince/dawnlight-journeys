import { Mail, MapPin, Phone, Send } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to start planning your African adventure? Get in touch with our team of experts.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Our Locations</h3>
                  <p className="text-muted-foreground">Kigali, Rwanda</p>
                  <p className="text-muted-foreground">Kampala, Uganda</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <a href="mailto:info@wildlifeadventures.com" className="text-primary hover:underline">
                    info@wildlifeadventures.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">Rwanda: +250 123 456 789</p>
                  <p className="text-muted-foreground">Uganda: +256 123 456 789</p>
                </div>
              </div>

              <div className="pt-4">
                <CustomButton variant="primary" size="lg" href="https://wa.me/1234567890" className="w-full sm:w-auto">
                  Chat on WhatsApp
                </CustomButton>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us about your travel plans..."
                  required
                />
              </div>

              <CustomButton variant="primary" type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
