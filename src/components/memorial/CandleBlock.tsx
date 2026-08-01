import type { Memorial } from '@/lib/types'

interface Props {
  memorial: Memorial
}

export default function CandleBlock({ memorial }: Props) {
  return (
    <div className="text-center py-5">
      <div className="inline-block relative w-[26px] h-[60px] mb-2">
        <div
          className="absolute -top-4 left-1/2 w-3.5 h-[22px] -ml-[7px] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] blur-[0.4px] origin-bottom animate-[flick_1.6s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle at 50% 70%, #ffd27a, #ff9a3c 60%, rgba(255,120,40,0) 72%)',
          }}
        />
        <div
          className="absolute bottom-0 w-full h-11 rounded-md"
          style={{ background: 'linear-gradient(#fbf3e2, #e9d9bd)' }}
        />
      </div>
      <div>
        <span className="text-warm-gold text-[15px] border-b border-warm-gold-soft pb-0.5 cursor-pointer">
          הדליקו נר {memorial.gender === 'female' ? 'לזכרה' : 'לזכרו'}
        </span>
      </div>

      <style>{`
        @keyframes flick {
          0%, 100% { transform: scale(1) rotate(-1deg); }
          50% { transform: scale(1.08, 1.14) rotate(1.5deg); }
        }
      `}</style>
    </div>
  )
}
