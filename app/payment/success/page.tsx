export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-">
      <div className="text-center">
        <div className="w- h- bg-green- rounded-full flex items-center justify-center mx-auto mb-">
          <span className="text-xl text-white">âœ“</span>
        </div>
        <h className="text-xl font-bold text-white mb-">Paiement rÃussi !</h>
        <p className="text-white/ mb-">Merci pour votre commande.</p>
        <a href="/orders" className="inline-block px- py- bg-blue- rounded-xl text-white hover:bg-blue- transition">
          Voir mes commandes
        </a>
      </div>
    </div>
  )
}