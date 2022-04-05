const express = require("express")
const teamsRoutes = express.Router()
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// C
teamsRoutes.post("/teams", async (req, res) => {
    const { pokemonid, owner } = req.body

    const team = await prisma.team.create({
        data: {
            pokemonid,
            owner
        }
    })

    return res.status(200).json(team)
})
// R
teamsRoutes.get("/teams", async (req, res) => {
    const teams = await prisma.team.findMany()

    return res.status(200).json(teams)
})
// U
teamsRoutes.put("/teams", async (req, res) => {
    const { id, pokemonid, owner } = req.body

    if(!id) {
        return res.status(400).json("error! ID is not defined")
    }

    const teamAlreadyExist = await prisma.team.findUnique({ where: {id} })

    if(!teamAlreadyExist) {
        return res.status(404).json("This team not exist!")
    }

    const team = await prisma.team.update({
        where: {
            id
        },
        data: {
            pokemonid,
            owner
        }
    })

    return res.status(200).json(team)
})
// D
teamsRoutes.delete("/teams/:id", async (req, res) => {
    const { id } = req.params

    const intId = parseInt(id)

    if(!intId) {
        return res.status(400).json("error! ID is not defined")
    }

    const teamAlreadyExist = await prisma.team.findUnique({ where: { id: intId } })

    if(!teamAlreadyExist) {
        return res.status(404).json("This team not exist!")
    }

   await prisma.team.delete({ where: { id: intId } })

   return res.status(200).send()
})

module.exports = teamsRoutes
