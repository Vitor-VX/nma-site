<script lang="ts">
  import { Loader2, CheckCircle2, AlertCircle, Lock } from '@lucide/svelte';
  import { submitBetaSignup } from '$lib/api/beta';
  import { trackEvent } from '$lib/analytics';
  import type { BetaSignup, BetaSignupState } from '$lib/types/beta';
  import { reveal } from '$lib/actions/reveal';
  import { goto } from '$app/navigation';

  let name = $state('');
  let email = $state('');
  let agreed = $state(false);
  let touched = $state(false);
  let formState = $state<BetaSignupState>('idle');
  let errorMsg = $state('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let nameError = $derived(touched && name.trim().length < 2);
  let emailError = $derived(touched && !emailRegex.test(email.trim()));
  let agreedError = $derived(touched && !agreed);
  let canSubmit = $derived(
    name.trim().length >= 2 &&
      emailRegex.test(email.trim()) &&
      agreed &&
      formState !== 'loading'
  );

  function getUtms(): Partial<BetaSignup> {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    return {
      source: params.get('utm_source') ?? undefined,
      medium: params.get('utm_medium') ?? undefined,
      campaign: params.get('utm_campaign') ?? undefined,
      content: params.get('utm_content') ?? undefined
    };
  }

  function onFieldFocus() {
    trackEvent('beta_form_started');
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    touched = true;
    if (!canSubmit) return;

    formState = 'loading';
    errorMsg = '';

    const result = await submitBetaSignup({
      name: name.trim(),
      email: email.trim(),
      ...getUtms()
    });

    if (result.ok) {
      trackEvent('beta_form_submitted');
      formState = 'success';
      goto('/obrigado');
    } else {
      trackEvent('beta_form_error', { message: result.message });
      formState = 'error';
      errorMsg = result.message ?? 'Não foi possível enviar. Tente novamente.';
    }
  }
</script>

<section id="beta" class="section beta">
  <div class="container">
    <div class="beta__card reveal" use:reveal>
      <div class="beta__head">
        <span class="eyebrow">Beta fechado</span>
        <h2>Quer testar antes de todo mundo?</h2>
        <p>
          Estamos preparando o Não Mexe Aí para publicação no Google Play e procurando usuários
          Android para participar do teste fechado.
        </p>
        <p class="beta__sub">
          Você receberá acesso gratuito ao aplicativo durante o período de testes.
        </p>
      </div>

      <form class="beta__form" onsubmit={handleSubmit} novalidate>
        <div class="field">
          <label for="beta-name">Nome</label>
          <input
            id="beta-name"
            type="text"
            placeholder="Seu nome"
            autocomplete="name"
            bind:value={name}
            onfocus={onFieldFocus}
            aria-invalid={nameError}
            aria-describedby={nameError ? 'beta-name-err' : undefined}
          />
          {#if nameError}
            <span id="beta-name-err" class="field__err">Informe seu nome.</span>
          {/if}
        </div>

        <div class="field">
          <label for="beta-email">E-mail da Conta Google</label>
          <input
            id="beta-email"
            type="email"
            placeholder="seuemail@gmail.com"
            autocomplete="email"
            bind:value={email}
            onfocus={onFieldFocus}
            aria-invalid={emailError}
            aria-describedby={emailError ? 'beta-email-err' : undefined}
          />
          {#if emailError}
            <span id="beta-email-err" class="field__err">Informe um e-mail válido.</span>
          {/if}
        </div>

        <div class="field field--check">
          <label class="check">
            <input type="checkbox" bind:checked={agreed} />
            <span class="check__box" aria-hidden="true"></span>
            <span class="check__label">
              Li e concordo com a
              <a href="/privacidade" onclick={() => trackEvent('privacy_clicked')}>Política de Privacidade</a>.
            </span>
          </label>
          {#if agreedError}
            <span class="field__err">Você precisa concordar para participar.</span>
          {/if}
        </div>

        <button type="submit" class="btn btn--primary btn--lg btn--block" disabled={!canSubmit}>
          {#if formState === 'loading'}
            <Loader2 size={18} class="spin" /> Enviando...
          {:else}
            QUERO SER TESTADOR
          {/if}
        </button>

        {#if formState === 'error'}
          <p class="beta__msg beta__msg--err" role="alert">
            <AlertCircle size={16} /> {errorMsg}
          </p>
        {:else if formState === 'success'}
          <p class="beta__msg beta__msg--ok" role="status">
            <CheckCircle2 size={16} /> Inscrição enviada!
          </p>
        {/if}

        <p class="beta__consent">
          <Lock size={13} /> Ao participar, você concorda em receber comunicações relacionadas
          exclusivamente ao teste do Não Mexe Aí.
        </p>
      </form>
    </div>
  </div>
</section>

<style>
  .beta {
    position: relative;
  }

  .beta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(60% 50% at 50% 30%, rgba(239, 35, 60, 0.08), transparent 70%);
    pointer-events: none;
  }

  .beta__card {
    position: relative;
    max-width: 560px;
    margin-inline: auto;
    background:
      radial-gradient(120% 60% at 50% 0%, rgba(239, 35, 60, 0.1), transparent 60%),
      var(--surface);
    border: 1px solid rgba(239, 35, 60, 0.22);
    border-radius: var(--radius-xl);
    padding: clamp(28px, 5vw, 48px);
    box-shadow: var(--shadow-lg);
  }

  .beta__head {
    text-align: center;
    margin-bottom: var(--space-6);
  }

  .beta__head .eyebrow {
    justify-content: center;
  }

  .beta__head .eyebrow::before {
    display: none;
  }

  .beta__head p {
    margin-top: var(--space-3);
  }

  .beta__sub {
    color: var(--text);
    font-weight: 600;
  }

  .beta__form {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .field label {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text);
  }

  .field input[type='text'],
  .field input[type='email'] {
    padding: 14px 16px;
    background: var(--background);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius);
    color: var(--text);
    transition: border-color 0.18s var(--ease), box-shadow 0.18s var(--ease);
  }

  .field input::placeholder {
    color: var(--text-muted);
  }

  .field input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-soft);
    outline: none;
  }

  .field__err {
    font-size: 0.82rem;
    color: var(--error);
  font-weight: 500;
  }

  .field--check {
    margin-top: var(--space-1);
  }

  .check {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .check input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }

  .check__box {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 1.5px solid var(--border-strong);
    background: var(--background);
    margin-top: 1px;
    transition: background 0.18s var(--ease), border-color 0.18s var(--ease);
    position: relative;
  }

  .check input:checked + .check__box {
    background: var(--primary);
    border-color: var(--primary);
  }

  .check input:checked + .check__box::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .check input:focus-visible + .check__box {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  .check__label a {
    color: var(--primary);
    font-weight: 600;
  }

  .check__label a:hover {
    text-decoration: underline;
  }

  .beta__msg {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .beta__msg--err {
    color: var(--error);
  }

  .beta__msg--ok {
    color: var(--success);
  }

  .beta__consent {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    font-size: 0.8rem;
    color: var(--text-muted);
    text-align: center;
    justify-content: center;
  }

  .spin {
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    .spin { animation: none; }
  }
</style>
