/**
 * Prefixa caminhos de /public com o basePath do site.
 * No GitHub Pages o site fica em /<repositorio>/, então "/images/a.png"
 * precisa virar "/<repositorio>/images/a.png". Em dev o prefixo é vazio.
 */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
