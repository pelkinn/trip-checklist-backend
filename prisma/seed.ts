import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Создаём длительности
  await prisma.duration.createMany({
    data: [
      { days: 1, label: '1 день' },
      { days: 2, label: '2 дня' },
      { days: 3, label: '3 дня' },
      { days: 5, label: '5 дней' },
      { days: 7, label: 'Неделя' },
    ],
  });

  // Создаём предметы
  await prisma.item.createMany({
    data: [
      { name: 'Палатка' },
      { name: 'Спальник' },
      { name: 'Коврик' },
      { name: 'Фонарик' },
      { name: 'Спички' },
      { name: 'Термос' },
      { name: 'Аптечка' },
      { name: 'Носки' },
      { name: 'Вода' },
      { name: 'Еда' },
    ],
  });

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());