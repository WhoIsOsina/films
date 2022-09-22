import { RoleType } from './RoleType';
import { RateType } from './RateType';
export interface UserType {
   id: number;
   email: string;
   rates: RateType[],
   roles: RoleType[],
}