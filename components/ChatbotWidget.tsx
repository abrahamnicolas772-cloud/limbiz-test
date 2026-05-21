'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiX, FiMessageSquare } from 'react-icons/fi'

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
}

const initialMessages: Message[] = [
  { id: 1, text: "Hi there! 👋 I'm Limbiz AI assistant. How can I help you today?", sender: 'bot' },
]

const quickReplies = [
  'Tell me about your services',
  'Pricing plans',
  'Business setup process',
  'Contact a human',
]

export default function ChatbotWidget() {
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = { id: messages.length + 1, text: text, sender: 'user' }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      let botResponse = ''
      const lowerText = text.toLowerCase()
      if (lowerText.includes('service')) botResponse = 'We offer LLC formation, business credit, e-commerce setup, trademark guidance, and more.'
      else if (lowerText.includes('price')) botResponse = 'Our pricing starts at $49/month for Starter. Professional plan is $99/month.'
      else if (lowerText.includes('setup')) botResponse = 'Business setup takes 4-6 weeks. We handle LLC formation and compliance.'
      else if (lowerText.includes('contact')) botResponse = 'Email: hello@limbiz.com | Phone: +1 (555) 123-4567'
      else botResponse = "Thanks! Could you provide more details about what you're looking for?"

      const botMessage: Message = { id: messages.length + 2, text: botResponse, sender: 'bot' }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  if (isMinimized) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-blue-500/30"
      >
        <FiMessageSquare size={24} className="text-white" />
      </motion.button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 right-6 z-50 w-[380px] h-[550px] glass-premium rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-white font-semibold">Limbiz AI Assistant</span>
        </div>
        <button onClick={() => setIsMinimized(true)} className="text-white/50 hover:text-white">
          <FiX size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white/10 text-white rounded-bl-none border border-white/20'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 text-white p-3 rounded-2xl rounded-bl-none border border-white/20">
              <div className="flex gap-1"><span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" /><span className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-100" /><span className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-200" /></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick replies & input */}
      <div className="p-3 border-t border-white/10">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickReplies.map((reply) => (
            <button key={reply} onClick={() => handleSend(reply)} className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-full text-white/80 transition">
              {reply}
            </button>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSend(input) }} className="flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500/50" />
          <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-white transition"><FiSend size={18} /></button>
        </form>
      </div>
    </motion.div>
  )
}