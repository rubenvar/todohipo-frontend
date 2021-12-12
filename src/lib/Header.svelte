<header>
  <div class="wrapper">
    <h2>
      <a href="/" class="logo">🥼 todohipo.com</a>
    </h2>
  </div>
</header>

<style lang="scss">
  header {
    position: absolute;
    z-index: 3;
    width: 100%;
  }
  .wrapper {
    max-width: 900px;
    display: flex;
    list-style: none;
    margin: 0 auto;
    padding: 5px 0;
    align-items: center;
    justify-items: flex-start;
    @media only screen and (max-width: 720px) {
      justify-items: center;
    }
    h2 {
      font-size: 35px;
      font-family: var(--specialFont);
      padding: 0;
      margin: 0;
      line-height: 1;
      text-transform: none;
      @media only screen and (max-width: 720px) {
        font-size: 28px;
      }
      a {
        color: var(--white-color);
        text-decoration: none;
        transition: color 0.3s;
        &:hover {
          color: var(--grey-color);
        }
      }
    }
  }
</style>
