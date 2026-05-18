import { PrismaClient } from "@/generated/prisma/client";


const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      {
        name: "Web Development",
      },
      {
        name: "Mobile Development",
      },
      {
        name: "Data Science",
      },
      {
        name: "Artificial Intelligence",
      },
      {
        name: "Machine Learning",
      },
      {
        name: "Cyber Security",
      },
      {
        name: "Cloud Computing",
      },
      {
        name: "DevOps",
      },
      {
        name: "UI/UX Design",
      },
      {
        name: "Digital Marketing",
      },
      {
        name: "Programming Languages",
      },
      {
        name: "Game Development",
      },
      {
        name: "Business",
      },
      {
        name: "Finance & Accounting",
      },
      {
        name: "Photography",
      },
      {
        name: "Music",
      },
      {
        name: "Personal Development",
      },

      { name: "IT & Software" },
      { name: "Office Productivity" },
      { name: "Graphic Design" },
      { name: "Health & Fitness" },
      { name: "Language Learning" },
    ],

    skipDuplicates: true,
  });

  console.log("Categories Seeded Successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
