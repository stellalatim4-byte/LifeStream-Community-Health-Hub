
import { AppConfig, ResilienceMetric, RevenueStream, Certification, Donor, HealthReferral } from './types';

export const DEFAULT_CONFIG: AppConfig = {
  hospitalName: "Mulago National Referral Hospital",
  departmentName: "Orthopedic Department",
  region: "Central Uganda (Global Node)",
  adminName: "Dr. Isaac Kajja",
  adminRole: "Senior Orthopedic Surgeon",
  currency: "UGX",
  healthAuthority: "Ministry of Health / IHR 2005",
  isDiscreetMode: false,
  isSimpleLanguage: false,
  isHighContrast: false,
  offlineMode: false
};

export const SURGICAL_DEMAND_DATA = [
  { type: 'Road Accidents', units: 12, risk: 'High' },
  { type: 'Joint Replacement', units: 8, risk: 'Medium' },
  { type: 'Bone Cancers', units: 6, risk: 'Medium' },
  { type: 'Child Deformity', units: 4, risk: 'Low' },
  { type: 'Infections', units: 5, risk: 'Medium' },
];

export const HUMAN_SECURITY_DATA: ResilienceMetric[] = [
  { id: 'm1', category: 'Psychological', label: 'Psych Distress Rate', value: 12.4, benchmark: 12.0, trend: 'stable' },
  { id: 'm2', category: 'Productivity', label: 'Surgical Throughput', value: 88.0, benchmark: 95.0, trend: 'improving' },
];

export const FIES_DATA = [
  { metric: 'Worried about Food', value: 48 },
  { metric: 'Ate Less', value: 42 },
  { metric: 'Ran out of Food', value: 22 },
  { metric: 'Hungry but no food', value: 18 },
];

export const REVENUE_STREAMS: RevenueStream[] = [
  { id: 'r1', assetName: "Mobile Grain Processor A", totalFees: 4200, targetFees: 5000, reinvestmentRate: 15 },
  { id: 'r2', assetName: "Bone Grafting Centrifuge", totalFees: 1500, targetFees: 3000, reinvestmentRate: 25 },
];

export const VERIFIED_YOUTH: Certification[] = [
  { id: 'c1', studentName: 'Musa Kato', institution: 'Makerere University', course: 'Agritech Entrepreneurship', dateCompleted: '2025-01-10', isVerified: true },
  { id: 'c2', studentName: 'Grace Auma', institution: 'Mulago School of Nursing', course: 'IHR 2005 Emergency Response', dateCompleted: '2025-02-15', isVerified: true },
];

export const MOCK_SURGERY_DATA = [
  { date: 'Mon', bloodUnitsRequired: 15, bloodUnitsAvailable: 8 },
  { date: 'Tue', bloodUnitsRequired: 12, bloodUnitsAvailable: 10 },
  { date: 'Wed', bloodUnitsRequired: 20, bloodUnitsAvailable: 9 },
  { date: 'Thu', bloodUnitsRequired: 18, bloodUnitsAvailable: 7 },
  { date: 'Fri', bloodUnitsRequired: 24, bloodUnitsAvailable: 12 },
];

export const INITIAL_DONORS: Donor[] = [
  { id: 'd1', name: 'Okello James', bloodType: 'O+', country: 'Uganda', location: 'Gulu District', registryYear: 2021, lastDonationDate: '2024-11-20', status: 'Available' },
  { id: 'd2', name: 'Achieng Sarah', bloodType: 'A-', country: 'Uganda', location: 'Lira District', registryYear: 2023, lastDonationDate: '2025-01-05', status: 'Recent Donor' },
  { id: 'd3', name: 'Mugisha Paul', bloodType: 'B+', country: 'Uganda', location: 'Kampala City', registryYear: 2019, lastDonationDate: '2023-05-12', status: 'Inactive' },
  { id: 'd4', name: 'Nassolo Mary', bloodType: 'O-', country: 'Uganda', location: 'Wakiso', registryYear: 2024, lastDonationDate: '2024-12-15', status: 'Available' },
  { id: 'd5', name: 'Kamau Peter', bloodType: 'AB+', country: 'Kenya', location: 'Nairobi', registryYear: 2022, lastDonationDate: '2024-10-10', status: 'Available' },
];

export const MOCK_REFERRALS: HealthReferral[] = [
  { id: 'ref1', conditionName: 'Post-Op Recovery', discreetName: 'Recovery Sync A', assignedWorker: 'Nurse Alero', nextStep: 'Physiotherapy appointment', workerPhone: '256701234567' },
  { id: 'ref2', conditionName: 'Nutritional Support', discreetName: 'Security Track B', assignedWorker: 'Dr. Omondi', nextStep: 'Collect high-iron meal pack', workerPhone: '256707654321' },
];
