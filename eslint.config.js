import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    // Вендорные ui-компоненты и контексты намеренно экспортируют
    // и компоненты, и хуки/константы — правило fast-refresh к ним не применяем
    files: ['src/components/ui/**', 'src/i18n.tsx', 'src/sections/LeadDialog.tsx', 'src/sections/LeadForm.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
])
