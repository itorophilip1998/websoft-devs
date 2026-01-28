import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-white min-h-screen">
          <div className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Mail className="w-10 h-10 text-[var(--primary)]" />
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Contact</h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-600">Get in touch with us</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div data-aos="fade-right">
                <ContactInfo />
              </div>
              <div data-aos="fade-left">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
