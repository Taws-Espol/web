import { createApp } from '@shared/infrastructure/http/app.ts';

const app = createApp();

app.listen(8000, () => {
  console.log('API running on http://localhost:8000');
  console.log('API docs running on http://localhost:8000/docs');
});
