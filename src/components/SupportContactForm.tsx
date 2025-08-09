'use client'

import { Fragment, useMemo, useState } from 'react'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
  Field,
  Label,
  Input,
  Textarea,
  Description,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

type Props = {
  defaultCategory?: string
}

export function SupportContactForm({ defaultCategory = '' }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  // Assets upload removed (requires auth)

  const internalApi = '/backend/api/support'

  const categories = useMemo(
    () => [
      { label: 'Account Deletion', value: 'account-deletion' },
      { label: 'Account Issues', value: 'account' },
      { label: 'Technical Problems', value: 'technical' },
      { label: 'Content & Moderation', value: 'content' },
      { label: 'Feedback & Suggestions', value: 'feedback' },
      { label: 'Report a Problem', value: 'report' },
      { label: 'Partnership & Business', value: 'partnership' },
      { label: 'Other', value: 'other' },
    ],
    [],
  )

  const defaultSelected = useMemo(
    () => categories.find((c) => c.value === defaultCategory) ?? null,
    [categories, defaultCategory],
  )
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number] | null>(
    defaultSelected,
  )

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage(null)
    setErrors({})

    const formData = new FormData(event.currentTarget)
    const payload = {
      category: String(selectedCategory?.value || ''),
      firstName: String(formData.get('firstName') || '').trim(),
      lastName: String(formData.get('lastName') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      username: String(formData.get('username') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      source: 'web-support-form',
    }

    // Basic client-side validation to replace native browser validation
    const nextErrors: Record<string, string> = {}
    if (!payload.category) nextErrors.category = 'Please select a category.'
    if (!payload.firstName) nextErrors.firstName = 'First name is required.'
    if (!payload.lastName) nextErrors.lastName = 'Last name is required.'
    if (!payload.email) nextErrors.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = 'Enter a valid email address.'
    if (!payload.subject) nextErrors.subject = 'Subject is required.'
    if (!payload.message) nextErrors.message = 'Please describe your issue or request.'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      setMessage('Please fix the highlighted fields and try again.')
      return
    }

    try {
      const res = await fetch(internalApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => '')
        throw new Error(data?.message || `Request failed with status ${res.status}`)
      }

      setStatus('success')
      setMessage('Your request was submitted successfully. We will get back to you shortly.')
      event.currentTarget.reset()
      setSelectedCategory(defaultSelected)
    } catch (err: any) {
      setStatus('error')
      setMessage(err?.message || 'Failed to submit. Please try again.')
    }
  }

  // Upload handler removed

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-6">
        <Field>
          <Label className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</Label>
          <Listbox value={selectedCategory} onChange={setSelectedCategory}>
            <div className="relative">
              <ListboxButton className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-9 text-left text-sm text-gray-900 shadow-sm focus:border-[#f44336] focus:outline-hidden focus:ring-1 focus:ring-[#f44336]">
                <span className="block truncate">{selectedCategory?.label ?? 'Select an option'}</span>
                <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 fill-gray-400" aria-hidden="true" />
              </ListboxButton>
              <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <ListboxOptions
                  anchor="bottom start"
                  className="z-50 max-h-60 overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none"
                  style={{ width: 'var(--button-width)' }}
                >
                  {categories.map((cat) => (
                    <ListboxOption key={cat.value} value={cat} className="group relative flex cursor-default select-none items-center gap-2 px-3 py-2 text-gray-700 data-[focus]:bg-gray-100">
                      {({ selected }) => (
                        <>
                          <CheckIcon className={`h-4 w-4 text-[#f44336] ${selected ? 'visible' : 'invisible'}`} aria-hidden="true" />
                          <div className={`truncate ${selected ? 'font-medium text-gray-900' : 'font-normal'}`}>{cat.label}</div>
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          </Listbox>
          {errors.category && (
            <Description className="mt-2 text-sm text-red-600">{errors.category}</Description>
          )}
        </Field>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field>
            <Label className="block text-sm font-medium text-gray-700 mb-2">First Name</Label>
            <Input
              name="firstName"
              type="text"
              autoComplete="given-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
            />
            {errors.firstName && (
              <Description className="mt-2 text-sm text-red-600">{errors.firstName}</Description>
            )}
          </Field>
          <Field>
            <Label className="block text-sm font-medium text-gray-700 mb-2">Last Name</Label>
            <Input
              name="lastName"
              type="text"
              autoComplete="family-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
            />
            {errors.lastName && (
              <Description className="mt-2 text-sm text-red-600">{errors.lastName}</Description>
            )}
          </Field>
        </div>

        <Field>
          <Label className="block text-sm font-medium text-gray-700 mb-2">Email Address</Label>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
          />
          {errors.email && (
            <Description className="mt-2 text-sm text-red-600">{errors.email}</Description>
          )}
        </Field>

        <Field>
          <Label className="block text-sm font-medium text-gray-700 mb-2">Propelond Username (if applicable)</Label>
          <Input
            name="username"
            type="text"
            placeholder="@yourusername"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
          />
        </Field>

        <Field>
          <Label className="block text-sm font-medium text-gray-700 mb-2">Subject</Label>
          <Input
            name="subject"
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
          />
          {errors.subject && (
            <Description className="mt-2 text-sm text-red-600">{errors.subject}</Description>
          )}
        </Field>

        <Field>
          <Label className="block text-sm font-medium text-gray-700 mb-2">Describe your issue or request</Label>
          <Textarea
            name="message"
            rows={6}
            placeholder="Please provide as much detail as possible to help us assist you better..."
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#f44336] focus:ring-[#f44336] sm:text-sm"
          />
          {errors.message && (
            <Description className="mt-2 text-sm text-red-600">{errors.message}</Description>
          )}
        </Field>
      </div>

      <div className="mt-8 space-y-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold text-white transition-colors relative overflow-hidden bg-gradient-to-br from-[#f44336] to-[#ff00d6] before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:from-[#e53935] active:to-[#d500c8] active:text-white/80 before:transition-colors"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit Support Request'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-green-600 text-center" role="status">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600 text-center" role="alert">{message}</p>
        )}

        <p className="text-xs text-gray-500 text-center">
          We typically respond within 24 hours during business days. For urgent issues, please email us directly at{' '}
          <a href="mailto:support@propelond.com" className="text-[#f44336] hover:text-[#e53935]">support@propelond.com</a>
        </p>
      </div>
    </form>
  )
}


