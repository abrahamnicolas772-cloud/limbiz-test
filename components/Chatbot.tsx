'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi'

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Bonjour ! Je suis l'assistant IA de Limbiz. Comment puis-je vous aider aujourd'hui ?",
    sender: 'bot',
  },
]

const quickReplies = [
  '📋 Vos services',
  '💰 Tarifs',
  '⚙️ Processus de création',
  '📞 Contacter un conseiller',
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simuler une réponse IA (à remplacer par API réelle)
    setTimeout(() => {
      let botResponse = ''
      const lowerText = text.toLowerCase()

      if (lowerText.includes('service') || lowerText.includes('offre')) {
        botResponse = 'Nous proposons la création d\'entreprise (LLC), le crédit professionnel, la mise en place de e-commerce, le dépôt de marque, et bien plus. Quel service vous intéresse ?'
      } else if (lowerText.includes('prix') || lowerText.includes('tarif') || lowerText.includes('coût')) {
        botResponse = 'Nos tarifs commencent à 49€/mois pour le plan Starter. Le plan Professionnel est à 99€/mois. Les entreprises peuvent bénéficier d\'un devis personnalisé. Souhaitez-vous plus de détails ?'
      } else if (lowerText.includes('création') || lowerText.includes('processus')) {
        botResponse = 'La création d\'entreprise prend généralement 4 à 6 semaines. Nous nous occupons de toutes les formalités légales (immatriculation, EIN, statuts). Êtes-vous prêt à commencer ?'
      } else if (lowerText.includes('contact') || lowerText.includes('conseiller')) {
        botResponse = 'Vous pouvez nous joindre par email à hello@limbiz.com ou par téléphone au +1 (555) 123-4567. Notre équipe répond sous 24h.'
      } else {
        botResponse = 'Merci pour votre message. Pouvez-vous préciser votre demande ? Je suis là pour vous aider !'
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    handleSend(reply)
  }

  return (
    <>
      {/* Bouton flottant (affiché quand la fenêtre est fermée) */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-neon transition-all cursor-pointer group"
        >
          <FiMessageSquare size={24} className="text-white group-hover:scale-105 transition" />
        </motion.button>
      )}

      {/* Fenêtre de chat (affichée quand isOpen = true) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[550px] glass-premium rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* En-tête */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white font-semibold">Limbiz AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Zone des messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white/10 text-white rounded-bl-none border border-white/20'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white p-3 rounded-2xl rounded-bl-none border border-white/20">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-100" />
                      <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Réponses rapides + champ de saisie */}
            <div className="p-3 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-full text-white/80 transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend(input)
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500/50"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-white transition"
                >
                  <FiSend size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}