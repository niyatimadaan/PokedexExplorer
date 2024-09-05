import { initTRPC } from "@trpc/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();
const t = initTRPC.create();

export const appRouter = t.router({
  getPokemon: t.procedure.input(z.string()).query(async ({ input }) => {
    return prisma.pokemon.findUnique({
      where: { name: input },
    });
  }),
  getPokemonArray: t.procedure.input(z.string().array()).query(async ({ input }) => {
    return prisma.pokemon.findMany({
      where: { name: { in: input } },
    });
  }),
  getPokemonByType: t.procedure.input(String).query(async ({ input }) => {
    return prisma.pokemon.findMany({
      where: { types: { has: input } },
    });
  }),
  addPokemon: t.procedure
    .input(
      z.object({
        name: z.string(),
        types: z.string().array(),
        sprite: z.string(),
        image: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return prisma.pokemon.create({
        data: {
          name: input.name,
          types: input.types,
          sprite: input.sprite,
          image: input.image,
        },
      });
    }),
  addMultiplePokemon: t.procedure
    .input(
      z.array(
        z.object({
          name: z.string(),
          types: z.string().array(),
          sprite: z.string(),
          image: z.string(),
        })
      )
    )
    .mutation(async ({ input }) => {
    //   return prisma.pokemon.createMany({
    //     data: input,
    //   });
    return Promise.all(
        input.map(async (pokemon) => {
          const existingPokemon = await prisma.pokemon.findUnique({
            where: { name: pokemon.name },
          });
          
          if (!existingPokemon) {
            return prisma.pokemon.create({
              data: pokemon,
            });
          }
          return existingPokemon; // If already exists, return the existing Pokémon
        })
      );
    }),
  deletePokemon: t.procedure.input(z.string()).mutation(async ({ input }) => {
    return prisma.pokemon.delete({
      where: { name: input },
    });
  }),
});

export type AppRouter = typeof appRouter;
