'use client'

import { useState, useEffect, useRef } from 'react'
import { FiBell } from 'react-icons/fi'

interface Notification {
  id: number
  title: string
  message: string
  read: boolean
  created_at: string
}

export default function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const fetchNotifications = async () => {
    try {
      const res = await fetch('/api/notifications')
      if (res.ok) {
        const data = await res.json()
        setNotifications(data)
        setUnreadCount(data.filter((n: Notification) => !n.read).length)
      }
    } catch (error) {
      console.error('Erreur chargement notifications', error)
    }
  }

  useEffect(() => {
    fetchNotifications()
    const interval = setInterval(fetchNotifications, )
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const markAsRead = async (id: number) => {
    try {
      await fetch('/api/notifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notification_id: id, read: true }),
      })
      setNotifications(prev =>
        prev.map(n => (n.id === id ? { ...n, read: true } : n))
      )
      setUnreadCount(prev => Math.max(, prev - ))
    } catch (error) {
      console.error('Erreur mise à jour', error)
    }
  }

  const markAllAsRead = async () => {
    const unreadIds = notifications.filter(n => !n.read).map(n => n.id)
    for (const id of unreadIds) {
      await fetch('/api/notifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notification_id: id, read: true }),
      })
    }
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
    setUnreadCount()
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p- text-white/ hover:text-white transition"
      >
        <FiBell size={} />
        {unreadCount >  && (
          <span className="absolute -top- -right- flex h- w- items-center justify-center rounded-full bg-red- text-[px] font-bold text-white">
            {unreadCount >  ? '+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right- mt- w- bg-black/ backdrop-blur-xl rounded-xl border border-white/ shadow-xl z- overflow-hidden">
          <div className="p- border-b border-white/ flex justify-between items-center">
            <h className="text-white font-semibold">Notifications</h>
            {unreadCount >  && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-blue- hover:underline"
              >
                Tout marquer comme lu
              </button>
            )}
          </div>
          <div className="max-h- overflow-y-auto">
            {notifications.length ===  ? (
              <div className="p- text-center text-white/">Aucune notification</div>
            ) : (
              notifications.map(notif => (
                <div
                  key={notif.id}
                  onClick={() => markAsRead(notif.id)}
                  className={`p- border-b border-white/ cursor-pointer transition ${
                    !notif.read ? 'bg-blue-/' : 'hover:bg-white/'
                  }`}
                >
                  <p className="text-white text-sm font-medium">{notif.title}</p>
                  <p className="text-white/ text-xs mt-">{notif.message}</p>
                  <p className="text-white/ text-[px] mt-">
                    {new Date(notif.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}