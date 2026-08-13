import { supabase } from '../supabase';
import type { BetaSignup, BetaSignupResult } from '../types/beta';

/**
 * Sends a beta signup to the backend.
 * Currently wired to the Supabase `beta_signups` table.
 * Swap the body here to point at a different API later.
 */
export async function submitBetaSignup(signup: BetaSignup): Promise<BetaSignupResult> {
  try {
    const { error } = await supabase.from('beta_signups').insert({
      name: signup.name,
      email: signup.email,
      utm_source: signup.source ?? null,
      utm_medium: signup.medium ?? null,
      utm_campaign: signup.campaign ?? null,
      utm_content: signup.content ?? null
    });

    if (error) {
      return { ok: false, message: error.message };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      message: err instanceof Error ? err.message : 'Erro inesperado. Tente novamente.'
    };
  }
}
