# AI Solutions ROI Calculator Architecture

## System Overview

```mermaid
flowchart TB
    subgraph Input["User Input"]
        AGENCY[Agency Config<br/>Officers, Salary]
        USE[Use Case Selection<br/>9 AI Capabilities]
    end

    subgraph Engine["Calculation Engine"]
        CALC[ROI Calculator]
        METRICS[Metrics Engine]
        COST[Cost Analyzer]
    end

    subgraph Output["Visualization"]
        DASH[Dashboard View]
        CHARTS[ROI Charts]
        BREAKDOWN[Cost Breakdown]
    end

    AGENCY --> CALC
    USE --> CALC
    CALC --> METRICS
    CALC --> COST
    METRICS --> DASH
    COST --> BREAKDOWN
    DASH --> CHARTS
```

## Use Case Categories

```mermaid
mindmap
    root((ROI Calculator))
        Efficiency
            Voice Database Queries
            Real-Time Transcription
            AI Policy Lookup
        Safety
            Automated Report Gen
            Voice Radio Control
            BOLO Alerts
        Compliance
            Training Assistant
            Evidence Tagging
            Translation
```

## Component Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Form Input
    participant C as Calculator
    participant V as Visualizer

    U->>F: Enter Agency Size
    U->>F: Select Use Cases
    F->>C: Calculate ROI
    C->>C: Per-Officer Savings
    C->>C: Time Saved
    C->>C: 3-Year ROI
    C->>V: Render Results
    V->>U: Display Dashboard
```

## Application Structure

```mermaid
flowchart LR
    subgraph React["React 19 App"]
        APP[App.tsx]
        FORM[Input Form]
        RESULTS[Results Display]
        CHART[Charts]
    end

    subgraph Build["Build Pipeline"]
        VITE[Vite]
        SWC[React SWC]
        TS[TypeScript]
    end

    subgraph Deploy["Deployment"]
        GH[GitHub Pages]
        STATIC[Static HTML]
    end

    APP --> FORM
    APP --> RESULTS
    RESULTS --> CHART
    TS --> VITE
    VITE --> SWC
    SWC --> STATIC
    STATIC --> GH
```

## ROI Metrics by Use Case

| Use Case | Savings/Officer/Year | Time Saved/Year |
|----------|---------------------|-----------------|
| Voice Database Queries | $4,200 | 156 hours |
| Real-Time Transcription | $3,600 | 120 hours |
| AI Policy Lookup | $2,400 | 80 hours |
| Automated Report Generation | $5,400 | 180 hours |

---
*Built by [QbitLoop](https://github.com/QbitLoop)*
