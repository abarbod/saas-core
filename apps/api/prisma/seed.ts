import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const [ownerRole, memberRole] = await Promise.all([
    prisma.role.upsert({ where: { key: 'owner' }, create: { key: 'owner', name: 'Owner' }, update: {} }),
    prisma.role.upsert({ where: { key: 'member' }, create: { key: 'member', name: 'Member' }, update: {} })
  ]);

  const [manageBilling, viewUsage] = await Promise.all([
    prisma.permission.upsert({ where: { key: 'billing.manage' }, create: { key: 'billing.manage', name: 'Manage billing' }, update: {} }),
    prisma.permission.upsert({ where: { key: 'usage.view' }, create: { key: 'usage.view', name: 'View usage' }, update: {} })
  ]);

  await prisma.rolePermission.upsert({
    where: { roleId_permissionId: { roleId: ownerRole.id, permissionId: manageBilling.id } },
    create: { roleId: ownerRole.id, permissionId: manageBilling.id },
    update: {}
  });

  await prisma.rolePermission.upsert({
    where: { roleId_permissionId: { roleId: memberRole.id, permissionId: viewUsage.id } },
    create: { roleId: memberRole.id, permissionId: viewUsage.id },
    update: {}
  });

  await prisma.plan.upsert({
    where: { key: 'starter' },
    create: { key: 'starter', name: 'Starter', monthlyPriceCents: 2900 },
    update: {}
  });
}

main().finally(() => prisma.$disconnect());
