import { $, component$, useOnWindow} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BearCard } from "~/components/cards";
import { initAdController } from "~/libs/adsgram";

export default component$(() => {
  useOnWindow(
    'load', $(() => {
      initAdController();
    })
  );

  return (
    <>
      <BearCard />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
