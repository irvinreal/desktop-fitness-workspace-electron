import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts'

interface Props {
  data: { value: number }[]
}

export default function BaseChart({ data }: Props) {
  return (
    <div className='chart'>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <AreaChart data={data}>
          <CartesianGrid
            stroke='#333333'
            strokeDasharray='3 2'
            fill='#000000'
            fillOpacity={0.4}
            opacity={0.4}
          />
          <Area
            fillOpacity={0.2}
            fill='#666d6e'
            stroke='#ffffff'
            strokeWidth={2}
            type='monotone'
            dataKey='value'
            isAnimationActive={false}

          />
          <XAxis stroke='transparent' height={0} />
          <YAxis domain={[0, 100]} stroke='transparent' width={0} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
