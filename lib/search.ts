export interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
}

const data: SearchResult[] = [
  { id: '1', title: 'LLC Formation', description: 'Start your LLC today with expert guidance', category: 'Services', url: '/services/llc' },
  { id: '2', title: 'Trademark Registration', description: 'Protect your brand with federal trademark registration', category: 'Services', url: '/services/trademark' },
  { id: '3', title: 'EIN Registration', description: 'Get your Employer Identification Number fast', category: 'Services', url: '/services/ein' },
  { id: '4', title: 'Pricing', description: 'View our transparent pricing plans', category: 'Pages', url: '/pricing' },
  { id: '5', title: 'Business Credit', description: 'Build and improve your business credit score', category: 'Services', url: '/credit-hub' },
  { id: '6', title: 'Funding Center', description: 'Access funding opportunities for your business', category: 'Services', url: '/funding-center' },
  { id: '7', title: 'Contact Us', description: 'Get in touch with our support team', category: 'Pages', url: '/contact' },
  { id: '8', title: 'About LIMBIZ', description: 'Learn more about our mission and team', category: 'Pages', url: '/about' },
]

export function search(query: string): SearchResult[] {
  const q = query.toLowerCase()
  return data.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  )
}
