<script>
  import "../app.css";
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import { injectAnalytics } from '@vercel/analytics/sveltekit'
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectAnalytics();
  injectSpeedInsights();

</script>

<slot />