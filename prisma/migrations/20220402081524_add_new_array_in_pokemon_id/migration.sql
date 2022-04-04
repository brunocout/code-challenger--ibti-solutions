/*
  Warnings:

  - The `pokemonid` column on the `Team` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "pokemonid",
ADD COLUMN     "pokemonid" INTEGER[];
