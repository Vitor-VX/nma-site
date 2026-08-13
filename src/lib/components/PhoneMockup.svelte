<script lang="ts">
  import './phone.css';
</script>

<div class="phone" role="img" aria-label="Mockup do app Não Mexe Aí com modo Interferência Total ativo">
  <span class="phone__notch" aria-hidden="true"></span>

  <span class="phone__touch phone__touch--1" aria-hidden="true"></span>
  <span class="phone__touch phone__touch--2" aria-hidden="true"></span>
  <span class="phone__touch phone__touch--3" aria-hidden="true"></span>
  <span class="phone__chip phone__chip--swipe" aria-hidden="true">← swipe</span>
  <span class="phone__chip phone__chip--vibe" aria-hidden="true">vibração</span>

  <div class="phone__screen">
    <div class="phone__app-head">
      <span class="phone__app-title">Não Mexe Aí 👀</span>
      <span class="phone__status">Modo ativo</span>
    </div>

    <p class="phone__hero-label">Modo selecionado</p>
    <p class="phone__hero-mode">INTERFERÊNCIA TOTAL</p>

    <div class="phone__row">
      <span class="phone__row-label">Intensidade</span>
      <span class="phone__row-value phone__dots">
        <span class="phone__dot is-active"></span>
        <span class="phone__dot is-active"></span>
        <span class="phone__dot is-active"></span>
      </span>
    </div>

    <div class="phone__row">
      <span class="phone__row-label">Toques</span>
      <span class="phone__row-value">27</span>
    </div>

    <div class="phone__deactivate">[ DESATIVAR ]</div>
  </div>
</div>
