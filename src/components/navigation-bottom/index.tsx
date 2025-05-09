import { component$ } from '@builder.io/qwik';
import { ShopButton } from './button.shop';
import { CatalogButton } from './button.catalog';
import { SettingButton } from './button.setting';
import { FactoryButton } from './button.factory';

export const FloatingButtons = component$(() => {

    return (
        <>
            <div class="h-26 w-full fixed bottom-0 left-0 border-t-2 border-t-amber-500 inline-flex items-center justify-center bg-amber-100">
                <FactoryButton />
                <CatalogButton />
                <ShopButton />
                <SettingButton />
            </div>
        </>
    );
});