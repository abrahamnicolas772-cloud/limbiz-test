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
    id: ,
    text: "ğŸ‘‹ Bonjour ! Je suis l'assistant IA de Limbiz. Comment puis-je vous aider aujourd'hui ?",
    sender: 'bot',
  },
]

const quickReplies = [
  'ğŸ“‹ Vos services',
  'ğŸ’° Tarifs',
  'âš™ï¸ Processus de crÃation',
  'ğŸ“ Contacter un conseiller',
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
      id: messages.length + ,
      text: text,
      sender: 'user',
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simuler une rÃponse IA (Ã  remplacer par API rÃelle)
    setTimeout(() => {
      let botResponse = ''
      const lowerText = text.toLowerCase()

      if (lowerText.includes('service') || lowerText.includes('offre')) {
        botResponse = 'Nous proposons la crÃation d\'entreprise (LLC), le crÃdit professionnel, la mise en place de e-commerce, le dÃpÃ´t de marque, et bien plus. Quel service vous intÃresse ?'
      } else if (lowerText.includes('prix') || lowerText.includes('tarif') || lowerText.includes('coÃ»t')) {
        botResponse = 'Nos tarifs commencent Ã  â‚¬/mois pour le plan Starter. Le plan Professionnel est Ã  â‚¬/mois. Les entreprises peuvent bÃnÃficier d\'un devis personnalisÃ. Souhaitez-vous plus de dÃtails ?'
      } else if (lowerText.includes('crÃation') || lowerText.includes('processus')) {
        botResponse = 'La crÃation d\'entreprise prend gÃnÃralement  Ã   semaines. Nous nous occupons de toutes les formalitÃs lÃgales (immatriculation, EIN, statuts). ÃŠtes-vous prÃªt Ã  commencer ?'
      } else if (lowerText.includes('contact') || lowerText.includes('conseiller')) {
        botResponse = 'Vous pouvez nous joindre par email Ã  hello@limbiz.com ou par tÃlÃphone au + () -. Notre Ãquipe rÃpond sous h.'
      } else {
        botResponse = 'Merci pour votre message. Pouvez-vous prÃciser votre demande ? Je suis lÃ  pour vous aider !'
      }

      const botMessage: Message = {
        id: messages.length + ,
        text: botResponse,
        sender: 'bot',
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, )
  }

  const handleQuickReply = (reply: string) => {
    handleSend(reply)
  }

  return (
    <>
      {/ Bouton flottant (affichÃ quand la fenÃªtre est fermÃe) /}
      {!isOpen && (
        <motion.button
          initial={{ scale:  }}
          animate={{ scale:  }}
          whileHover={{ scale: . }}
          whileTap={{ scale: . }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom- right- z- p- bg-gradient-to-r from-blue- to-purple- rounded-full shadow-xl shadow-blue-/ hover:shadow-neon transition-all cursor-pointer group"
        >
          <FiMessageSquare size={} className="text-white group-hover:scale- transition" />
        </motion.button>
      )}

      {/ FenÃªtre de chat (affichÃe quand isOpen = true) /}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: , y: , scale: . }}
            animate={{ opacity: , y: , scale:  }}
            exit={{ opacity: , y: , scale: . }}
            transition={{ duration: . }}
            className="fixed bottom- right- z- w-[px] h-[px] glass-premium rounded-xl shadow-xl border border-white/ flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/ En-tÃªte /}
            <div className="flex justify-between items-center p- border-b border-white/ bg-black/">
              <div className="flex items-center gap-">
                <div className="w- h- bg-green- rounded-full animate-pulse" />
                <span className="text-white font-semibold">Limbiz AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/ hover:text-white transition"
              >
                <FiX size={} />
              </button>
            </div>

            {/ Zone des messages /}
            <div className="flex- overflow-y-auto p- space-y-">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[%] p- rounded-xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-blue- text-white rounded-br-none'
                        : 'bg-white/ text-white rounded-bl-none border border-white/'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/ text-white p- rounded-xl rounded-bl-none border border-white/">
                    <div className="flex gap-">
                      <span className="w- h- bg-white/ rounded-full animate-bounce" />
                      <span className="w- h- bg-white/ rounded-full animate-bounce delay-" />
                      <span className="w- h- bg-white/ rounded-full animate-bounce delay-" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/ RÃponses rapides + champ de saisie /}
            <div className="p- border-t border-white/">
              <div className="flex flex-wrap gap- mb-">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px- py-. text-xs bg-white/ hover:bg-white/ rounded-full text-white/ transition"
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
                className="flex gap-"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ã‰crivez votre message..."
                  className="flex- px- py- bg-white/ border border-white/ rounded-xl text-white text-sm placeholder-white/ focus:outline-none focus:border-blue-/"
                />
                <button
                  type="submit"
                  className="p- bg-blue- hover:bg-blue- rounded-xl text-white transition"
                >
                  <FiSend size={} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}