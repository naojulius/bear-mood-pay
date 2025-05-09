import { $, component$, useOnWindow } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CardList } from "~/components/pages/card-list";
import { Factory } from "~/components/pages/factory";
import { Setting } from "~/components/pages/setting";
import { Shop } from "~/components/pages/shop";
import { initMonetagScript } from "~/libs/monetag";
import { useTabStore } from "~/stores/main.tab.store";

export default component$(() => {

  const tabStore = useTabStore();

  useOnWindow(
    'load', $(async () => {
      initMonetagScript();
    })
  );

  return (
    <>
      <div
        class={[
          'h-full w-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out',
          tabStore.activeTab === 'factory' ? 'block' : 'hidden',
        ]}
      >
        <Factory />
      </div>

      <div
        class={[
          'h-full w-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out',
          tabStore.activeTab === 'card' ? 'block' : 'hidden',
        ]}
      >
        <CardList />
      </div>

      <div
        class={[
          'h-full w-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out',
          tabStore.activeTab === 'shop' ? 'block' : 'hidden',
        ]}
      >
        <Shop />
      </div>

      <div
        class={[
          'h-full w-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out',
          tabStore.activeTab === 'setting' ? 'block' : 'hidden',
        ]}
      >
        <Setting />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Bear Mood Play",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
