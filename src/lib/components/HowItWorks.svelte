<script lang="ts">
  import { SlidersHorizontal, Power, Hand } from '@lucide/svelte';
  import { reveal } from '$lib/actions/reveal';
  import { trackEvent } from '$lib/analytics';
  import { scrollToBeta } from '$lib/utils/scroll';

  const steps = [
    {
      n: '01',
      icon: SlidersHorizontal,
      title: 'Você escolhe a interferência',
      desc: 'Configure o comportamento que deseja ativar.'
    },
    {
      n: '02',
      icon: Power,
      title: 'Ative o modo',
      desc: 'Escolha a intensidade e inicie a experiência.'
    },
    {
      n: '03',
      icon: Hand,
      title: 'Entregue o celular',
      desc: 'Os efeitos começam enquanto você continua sabendo como desativá-los.'
    }
  ];

  function cta() {
    trackEvent('secondary_cta_click');
    scrollToBeta();
  }
</script>

<section id="como-funciona" class="section">
  <div class="container">
    <div class="section-head section-head--center reveal" use:reveal>
      <span class="eyebrow">Passo a passo</span>
      <h2>Como funciona?</h2>
    </div>

    <div class="steps">
      {#each steps as step, i}
        <article class="step card reveal" use:reveal>
          <span class="step__n">{step.n}</span>
          <span class="step__icon" aria-hidden="true"><step.icon size={24} /></span>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
          {#if i < steps.length - 1}
            <span class="step__arrow" aria-hidden="true"></span>
          {/if}
        </article>
      {/each}
    </div>

    <div class="steps__cta reveal" use:reveal>
      <button class="btn btn--ghost btn--lg" onclick={cta}>Quero testar isso</button>
    </div>
  </div>
</section>

<style>
  .steps {
    display: grid;
    gap: var(--space-4);
  }

  .step {
    position: relative;
    text-align: left;
  }

  .step__n {
    position: absolute;
    top: 22px;
    right: 24px;
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--text-muted);
    letter-spacing: 0.1em;
  }

  .step__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--primary-soft);
    color: var(--primary);
    border: 1px solid rgba(239, 35, 60, 0.22);
    margin-bottom: var(--space-4);
  }

  .step h3 {
    margin-bottom: var(--space-2);
  }

  .step__arrow {
    display: none;
  }

  .steps__cta {
    display: flex;
    justify-content: center;
    margin-top: var(--space-6);
  }

  @media (min-width: 880px) {
    .steps {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-5);
    }
    .step__arrow {
      display: block;
      position: absolute;
      top: 50%;
      right: -26px;
      transform: translateY(-50%);
      width: 40px;
      height: 1px;
      background: linear-gradient(90deg, var(--border-strong), transparent);
    }
    .step__arrow::after {
      content: '';
      position: absolute;
      right: 0;
      top: -3px;
      width: 7px;
      height: 7px;
      border-top: 1px solid var(--border-strong);
      border-right: 1px solid var(--border-strong);
      transform: rotate(45deg);
    }
  }
</style>
