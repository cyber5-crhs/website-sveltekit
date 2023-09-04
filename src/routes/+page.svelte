<script>
  import Red from '$lib/Red.svelte';
  // import MatrixIcon from '../icons/Matrix.svelte';
  // import ArrowForward from '../icons/ArrowForward.svelte';

  const team = [
    ['Alex', 'Co-President'],
    ['Joey', 'Co-President'],
    ['Grace', 'Marketing Officer'],
  ];
  const members = [
    'Amanda',
    'Bernardo',
    'Billy',
    'Taniel',
    'Max',
    'Lakshay',
    'Kevin',
    'Rohan',
    'Jacob',
    'Jeydin',
    'Andrew',
    'John',
  ].sort();
</script>

<header>
  <h1>cyber<Red>5</Red></h1>
  <a
    href="https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt"
    aria-label="Matrix space"
  >
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      ><title>Matrix</title><path
        d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"
      /></svg
    >
  </a>
</header>

<main>
  <div>
    <h2>who are we?</h2>
    <p>
      We are a group of cybersecurity enthusiasts at <Red
        >Cinco Ranch High School</Red
      > with the common goal of learning more about the cyberspace every day.
    </p>

    <br />

    <a href="/join" class="join"
      >Join now
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="none"
          stroke="none"
        /><path
          fill="currentColor"
          d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"
        /></svg
      >
    </a>

    <h2>what do we do?</h2>
    <p>
      We occasionally host <Red>Jeopardy CTFs</Red> and explore
      <Red>hands-on labs</Red> over real cybersecurity incidents. When we aren't
      doing that, we're discussing about almost anything in our Matrix space.
    </p>

    <h2>what do we not do?</h2>
    <p>
      We won't teach you how hack into <Red>the government</Red>, how to
      <Red>break into</Red> Facebook accounts, or change your grades. We especially
      don't wear <Red>Anonymous masks</Red> (maybe).
    </p>
  </div>
  <div class="members-wrapper">
    <div class="members">
      <div>
        <h2>the team</h2>
        <ul class="member-list">
          {#each team as member}
            <li>{member[0]} <Red>({member[1]})</Red></li>
          {/each}
        </ul>
      </div>
      <div>
        <h2>members</h2>
        <ul class="member-list">
          {#each members as member}
            <li>{member}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  @media (min-width: 800px) {
    main {
      flex-direction: row !important;

      & > div {
        flex: 1;
      }
    }

    .desktopVisible {
      display: block !important;
    }
  }

  @media (max-width: 799px) {
    .members-wrapper {
      justify-content: start !important;
    }

    .members {
      width: min(100%, 90rem) !important;
      width: min(100%, 45ch) !important;
    }
  }

  @media (max-width: 550px) {
    .join {
      min-width: 100% !important;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      vertical-align: middle;

      fill: var(--color-header);
      width: 1.875rem;
      height: 1.875rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2:first-child {
      margin-top: 0;
    }
  }

  .join {
    display: flex;
    justify-content: center;
    width: min(250px, 50%);

    padding: 0.5rem 0;

    border-radius: 0.375rem;

    background-color: var(--color-accent);

    color: var(--color-bg);
    text-decoration: none;

    svg {
      height: 1rem;
      margin: auto 0;
    }
  }

  .members-wrapper {
    display: flex;
    justify-content: end;
  }

  .members {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    border: 1px solid white;
    border-radius: 8px;

    background-color: var(--color-bg-alt);

    height: fit-content;

    h2 {
      margin: 0;
    }
  }

  ul.member-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }
</style>
