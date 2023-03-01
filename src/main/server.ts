import '@/main/config/dotenv';
import env from '@/main/config/environments/application';

Promise.all([]).then(async () => {
  const app = (await import('./config/app')).default;
  await Promise.all([app.listen(env.port)]);
});
