import { component$ } from '@builder.io/qwik';
import { ShopButton } from './button.shop';
import { CatalogButton } from './button.catalog';
import { SettingButton } from './button.setting';
import { ExchangeButton } from './button.exchange';
import { MailButton } from './button.mail';


export const FloatingButtons = component$(() => {

    return (
        <>
            <div class="h-18 w-full fixed bottom-0 left-0 inline-flex items-center justify-center gap-2 bg-white border-t-2 rounded-t-xl border-amber-700">
                <CatalogButton/>
                <ShopButton />
                <MailButton />
                <SettingButton />
                <ExchangeButton/>
            </div>
        </>
    );
});