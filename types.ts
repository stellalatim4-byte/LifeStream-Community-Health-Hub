
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface Donor {
  id: string;
  name: string;
  phone: string;
  email: string;
  bloodType: BloodType;
  lastDonationDate: string;
  location: string;
  status: 'Available' | 'On Hold' | 'Recent Donor';
}

export interface HealthReferral {
  id: string;
  patientName: string;
  conditionName: string;
  discreetName: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  lastFollowUp: string;
  nextStep: string;
  assignedWorker: string;
  workerPhone: string;
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
