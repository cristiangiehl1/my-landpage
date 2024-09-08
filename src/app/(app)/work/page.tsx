import './page.css'

import { CubChart } from './CubChart'

export default function Work() {
  return (
    <div className="market-hero">
      <div className="chart-selector">
        <button>CUB-SC</button>
        <button>Volume de Vendas</button>
        <button>Valor do m²</button>
      </div>
      <div className="charts">
        <CubChart />
      </div>
    </div>
  )
}
