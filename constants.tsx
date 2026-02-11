
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
  // Uganda - Past & Present
  { id: '1', name: 'Samuel Musoke', phone: '+256 701 234 567', email: 's.musoke@example.com', bloodType: 'O-', lastDonationDate: '2025-02-15', registryYear: 2021, location: 'Kampala Central', country: 'Uganda', status: 'Recent Donor' },
  { id: '2', name: 'Grace Nakato', phone: '+256 772 987 654', email: 'g.nakato@example.com', bloodType: 'A+', lastDonationDate: '2025-02-20', registryYear: 2023, location: 'Entebbe', country: 'Uganda', status: 'Available' },
  { id: '3', name: 'Peter Wandera', phone: '+256 782 111 222', email: 'p.wandera@example.com', bloodType: 'B+', lastDonationDate: '2024-11-15', registryYear: 2020, location: 'Jinja', country: 'Uganda', status: 'Available' },
  { id: '4', name: 'Sarah Namono', phone: '+256 752 333 444', email: 's.namono@example.com', bloodType: 'O+', lastDonationDate: '2024-08-20', registryYear: 2022, location: 'Mbale', country: 'Uganda', status: 'On Hold' },
  { id: '5', name: 'David Okello', phone: '+256 700 555 666', email: 'd.okello@example.com', bloodType: 'AB-', lastDonationDate: '2025-01-10', registryYear: 2024, location: 'Gulu', country: 'Uganda', status: 'Available' },

  // Nigeria - Past & Present
  { id: '6', name: 'Amara Okafor', phone: '+234 803 123 4567', email: 'a.okafor@example.com', bloodType: 'B+', lastDonationDate: '2024-12-28', registryYear: 2021, location: 'Riverside', country: 'Nigeria', status: 'On Hold' },
  { id: '7', name: 'Tunde Afolayan', phone: '+234 802 333 4444', email: 't.afolayan@example.com', bloodType: 'O+', lastDonationDate: '2025-02-18', registryYear: 2020, location: 'Lagos Island', country: 'Nigeria', status: 'Available' },
  { id: '8', name: 'Chioma Adebayo', phone: '+234 801 999 8888', email: 'c.adebayo@example.com', bloodType: 'A-', lastDonationDate: '2025-01-15', registryYear: 2025, location: 'Abuja FCT', country: 'Nigeria', status: 'Available' },
  { id: '9', name: 'Ibrahim Musa', phone: '+234 809 777 6666', email: 'i.musa@example.com', bloodType: 'O-', lastDonationDate: '2024-05-10', registryYear: 2019, location: 'Kano', country: 'Nigeria', status: 'On Hold' },

  // Philippines - Past & Present
  { id: '10', name: 'Maria Santos', phone: '+63 912 345 6789', email: 'm.santos@example.com', bloodType: 'A-', lastDonationDate: '2025-02-05', registryYear: 2022, location: 'District B', country: 'Philippines', status: 'Available' },
  { id: '11', name: 'Juan Dela Cruz', phone: '+63 917 111 2222', email: 'j.delacruz@example.com', bloodType: 'O+', lastDonationDate: '2025-02-22', registryYear: 2020, location: 'Quezon City', country: 'Philippines', status: 'Recent Donor' },
  { id: '12', name: 'Liza Marcos', phone: '+63 918 333 4444', email: 'l.marcos@example.com', bloodType: 'B+', lastDonationDate: '2024-09-30', registryYear: 2023, location: 'Cebu City', country: 'Philippines', status: 'Available' },

  // USA - Past & Present
  { id: '13', name: 'John Doe', phone: '+1 555-0101', email: 'j.doe@example.com', bloodType: 'O+', lastDonationDate: '2025-01-15', registryYear: 2021, location: 'Sector 4', country: 'USA', status: 'Available' },
  { id: '14', name: 'Elena Vance', phone: '+1 555-0987', email: 'e.vance@example.com', bloodType: 'AB+', lastDonationDate: '2025-02-01', registryYear: 2024, location: 'City Heights', country: 'USA', status: 'Available' },
  { id: '15', name: 'Michael Smith', phone: '+1 555-4433', email: 'm.smith@example.com', bloodType: 'A-', lastDonationDate: '2024-11-12', registryYear: 2020, location: 'Brooklyn', country: 'USA', status: 'Available' },
  { id: '16', name: 'Robert Johnson', phone: '+1 555-2211', email: 'r.johnson@example.com', bloodType: 'O-', lastDonationDate: '2024-02-28', registryYear: 2022, location: 'Portland', country: 'USA', status: 'On Hold' },

  // Kenya & Ghana - Past & Present
  { id: '17', name: 'Kofi Mensah', phone: '+233 24 123 4567', email: 'k.mensah@example.com', bloodType: 'B-', lastDonationDate: '2025-02-05', registryYear: 2021, location: 'Accra', country: 'Ghana', status: 'Available' },
  { id: '18', name: 'Akua Addo', phone: '+233 24 999 8888', email: 'a.addo@example.com', bloodType: 'O+', lastDonationDate: '2025-02-12', registryYear: 2025, location: 'Kumasi', country: 'Ghana', status: 'Recent Donor' },
  { id: '19', name: 'Zainab Juma', phone: '+254 712 345 678', email: 'z.juma@example.com', bloodType: 'A+', lastDonationDate: '2025-01-20', registryYear: 2022, location: 'Nairobi', country: 'Kenya', status: 'Available' },
  { id: '20', name: 'Omari Mwangi', phone: '+254 722 555 444', email: 'o.mwangi@example.com', bloodType: 'AB-', lastDonationDate: '2024-12-05', registryYear: 2020, location: 'Mombasa', country: 'Kenya', status: 'Available' },
];

export const MOCK_REFERRALS: HealthReferral[] = [
  {
    id: 'r1',
    patientName: 'K. James',
    conditionName: 'Maternal Care Check-up',
    discreetName: 'Wellness Visit',
    status: 'Pending',
    lastFollowUp: '2025-02-12',
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
    lastFollowUp: '2025-02-15',
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
