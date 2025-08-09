import { type Metadata } from 'next'

import { SupportLayout } from '@/components/SupportLayout'
import { SupportContactForm } from '@/components/SupportContactForm'

export const metadata: Metadata = {
  title: 'Contact Support',
}

type ContactPageProps = {
  searchParams?: Record<string, string | string[]>
}

export default function Contact({ searchParams }: ContactPageProps) {
  const topicParam = typeof searchParams?.topic === 'string' ? searchParams.topic : undefined
  const defaultCategory = topicParam === 'account-deletion' ? 'account-deletion' : ''
  return (
    <SupportLayout
      title="Contact Support"
      subtitle={
        <>
          Need help? Reach out to us at{' '}
          <a href="mailto:support@propelond.com" className="text-[#f44336] hover:text-[#e53935]">
            support@propelond.com
          </a>{' '}
          or use the form below.
        </>
      }
    >
      <SupportContactForm defaultCategory={defaultCategory} />
    </SupportLayout>
  )
}
