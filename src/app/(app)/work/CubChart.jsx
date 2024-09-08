'use client'

import React, { useState } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

// Dados de exemplo com datas completas
const CUB = [
  { name: '2024-01-15', value: 2000 },
  { name: '2024-02-10', value: 1500 },
  { name: '2024-03-05', value: 1600 },
  { name: '2024-04-20', value: 1000 },
  { name: '2024-05-18', value: 1700 },
  { name: '2024-06-30', value: 1200 },
  { name: '2024-07-12', value: 1900 },
  { name: '2024-08-08', value: 1400 },
  { name: '2024-09-22', value: 2100 },
  { name: '2024-10-03', value: 1300 },
  { name: '2024-11-15', value: 1600 },
  { name: '2024-12-25', value: 1800 },
]

// Função para formatar a data sem o ponto final
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const monthShort = date
    .toLocaleString('pt-BR', { month: 'short' })
    .replace('.', '')
  const yearShort = date.getFullYear().toString().slice(-2)
  return `${monthShort}/${yearShort}`
}

// Extrair anos e meses únicos dos dados
const getUniqueMonths = (data) => {
  const months = new Set(
    data.map((entry) => {
      const date = new Date(entry.name)
      return date
        .toLocaleString('pt-BR', { year: 'numeric', month: 'short' })
        .replace('.', '')
    }),
  )
  return Array.from(months)
}

export function CubChart() {
  const [startMonth, setStartMonth] = useState('')
  const [endMonth, setEndMonth] = useState('')

  const uniqueMonths = getUniqueMonths(CUB)

  // Filtrando os dados baseados nos meses selecionados
  const filteredData = CUB.filter((entry) => {
    const entryDate = new Date(entry.name)
    const start = startMonth ? new Date(`${startMonth}-01`) : null
    const end = endMonth ? new Date(`${endMonth}-01`) : null

    return (!start || entryDate >= start) && (!end || entryDate <= end)
  })

  return (
    <div>
      <div>
        <label>
          Mês/Ano Inicial:
          <select
            value={startMonth}
            onChange={(e) => setStartMonth(e.target.value)}
          >
            <option value="">Selecione</option>
            {uniqueMonths.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
        <label>
          Mês/Ano Final:
          <select
            value={endMonth}
            onChange={(e) => setEndMonth(e.target.value)}
          >
            <option value="">Selecione</option>
            {uniqueMonths.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickFormatter={formatDate} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="value"
            fill="#8884d8"
            stroke="#fff"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
