import { $, component$, useOnWindow} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CardList } from "~/components/pages/card-list";
import { Exchange } from "~/components/pages/exchange";
import { Mail } from "~/components/pages/mail";
import { Setting } from "~/components/pages/setting";
import { Shop } from "~/components/pages/shop";
import { initMonetagScript } from "~/libs/monetag";
import { useTabStore } from "~/stores/main.tab.store";

import { initDataAuthDate } from '@telegram-apps/sdk';

export default component$(() => {

  const tabStore = useTabStore();

  useOnWindow(
    'load', $(async () => {
      initMonetagScript();
      alert(initDataAuthDate());
      
    })
  );

  return (
    <>
      {tabStore.activeTab === 'card' && <CardList />}
      {tabStore.activeTab === 'shop' && <Shop />}
      {tabStore.activeTab === 'setting' && <Setting />}
      {tabStore.activeTab === 'exchange' && <Exchange />}
      {tabStore.activeTab === 'mail' && <Mail />}
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
