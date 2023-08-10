<script>
  import { page } from '$app/stores';
</script>

<h1>
  {$page.status}
  <p>{$page.error?.message}</p>
</h1>
