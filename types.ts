
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface ResilienceMetric {
  id: string;
  category: 'Psychological' | 'Productivity' | 'Food' | 'Labor';
  value: number;
  benchmark: number;
  label: string;
  trend: 'improving' | 'declining' | 'stable';
}

export interface RevenueStream {
  id: string;
  assetName: string;
  totalFees: number;
  targetFees: number;
  reinvestmentRate: number;
}

export interface Certification {
  id: string;
  studentName: string;
  institution: string;
  course: string;
  dateCompleted: string;
  isVerified: boolean;
}

export interface AppConfig {
  hospitalName: string;
  departmentName: string;
  region: string;
  adminName: string;
  adminRole: string;
  currency: string;
  healthAuthority: string;
  isDiscreetMode: boolean;
  isSimpleLanguage: boolean;
  isHighContrast: boolean;
  offlineMode: boolean;
}

// Added Donor type to fix error in DonorManager.tsx
export interface Donor {
  id: string;
  name: string;
  bloodType: BloodType;
  country: string;
  location: string;
  registryYear: number;
  lastDonationDate: string;
  status: 'Available' | 'Recent Donor' | 'Inactive';
}

// Added HealthReferral type to fix error in HealthJourney.tsx
export interface HealthReferral {
  id: string;
  conditionName: string;
  discreetName: string;
  assignedWorker: string;
  nextStep: string;
  workerPhone: string;
}
