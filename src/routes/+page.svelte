<script lang="ts">
  import { onMount } from 'svelte';
  import Hero from '$lib/components/Hero.svelte';
  import VideoDemo from '$lib/components/VideoDemo.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import Features from '$lib/components/Features.svelte';
  import IntensitySection from '$lib/components/IntensitySection.svelte';
  import SafetySection from '$lib/components/SafetySection.svelte';
  import Requirements from '$lib/components/Requirements.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import BetaForm from '$lib/components/BetaForm.svelte';
  import FinalCTA from '$lib/components/FinalCTA.svelte';
  import { trackEvent } from '$lib/analytics';
  import { scrollToBeta } from '$lib/utils/scroll';

  let showSticky = $state(false);

  onMount(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? true;
        showSticky = !visible;
      },
      { threshold: 0.05 }
    );
    io.observe(hero);
    return () => io.disconnect();
  });

  function stickyCta() {
    trackEvent('hero_cta_click');
    scrollToBeta();
  }
</script>

<svelte:head>
  <title>Não Mexe Aí — O celular enlouquece. Você continua no controle.</title>
</svelte:head>

<Hero />
<!-- <VideoDemo /> -->
<HowItWorks />
<Features />
<!-- <IntensitySection /> -->
<!-- <SafetySection /> -->
<BetaForm />
<Requirements />
<FAQ />
<FinalCTA />

<button
  class="sticky-cta"
  class:is-visible={showSticky}
  onclick={stickyCta}
  aria-label="Participar do beta"
>
  Participar do Beta
</button>

<style>
  .sticky-cta {
    position: fixed;
    left: var(--space-4);
    right: var(--space-4);
    bottom: var(--space-4);
    z-index: 90;
    padding: 15px;
    border-radius: var(--radius);
    background: var(--primary);
    color: white;
    font-weight: 800;
    box-shadow: var(--shadow-primary);
    opacity: 0;
    transform: translateY(120%);
    transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
    pointer-events: none;
  }

  .sticky-cta.is-visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .sticky-cta:active {
    transform: scale(0.98);
  }

  @media (min-width: 880px) {
    .sticky-cta {
      display: none;
    }
  }
</style>
