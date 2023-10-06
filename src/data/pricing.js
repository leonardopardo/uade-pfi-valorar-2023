import freeIcon from 'assets/img/icons/free.svg';
import proIcon from 'assets/img/icons/pro.svg';
import fullIcon from 'assets/img/icons/full.svg';

export const pricingData = [
  {
    id: 0,
    title: 'Single',
    subTitle: 'For teams that need to create project plans with confidence.',
    price: 0,
    url: '/e-commerce/billing',
    buttonText: 'Start free trial',
    isFeatured: false,
    featureTitle: 'Track team projects with free:',
    features: [
      { id: 1, title: 'Timeline' },
      { id: 2, title: 'Advanced Search' },
      { id: 3, title: 'Custom fields', tag: { label: 'New', type: 'success' } },
      { id: 4, title: 'Task dependencies' },
      { id: 5, title: 'Private teams & projects' }
    ]
  },
  {
    id: 1,
    title: 'Business',
    subTitle:
      'For teams and companies that need to manage work across initiatives.',
    price: 39,
    url: '/e-commerce/billing',
    buttonText: 'Get Business',
    isFeatured: true,
    featureTitle: 'Everything in Premium, plus:',
    features: [
      { id: 1, title: 'Portfolios' },
      { id: 2, title: 'Lock custom fields' },
      { id: 3, title: 'Onboarding plan' },
      { id: 4, title: 'Resource Management' },
      { id: 5, title: 'Lock custom fields' }
    ]
  },
  {
    id: 2,
    title: 'Extended',
    subTitle: 'For organizations that need additional security and support.',
    price: 99,
    url: '/e-commerce/billing',
    buttonText: 'Purchase',
    isFeatured: false,
    featureTitle: 'Everything in Business, plus:',
    features: [
      { id: 1, title: 'Portfolios' },
      { id: 2, title: 'Tags', tag: { label: 'Coming soon', type: 'primary' } },
      { id: 3, title: 'Onboarding plan' },
      { id: 4, title: 'Resource Management' }
    ]
  }
];

export const pricingAltData = [
  {
    id: 0,
    title: 'Inicial',
    price: 15,
    period: 'mes',
    icon: freeIcon,
    url: '#!',
    buttonText: 'Contratar',
    isFeatured: false,
    features: [
      { id: 0, title: '100 consultas mensuales', isActive: true },
      { id: 1, title: 'Análisis de sentimiento', isActive: true },
      { id: 2, title: 'Soporte para Integraciones', isActive: false },
      { id: 3, title: 'Mesa de Ayuda', isActive: false },
    ]
  },
  {
    id: 1,
    title: 'Pro',
    price: 40,
    period: 'mes',
    icon: proIcon,
    url: '#!',
    buttonText: 'Contratar',
    isFeatured: true,
    features: [
      { id: 0, title: '500 consultas mensuales', isActive: true },
      { id: 1, title: 'Análisis de sentimiento', isActive: true },
      { id: 2, title: 'Soporte para Integraciones', isActive: true },
      { id: 3, title: 'Mesa de Ayuda', isActive: false },
    ]
  },
  {
    id: 2,
    title: 'Full',
    price: 90,
    period: 'mes',
    icon: fullIcon,
    url: '#!',
    buttonText: 'Contratar',
    isFeatured: true,
    features: [
      { id: 0, title: 'Consultas mensuales Ilimitadas', isActive: true },
      { id: 1, title: 'Análisis de sentimiento', isActive: true },
      { id: 2, title: 'Soporte para Integraciones', isActive: true },
      { id: 3, title: 'Mesa de Ayuda 24x7', isActive: true },
    ]
  }
];
