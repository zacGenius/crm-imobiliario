import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@imobiliaria.com' },
    update: {},
    create: {
      email: 'admin@imobiliaria.com',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  const broker = await prisma.user.upsert({
    where: { email: 'corretor1@imobiliaria.com' },
    update: {},
    create: {
      email: 'corretor1@imobiliaria.com',
      name: 'Corretor Silva',
      password: hashedPassword,
      role: 'BROKER',
    },
  });

  console.log({ admin, broker });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
