<script lang="ts">
  import { Hand, MoveVertical, VolumeX, Home, Zap } from '@lucide/svelte';
  import FeatureCard from './FeatureCard.svelte';
  import { reveal } from '$lib/actions/reveal';

  const modes = [
    {
      icon: Hand,
      title: 'Toque Fantasma',
      desc: 'Cria interações inesperadas durante o uso.'
    },
    {
      icon: MoveVertical,
      title: 'Deslizagem e Rolagem',
      desc: 'Produz movimentos automáticos durante a experiência.'
    },
    {
      icon: VolumeX,
      title: 'Silenciador de Áudio',
      desc: 'Interfere temporariamente no comportamento de áudio configurado.'
    },
    {
      icon: Home,
      title: 'Retorno ao Início',
      desc: 'Executa comportamentos configurados relacionados à navegação.'
    },
    {
      icon: Zap,
      title: 'Interferência Total',
      desc: 'Combina diferentes efeitos em uma única experiência.',
      featured: true,
      badge: 'CAOS TOTAL'
    }
  ];
</script>

<section id="recursos" class="section features">
  <div class="container">
    <div class="section-head section-head--center reveal" use:reveal>
      <span class="eyebrow">Modos disponíveis</span>
      <h2>Escolha como o celular vai “enlouquecer”</h2>
    </div>

    <div class="features__grid">
      {#each modes as mode}
        <div class="reveal" use:reveal>
          <FeatureCard {...mode} />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .features {
    background:
      linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.015) 50%, transparent);
  }

  .features__grid {
    display: grid;
    gap: var(--space-4);
    grid-template-columns: 1fr;
  }

  @media (min-width: 620px) {
    .features__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1000px) {
    .features__grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .features__grid > :nth-child(5) {
      grid-column: span 3;
    }
    .features__grid > :nth-child(5) :global(.feature) {
      max-width: 420px;
      margin-inline: auto;
      text-align: center;
    }
    .features__grid > :nth-child(5) :global(.feature__icon) {
      margin-inline: auto;
    }
  }
</style>
