<script lang="ts">
  import { Smartphone, Eye } from "@lucide/svelte";
  import { trackEvent } from "$lib/analytics";
  import { scrollToBeta } from "$lib/utils/scroll";
  import { reveal } from "$lib/actions/reveal";

  function primaryCta() {
    trackEvent("hero_cta_click");
    scrollToBeta();
  }

  function playVideo() {
    trackEvent("video_play");
  }
</script>

<section class="hero">
  <div class="container hero__wrap">
    <span class="eyebrow reveal" use:reveal>Android • Beta fechado</span>

    <h1 class="reveal" use:reveal>
      Não quer que mexam no seu celular? <span aria-hidden="true">👀</span>
    </h1>

    <h2 class="hero__sub reveal" use:reveal>
      Assista ao vídeo abaixo e descubra como o Não Mexe Aí transforma qualquer
      Android numa experiência completamente imprevisível.
    </h2>

    <div class="hero__video reveal" use:reveal>
      <div class="hero__video reveal" use:reveal>
        <div class="hero__video-frame">
          <video
            src="/videos/vsl.mp4"
            poster="/videos/vsl-poster.jpg"
            controls
            playsinline
            preload="metadata"
            onplay={playVideo}
          >
            <track kind="captions" />
          </video>
        </div>
      </div>
    </div>

    <div class="hero__badge reveal" use:reveal>
      <span class="hero__badge-dot" aria-hidden="true"></span>
      Estamos selecionando 100 usuários Android para testar o aplicativo antes do
      lançamento.
    </div>

    <div class="hero__cta reveal" use:reveal>
      <button class="btn btn--primary btn--lg" onclick={primaryCta}>
        QUERO PARTICIPAR DO TESTE
      </button>
    </div>

    <ul class="hero__meta reveal" use:reveal>
      <li><Smartphone size={15} /> 100% gratuito</li>
      <li>Exclusivo para Android</li>
      <li>Vagas limitadas no beta</li>
    </ul>
  </div>

  <div
    class="hero__android"
    aria-label="Disponível exclusivamente para Android"
  >
    <span class="hero__android-chip">
      <Eye size={14} /> Disponível exclusivamente para Android
    </span>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding-top: clamp(40px, 7vw, 80px);
    padding-bottom: clamp(48px, 8vw, 96px);
    overflow: hidden;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        60% 50% at 80% 10%,
        rgba(239, 35, 60, 0.1),
        transparent 70%
      ),
      radial-gradient(
        40% 40% at 0% 30%,
        rgba(239, 35, 60, 0.06),
        transparent 70%
      );
    pointer-events: none;
    z-index: 0;
  }

  .hero__wrap {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    margin-top: var(--space-4);
  }

  .hero__sub {
    font-size: clamp(1.05rem, 2.2vw, 1.3rem);
    font-weight: 600;
    color: var(--text);
    margin-top: var(--space-4);
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero__video {
    margin-top: var(--space-6);
  }

  .hero__video-frame {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 */
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    border: 1px solid var(--border);
  }

    .hero__video-frame video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #000;
  }

  .hero__badge {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    margin: var(--space-6) auto 0;
    padding: 14px 16px;
    background: var(--primary-soft);
    border: 1px solid rgba(239, 35, 60, 0.25);
    border-radius: var(--radius);
    font-size: 0.92rem;
    color: var(--text);
    font-weight: 500;
    max-width: 540px;
  }

  .hero__badge-dot {
    flex-shrink: 0;
    margin-top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary);
    box-shadow: 0 0 10px var(--primary-glow);
    animation: pulse 1.8s ease-in-out infinite;
  }

  .hero__cta {
    display: flex;
    justify-content: center;
    margin-top: var(--space-5);
  }

  .hero__meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-4);
    margin-top: var(--space-5);
    font-size: 0.86rem;
    color: var(--text-muted);
  }

  .hero__meta li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .hero__android {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    margin-top: var(--space-7);
  }

  .hero__android-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 8px 14px;
    border-radius: 999px;
  }

  @media (prefers-reduced-motion: reduce) {
    .hero__badge-dot {
      animation: none;
    }
  }
</style>
