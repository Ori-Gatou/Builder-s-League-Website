<script>
  import "../app.css";
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import { injectAnalytics } from '@vercel/analytics/sveltekit'

  injectAnalytics()
</script>

<slot />