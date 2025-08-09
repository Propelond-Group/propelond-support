import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Child Safety Policy',
}

export default function ChildSafety() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Propelond Child Safety Standards Policy</h1>
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            At Propelond, the safety and protection of children is a core priority. We are committed to providing a secure platform where harmful,
            exploitative, or abusive content is never tolerated. Our policies are based on globally recognized child protection principles, and we
            actively work with international organizations, law enforcement agencies, and trusted technology partners to ensure that our platform
            remains safe for all.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">1. Our Commitment to Child Safety</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>
              We have zero tolerance for Child Sexual Abuse and Exploitation (CSAE), including Child Sexual Abuse Material (CSAM) in any form —
              whether images, videos, audio, live streams, or written content.
            </li>
            <li>
              We actively monitor, detect, and remove harmful content using advanced tools, community reporting, and trained moderation teams.
            </li>
            <li>We cooperate fully with law enforcement agencies worldwide to identify offenders and protect victims.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">2. International Standards and Frameworks We Follow</h2>
          <p className="leading-relaxed">
            Propelond aligns its child protection measures with recognized international conventions and alliances, including:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>
              United Nations Convention on the Rights of the Child (UNCRC) — the global treaty setting out children’s rights to protection, safety,
              and dignity.
            </li>
            <li>WePROTECT Global Alliance — an international coalition dedicated to ending the sexual exploitation of children online.</li>
            <li>INHOPE — a global network of internet hotlines for reporting and removing CSAM.</li>
            <li>
              National Center for Missing &amp; Exploited Children (NCMEC) — the US-based reporting body for CSAM and child exploitation.
            </li>
            <li>Interpol Crimes Against Children Initiative — global cooperation to track and prosecute offenders.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">3. Reporting Harmful Content</h2>
          <p className="leading-relaxed">We encourage all users to immediately report any suspicious or harmful material. You can do this by:</p>
          <ol className="list-decimal list-inside ml-4 space-y-2 leading-relaxed">
            <li>Using the in-app “Report” button available on every post, message, or user profile.</li>
            <li>
              Emailing us at{' '}
              <a href="mailto:support@propelond.com" className="text-blue-600 hover:text-blue-800 underline">
                support@propelond.com
              </a>
              .
            </li>
            <li>
              Calling, texting, or sending a WhatsApp message to our official safety line:{' '}
              <a href="tel:+12898188036" className="text-blue-600 hover:text-blue-800 underline">
                +1 (289) 818-8036
              </a>
              .
            </li>
          </ol>
          <p className="leading-relaxed">Your report will be treated as urgent, and you may remain anonymous if you wish.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">4. How We Respond to Child Exploitation Reports</h2>
          <ol className="list-decimal list-inside ml-4 space-y-2 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">Immediate Review</span> — Our Trust &amp; Safety team will urgently review the content.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Content Removal</span> — Any confirmed CSAM will be removed without delay.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Account Action</span> — Accounts involved will be suspended or permanently banned.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Evidence Preservation</span> — Relevant data will be securely preserved for law enforcement investigations.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Law Enforcement Notification</span> — We will escalate reports to recognized authorities, such as NCMEC, INHOPE, or local police agencies, depending on jurisdiction.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">5. Prevention and Detection Tools</h2>
          <p className="leading-relaxed">We use industry-leading technologies to detect and prevent the upload of known child sexual abuse material, including:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>PhotoDNA — for identifying previously known CSAM images.</li>
            <li>Video Hashing Technologies — to detect and block re-uploads of harmful videos.</li>
            <li>AI-Powered Moderation — to detect grooming behavior, inappropriate chats, and suspicious patterns.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">6. Legal and Regulatory Compliance</h2>
          <p className="leading-relaxed">
            Propelond complies with applicable child protection laws in every country where we operate. We will respond to lawful requests from government authorities,
            provided they comply with due process and privacy regulations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">7. User Education</h2>
          <p className="leading-relaxed">
            We provide resources and educational content to help users understand online risks, protect themselves and others, and recognize early warning signs of
            grooming or exploitation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8. Contact Us</h2>
          <p className="leading-relaxed">If you encounter harmful content or behavior that may put a child at risk, please report it immediately:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
            <li>
              📧 Email:{' '}
              <a href="mailto:support@propelond.com" className="text-blue-600 hover:text-blue-800 underline">
                support@propelond.com
              </a>
            </li>
            <li>
              📞 Call/Text/WhatsApp:{' '}
              <a href="tel:+12898188036" className="text-blue-600 hover:text-blue-800 underline">
                +1 (289) 818-8036
              </a>
            </li>
          </ul>

          <p className="leading-relaxed">
            This policy will be regularly updated to ensure it remains in line with evolving international standards and emerging threats. Propelond stands with
            children, families, and communities worldwide in creating a safe, trusted, and respectful online environment.
          </p>
        </div>
      </div>
    </div>
  )
}


