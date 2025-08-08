'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Finally, a platform for us.',
    body: 'I downloaded Propelond and immediately connected with my Nigerian community. Now I share my culture with thousands of people worldwide.',
    author: 'NigerianCreator',
    rating: 5,
  },
  {
    title: 'My voice matters now.',
    body: 'I didn\'t think anyone would care about my Kenyan stories. With Propelond, I have a global audience that appreciates African culture.',
    author: 'KenyanStoryteller',
    rating: 5,
  },
  {
    title: 'This platform understands us.',
    body: 'Propelond makes it so easy to share African content that I can\'t believe other platforms didnt think of this first.',
    author: 'AfricanVoice',
    rating: 5,
  },
  {
    title: 'Connected with my diaspora.',
    body: 'I barely knew my extended family abroad. With Propelond, I\'m now connected with relatives across the globe.',
    author: 'DiasporaConnect',
    rating: 5,
  },
  {
    title: 'I love it!',
    body: 'I started sharing my Ghanaian recipes and now I get messages from people worldwide wanting to learn about African cuisine. My cooking channel is growing every day!',
    author: 'GhanaianChef',
    rating: 5,
  },
  {
    title: 'Too good to be true.',
    body: 'I was gaining followers so fast with Propelond that it felt like a dream. But the engagement is real and my community is growing every day. This app is amazing!',
    author: 'AfricanInfluencer',
    rating: 5,
  },
  {
    title: 'Wish I could give 6 stars',
    body: 'This is literally the most important app for African creators. Get on this before everyone else discovers how amazing it is.',
    author: 'AfricanCreator',
    rating: 5,
  },
  {
    title: 'Built my brand.',
    body: 'Yeah, you read that right. Want to build your African brand too? Get Propelond.',
    author: 'AfricanEntrepreneur',
    rating: 5,
  },
  {
    title: 'No more feeling invisible!',
    body: 'After 2 weeks on Propelond I felt seen and heard. Why did I even use other platforms when Propelond exists?',
    author: 'AfricanVoice',
    rating: 5,
  },
  {
    title: 'I\'m 16 and I\'m famous.',
    body: 'I love that with Propelond\'s privacy features I could start sharing my South African dance videos safely. I have fans worldwide now!',
    author: 'YoungAfrican',
    rating: 5,
  },
  {
    title: 'Started a content business.',
    body: 'I charge brands for collaborations and just share authentic African content on Propelond. Easy success!',
    author: 'AfricanBusiness',
    rating: 5,
  },
  {
    title: 'It\'s like a superpower.',
    body: 'Every post I share on Propelond gets amazing engagement. It\'s like having a built-in audience that understands African culture!',
    author: 'AfricanSuperstar',
    rating: 5,
  },
  {
    title: 'Quit my job.',
    body: 'I downloaded Propelond three days ago and quit my job today. I can\'t believe no one else thought to build a social media app that works this way for Africans!',
    author: 'AfricanEntrepreneur',
    rating: 5,
  },
  {
    title: 'Don\'t download this app',
    body: 'Unless you want to have the best African content creation experience ever! I am literally writing this from my studio.',
    author: 'AfricanCreator',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
                            rating > index ? 'fill-[#f44336]' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Everyone is sharing their story with Propelond.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of African creators have found their voice in the last 30 days.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
