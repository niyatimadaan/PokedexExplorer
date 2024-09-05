// src/utils/trpc.ts
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/trpc';  // Import the type of your router

export const trpc = createTRPCReact<AppRouter>();
