export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-white">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Paiement réussi !</h1>
        <p className="text-white/60 mb-6">Merci pour votre commande.</p>
        <a href="/orders" className="inline-block px-6 py-2 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition">
          Voir mes commandes
        </a>
      </div>
    </div>
  )
}