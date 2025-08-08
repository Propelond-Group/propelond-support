'use client'

import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
]
const maxPrice = Math.max(...prices)
const minPrice = Math.min(...prices)

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  activePointIndex: number | null
  onChangeActivePointIndex: (index: number | null) => void
  width: number
  height: number
  paddingX?: number
  paddingY?: number
  gridLines?: number
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef<React.ElementRef<'svg'>>(null)
  let pathRef = useRef<React.ElementRef<'path'>>(null)
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points: Array<{ x: number; y: number }> = []

  for (let index = 0; index < prices.length; index++) {
    let x = paddingX + (index / (prices.length - 1)) * width
    let y =
      paddingY +
      (1 - (prices[index] - minPrice) / (maxPrice - minPrice)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex: number | null = null
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f44336" />
          <stop offset="100%" stopColor="#ff00d6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#f44336', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          if (pathRef.current && typeof pathLength === 'number') {
            pathWidth.set(
              pathRef.current.getPointAtLength(
                pathLength * pathRef.current.getTotalLength(),
              ).x,
            )
          }
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#f44336"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#f44336"
          />
        </>
      )}
    </svg>
  )
}

export function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          {/* Feed Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold text-gray-900">Feed</div>
            <div className="text-xs text-gray-500">Today</div>
          </div>

          {/* Post 1 */}
          <div className="border-b border-gray-100 pb-4 mb-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#f44336] to-[#ff00d6] rounded-full flex items-center justify-center text-white text-xs font-bold">
                NC
              </div>
              <div className="ml-3">
                <div className="text-sm font-semibold text-gray-900">NigerianChef</div>
                <div className="text-xs text-gray-500">2h ago</div>
              </div>
            </div>
            <div className="text-sm text-gray-900 mb-3">
              Just made my grandmother&apos;s famous Jollof Rice recipe! 🇳🇬 The secret is in the tomato paste and the perfect rice texture. Who else loves a good Jollof? #NigerianFood #JollofRice
            </div>
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="text-xs text-gray-500 mb-1">📸 Photo</div>
              <div className="text-xs text-gray-400">Delicious Jollof Rice with plantains</div>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <div className="flex items-center mr-4">
                <span className="mr-1">❤️</span>
                <span>24</span>
              </div>
              <div className="flex items-center mr-4">
                <span className="mr-1">💬</span>
                <span>8</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">👁️</span>
                <span>156</span>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="border-b border-gray-100 pb-4 mb-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#f44336] to-[#ff00d6] rounded-full flex items-center justify-center text-white text-xs font-bold">
                KD
              </div>
              <div className="ml-3">
                <div className="text-sm font-semibold text-gray-900">KenyanDancer</div>
                <div className="text-xs text-gray-500">5h ago</div>
              </div>
            </div>
            <div className="text-sm text-gray-900 mb-3">
              Traditional Maasai dance moves! The energy and rhythm are everything 🇰🇪 #KenyanCulture #MaasaiDance #AfricanDance
            </div>
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="text-xs text-gray-500 mb-1">🎥 Video</div>
              <div className="text-xs text-gray-400">Maasai traditional dance performance</div>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <div className="flex items-center mr-4">
                <span className="mr-1">❤️</span>
                <span>89</span>
              </div>
              <div className="flex items-center mr-4">
                <span className="mr-1">💬</span>
                <span>23</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">👁️</span>
                <span>1.2K</span>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="pb-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#f44336] to-[#ff00d6] rounded-full flex items-center justify-center text-white text-xs font-bold">
                GA
              </div>
              <div className="ml-3">
                <div className="text-sm font-semibold text-gray-900">GhanaianArtist</div>
                <div className="text-xs text-gray-500">1d ago</div>
              </div>
            </div>
            <div className="text-sm text-gray-900 mb-3">
              New Kente-inspired artwork! The patterns tell stories of our ancestors. Every color has meaning 🇬🇭 #GhanaianArt #Kente #AfricanArt
            </div>
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="text-xs text-gray-500 mb-1">🎨 Art</div>
              <div className="text-xs text-gray-400">Kente pattern digital artwork</div>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <div className="flex items-center mr-4">
                <span className="mr-1">❤️</span>
                <span>156</span>
              </div>
              <div className="flex items-center mr-4">
                <span className="mr-1">💬</span>
                <span>34</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">👁️</span>
                <span>2.8K</span>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
