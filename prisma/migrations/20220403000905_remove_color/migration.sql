/*
  Warnings:

  - You are about to drop the column `color` on the `Team` table. All the data in the column will be lost.
  - The `pokemonid` column on the `Team` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "color",
DROP COLUMN "pokemonid",
ADD COLUMN     "pokemonid" INTEGER[];
