<script lang="ts">
  import { Check, Smartphone, Mail, Download, Bell, MessageSquare } from '@lucide/svelte';
  import { reveal } from '$lib/actions/reveal';

  const items = [
    { icon: Smartphone, text: 'Um aparelho Android compatível' },
    { icon: Mail, text: 'Uma Conta Google' },
    { icon: Download, text: 'Instalar o aplicativo pelo Google Play durante o teste' },
    { icon: Bell, text: 'Permanecer inscrito no beta durante o período solicitado' },
    { icon: MessageSquare, text: 'Opcionalmente enviar feedback sobre bugs e funcionamento' }
  ];
</script>

<section class="section requirements">
  <div class="container container--narrow">
    <div class="section-head section-head--center reveal" use:reveal>
      <span class="eyebrow">Requisitos</span>
      <h2>O que você precisa para participar</h2>
    </div>

    <ul class="req__list">
      {#each items as item}
        <li class="req__item reveal" use:reveal>
          <span class="req__check" aria-hidden="true"><Check size={16} /></span>
          <span class="req__icon" aria-hidden="true"><item.icon size={18} /></span>
          <span class="req__text">{item.text}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .req__list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .req__item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4) var(--space-5);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text);
    font-weight: 500;
  }

  .req__check {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--primary);
    color: white;
  }

  .req__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
  }

  .req__text {
    flex: 1;
  }
</style>
