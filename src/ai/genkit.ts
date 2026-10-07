import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Tried in order; Gemini models frequently return 503 "high demand" or get
// retired for new keys, so fall back rather than fail the whole request.
const MODELS = [
  'googleai/gemini-flash-latest',
  'googleai/gemini-3.5-flash',
  'googleai/gemini-flash-lite-latest',
  'googleai/gemini-2.5-flash-lite',
];

export const ai = genkit({
  plugins: [googleAI()],
  model: MODELS[0],
});

const isRetryable = (e: unknown) =>
  /\b(503|429|404|500)\b|high demand|overloaded|no longer available|not found/i.test(String((e as Error)?.message ?? e));

export async function generateWithFallback<I, R>(
  prompt: (input: I, opts?: {model?: string}) => Promise<R>,
  input: I,
): Promise<R> {
  let lastError: unknown;
  for (const model of MODELS) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        return await prompt(input, {model});
      } catch (e) {
        lastError = e;
        if (!isRetryable(e)) throw e;
        await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
      }
    }
  }
  throw lastError;
}
