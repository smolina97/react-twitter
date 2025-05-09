import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended' // Agrega Prettier aquí
  ),
  {
    rules: {
      'prettier/prettier': 'error', // Muestra errores si el formato no coincide con Prettier
    },
  },
];

export default eslintConfig;
