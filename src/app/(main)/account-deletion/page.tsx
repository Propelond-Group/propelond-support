/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account Deletion',
}

export default function AccountDeletion() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Delete Your Account - Propelond</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: August 9, 2025</p>

        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            This page explains how to permanently delete your Propelond account, what data is removed, what limited data we may retain for
            safety and legal reasons, and your rights throughout the process. These details are tailored for a social media platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">1 | Before you request deletion</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>Make sure you have no open support or safety issues tied to the account.</li>
            <li>If you need a copy of your data, request an export before deletion (see contact options below).</li>
            <li>Understand that deletion is permanent. Your profile, posts, and media will be irreversibly removed from your account.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">2 | How to request deletion</h2>
          <ol className="list-decimal list-inside ml-4 space-y-2 leading-relaxed">
            <li>
              Use our{' '}
              <a href="/contact?topic=account-deletion" className="text-blue-600 hover:text-blue-800 underline">contact form</a>{' '}
              and choose <span className="font-semibold">Account Deletion</span>, or
            </li>
            <li>
              Email{' '}
              <a href="mailto:support@propelond.com" className="text-blue-600 hover:text-blue-800 underline">support@propelond.com</a>{' '}
              with subject <span className="font-semibold">"Account Deletion Request"</span>.
            </li>
            <li>Include your Propelond username and the email or phone number registered on your account.</li>
          </ol>
          <p className="leading-relaxed text-sm text-gray-600">We will verify your identity and aim to complete valid requests within 30 days.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">3 | Data deleted from your account</h2>
          <p className="leading-relaxed">When your request is approved, the following are removed from your account on active systems:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>Profile: display name, handle, bio, website, avatar, cover image</li>
            <li>Content: posts, comments, replies, stories, and media uploads (photos, videos)</li>
            <li>Social graph: followers, following, blocks, mutes, and lists</li>
            <li>Reactions and saves: likes, reactions, bookmarks, and collections</li>
            <li>Search and activity: search history, recent views, notification preferences</li>
            <li>Sessions: device tokens, active sessions, and push-notification registrations</li>
          </ul>
          <p className="leading-relaxed text-sm text-gray-600">Entries are also removed from encrypted backups on a rolling schedule.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">4 | What others may still see</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>
              Direct messages and group chats: copies already delivered to other participants may remain in their inboxes. In group spaces,
              your name may show as "[deleted]" while the conversation context is preserved.
            </li>
            <li>
              Reshares/quotes: content other users have re-posted may not be fully retrievable if it exists in their accounts; we remove your
              original items from your account and attempt to detach references where feasible.
            </li>
            <li>
              Caches and search: it may take time for third-party caches/CDNs and search engines to refresh. This typically resolves as those
              systems update their indexes.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">5 | Data we may retain (limited and for specific reasons)</h2>
          <p className="leading-relaxed">We retain only what is necessary, stored in encrypted archives with strict access controls, for:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>Safety and abuse prevention (e.g., trust-and-safety reports, enforcement history)</li>
            <li>Child-safety and CSAM obligations, including reports and required evidence chains</li>
            <li>Legal requirements, dispute resolution, and law-enforcement requests (legal holds)</li>
            <li>Security, fraud detection, and service integrity logs</li>
            <li>Consent records and critical audit logs to demonstrate compliance</li>
          </ul>
          <p className="leading-relaxed text-sm text-gray-600">
            Retention periods vary by jurisdiction and purpose (often several years). After expiry, data is securely erased or irreversibly
            anonymized.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">6 | Can I cancel the request?</h2>
          <p className="leading-relaxed">
            If you need to cancel before we complete deletion, reply to our confirmation email or your support thread as soon as possible. Once
            deletion is finalized, the process is irreversible and the account cannot be restored.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">7 | Your privacy rights</h2>
          <p className="leading-relaxed">
            Depending on your location, you may have rights to access, delete, correct, or port your data, and to object to or restrict certain
            processing. Contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8 | Need help?</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>
              Contact form: <a href="/contact?topic=account-deletion" className="text-blue-600 hover:text-blue-800 underline">contact</a>
            </li>
            <li>
              Email: <a href="mailto:support@propelond.com" className="text-blue-600 hover:text-blue-800 underline">support@propelond.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


