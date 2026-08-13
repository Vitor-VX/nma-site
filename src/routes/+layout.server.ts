import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
  return {
    canonical: url.origin + url.pathname
  };
};
