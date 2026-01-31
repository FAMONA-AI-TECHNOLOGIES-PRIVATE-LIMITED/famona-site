/**
 * FAMONA AI Technologies | Ethics & Alignment Framework
 * Public-facing interfaces for transparency and responsible AI research.
 */

export interface EthicsFramework {
    name: string;
    version: string;
    lastUpdated: string;
}

/**
 * Represents a high-level alignment metric for public reporting.
 * No technical logic or implementation details are exposed here.
 */
export interface AlignmentMetric {
    category: 'SAFETY' | 'TRANSPARENCY' | 'FAIRNESS' | 'ACCOUNTABILITY';
    status: 'OPTIMIZED' | 'MONITORED' | 'RESEARCH_PHASE';
    description: string;
}

/**
 * A generic log for public transparency reports.
 */
export interface TransparencyLog {
    id: string;
    timestamp: string;
    eventSummary: string;
}