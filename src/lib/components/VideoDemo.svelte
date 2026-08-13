<script lang="ts">
  import { Play, Smartphone } from '@lucide/svelte';
  import { trackEvent } from '$lib/analytics';
  import { reveal } from '$lib/actions/reveal';

  type Props = { videoUrl?: string };

  let { videoUrl = '' }: Props = $props();

  let playing = $state(false);

  function play() {
    trackEvent('video_play');
    if (videoUrl) {
      playing = true;
    }
  }
</script>

<section id="video" class="section video">
  <div class="container">
    <div class="section-head section-head--center reveal" use:reveal>
      <span class="eyebrow">Demonstração</span>
      <h2>Parece que o celular enlouqueceu.</h2>
      <p>Mas você continua no controle.</p>
    </div>

    <div class="video__frame reveal" use:reveal>
      {#if videoUrl && playing}
        <video
          class="video__el"
          src={videoUrl}
          controls
          playsinline
          preload="metadata"
          autoplay
        >
          <track kind="captions" />
        </video>
      {:else}
        <button class="video__placeholder" onclick={play} aria-label="Reproduzir vídeo demonstrativo">
          <span class="video__play" aria-hidden="true"><Play size={30} fill="currentColor" /></span>
          <span class="video__label">Veja o Não Mexe Aí funcionando</span>
          <span class="video__hint">
            <Smartphone size={14} /> Gravado direto em um Android
          </span>
        </button>
      {/if}
    </div>
  </div>
</section>

<style>
  .video__frame {
    position: relative;
    max-width: 880px;
    margin-inline: auto;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-xl);
    overflow: hidden;
    border: 1px solid var(--border-strong);
    background:
      radial-gradient(80% 60% at 50% 0%, rgba(239, 35, 60, 0.08), transparent 70%),
      linear-gradient(180deg, #161616, #0c0c0c);
    box-shadow: var(--shadow-lg);
  }

  .video__el {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    background: #000;
  }

  .video__placeholder {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
    color: var(--text);
    transition: background 0.3s var(--ease);
  }

  .video__placeholder:hover {
    background: rgba(239, 35, 60, 0.06);
  }

  .video__play {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    box-shadow: var(--shadow-primary);
    transition: transform 0.25s var(--ease);
  }

  .video__placeholder:hover .video__play {
    transform: scale(1.08);
  }

  .video__label {
    font-size: clamp(1.05rem, 2.4vw, 1.4rem);
    font-weight: 800;
    letter-spacing: -0.01em;
  }

  .video__hint {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    color: var(--text-muted);
  }
</style>
