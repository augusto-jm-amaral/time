import { OpaqueToken } from '@angular/core';

// Translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_PT_NAME, LANG_PT_TRANS } from './lang-pt';

// Translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// All translations
const dictonary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_PT_NAME]: LANG_PT_TRANS
}

// Providers
export const TRANSLATION_PROVIDERS = [
  {provide: TRANSLATIONS, useValue: dictonary}
]