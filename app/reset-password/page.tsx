'use client'
import { useState } from 'react'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
      <div className="max-w-md w-full px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Reset Password</h1>
        <form className="space-y-4">
          <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700" />
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Reset Password</button>
        </form>
      </div>
    </div>
  )
}
