import { createNamespacePrepender } from "@i18n/utils/createNamespacePrepender";

const prependNamespace = createNamespacePrepender('layout.expandable');

const translations = prependNamespace({
    expandPrompt: 'show more...',
    collapsePrompt: 'show less',
});

export type ExpandableTranslationKey = keyof typeof translations;
export default translations;