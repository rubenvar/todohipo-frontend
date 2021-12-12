<script>
  import heroImage from "./stores/heroImage";

  const currentYear = new Date().getFullYear();
  const { author } = $heroImage;
</script>

<footer>
  <div class="wrapper">
    <div class="disclaimer">
      <p>
        todohipo.com no es una página médica y <strong
          >no se hace responsable de nada de lo que te pase</strong
        >.
      </p>
      <p>
        No soy un doctor en medicina y los consejos en este sitio web son eso:
        consejos. Han sido aleatoriamente recogidos por Internet, oidos de
        diferentes personas, son conocidos métodos caseros, etc. Usa el <strong
          >sentido común</strong
        > si dispones de él. Si tienes problemas de salud, no deberías probar estos
        métodos. Si tu hipo persiste, ve al médico.
      </p>
      <p>
        Por supuesto, los remedios y pasos que sigas o dejes de seguir, y
        cualquier actividad o efecto derivado de ello, son <strong
          >100% responsabilidad tuya</strong
        >.
      </p>
      <p>
        Si tu hipo dura demasiado e interfiere con tu sueño, alimentación o
        actividades diarias, deberías <strong>ir al médico</strong>.
      </p>
    </div>
    <hr />
    <p>
      Copyright ©{currentYear} -
      <a href="/politica-de-privacidad">Política de Privacidad</a>
    </p>
    <p>
      Foto de portada por <a
        href="{author.link}?utm_source=todohipo.com&utm_medium=referral"
        target="_blank"
        rel="noreferrer">{author.user}</a
      >
      en
      <a
        href="https://unsplash.com?utm_source=todohipo.com&utm_medium=referral"
        target="_blank"
        rel="noreferrer">Unsplash</a
      >
    </p>
    <p>
      Creado con 🍌 por <a
        href="https://platanoplatano.com"
        target="_blank"
        rel="noreferrer">plátanoPlátano</a
      >
    </p>
  </div>
</footer>

<style lang="scss">
  footer {
    text-align: center;
    padding: 20px 0;
    color: #ccc;
    font-size: 18px;
    background: #eee;
    margin-top: 90px;
    .wrapper {
      max-width: var(--maxWidth);
      margin: 0 auto;
    }
  }
  p {
    margin: 0 0 10px;
    font-size: 18px;
    &:last-child {
      margin: 0;
    }
  }
  a {
    color: #bbb;
    text-decoration: none;
    &:hover {
      color: #ccc;
    }
  }
  hr {
    border: 1px solid #ddd;
    width: 75%;
  }
</style>
