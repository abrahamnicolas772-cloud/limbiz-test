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
    await new Promise(resolve => setTimeout(resolve, ))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black relative overflow-hidden pt-">
        {/ Background premium /}
        <div className="absolute inset- bg-noise opacity- pointer-events-none" />
        <div className="absolute inset- -z-">
          <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
          <div className="absolute bottom- right-/ w- h- bg-purple-/ rounded-full blur-[px] animate-pulse-slow" />
          <div className="absolute top-/ left-/ w- h- bg-cyan-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
          
          {/ Grille d√corative /}
          <svg className="absolute inset- w-full h-full opacity-" xmlns="http://www.w.org//svg">
            <defs>
              <pattern id="grid" width="" height="" patternUnits="userSpaceOnUse">
                <path d="M   L    " fill="none" stroke="EB" strokeWidth="." />
              </pattern>
            </defs>
            <rect width="%" height="%" fill="url(grid)" />
          </svg>
        </div>

        {/ Hero Section /}
        <div className="relative text-center px- py- md:py-">
          <div className="inline-flex items-center gap- px- py- rounded-full bg-blue-/ text-blue- text-xs mb- backdrop-blur-sm">
            <span className="w-. h-. rounded-full bg-blue- animate-pulse" />
            Contactez-nous
          </div>
          <h className="text-xl md:text-xl lg:text-xl font-bold">
            Discutons de votre <span className="text-blue-">projet</span>
          </h>
          <p className="mt- text-white/ text-lg max-w-xl mx-auto">
            Une question ? Un projet ? Notre √quipe est l√† pour vous r√pondre sous h.
          </p>
        </div>

        {/ Formulaire et infos /}
        <div className="max-w-xl mx-auto px- py-">
          <div className="grid lg:grid-cols- gap-">
            {/ Formulaire /}
            <div className="bg-white/ backdrop-blur-sm border border-white/ rounded-xl p- md:p-">
              <h className="text-xl font-bold text-white mb-">Envoyez-nous un message</h>
              
              <form onSubmit={handleSubmit} className="space-y-">
                <div className="grid md:grid-cols- gap-">
                  <div>
                    <label className="block text-white/ text-sm font-medium mb-">Nom complet </label>
                    <div className="relative">
                      <FiUser className="absolute left- top-/ -translate-y-/ text-white/" size={} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:outline-none focus:border-blue-/ transition"
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/ text-sm font-medium mb-">Email </label>
                    <div className="relative">
                      <FiMail className="absolute left- top-/ -translate-y-/ text-white/" size={} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:outline-none focus:border-blue-/ transition"
                        placeholder="jean@exemple.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols- gap-">
                  <div>
                    <label className="block text-white/ text-sm font-medium mb-">T√l√phone</label>
                    <div className="relative">
                      <FiPhone className="absolute left- top-/ -translate-y-/ text-white/" size={} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:outline-none focus:border-blue-/ transition"
                        placeholder="+   "
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/ text-sm font-medium mb-">Sujet</label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left- top-/ -translate-y-/ text-white/" size={} />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white focus:outline-none focus:border-blue-/ transition"
                      >
                        <option value="">S√lectionnez un sujet</option>
                        <option value="creation-entreprise">Cr√ation d'entreprise</option>
                        <option value="credit-professionnel">Cr√dit professionnel</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white/ text-sm font-medium mb-">Message </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={}
                    className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:outline-none focus:border-blue-/ transition resize-none"
                    placeholder="D√crivez votre projet..."
                    required
                  />
                </div>

                {error && <p className="text-red- text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py- bg-gradient-to-r from-blue- to-purple- rounded-xl text-white font-semibold flex items-center justify-center gap- transition hover:scale- disabled:opacity-"
                >
                  {isSubmitting ? 'Envoi en cours...' : <><FiSend size={} /> Envoyer le message</>}
                </button>

                {submitted && (
                  <div className="flex items-center justify-center gap- text-green- text-sm">
                    <FiCheckCircle /> Merci ! Nous vous r√pondrons sous h.
                  </div>
                )}
              </form>
            </div>

            {/ Infos contact /}
            <div className="space-y-">
              <div className="bg-white/ backdrop-blur-sm border border-white/ rounded-xl p-">
                <h className="text-xl font-bold text-white mb-">Nos coordonn√es</h>
                <div className="space-y-">
                  <div className="flex items-center gap-">
                    <div className="w- h- rounded-xl bg-blue-/ flex items-center justify-center">
                      <FiMail className="text-blue-" size={} />
                    </div>
                    <div>
                      <p className="text-white/ text-xs">Email</p>
                      <a href="mailto:hello@limbiz.com" className="text-white hover:text-blue- transition">hello@limbiz.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-">
                    <div className="w- h- rounded-xl bg-blue-/ flex items-center justify-center">
                      <FiPhone className="text-blue-" size={} />
                    </div>
                    <div>
                      <p className="text-white/ text-xs">T√l√phone</p>
                      <a href="tel:+" className="text-white hover:text-blue- transition">+ () -</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-">
                    <div className="w- h- rounded-xl bg-blue-/ flex items-center justify-center">
                      <FaWhatsapp className="text-green-" size={} />
                    </div>
                    <div>
                      <p className="text-white/ text-xs">WhatsApp</p>
                      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green- transition">+ () -</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-">
                    <div className="w- h- rounded-xl bg-blue-/ flex items-center justify-center">
                      <FiMapPin className="text-blue-" size={} />
                    </div>
                    <div>
                      <p className="text-white/ text-xs">Adresse</p>
                      <p className="text-white"> Innovation Drive, Suite , Austin, TX </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-">
                    <div className="w- h- rounded-xl bg-blue-/ flex items-center justify-center">
                      <FiClock className="text-blue-" size={} />
                    </div>
                    <div>
                      <p className="text-white/ text-xs">Horaires</p>
                      <p className="text-white">Lundi - Vendredi: h - h (EST)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/ R√seaux sociaux /}
              <div className="bg-white/ backdrop-blur-sm border border-white/ rounded-xl p-">
                <h className="text-xl font-bold text-white mb-">Suivez-nous</h>
                <div className="flex gap-">
                  <a href="" className="w- h- rounded-xl bg-blue-/ flex items-center justify-center hover:bg-blue- transition group">
                    <FaLinkedin className="text-blue- group-hover:text-white transition" size={} />
                  </a>
                  <a href="" className="w- h- rounded-xl bg-blue-/ flex items-center justify-center hover:bg-blue- transition group">
                    <FaTwitter className="text-blue- group-hover:text-white transition" size={} />
                  </a>
                  <a href="" className="w- h- rounded-xl bg-blue-/ flex items-center justify-center hover:bg-blue- transition group">
                    <FaInstagram className="text-blue- group-hover:text-white transition" size={} />
                  </a>
                  <a href="" className="w- h- rounded-xl bg-blue-/ flex items-center justify-center hover:bg-blue- transition group">
                    <FiGlobe className="text-blue- group-hover:text-white transition" size={} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/ Carte Google Maps /}
        <div className="max-w-xl mx-auto px- py-">
          <div className="bg-white/ backdrop-blur-sm border border-white/ rounded-xl overflow-hidden">
            <div className="h- w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!m!m!m!d.!d-.!d.!m!f!f!f!m!i!i!f.!m!m!sxbceee%Axabcdef!sAustin%C%TX!e!m!sen!sus!v!m!sen!sus"
                width="%"
                height="%"
                style={{ border:  }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/ FAQ Contact /}
        <div className="max-w-xl mx-auto px- py-">
          <div className="text-center mb-">
            <h className="text-xl md:text-xl font-bold">Questions <span className="text-blue-">fr√quentes</span></h>
          </div>
          <div className="space-y-">
            {[
              { q: "Quels sont vos d√lais de r√ponse ?", a: "Nous r√pondons √† tous les messages sous h ouvr√es." },
              { q: "Proposez-vous des consultations gratuites ?", a: "Oui, nous offrons une premi√®re consultation de  minutes gratuite." },
              { q: "Puis-je √™tre accompagn√ en fran√ßais ?", a: "Absolument, notre √quipe est bilingue anglais-fran√ßais." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/ backdrop-blur-sm border border-white/ p- rounded-xl hover:border-blue-/ transition">
                <h className="font-semibold text-white">{faq.q}</h>
                <p className="text-white/ text-sm mt-">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}