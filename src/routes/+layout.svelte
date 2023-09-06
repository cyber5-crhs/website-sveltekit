<script lang="ts">
  import '../app.scss';
  import Footer from '$lib/Footer.svelte';

  const meeting = {
    active: false,

    number: 0,
    date: 'sept 04',
    time: '14:50 CST',
    room: 1625,
  };
</script>

<svelte:head>
  <title>cyber5 — The Cybersecurity Club of CRHS</title>
</svelte:head>

{#if meeting.active}
  <div class="banner">
    <p>
      meeting{meeting.number} - {meeting.date} T{meeting.time} @ room {meeting.room}
    </p>
  </div>
{/if}

<div class="container">
  <slot />
</div>

<Footer />

{#if !meeting.active}
  <style>
    .container {
      padding-top: 2.5rem;
    }
  </style>
{/if}

<style lang="scss">
  .banner {
    width: 100%;

    background-color: var(--color-accent);

    color: var(--color-bg);

    p {
      padding: 0.5rem;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    // Constrain width of the page
    width: min(var(--width-max), 95%);
  }
</style>
