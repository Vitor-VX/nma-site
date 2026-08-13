<script lang="ts">
  import { Eye } from '@lucide/svelte';
  import { trackEvent } from '$lib/analytics';
  import { scrollToBeta } from '$lib/utils/scroll';
  import { reveal } from '$lib/actions/reveal';

  function cta() {
    trackEvent('final_cta_click');
    scrollToBeta();
  }
</script>

<section class="section final">
  <div class="container">
    <div class="final__box reveal" use:reveal>
      <div class="final__glow" aria-hidden="true"></div>
      <span class="final__eye" aria-hidden="true"><Eye size={28} /></span>
      <h2>Seu Android consegue sobreviver ao Não Mexe Aí? <span aria-hidden="true">👀</span></h2>
      <p>Entre para o grupo de testadores antes do lançamento.</p>
      <button class="btn btn--primary btn--lg" onclick={cta}>PARTICIPAR DO TESTE GRATUITO</button>
      <span class="final__android">Disponível exclusivamente para Android.</span>
    </div>
  </div>
</section>

<style>
  .final__box {
    position: relative;
    text-align: center;
    padding: clamp(40px, 7vw, 80px) var(--space-6);
    background:
      radial-gradient(80% 60% at 50% 0%, rgba(239, 35, 60, 0.14), transparent 60%),
      var(--surface);
    border: 1px solid rgba(239, 35, 60, 0.25);
    border-radius: var(--radius-xl);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
  }

  .final__glow {
    position: absolute;
    width: 380px;
    height: 380px;
    background: radial-gradient(circle, var(--primary-glow), transparent 70%);
    filter: blur(50px);
    opacity: 0.5;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .final__eye {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary-soft);
    color: var(--primary);
    border: 1px solid rgba(239, 35, 60, 0.28);
  }

  .final__box h2 {
    position: relative;
    max-width: 640px;
  }

  .final__box p {
    position: relative;
    max-width: 480px;
  }

  .final__box .btn {
    position: relative;
    margin-top: var(--space-2);
  }

  .final__android {
    position: relative;
    font-size: 0.84rem;
    color: var(--text-muted);
  }
</style>
