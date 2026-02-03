import { LeadsService } from './leads.service';
export declare class LeadsController {
    private readonly leadsService;
    constructor(leadsService: LeadsService);
    create(createLeadDto: any): Promise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        source: string;
        status: import("@prisma/client").$Enums.LeadStatus;
        temperature: import("@prisma/client").$Enums.LeadTemperature;
        score: number;
        brokerId: string | null;
    }>;
    findAll(): Promise<({
        broker: {
            name: string;
        } | null;
    } & {
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        source: string;
        status: import("@prisma/client").$Enums.LeadStatus;
        temperature: import("@prisma/client").$Enums.LeadTemperature;
        score: number;
        brokerId: string | null;
    })[]>;
    findOne(id: string): Promise<({
        deals: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            brokerId: string;
            value: number;
            commission: number;
            leadId: string;
            propertyId: string;
        }[];
        broker: {
            id: string;
            email: string;
            password: string;
            name: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        source: string;
        status: import("@prisma/client").$Enums.LeadStatus;
        temperature: import("@prisma/client").$Enums.LeadTemperature;
        score: number;
        brokerId: string | null;
    }) | null>;
    update(id: string, updateLeadDto: any): Promise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        source: string;
        status: import("@prisma/client").$Enums.LeadStatus;
        temperature: import("@prisma/client").$Enums.LeadTemperature;
        score: number;
        brokerId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        source: string;
        status: import("@prisma/client").$Enums.LeadStatus;
        temperature: import("@prisma/client").$Enums.LeadTemperature;
        score: number;
        brokerId: string | null;
    }>;
}
