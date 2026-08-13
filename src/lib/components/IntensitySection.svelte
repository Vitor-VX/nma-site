<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const levels = [
    { name: 'Baixa', desc: 'Interações ocasionais.', bars: 1, featured: false },
    { name: 'Média', desc: 'Interferências mais frequentes.', bars: 2, featured: false },
    { name: 'Alta', desc: 'Experiência completa.', bars: 3, featured: true }
  ];
</script>

<section class="section intensity">
  <div class="container">
    <div class="section-head section-head--center reveal" use:reveal>
      <span class="eyebrow">Intensidade</span>
      <h2>Você decide o nível do caos.</h2>
    </div>

    <div class="intensity__grid">
      {#each levels as level}
        <article
          class="level card reveal"
          class:is-featured={level.featured}
          use:reveal
        >
          <span class="level__bars" aria-hidden="true">
            {#each Array(3) as _, i}
              <span class="level__bar" class:is-active={i < level.bars}></span>
            {/each}
          </span>
          <h3>{level.name}</h3>
          <p>{level.desc}</p>
          {#if level.featured}
            <span class="level__tag">Recomendado</span>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .intensity__grid {
    display: grid;
    gap: var(--space-4);
    grid-template-columns: 1fr;
    max-width: 920px;
    margin-inline: auto;
  }

  .level {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    align-items: flex-start;
  }

  .level.is-featured {
    background:
      radial-gradient(120% 80% at 50% 0%, rgba(239, 35, 60, 0.14), transparent 60%),
      var(--surface);
    border-color: rgba(239, 35, 60, 0.4);
  }

  .level.is-featured:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-primary);
  }

  .level__bars {
    display: inline-flex;
    align-items: flex-end;
    gap: 5px;
    height: 28px;
    margin-bottom: var(--space-2);
  }

  .level__bar {
    width: 8px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.12);
    transition: background 0.2s var(--ease), box-shadow 0.2s var(--ease);
  }

  .level__bar:nth-child(1) { height: 12px; }
  .level__bar:nth-child(2) { height: 20px; }
  .level__bar:nth-child(3) { height: 28px; }

  .level__bar.is-active {
    background: var(--primary);
    box-shadow: 0 0 8px var(--primary-glow);
  }

  .level__tag {
    margin-top: var(--space-2);
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--primary);
  }

  @media (min-width: 720px) {
    .intensity__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
