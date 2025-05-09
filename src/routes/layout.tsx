import { component$, Slot } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import { FloatingButtons } from "~/components/navigation-bottom";
import { NavigationTop } from "~/components/navigatino-top";
import { useCoinStoreProvider } from "~/stores/coin.store";
import { useDiamondStoreProvider } from "~/stores/diamond.store";
import { useTabStoreProvider } from "~/stores/main.tab.store";
import { useLabsStoreProvider } from "~/stores/labs.store";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

// export const useGetCards = routeLoader$(async () => {
//   const res = await fetch(`${environment.base_api}${environment.api_all_cards}`);
//   const data = await res.json();
//   return data;
// });

export default component$(() => {
  useDiamondStoreProvider();
  useCoinStoreProvider();
  useTabStoreProvider();
  useLabsStoreProvider();

  return (
    <>
      <NavigationTop />
     <div class="p-2">
        <Slot />
     </div>
     <FloatingButtons />
    </>
  );
});
