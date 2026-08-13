<script lang="ts">
  import { Hand, Menu, X } from '@lucide/svelte';
  import { trackEvent } from '$lib/analytics';
  import { scrollToBeta } from '$lib/utils/scroll';

  let open = $state(false);

  function toggle() {
    open = !open;
  }

  function close() {
    open = false;
  }

  function goBeta() {
    close();
    trackEvent('nav_cta_click');
    scrollToBeta();
  }

  const links = [
    { label: 'Como funciona', href: '/#como-funciona' },
    { label: 'Recursos', href: '/#recursos' },
    { label: 'FAQ', href: '/#faq' }
  ];
</script>

<header class="nav" data-open={open}>
  <div class="container nav__inner">
    <a href="/" class="nav__brand" aria-label="Não Mexe Aí — página inicial">
      <span class="nav__logo" aria-hidden="true"><Hand size={18} /></span>
      <span class="nav__name">Não Mexe Aí</span>
    </a>

    <nav class="nav__links" aria-label="Navegação principal">
      {#each links as link}
        <a href={link.href} class="nav__link" onclick={close}>{link.label}</a>
      {/each}
      <button class="btn btn--primary nav__cta" onclick={goBeta}>Participar do Beta</button>
    </nav>

    <button
      class="nav__toggle"
      onclick={toggle}
      aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={open}
    >
      {#if open}
        <X size={22} />
      {:else}
        <Menu size={22} />
      {/if}
    </button>
  </div>

  {#if open}
    <nav class="nav__mobile" aria-label="Navegação mobile">
      <a href="/#como-funciona" onclick={close} class="nav__mobile-link">Como funciona</a>
      <a href="/#recursos" onclick={close} class="nav__mobile-link">Recursos</a>
      <a href="/#faq" onclick={close} class="nav__mobile-link">FAQ</a>
      <button class="btn btn--primary btn--block" onclick={goBeta}>Participar do Beta</button>
    </nav>
  {/if}
</header>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(9, 9, 9, 0.72);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
    transition: background 0.3s var(--ease);
  }

  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }

  .nav__brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .nav__logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 9px;
    background: var(--primary-soft);
    color: var(--primary);
    border: 1px solid rgba(239, 35, 60, 0.28);
  }

  .nav__name {
    font-size: 1.02rem;
  }

  .nav__links {
    display: none;
    align-items: center;
    gap: var(--space-5);
  }

  .nav__link {
    font-size: 0.93rem;
    color: var(--text-secondary);
    font-weight: 500;
    transition: color 0.18s var(--ease);
  }

  .nav__link:hover {
    color: var(--text);
  }

  .nav__cta {
    padding: 10px 20px;
    font-size: 0.92rem;
  }

  .nav__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    color: var(--text);
  }

  .nav__mobile {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    padding: var(--space-5);
    padding-bottom: var(--space-6);
    border-top: 1px solid var(--border);
    background: rgba(9, 9, 9, 0.96);
  }

  .nav__mobile-link {
    padding: var(--space-3) 0;
    font-weight: 600;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
  }

  @media (min-width: 880px) {
    .nav__links {
      display: flex;
    }
    .nav__toggle {
      display: none;
    }
  }
</style>
