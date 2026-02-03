import { PrismaService } from '../prisma/prisma.service';
export declare class PropertiesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
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
    update(id: string, data: any): Promise<{
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
