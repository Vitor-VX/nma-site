<script lang="ts">
  import { ChevronDown } from '@lucide/svelte';
  import { trackEvent } from '$lib/analytics';
  import { reveal } from '$lib/actions/reveal';

  const faqs = [
    {
      q: 'Preciso pagar alguma coisa?',
      a: 'Não. A participação no teste é gratuita.'
    },
    {
      q: 'O aplicativo funciona no iPhone?',
      a: 'Não. O Não Mexe Aí foi desenvolvido exclusivamente para Android.'
    },
    {
      q: 'Meu celular pode estragar?',
      a: 'Não. O aplicativo não tem como objetivo causar dano físico ao aparelho. Os efeitos são comportamentos temporários controlados pelo software.'
    },
    {
      q: 'Como eu saio da experiência?',
      a: 'O aplicativo possui um mecanismo de desativação definido pelo proprietário do aparelho.'
    },
    {
      q: 'Por que vocês precisam do meu e-mail?',
      a: 'O e-mail da sua Conta Google é necessário para conceder acesso ao teste fechado disponibilizado através do Google Play.'
    },
    {
      q: 'Vou receber spam?',
      a: 'Não. O endereço será utilizado para comunicação relacionada ao beta e ao lançamento, conforme descrito na Política de Privacidade.'
    }
  ];

  let openIndex = $state<number | null>(0);

  function toggle(i: number) {
    const willOpen = openIndex !== i;
    openIndex = willOpen ? i : null;
    if (willOpen) trackEvent('faq_opened', { index: i });
  }
</script>

<section id="faq" class="section faq">
  <div class="container container--narrow">
    <div class="section-head section-head--center reveal" use:reveal>
      <span class="eyebrow">Dúvidas</span>
      <h2>Perguntas frequentes</h2>
    </div>

    <div class="faq__list">
      {#each faqs as faq, i}
        <div class="faq__item reveal" use:reveal>
          <button
            class="faq__q"
            onclick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-a-${i}`}
          >
            <span>{faq.q}</span>
            <span class="faq__icon" class:is-open={openIndex === i} aria-hidden="true">
              <ChevronDown size={18} />
            </span>
          </button>
          <div
            id={`faq-a-${i}`}
            class="faq__a"
            class:is-open={openIndex === i}
            role="region"
          >
            <div class="faq__a-inner">
              <p>{faq.a}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq__list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .faq__item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .faq__q {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding: var(--space-5);
    text-align: left;
    font-weight: 700;
    font-size: clamp(0.98rem, 2vw, 1.08rem);
    color: var(--text);
  }

  .faq__icon {
    flex-shrink: 0;
    display: inline-flex;
    color: var(--text-secondary);
    transition: transform 0.25s var(--ease), color 0.25s var(--ease);
  }

  .faq__icon.is-open {
    transform: rotate(180deg);
    color: var(--primary);
  }

  .faq__a {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s var(--ease);
  }

  .faq__a.is-open {
    grid-template-rows: 1fr;
  }

  .faq__a-inner {
    overflow: hidden;
  }

  .faq__a-inner p {
    padding: 0 var(--space-5) var(--space-5);
    margin: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .faq__icon { transition: none; }
    .faq__a { transition: none; }
  }
</style>
