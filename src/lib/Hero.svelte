<script>
  import heroImage from "./stores/heroImage";

  export let length = 57;

  const num = Math.floor((length - 1) / 5) * 5;
  const { image } = $heroImage;
</script>

<div class="hero">
  <div class="bg">
    <img src={image} alt="" />
  </div>
  <div class="content">
    <h1>Deja ya de buscar cómo se quita el hipo!</h1>
    <p class="intro">
      ¿Acaba de darte un ataque y quieres curarlo AHORA MISMO?
    </p>
    <h2>👇 Mira aquí más de {num} remedios para el hipo 👇</h2>
    <p>Elige uno, lee las instrucciones, y pruébalo</p>
    <p>Si no te funciona... Intenta con otro!</p>
  </div>
</div>

<style lang="scss">
  .hero {
    text-align: center;
    position: relative;
    padding: 80px 0 30px;
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      background: linear-gradient(#fff6, #fffe);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
    }
  }
  .content {
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  h1,
  h2 {
    font-weight: 700;
    @supports (font-variation-settings: normal) {
      font-family: var(--normalFontVariable);
      font-variation-settings: "wght" 600;
    }
  }
  h1 {
    font-size: 52px;
    margin: 0 0 25px;
    text-transform: uppercase;
    @media only screen and (max-width: 720px) {
      font-size: 36px;
    }
  }
  h2 {
    font-size: 34px;
    margin: 34px 0;
    @media only screen and (max-width: 720px) {
      font-size: 28px;
      margin: 18px 0;
    }
  }
  p {
    font-size: 28px;
    &.intro {
      font-style: italic;
    }
  }
</style>
