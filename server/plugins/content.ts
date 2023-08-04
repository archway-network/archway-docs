import { replaceValues } from '@/content.config';

export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('content:file:beforeParse', file => {
    if (file._id.endsWith('.md')) {
      const specialSymbols = /[/\-\\^$*+?.()|[\]{}]/g;

      for (const [key, value] of Object.entries(replaceValues)) {
        file.body = file.body.replace(new RegExp(key.replace(specialSymbols, '\\$&'), 'g'), value);
      }
    }
  });
});
