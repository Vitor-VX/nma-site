<script lang="ts">
  import "../app.css";
  import type { Snippet } from "svelte";
  import type { LayoutData } from "./$types";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="canonical" href={data.canonical} />
  <meta
    name="description"
    content="Participe do beta fechado do Não Mexe Aí, um aplicativo Android de entretenimento com interações e pegadinhas controladas pelo proprietário do aparelho."
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Não Mexe Aí" />
  <meta
    property="og:title"
    content="Não Mexe Aí — O celular enlouquece. Você continua no controle."
  />
  <meta
    property="og:description"
    content="Participe do beta fechado do Não Mexe Aí, um aplicativo Android de entretenimento com interações e pegadinhas controladas pelo proprietário do aparelho."
  />
  <meta property="og:url" content={data.canonical} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Não Mexe Aí — O celular enlouquece. Você continua no controle."
  />
  <meta
    name="twitter:description"
    content="Participe do beta fechado do Não Mexe Aí, um aplicativo Android de entretenimento com interações e pegadinhas controladas pelo proprietário do aparelho."
  />
</svelte:head>

<a href="#main" class="skip-link">Pular para o conteúdo</a>
<Navbar />
<main id="main">
  {@render children()}
</main>
<Footer />
