
export interface UsersState{
    users: UserCredentials[],
    errorMessage?: string        
}

export interface UserCredentials {
  id: number;
  username: string;
  email: string;
  carDetails?: CarData[];
  lat: number;
  lng: number;
  active: boolean;
}

interface CarData {
  id: number;
  fuel_type: string;
  last_maintenance_date: Date;
  insurance_company_id: number;
}

export interface UpdateCredentials{
carDetails?: CarData[]
updateErrorMessage?: string
}
