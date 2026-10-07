/** Путь к файлу из public с учётом base (GitHub Pages работает в подпапке). */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`
