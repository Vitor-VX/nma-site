<script lang="ts">
  import type { Component } from 'svelte';

  type IconComponent = Component<{ size?: number }>;

  type Props = {
    icon: IconComponent;
    title: string;
    desc: string;
    featured?: boolean;
    badge?: string;
  };

  let { icon, title, desc, featured = false, badge = '' }: Props = $props();
  const Icon = icon;
</script>

<article class="feature card" class:is-featured={featured}>
  {#if badge}
    <span class="feature__badge">{badge}</span>
  {/if}
  <span class="feature__icon" aria-hidden="true"><Icon size={24} /></span>
  <h3>{title}</h3>
  <p>{desc}</p>
</article>

<style>
  .feature {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .feature.is-featured {
    background:
      radial-gradient(120% 80% at 50% 0%, rgba(239, 35, 60, 0.14), transparent 60%),
      var(--surface);
    border-color: rgba(239, 35, 60, 0.4);
  }

  .feature.is-featured:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-primary);
  }

  .feature__badge {
    position: absolute;
    top: -10px;
    left: var(--space-6);
    display: inline-flex;
    align-items: center;
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: white;
    background: var(--primary);
    padding: 4px 10px;
    border-radius: 999px;
    box-shadow: var(--shadow-primary);
  }

  .feature__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--primary-soft);
    color: var(--primary);
    border: 1px solid rgba(239, 35, 60, 0.22);
  }

  .feature h3 {
    margin-top: var(--space-2);
  }
</style>
