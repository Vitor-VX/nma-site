<script lang="ts">
  import { Mail, ArrowLeft } from '@lucide/svelte';
</script>

<svelte:head>
  <title>Contato — Não Mexe Aí</title>
  <meta
    name="description"
    content="Entre em contato com a equipe do Não Mexe Aí."
  />
</svelte:head>

<section class="section">
  <div class="container container--narrow">
    <article class="prose" style="text-align:center;">
      <span class="contact__icon" aria-hidden="true"><Mail size={32} /></span>
      <h1>Contato</h1>
      <p>
        Para dúvidas, solicitações relacionadas à privacidade ou suporte durante o teste, entre em
        contato pelo e-mail:
      </p>
      <p><strong>E-mail:</strong> joaovictorrocha102019@gmail.com</p>
      <p style="color: var(--text-muted); font-size: 0.9rem;">
        Esta página será atualizada em breve com mais canais de atendimento.
      </p>
      <a href="/" class="legal-back" style="justify-content:center;"><ArrowLeft size={16} /> Voltar para o site</a>
    </article>
  </div>
</section>

<style>
  .contact__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--primary-soft);
    color: var(--primary);
    border: 1px solid rgba(239, 35, 60, 0.22);
    margin-bottom: var(--space-4);
  }
</style>
