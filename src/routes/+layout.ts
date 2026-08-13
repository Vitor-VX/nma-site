import type { LayoutLoad, LayoutServerData } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ data }: { data: LayoutServerData }) => {
  return {
    canonical: data.canonical,
    siteName: 'Não Mexe Aí',
    siteUrl: 'https://naomexeahi.app'
  };
};
