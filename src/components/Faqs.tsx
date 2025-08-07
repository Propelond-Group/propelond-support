import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I know my content will be seen?',
      answer:
        'Our whole business depends on African creators being successful, so it\'s in our best interest that your content reaches the right audience. The results of our creators speak for themselves.',
    },
    {
      question: 'Is this just another social media platform?',
      answer:
        'Yes, but specifically for African content! Historically you could only share African stories on platforms that don\'t understand our culture. Propelond brings you a community that truly appreciates African voices.',
    },
    {
      question: 'But aren\'t there already social media platforms?',
      answer:
        'Here\'s the thing: you\'re the one creating authentic African content, not us. We\'re just providing the platform and tools to connect with your community. We\'re building something special here.',
    },
  ],
  [
    {
      question: 'Do people really want to see African content?',
      answer:
        'Absolutely! The global demand for authentic African stories is growing every day. People are hungry for real African perspectives, not just stereotypes.',
    },
    {
      question: 'Where is Propelond based?',
      answer:
        'We\'re proudly African-founded and operated, with teams across the continent and diaspora.',
    },
    {
      question: 'Is there any age limit to using Propelond?',
      answer:
        'For our free plan, the age limit is 13+ to comply with international regulations. Our premium features are available to users 18+ with advanced privacy controls.',
    },
  ],
  [
    {
      question: 'How did you get this on the App Store?',
      answer:
        'We built Propelond with the highest standards of privacy and security. The app stores recognized the importance of a platform dedicated to African voices.',
    },
    {
      question: 'How do I monetize my content on Propelond?',
      answer:
        'We offer multiple ways to earn: brand partnerships, creator fund, and direct support from your community. Contact us for details on our monetization programs.',
    },
    {
      question: 'How do I become a featured creator?',
      answer:
        'Contact us with details about your content and the African stories you want to share. Once approved, we\'ll help you grow your audience and amplify your voice.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@propelond.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
