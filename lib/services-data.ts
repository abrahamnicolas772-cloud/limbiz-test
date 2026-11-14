export interface ServiceItem {
  name: string
  price: string
  unit: string
  note: string
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  services: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'formation',
    title: 'Business Formation',
    description: 'Start your business legally with full compliance and expert guidance.',
    services: [
      { name: 'LLC Filing', price: '$149', unit: '', note: 'State filing and required publication charges are separate.' },
      { name: 'EIN Registration', price: '$79', unit: '', note: 'One standard EIN application. International cases use EIN for Foreign Owners.' },
      { name: 'Operating Agreement', price: '$149', unit: '', note: 'Standard template completion. Custom drafting and legal review require a quote.' },
      { name: 'DBA / Fictitious Name', price: '$99', unit: '', note: 'One name in one jurisdiction. Government and required publication fees are separate.' },
      { name: 'S-Corporation Election Assistance', price: '$199', unit: '', note: 'Administrative application assistance. Specialized advice and additional filings are separate.' },
      { name: 'LLC Amendment', price: '$149', unit: '', note: 'One simple amendment. State fees separate; complex changes require a quote.' },
      { name: 'Foreign Qualification', price: '$249', unit: '/state', note: 'Registration in one additional U.S. state. State fees, certificates and agent service separate.' },
      { name: 'Business Reinstatement', price: 'From $199', unit: '', note: 'Simple case to restore active registration. State charges, penalties and overdue filings are separate.' },
      { name: 'Business Dissolution', price: '$199', unit: '', note: 'Dissolution assistance in one state. Government fees, final tax returns and other closure work separate.' },
    ]
  },
  {
    id: 'setup',
    title: 'Business Setup',
    description: 'Get your business ready to operate with essential infrastructure.',
    services: [
      { name: 'Business Names & Domains', price: '$99', unit: '', note: 'Name research and up to 2 domains for year 1; combined purchase allowance $55.' },
      { name: 'Business Address', price: '$89.99', unit: 'one-time', note: 'Setup and first month of a basic address plan costing up to $39.' },
      { name: 'Registered Agent', price: '$99', unit: '/year/state', note: 'One business in one state. Selected base provider service is included.' },
      { name: 'Business Email Creation', price: '$79', unit: '', note: 'One professional email setup. Domain and email subscriptions separate.' },
      { name: 'Google Business Profile Setup', price: '$149', unit: '', note: 'One eligible profile. Verification and platform approval are not guaranteed.' },
      { name: 'Licenses & Permits Assessment', price: '$129', unit: '', note: 'Research for one business activity/location. Application work and official fees separate.' },
      { name: 'License / Permit Application Assistance', price: 'From $99', unit: '/application', note: 'One application, not a bundle. Official fees separate.' },
      { name: 'Sales Tax Permit Assistance', price: '$99', unit: '', note: 'Registration assistance in one state. Official fees and ongoing returns separate.' },
      { name: 'Essential Business Documents', price: '$199', unit: '', note: 'Standard Operating Agreement, banking resolution and organizational minutes.' },
      { name: 'D-U-N-S Application Assistance', price: '$79', unit: '', note: 'Standard application assistance and follow-up. Optional paid expedited products separate.' },
    ]
  },
  {
    id: 'growth',
    title: 'Growth & Compliance',
    description: 'Build credit, secure funding, and stay compliant with regulations.',
    services: [
      { name: 'Business Credit Building', price: '$999', unit: '6-month program', note: 'Business-structure review, credit-profile setup, vendor applications and progress follow-up.' },
      { name: 'Funding Assistance', price: '$699', unit: '', note: 'Readiness review, suitable-option research, file preparation, up to 3 applications and follow-up.' },
      { name: 'Business Tax Preparation & Filing', price: 'From $699', unit: '', note: 'Preparation and filing for one tax year. Final quote depends on entity/return type and states involved.' },
      { name: 'Annual Report Filing', price: '$99', unit: '/report/state', note: 'One report for one business in one state and reporting period.' },
      { name: 'Compliance Monitoring', price: '$149', unit: '/year/state', note: 'One business in one state. Filing services and government charges separate.' },
    ]
  },
  {
    id: 'international',
    title: 'International Services',
    description: 'Supporting international entrepreneurs with U.S. business formation.',
    services: [
      { name: 'ITIN Application Assistance', price: '$450', unit: '/applicant', note: 'Application assistance, case coordination and follow-up through LIMBIZ and its ITIN partner.' },
      { name: 'Foreign-Owned U.S. LLC Formation', price: '$499', unit: '', note: 'One U.S. LLC in one state. State fees, EIN, address, Registered Agent and tax reporting are separate services.' },
      { name: 'EIN for Foreign Owners', price: '$199', unit: '', note: 'One international EIN application handled by LIMBIZ with client authorization.' },
      { name: 'International Business Formation', price: 'Custom quote', unit: '', note: 'Other countries or entity structures. Route standard foreign-owned U.S. LLC requests to the $499 service.' },
      { name: 'U.S. Business Address', price: '$89.99', unit: 'one-time', note: 'Same service as Business Address: setup + first month.' },
      { name: 'Registered Agent', price: '$99', unit: '/year/state', note: 'Same service as Registered Agent in Business Setup.' },
    ]
  },
  {
    id: 'protection',
    title: 'Protection & Digital',
    description: 'Protect your brand, assets, and build your digital presence.',
    services: [
      { name: 'Trademark Research & Guidance', price: '$249', unit: '', note: 'Preliminary research and process guidance. Application filing, official fees and attorney services separate.' },
      { name: 'Copyright Registration Assistance', price: '$149', unit: '/work', note: 'Standard application assistance for one work. Official fees and specialized legal services separate.' },
      { name: 'Business Branding', price: '$249', unit: '', note: 'Brand positioning, messaging and visual direction. Logo production and full guidelines separate.' },
      { name: 'Simple Logo', price: '$199', unit: '', note: 'One concept, two revision rounds and final files. Extra concepts/revisions quoted separately.' },
      { name: 'Full Brand Guidelines', price: '$499', unit: '', note: 'Logo, colors, typography and brand-use guide. Additional assets beyond agreed scope separate.' },
      { name: 'Starter Website / Landing Page', price: '$499', unit: '', note: 'Simple informational site of 1-4 pages or a landing page.' },
      { name: 'Professional Website', price: '$999', unit: '', note: 'Informational site of 5-8 pages. Special features, hosting, domains and maintenance separate.' },
      { name: 'Domain Registration Assistance', price: '$39', unit: '/domain', note: 'Research and configuration. Domain purchase and renewals separate.' },
      { name: 'E-Commerce Setup', price: '$399', unit: '/platform', note: 'One platform and up to 5 products using client content. Subscriptions and transaction fees separate.' },
      { name: 'Social Media Setup', price: '$149', unit: '', note: 'Up to 2 accounts: profile images, bio, contact information and links.' },
      { name: 'Digital Business Card', price: '$79', unit: '', note: 'One digital card with contact details, links and QR code.' },
    ]
  },
]
