<script>
  import Hint from '$lib/Hint.svelte';
</script>

<header>
  <h1>application</h1>
  <p>Let us know little about yourself!</p>
</header>

<main>
  <form method="post" class="form">
    <div>
      <label for="name">
        Your name <Hint>(required)</Hint>
        <input id="name" name="name" placeholder="Kevin Mitnick" required />
      </label>
    </div>

    <div>
      <label for="matrix">
        Matrix User ID <Hint>(optional)</Hint>
        <input id="matrix" name="matrix" placeholder="@me:example.org" />
      </label>
      <p>
        A Matrix account is required to join. You can leave this field blank if
        you plan on making your account later.{' '}
        <a href="/matrix" target="_blank" rel="noopener noreferrer"
          >How do I create an account?</a
        >
      </p>
    </div>

    <div>
      <label for="email">
        Email <Hint>(required)</Hint>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="me@example.org"
          required
        />
      </label>
      <p>
        Don't worry, we won't spam you. We only require email so we can send
        club announcements to you in case you aren't active on the Matrix.
      </p>
    </div>

    <hr />

    <fieldset class="grade-selector">
      <legend>
        Grade level <Hint>(required)</Hint>
      </legend>

      <!-- These are display: hidden; -->
      <div>
        <input id="g0" name="grade" value="9" type="radio" required />
        <label for="g0">9</label>

        <input id="g1" name="grade" value="10" type="radio" />
        <label for="g1">10</label>

        <input id="g2" name="grade" value="11" type="radio" />
        <label for="g2">11</label>

        <input id="g3" name="grade" value="12" type="radio" />
        <label for="g3">12</label>

        <input id="g4" name="grade" value="0" type="radio" />
        <label for="g4">*</label>
      </div>

      <p class="small">* Prefer not to answer</p>
    </fieldset>

    <hr />

    <fieldset class="interests-selector">
      <legend>What interests you? <Hint>(optional)</Hint></legend>

      <!-- These are display: hidden; -->
      <div>
        <input id="i0" name="i_ctf" type="checkbox" />
        <label for="i0">CTFs</label>
        <p>
          An event where you compete with other teams win as many flags by
          solving challenges.
        </p>

        <input id="i1" name="i_lab" type="checkbox" />
        <label for="i1">Cybersecurity Labs</label>
        <p>
          Learn about cybersecurity vulnerabilities in a hands-on experience.
        </p>

        <input id="i2" name="i_pentest" type="checkbox" />
        <label for="i2">Penetration Testing</label>
        <p>
          Use your cybersecurity skills to find a vulnerability and break into a
          machine or application (for legal reasons, on a machine we own).
        </p>

        <input id="i3" name="i_comp" type="checkbox" />
        <label for="i3">Cybersecurity Competitions</label>
        <p>Participate in local or national cybersecurity competitions.</p>
      </div>
    </fieldset>

    <button class="submit" type="submit">Submit</button>
  </form>
</main>

<style lang="scss">
  header,
  main {
    width: min(var(--width-max-sm), 100%);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  hr {
    width: 100%;
  }

  fieldset {
    padding: 0;
    border: none;
  }

  input {
    display: block;
    width: 100%;
    max-width: max(360px, 50%);
    padding: 0.5rem;

    border: 1px solid white;
    border-radius: 0.5rem;

    background-color: #211921;

    color: var(--color-header);
  }

  label + p,
  .small {
    margin-top: 0.25rem;
    font-size: var(--text-xs);
  }

  .grade-selector {
    legend {
      margin-bottom: 0.5rem;
    }

    p {
      margin-top: 0.5rem;
    }

    div {
      display: flex;
      gap: 0.5rem;

      input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }

      label {
        height: 1.5rem;
        width: 1.5rem;
        padding: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid white;
        border-radius: 10px;

        transition: background-color 0.25s, color 0.25s;
        cursor: pointer;
        user-select: none;
      }
    }
  }

  .interests-selector {
    legend {
      margin-bottom: 0.5rem;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }

      label {
        padding: 0.5rem;

        border: 1px solid white;
        border-radius: 10px;

        transition: background-color 0.25s, color 0.25s;
        cursor: pointer;
        user-select: none;
      }

      p {
        margin-bottom: 0.5rem;
      }
    }
  }

  .submit {
    padding: 0.5rem;
    border: solid white;
    border-radius: 10px;
    background-color: var(--color-accent);
    border: none;
    color: black;
    font-size: var(--text-sm);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
      background-color: darken(#ff002a, 10%);
    }
  }

  /*
   * CSS dark magic
   */
  #g0:checked + label,
  #g1:checked + label,
  #g2:checked + label,
  #g3:checked + label,
  #g4:checked + label,
  #i0:checked + label,
  #i1:checked + label,
  #i2:checked + label,
  #i3:checked + label,
  #i4:checked + label,
  #g0:focus + label,
  #g1:focus + label,
  #g2:focus + label,
  #g3:focus + label,
  #g4:focus + label {
    background-color: #fff;
    color: #000;
  }

  #i0:focus:not(:checked) + label,
  #i1:focus:not(:checked) + label,
  #i2:focus:not(:checked) + label,
  #i3:focus:not(:checked) + label,
  #i4:focus:not(:checked) + label {
    color: white;
    background-color: #211921;
    border-width: 3px;
  }
</style>
