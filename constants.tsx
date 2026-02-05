
import { Donor, HealthReferral, AppConfig } from './types';

export const DEFAULT_CONFIG: AppConfig = {
  hospitalName: "Central Health Hub",
  departmentName: "Community Care",
  region: "Metro Region",
  adminName: "Officer Alex",
  adminRole: "Response Lead",
  currency: "$",
  healthAuthority: "National Health",
  isDiscreetMode: false,
  isSimpleLanguage: false,
  isHighContrast: false,
  offlineMode: false
};

export const INITIAL_DONORS: Donor[] = [
  { id: '1', name: 'John Doe', phone: '+1 555-0101', email: 'j.doe@example.com', bloodType: 'O+', lastDonationDate: '2023-11-15', location: 'Sector 4', status: 'Available' },
  { id: '2', name: 'Maria Santos', phone: '+63 912 345 6789', email: 'm.santos@example.com', bloodType: 'A-', lastDonationDate: '2024-01-10', location: 'District B', status: 'Recent Donor' },
];

export const MOCK_REFERRALS: HealthReferral[] = [
  {
    id: 'r1',
    patientName: 'K. James',
    conditionName: 'Maternal Care Check-up',
    discreetName: 'Wellness Visit',
    status: 'Pending',
    lastFollowUp: '2024-02-12',
    nextStep: 'Complete prenatal nutrition intake',
    assignedWorker: 'Midwife Sarah',
    workerPhone: '+1 555-9000'
  },
  {
    id: 'r2',
    patientName: 'T. Lee',
    conditionName: 'Chronic Pain Management',
    discreetName: 'Physical Therapy Follow-up',
    status: 'In Progress',
    lastFollowUp: '2024-03-01',
    nextStep: 'Exercise at home for 20 minutes daily',
    assignedWorker: 'Physio David',
    workerPhone: '+1 555-8000'
  }
];

export const MOCK_SURGERY_DATA = [
  { date: 'Mon', bloodUnitsRequired: 15, bloodUnitsAvailable: 8 },
  { date: 'Tue', bloodUnitsRequired: 12, bloodUnitsAvailable: 10 },
  { date: 'Wed', bloodUnitsRequired: 20, bloodUnitsAvailable: 9 },
  { date: 'Thu', bloodUnitsRequired: 18, bloodUnitsAvailable: 7 },
  { date: 'Fri', bloodUnitsRequired: 24, bloodUnitsAvailable: 12 },
];
