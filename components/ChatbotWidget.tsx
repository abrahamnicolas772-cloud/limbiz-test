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
  { id: , text: "Hi there! 👋 I'm Limbiz AI assistant. How can I help you today?", sender: 'bot' },
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

    const userMessage: Message = { id: messages.length + , text: text, sender: 'user' }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      let botResponse = ''
      const lowerText = text.toLowerCase()
      if (lowerText.includes('service')) botResponse = 'We offer LLC formation, business credit, e-commerce setup, trademark guidance, and more.'
      else if (lowerText.includes('price')) botResponse = 'Our pricing starts at $/month for Starter. Professional plan is $/month.'
      else if (lowerText.includes('setup')) botResponse = 'Business setup takes - weeks. We handle LLC formation and compliance.'
      else if (lowerText.includes('contact')) botResponse = 'Email: hello@limbiz.com | Phone: + () -'
      else botResponse = "Thanks! Could you provide more details about what you're looking for?"

      const botMessage: Message = { id: messages.length + , text: botResponse, sender: 'bot' }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, )
  }

  if (isMinimized) {
    return (
      <motion.button
        initial={{ scale:  }}
        animate={{ scale:  }}
        whileHover={{ scale: . }}
        onClick={() => setIsMinimized(false)}
        className="fixed bottom- right- z- p- bg-gradient-to-r from-blue- to-purple- rounded-full shadow-xl shadow-blue-/"
      >
        <FiMessageSquare size={} className="text-white" />
      </motion.button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: , x:  }}
      animate={{ opacity: , x:  }}
      className="fixed bottom- right- z- w-[px] h-[px] glass-premium rounded-xl shadow-xl border border-white/ flex flex-col overflow-hidden backdrop-blur-xl"
    >
      {/ Header /}
      <div className="flex justify-between items-center p- border-b border-white/ bg-black/">
        <div className="flex items-center gap-">
          <div className="w- h- bg-green- rounded-full animate-pulse" />
          <span className="text-white font-semibold">Limbiz AI Assistant</span>
        </div>
        <button onClick={() => setIsMinimized(true)} className="text-white/ hover:text-white">
          <FiX size={} />
        </button>
      </div>

      {/ Messages /}
      <div className="flex- overflow-y-auto p- space-y-">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[%] p- rounded-xl text-sm ${msg.sender === 'user' ? 'bg-blue- text-white rounded-br-none' : 'bg-white/ text-white rounded-bl-none border border-white/'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/ text-white p- rounded-xl rounded-bl-none border border-white/">
              <div className="flex gap-"><span className="w- h- bg-white/ rounded-full animate-bounce" /><span className="w- h- bg-white/ rounded-full animate-bounce delay-" /><span className="w- h- bg-white/ rounded-full animate-bounce delay-" /></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/ Quick replies & input /}
      <div className="p- border-t border-white/">
        <div className="flex flex-wrap gap- mb-">
          {quickReplies.map((reply) => (
            <button key={reply} onClick={() => handleSend(reply)} className="px- py-. text-xs bg-white/ hover:bg-white/ rounded-full text-white/ transition">
              {reply}
            </button>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSend(input) }} className="flex gap-">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex- px- py- bg-white/ border border-white/ rounded-xl text-white text-sm placeholder-white/ focus:outline-none focus:border-blue-/" />
          <button type="submit" className="p- bg-blue- hover:bg-blue- rounded-xl text-white transition"><FiSend size={} /></button>
        </form>
      </div>
    </motion.div>
  )
}