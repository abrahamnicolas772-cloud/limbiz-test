'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  FiMail, FiPhone, FiMapPin, FiClock, FiSend, 
  FiCheckCircle, FiUser, FiMessageSquare, FiGlobe
} from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setError('Veuillez remplir tous les champs obligatoires')
      return
    }
    if (!formData.email.includes('@')) {
      setError('Email invalide')
      return
    }
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black relative overflow-hidden pt-24">
        {/* Background premium */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[110px] animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] animate-pulse-slow animation-delay-1000" />
          
          {/* Grille décorative */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2563EB" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero Section */}
        <div className="relative text-center px-4 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Contactez-nous
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Discutons de votre <span className="text-blue-500">projet</span>
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous répondre sous 24h.
          </p>
        </div>

        {/* Formulaire et infos */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Nom complet *</label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition"
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Email *</label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition"
                        placeholder="jean@exemple.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Téléphone</label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Sujet</label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="creation-entreprise">Création d'entreprise</option>
                        <option value="credit-professionnel">Crédit professionnel</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition resize-none"
                    placeholder="Décrivez votre projet..."
                    required
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition hover:scale-105 disabled:opacity-70"
                >
                  {isSubmitting ? 'Envoi en cours...' : <><FiSend size={18} /> Envoyer le message</>}
                </button>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                    <FiCheckCircle /> Merci ! Nous vous répondrons sous 24h.
                  </div>
                )}
              </form>
            </div>

            {/* Infos contact */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <FiMail className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Email</p>
                      <a href="mailto:hello@limbiz.com" className="text-white hover:text-blue-400 transition">hello@limbiz.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <FiPhone className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Téléphone</p>
                      <a href="tel:+15551234567" className="text-white hover:text-blue-400 transition">+1 (555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <FaWhatsapp className="text-green-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">WhatsApp</p>
                      <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition">+1 (555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <FiMapPin className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Adresse</p>
                      <p className="text-white">123 Innovation Drive, Suite 100, Austin, TX 78701</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <FiClock className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Horaires</p>
                      <p className="text-white">Lundi - Vendredi: 9h - 18h (EST)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Suivez-nous</h2>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center hover:bg-blue-500 transition group">
                    <FaLinkedin className="text-blue-400 group-hover:text-white transition" size={22} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center hover:bg-blue-500 transition group">
                    <FaTwitter className="text-blue-400 group-hover:text-white transition" size={22} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center hover:bg-blue-500 transition group">
                    <FaInstagram className="text-blue-400 group-hover:text-white transition" size={22} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center hover:bg-blue-500 transition group">
                    <FiGlobe className="text-blue-400 group-hover:text-white transition" size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.123456!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599c7e7e7e7%3A0x1234567890abcdef!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1612345678901!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* FAQ Contact */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Questions <span className="text-blue-500">fréquentes</span></h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Quels sont vos délais de réponse ?", a: "Nous répondons à tous les messages sous 24h ouvrées." },
              { q: "Proposez-vous des consultations gratuites ?", a: "Oui, nous offrons une première consultation de 30 minutes gratuite." },
              { q: "Puis-je être accompagné en français ?", a: "Absolument, notre équipe est bilingue anglais-français." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl hover:border-blue-500/30 transition">
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="text-white/50 text-sm mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}