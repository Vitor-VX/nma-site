<script lang="ts">
  import { Flame, Eye, ArrowLeft } from '@lucide/svelte';
  import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
  <title>Obrigado — Não Mexe Aí</title>
</svelte:head>

<section class="section thanks">
  <div class="container container--narrow">
    <div class="thanks__box reveal" use:reveal>
      <span class="thanks__icon" aria-hidden="true"><Flame size={32} /></span>
      <h1>Você está na lista. <span aria-hidden="true">🔥</span></h1>
      <p>Obrigado por se inscrever para testar o Não Mexe Aí.</p>
      <p>Quando seu acesso estiver disponível, enviaremos as instruções para o e-mail informado.</p>
      <p class="thanks__hint">
        <Eye size={16} /> Enquanto isso, fica de olho. <span aria-hidden="true">👀</span>
      </p>

      <a href="/" class="btn btn--ghost btn--lg">
        <ArrowLeft size={18} /> Voltar para o site
      </a>

      <div class="thanks__socials" aria-label="Redes sociais (em breve)">
        <span class="thanks__socials-label">Em breve:</span>
        <span class="thanks__social-chip">TikTok</span>
        <span class="thanks__social-chip">Instagram</span>
      </div>
    </div>
  </div>
</section>

<style>
  .thanks {
    min-height: 70vh;
    display: flex;
    align-items: center;
  }

  .thanks__box {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
    padding: clamp(40px, 7vw, 72px) var(--space-6);
    background:
      radial-gradient(100% 60% at 50% 0%, rgba(239, 35, 60, 0.12), transparent 60%),
      var(--surface);
    border: 1px solid rgba(239, 35, 60, 0.22);
    border-radius: var(--radius-xl);
  }

  .thanks__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: var(--primary-soft);
    color: var(--primary);
    border: 1px solid rgba(239, 35, 60, 0.28);
  }

  .thanks__box h1 {
    font-size: clamp(1.9rem, 5vw, 2.8rem);
  }

  .thanks__box p {
    max-width: 460px;
  }

  .thanks__hint {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text);
    font-weight: 600;
    margin-top: var(--space-2);
  }

  .thanks__socials {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-top: var(--space-5);
    flex-wrap: wrap;
    justify-content: center;
  }

  .thanks__socials-label {
    font-size: 0.84rem;
    color: var(--text-muted);
  }

  .thanks__social-chip {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--surface-secondary);
    border: 1px solid var(--border);
    padding: 6px 14px;
    border-radius: 999px;
  }
</style>
