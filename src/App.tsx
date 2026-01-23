import { useState, useMemo } from 'react'
import './App.css'

interface UseCase {
  id: string
  name: string
  description: string
  annualSavingsPerOfficer: number
  timeSavingsHoursPerYear: number
  category: 'efficiency' | 'safety' | 'compliance'
}

const USE_CASES: UseCase[] = [
  {
    id: 'voice-queries',
    name: 'Voice Database Queries',
    description: 'Hands-free NCIC, DMV, and warrant checks via voice command',
    annualSavingsPerOfficer: 4200,
    timeSavingsHoursPerYear: 156,
    category: 'efficiency'
  },
  {
    id: 'real-time-transcription',
    name: 'Real-Time Transcription',
    description: 'Automatic transcription of radio communications and interviews',
    annualSavingsPerOfficer: 3600,
    timeSavingsHoursPerYear: 120,
    category: 'efficiency'
  },
  {
    id: 'policy-lookup',
    name: 'AI Policy Lookup',
    description: 'Instant answers to policy questions using RAG',
    annualSavingsPerOfficer: 2400,
    timeSavingsHoursPerYear: 80,
    category: 'compliance'
  },
  {
    id: 'translation',
    name: 'Real-Time Translation',
    description: '95+ language support for field communications',
    annualSavingsPerOfficer: 1800,
    timeSavingsHoursPerYear: 60,
    category: 'safety'
  },
  {
    id: 'report-generation',
    name: 'Automated Report Generation',
    description: 'AI-assisted incident report writing and summarization',
    annualSavingsPerOfficer: 5400,
    timeSavingsHoursPerYear: 180,
    category: 'efficiency'
  },
  {
    id: 'radio-control',
    name: 'Voice Radio Control',
    description: 'Hands-free channel switching and radio configuration',
    annualSavingsPerOfficer: 1200,
    timeSavingsHoursPerYear: 40,
    category: 'safety'
  },
  {
    id: 'bolo-alerts',
    name: 'Intelligent BOLO Alerts',
    description: 'AI-powered alert matching and prioritization',
    annualSavingsPerOfficer: 2100,
    timeSavingsHoursPerYear: 70,
    category: 'safety'
  },
  {
    id: 'training-assist',
    name: 'Training Assistant',
    description: 'On-demand training content and procedure guidance',
    annualSavingsPerOfficer: 1500,
    timeSavingsHoursPerYear: 50,
    category: 'compliance'
  },
  {
    id: 'evidence-tagging',
    name: 'Smart Evidence Tagging',
    description: 'Automated evidence categorization and chain-of-custody',
    annualSavingsPerOfficer: 3000,
    timeSavingsHoursPerYear: 100,
    category: 'compliance'
  }
]

function App() {
  const [officerCount, setOfficerCount] = useState(100)
  const [avgSalary, setAvgSalary] = useState(75000)
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([
    'voice-queries',
    'real-time-transcription',
    'policy-lookup'
  ])

  const toggleUseCase = (id: string) => {
    setSelectedUseCases(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    )
  }

  const calculations = useMemo(() => {
    const selected = USE_CASES.filter(uc => selectedUseCases.includes(uc.id))

    const totalSavingsPerOfficer = selected.reduce(
      (sum, uc) => sum + uc.annualSavingsPerOfficer, 0
    )
    const totalTimeSavingsPerOfficer = selected.reduce(
      (sum, uc) => sum + uc.timeSavingsHoursPerYear, 0
    )

    const totalAnnualSavings = totalSavingsPerOfficer * officerCount
    const totalTimeSavings = totalTimeSavingsPerOfficer * officerCount

    // Implementation cost estimate (one-time + annual)
    const implementationCost = officerCount * 500 // One-time per officer
    const annualLicenseCost = officerCount * 1200 // Annual per officer

    const netFirstYearSavings = totalAnnualSavings - implementationCost - annualLicenseCost
    const netAnnualSavings = totalAnnualSavings - annualLicenseCost
    const threeYearROI = (netFirstYearSavings + netAnnualSavings * 2) / (implementationCost + annualLicenseCost * 3) * 100
    const paybackMonths = (implementationCost + annualLicenseCost) / (totalAnnualSavings / 12)

    // Category breakdown
    const byCategory = {
      efficiency: selected.filter(uc => uc.category === 'efficiency'),
      safety: selected.filter(uc => uc.category === 'safety'),
      compliance: selected.filter(uc => uc.category === 'compliance')
    }

    return {
      totalAnnualSavings,
      totalTimeSavings,
      implementationCost,
      annualLicenseCost,
      netFirstYearSavings,
      netAnnualSavings,
      threeYearROI,
      paybackMonths,
      byCategory,
      selectedCount: selected.length
    }
  }, [officerCount, selectedUseCases])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>AI Solutions ROI Calculator</h1>
        <p className="subtitle">Estimate cost savings from Voice AI and Intelligent Automation</p>
      </header>

      <main className="main">
        <section className="input-section">
          <h2>Agency Configuration</h2>

          <div className="input-group">
            <label htmlFor="officers">Number of Officers</label>
            <input
              id="officers"
              type="number"
              min="1"
              max="10000"
              value={officerCount}
              onChange={e => setOfficerCount(Math.max(1, parseInt(e.target.value) || 1))}
            />
            <span className="input-hint">Sworn personnel who will use the system</span>
          </div>

          <div className="input-group">
            <label htmlFor="salary">Average Annual Salary</label>
            <input
              id="salary"
              type="number"
              min="30000"
              max="200000"
              step="1000"
              value={avgSalary}
              onChange={e => setAvgSalary(parseInt(e.target.value) || 75000)}
            />
            <span className="input-hint">Used to calculate time-based savings</span>
          </div>
        </section>

        <section className="use-cases-section">
          <h2>Select Use Cases ({calculations.selectedCount}/9)</h2>

          <div className="use-cases-grid">
            {USE_CASES.map(useCase => (
              <div
                key={useCase.id}
                className={`use-case-card ${selectedUseCases.includes(useCase.id) ? 'selected' : ''} ${useCase.category}`}
                onClick={() => toggleUseCase(useCase.id)}
              >
                <div className="use-case-header">
                  <input
                    type="checkbox"
                    checked={selectedUseCases.includes(useCase.id)}
                    onChange={() => toggleUseCase(useCase.id)}
                  />
                  <h3>{useCase.name}</h3>
                </div>
                <p className="use-case-description">{useCase.description}</p>
                <div className="use-case-metrics">
                  <span className="metric">
                    <strong>{formatCurrency(useCase.annualSavingsPerOfficer)}</strong>
                    <small>/officer/year</small>
                  </span>
                  <span className="metric">
                    <strong>{useCase.timeSavingsHoursPerYear}h</strong>
                    <small>saved/year</small>
                  </span>
                </div>
                <span className={`category-badge ${useCase.category}`}>
                  {useCase.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="results-section">
          <h2>Projected ROI</h2>

          <div className="results-grid">
            <div className="result-card primary">
              <span className="result-label">Annual Cost Savings</span>
              <span className="result-value">{formatCurrency(calculations.totalAnnualSavings)}</span>
              <span className="result-detail">
                {formatCurrency(calculations.totalAnnualSavings / officerCount)}/officer
              </span>
            </div>

            <div className="result-card">
              <span className="result-label">Time Saved Annually</span>
              <span className="result-value">{formatNumber(calculations.totalTimeSavings)} hours</span>
              <span className="result-detail">
                {formatNumber(Math.round(calculations.totalTimeSavings / officerCount))} hours/officer
              </span>
            </div>

            <div className="result-card">
              <span className="result-label">3-Year ROI</span>
              <span className="result-value highlight">{calculations.threeYearROI.toFixed(0)}%</span>
              <span className="result-detail">Return on investment</span>
            </div>

            <div className="result-card">
              <span className="result-label">Payback Period</span>
              <span className="result-value">{calculations.paybackMonths.toFixed(1)} months</span>
              <span className="result-detail">Time to break even</span>
            </div>
          </div>

          <div className="cost-breakdown">
            <h3>Cost & Savings Breakdown</h3>
            <table>
              <tbody>
                <tr>
                  <td>Implementation Cost (one-time)</td>
                  <td className="negative">{formatCurrency(calculations.implementationCost)}</td>
                </tr>
                <tr>
                  <td>Annual License Cost</td>
                  <td className="negative">{formatCurrency(calculations.annualLicenseCost)}</td>
                </tr>
                <tr>
                  <td>Gross Annual Savings</td>
                  <td className="positive">{formatCurrency(calculations.totalAnnualSavings)}</td>
                </tr>
                <tr className="total">
                  <td>Net First Year Savings</td>
                  <td className={calculations.netFirstYearSavings >= 0 ? 'positive' : 'negative'}>
                    {formatCurrency(calculations.netFirstYearSavings)}
                  </td>
                </tr>
                <tr className="total">
                  <td>Net Annual Savings (Year 2+)</td>
                  <td className={calculations.netAnnualSavings >= 0 ? 'positive' : 'negative'}>
                    {formatCurrency(calculations.netAnnualSavings)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="category-summary">
            <h3>Savings by Category</h3>
            <div className="category-bars">
              {Object.entries(calculations.byCategory).map(([category, useCases]) => {
                const categoryTotal = useCases.reduce(
                  (sum, uc) => sum + uc.annualSavingsPerOfficer * officerCount, 0
                )
                const percentage = calculations.totalAnnualSavings > 0
                  ? (categoryTotal / calculations.totalAnnualSavings) * 100
                  : 0
                return (
                  <div key={category} className="category-bar-container">
                    <div className="category-bar-header">
                      <span className={`category-name ${category}`}>{category}</span>
                      <span className="category-amount">{formatCurrency(categoryTotal)}</span>
                    </div>
                    <div className="category-bar-track">
                      <div
                        className={`category-bar-fill ${category}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Built by <a href="https://github.com/QbitLoop" target="_blank" rel="noopener noreferrer">QbitLoop</a> |
          Based on real-world public safety AI deployments
        </p>
        <p className="disclaimer">
          * Estimates based on industry benchmarks. Actual savings may vary based on implementation and usage.
        </p>
      </footer>
    </div>
  )
}

export default App
