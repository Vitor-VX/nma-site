<script lang="ts">
  import { ShieldCheck, KeyRound, Timer, Power, Heart } from '@lucide/svelte';
  import { reveal } from '$lib/actions/reveal';

  const items = [
    { icon: KeyRound, text: 'Controle pelo proprietário' },
    { icon: Timer, text: 'Comportamento temporário' },
    { icon: Power, text: 'Desativação disponível' },
    { icon: Heart, text: 'Nenhuma intenção de danificar o aparelho' },
    { icon: ShieldCheck, text: 'Experiência voltada para entretenimento' }
  ];
</script>

<section class="section safety">
  <div class="container safety__inner">
    <div class="safety__head reveal" use:reveal>
      <span class="safety__icon" aria-hidden="true"><ShieldCheck size={32} /></span>
      <h2>O celular enlouquece. Você não perde o controle.</h2>
      <p>
        Existe um mecanismo secreto configurado para interromper a experiência quando o
        proprietário quiser.
      </p>
    </div>

    <ul class="safety__list">
      {#each items as item}
        <li class="safety__item reveal" use:reveal>
          <span class="safety__item-icon" aria-hidden="true"><item.icon size={18} /></span>
          <span>{item.text}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .safety__inner {
    display: grid;
    gap: var(--space-7);
    max-width: 920px;
    margin-inline: auto;
  }

  .safety__head {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
  }

  .safety__head h2 {
    max-width: 620px;
  }

  .safety__head p {
    max-width: 560px;
  }

  .safety__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: var(--primary-soft);
    color: var(--primary);
    border: 1px solid rgba(239, 35, 60, 0.22);
  }

  .safety__list {
    display: grid;
    gap: var(--space-3);
    grid-template-columns: 1fr;
  }

  .safety__item {
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

  .safety__item-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--primary-soft);
    color: var(--primary);
  }

  @media (min-width: 720px) {
    .safety__list {
      grid-template-columns: repeat(2, 1fr);
    }
    .safety__item:nth-child(5) {
      grid-column: span 2;
      justify-content: center;
    }
  }
</style>
