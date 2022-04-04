-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "idpokemon" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);
