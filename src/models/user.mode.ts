import { Role } from "./roles";

export interface UserInfo {
    id: number;
    name: string;
    email: string;
    rol: Role
}