export type Lang = 'en' | 'es'

export function transformSlug(slug: string): string {
  return slug.replace(/-(?:en|es)$/, '')
}

export function getLocaleFromLang(lang: Lang): string {
  return lang === 'es' ? 'es-ES' : 'en-US'
}
