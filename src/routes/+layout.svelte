<script lang="ts">
  import '../app.scss';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <title>cyber5</title>
</svelte:head>

<div class="container">
  <slot />
</div>

<Footer />
