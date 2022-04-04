/*
  Warnings:

  - You are about to drop the column `idpokemon` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "idpokemon",
ADD COLUMN     "pokemonid" INTEGER[1];
