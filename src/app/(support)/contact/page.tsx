import { type Metadata } from 'next'

import { SupportLayout } from '@/components/SupportLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export const metadata: Metadata = {
  title: 'Contact Support',
}

export default function Contact() {
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
      <form>
        <div className="space-y-6">
          {/* Contact Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              How can we help you?
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
              required
            >
              <option value="">Select an option</option>
              <option value="account">Account Issues</option>
              <option value="technical">Technical Problems</option>
              <option value="content">Content & Moderation</option>
              <option value="feedback">Feedback & Suggestions</option>
              <option value="report">Report a Problem</option>
              <option value="partnership">Partnership & Business</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* User Information */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextField
              label="First Name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
            />
          </div>

          <TextField
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          {/* Account Information (if applicable) */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Propelond Username (if applicable)
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
              placeholder="@yourusername"
            />
          </div>

          {/* Subject */}
          <TextField
            label="Subject"
            name="subject"
            type="text"
            required
          />

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
              Priority Level
            </label>
            <select
              id="priority"
              name="priority"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
              required
            >
              <option value="">Select priority level</option>
              <option value="low">Low - General inquiry</option>
              <option value="medium">Medium - Standard support request</option>
              <option value="high">High - Urgent issue affecting usage</option>
              <option value="critical">Critical - Account security or major bug</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Describe your issue or request
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
              placeholder="Please provide as much detail as possible to help us assist you better..."
              required
            />
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information (optional)
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
              placeholder="Any additional context, screenshots descriptions, or relevant details..."
            />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Button type="submit" color="cyan" className="w-full">
            Submit Support Request
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            We typically respond within 24 hours during business days. 
            For urgent issues, please email us directly at{' '}
            <a href="mailto:support@propelond.com" className="text-[#f44336] hover:text-[#e53935]">
              support@propelond.com
            </a>
          </p>
        </div>
      </form>
    </SupportLayout>
  )
}
