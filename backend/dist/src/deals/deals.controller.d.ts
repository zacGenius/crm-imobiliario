import { DealsService } from './deals.service';
export declare class DealsController {
    private readonly dealsService;
    constructor(dealsService: DealsService);
    getStats(): Promise<{
        totalDeals: number;
        totalValue: number;
        totalCommission: number;
        leadsCount: number;
    }>;
    create(createDealDto: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        brokerId: string;
        value: number;
        commission: number;
        leadId: string;
        propertyId: string;
    }>;
    findAll(): Promise<({
        lead: {
            name: string;
        };
        property: {
            title: string;
        };
        broker: {
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        brokerId: string;
        value: number;
        commission: number;
        leadId: string;
        propertyId: string;
    })[]>;
    findOne(id: string): Promise<({
        lead: {
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
        };
        property: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.PropertyStatus;
            title: string;
            description: string | null;
            price: number;
            city: string;
            address: string;
        };
        broker: {
            id: string;
            email: string;
            password: string;
            name: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        brokerId: string;
        value: number;
        commission: number;
        leadId: string;
        propertyId: string;
    }) | null>;
    update(id: string, updateDealDto: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        brokerId: string;
        value: number;
        commission: number;
        leadId: string;
        propertyId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        brokerId: string;
        value: number;
        commission: number;
        leadId: string;
        propertyId: string;
    }>;
}
