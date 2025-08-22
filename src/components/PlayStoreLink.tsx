import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

export function PlayStoreLink({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.propelond.propelond_app"
      aria-label="Get it on Google Play"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <div className="flex items-center px-3 py-2">
        <Image
          src="/icon/playstore.svg"
          alt="Google Play"
          width={24}
          height={24}
          className="h-6 w-6 mr-2"
        />
        <div className="text-left">
          <div className="text-xs">GET IT ON</div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
      </div>
    </Link>
  )
}
