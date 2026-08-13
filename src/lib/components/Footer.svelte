<script lang="ts">
  import { Hand } from '@lucide/svelte';
  import { trackEvent } from '$lib/analytics';
</script>

<footer class="footer">
  <div class="container footer__inner">
    <a href="/" class="footer__brand">
      <span class="footer__logo" aria-hidden="true"><Hand size={16} /></span>
      Não Mexe Aí
    </a>

    <nav class="footer__links" aria-label="Links institucionais">
      <a href="/privacidade" onclick={() => trackEvent('privacy_clicked')}>Política de Privacidade</a>
      <a href="/termos" onclick={() => trackEvent('terms_clicked')}>Termos de Uso</a>
      <a href="/contato">Contato</a>
    </nav>

    <p class="footer__copy">© 2026 Não Mexe Aí. Todos os direitos reservados.</p>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--border);
    padding-block: var(--space-6);
  }

  .footer__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
    text-align: center;
  }

  .footer__brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 800;
  }

  .footer__logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 7px;
    background: var(--primary-soft);
    color: var(--primary);
    border: 1px solid rgba(239, 35, 60, 0.25);
  }

  .footer__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-5);
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .footer__links a:hover {
    color: var(--text);
  }

  .footer__copy {
    font-size: 0.82rem;
    color: var(--text-muted);
  }
</style>
