<script>
  export let tip;
  export let i;

  const num = i + 1;
  const avg = Math.round((tip.votes.total / tip.votes.voteNum) * 10) / 10;
  let isBottomHidden = true;

  function toggleVisibility() {
    isBottomHidden = !isBottomHidden;
  }

  let cats;
  if (typeof tip.category === "string") {
    cats = tip.category.split(",");
  } else {
    cats = tip.category;
  }

  const ip = 0;
  let isVoted = tip.ips.includes(ip);

  function countVote(vote) {
    isVoted = true;
  }
</script>

<article id="tip-{tip._id}" class:open={!isBottomHidden}>
  <div class="top" on:click={toggleVisibility}>
    <span class="num">{num}</span>
    <h3>
      {tip.name}
    </h3>
    <div class="votes">
      {#if tip.votes.voteNum === 0}
        <span class="no-voted">Sin votos</span>
      {:else}
        <p class="total" id="total-{tip._id}">
          <span class="util">Utilidad:</span><span class="voted">{avg}</span
          ><span class="max">/5</span>
        </p>
      {/if}
    </div>
  </div>
  <div class="bottom" aria-hidden={isBottomHidden}>
    <div class="desc">
      {@html tip.desc}
      {#if cats}
        <p class="cats">
          {#each cats as cat}
            <span class="cat">#{cat}</span>
          {/each}
        </p>
      {/if}
    </div>
    <div class="vote-form" class:voted={isVoted}>
      {#if isVoted}
        <p class="gracias">Muchas gracias por tu voto</p>
      {:else}
        <p class="vota">Vota aquí</p>
        <button on:click={() => countVote(true)}>👍</button>
        <button on:click={() => countVote()}>👎</button>
      {/if}
    </div>
  </div>
</article>

<style lang="scss">
  article {
    background: var(--white-color);
    border: 1px solid #eee;
    border-radius: 15px;
    box-shadow: 0 2px 0 #ddd;
    margin-bottom: 15px;
    padding: 0;
    transform: scale(0.99);
    transition: transform 0.5s;
    overflow: hidden;
    @media only screen and (max-width: 720px) {
      padding: 20px 10px;
      margin-bottom: 20px;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &.open,
    &:hover {
      transition: transform 0.15s;
      transform: scale(1);
    }
    &.open {
      margin: 25px 0;
    }
  }
  .top {
    display: grid;
    grid-template-columns: 1fr 8fr 2fr;
    align-items: center;
    padding: 12px 0;
    cursor: pointer;
    .num {
      color: #777;
      font-size: 35px;
      margin: 0;
      line-height: 1;
      font-family: var(--specialFont);
      justify-self: center;
      @media only screen and (max-width: 720px) {
        display: none;
      }
    }
    h3 {
      margin: 0;
      line-height: 1;
      font-size: 26px;
      @media only screen and (max-width: 720px) {
        justify-self: center;
        text-align: center;
      }
    }
    .votes {
      text-align: center;
      @media only screen and (max-width: 720px) {
        display: none;
        font-style: italic;
      }
      .no-voted {
        color: var(--accent-color);
        font-size: 17px;
      }
      .total {
        margin: 0;
        font-size: 24px;
        color: var(--accent-color);
        @supports (font-variation-settings: normal) {
          font-family: var(--normalFontVariable);
          font-variation-settings: "wght" 600;
        }
        @media only screen and (max-width: 720px) {
          font-size: 22px;
        }
        .util {
          display: none;
          /* TODO show only when clicked */
        }
        /* .util, */
        .no-voted,
        .max {
          font-size: 17px;
          font-weight: 400;
          @supports (font-variation-settings: normal) {
            font-family: var(--normalFontVariable);
            font-variation-settings: "wght" 300;
          }
        }
      }
    }
  }
  .bottom {
    display: grid;
    grid-template-columns: 1fr 8fr 2fr;
    opacity: 1;
    &[aria-hidden="true"] {
      display: none;
      opacity: 0;
    }
    .desc {
      grid-column-start: 2;
      margin-top: 15px;
      @media only screen and (max-width: 720px) {
        grid-column-start: 1;
      }

      .cats {
        margin: 30px 0;
        /* @media only screen and (max-width: 720px) {
          margin: 20px 0 10px;
        } */
        .cat {
          display: inline-block;
          color: var(--dark-grey-color);
          margin-right: 15px;
          &:last-child {
            margin-right: 0;
          }
          /* @media only screen and (max-width: 720px) {
            font-size: 18px;
            margin-bottom: 10px;
          } */
        }
      }
    }
    /* .admin {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        margin: 15px 0;
        .stats {
          grid-column: span 2;
          border: 1px solid;
          padding: 12px;
        }
      } */
    .vote-form {
      grid-column-start: 3;
      background: var(--accent-color);
      color: #fff;
      border-radius: 10px;
      padding: 15px 5px;
      text-align: center;
      margin: 0 8px;
      align-self: center;
      @media only screen and (max-width: 720px) {
        grid-column-start: 1;
        justify-self: center;
        padding: 15px 40px;
      }
      &.voted {
        padding: 12px;
      }
      .vota,
      .gracias {
        font-size: 18px;
        margin: 0 0 14px;
        line-height: 1.4;
      }
      button {
        background: none;
        border: none;
        border-radius: 50%;
        padding: 8px;
        font-size: 20px;
        cursor: pointer;
        transition: background 0.25s;
        &:hover {
          background: var(--white-color);
        }
      }
      .gracias {
        margin-bottom: 0;
      }
      /* .gracias {
        padding: 20px 0;
      } */
      /* &.voted {
          background: var(--accent-color-light);
        } */
      /* form {
          display: table;
          margin: 0 auto;
          input {
            width: auto;
            padding: 12px;
            border-radius: 50%;
            margin: 0;
            display: inline-block;
            background: transparent;
            font-size: 19px;
            &:hover {
              background: #fff;
            }
          }
        } */
    }
  }
  /* &.hovering,
    &.show {
      .votes .total {
        .util,
        .no-voted {
          display: inline;
        }
      }
    }
    &.show {
      transform: scale(1);
      .more-text {
        display: block;
      }
      .vote-forms {
        display: block;
        @media only screen and (max-width: 720px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }
      @media only screen and (max-width: 720px) {
        .votes {
          display: block;
          grid-column-start: 1;
        }
      }
    } */
</style>
