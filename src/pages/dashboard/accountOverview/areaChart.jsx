import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';

const data = [
  { time: '12 May 15:06', equity: 102000 },
  { time: '13 May 01:16', equity: 95000 },
  { time: '13 May 05:40', equity: 100000 },
  { time: '13 May 16:35', equity: 110000 },
];

<AreaChart width={800} height={400} data={data}>
  <defs>
    <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#00d084" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#00d084" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#f44336" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#f44336" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="time" />
  <YAxis domain={['dataMin - 5000', 'dataMax + 5000']} />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <ReferenceLine y={110000} label="Profit Target" stroke="#00d084" strokeDasharray="3 3" />
  <ReferenceLine y={100000} label="Account Size" stroke="#ccc" />
  <ReferenceLine y={95690.94} label="Max Daily Loss" stroke="red" strokeDasharray="3 3" />
  <ReferenceLine y={90000} label="Max Loss" stroke="darkred" />
  <Area type="monotone" dataKey="equity" stroke="#000" fillOpacity={1} fill="url(#colorGain)" />
</AreaChart>
