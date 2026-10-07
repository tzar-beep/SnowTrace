'use server';

import { generateRescueRoutes, type GenerateRescueRoutesInput, type GenerateRescueRoutesOutput } from "@/ai/flows/generate-rescue-routes";
import { predictVictimProbability, type PredictVictimProbabilityInput, type PredictVictimProbabilityOutput } from "@/ai/flows/predict-victim-probability";

// Server actions return errors instead of throwing: Next.js hides thrown
// error messages in production builds, which surfaced as a generic
// "Server Components render" error on Vercel.
export type ActionResult<T> = { data: T; error?: undefined } | { data?: undefined; error: string };

function missingKeyError(): string | null {
    if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY && !process.env.GOOGLE_GENAI_API_KEY) {
        return "GEMINI_API_KEY is not set on the server. Add it to your environment variables and redeploy.";
    }
    return null;
}

export async function getRescueRoutesAction(input: GenerateRescueRoutesInput): Promise<ActionResult<GenerateRescueRoutesOutput>> {
    const keyError = missingKeyError();
    if (keyError) return { error: keyError };
    try {
        return { data: await generateRescueRoutes(input) };
    } catch (error) {
        console.error("Error in generateRescueRoutes:", error);
        return { error: `Failed to generate rescue routes: ${(error as Error).message ?? "unknown error"}` };
    }
}

export async function getVictimProbabilityAction(input: PredictVictimProbabilityInput): Promise<ActionResult<PredictVictimProbabilityOutput>> {
    const keyError = missingKeyError();
    if (keyError) return { error: keyError };
    try {
        return { data: await predictVictimProbability(input) };
    } catch (error) {
        console.error("Error in predictVictimProbability:", error);
        return { error: `Failed to analyze victim probability: ${(error as Error).message ?? "unknown error"}` };
    }
}
