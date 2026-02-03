import { PropertiesService } from './properties.service';
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
    create(createPropertyDto: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.PropertyStatus;
        title: string;
        description: string | null;
        price: number;
        city: string;
        address: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.PropertyStatus;
        title: string;
        description: string | null;
        price: number;
        city: string;
        address: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.PropertyStatus;
        title: string;
        description: string | null;
        price: number;
        city: string;
        address: string;
    } | null>;
    update(id: string, updatePropertyDto: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.PropertyStatus;
        title: string;
        description: string | null;
        price: number;
        city: string;
        address: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.PropertyStatus;
        title: string;
        description: string | null;
        price: number;
        city: string;
        address: string;
    }>;
}
