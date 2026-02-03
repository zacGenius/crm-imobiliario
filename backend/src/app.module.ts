import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LeadsModule } from './leads/leads.module';
import { PropertiesModule } from './properties/properties.module';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    LeadsModule,
    PropertiesModule,
    DealsModule,
  ],
})
export class AppModule {}
