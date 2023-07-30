import { archwayVersion } from '@/config';

export default defineNitroPlugin(nitroApp => {
  // console.log('defininggg', nitroApp);
  // nitroApp.hooks.hook('content:file:beforeParse', file => {
  //   console.log('1111111', file._id);
  //   if (file._id.endsWith('.md')) {
  //     console.log('2222222');
  //     file.body = file.body.replace(/$$archwayVersion$$/g, archwayVersion);
  //   }
  // });
  // console.log('3333333', nitroApp.hooks);
});
