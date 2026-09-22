(() => {
  const WA = "351968794656";
  const PHONE = "+351211944983";

  const services = [
    {
      name: "Limpeza de Pele Profunda",
      desc: "Higienização, extração, alta frequência, LED, máscara adequada ao tipo de pele e massagem final.",
      duration: "1h30–2h",
      price: "60,00 €",
      photos: ["assets/images/servicos/limpeza-profunda.jpg"]
    },
    {
      name: "Browlamination",
      desc: "Alinha os fios rebeldes e acrescenta volume em sobrancelhas mais finas.",
      duration: "1h15",
      price: "35,00 €",
      photos: [
        "assets/images/servicos/browlamination-01.jpg",
        "assets/images/servicos/browlamination-02.jpg",
        "assets/images/servicos/browlamination-03.jpg"
      ]
    },
    {
      name: "Dermaplaning Premium",
      desc: "Remove a camada de células mortas e a penugem com lâmina fina. Inclui limpeza, LED e máscara.",
      duration: "A definir",
      price: "50,00 €",
      photos: ["assets/images/servicos/dermaplaning-premium.jpg"]
    },
    {
      name: "Lash Lifting",
      desc: "Curvatura natural dos cílios, sem manutenção diária. O efeito dura cerca de cinco semanas.",
      duration: "1h30",
      price: "35,00 €",
      photos: ["assets/images/servicos/lash-lifting.jpg"]
    },
    {
      name: "Microagulhamento Facial",
      desc: "Estimula a produção de colagénio. Indicado para cicatrizes de acne, linhas, poros e manchas. Tratamento indolor.",
      duration: "A definir",
      price: "55,00 €",
      photos: [
        "assets/images/servicos/microagulhamento-01.jpg",
        "assets/images/servicos/microagulhamento-02.jpg"
      ]
    },
    {
      name: "Micropigmentação de Sobrancelhas",
      desc: "Pigmento orgânico para preencher falhas ou definir o desenho. Não é tatuagem. Duração aproximada de dois anos.",
      duration: "A definir",
      price: "150,00 €",
      photos: [
        "assets/images/servicos/micropigmentacao-sobrancelhas-01.jpg",
        "assets/images/servicos/micropigmentacao-sobrancelhas-02.jpg"
      ]
    },
    {
      name: "Micropigmentação Labial",
      desc: "Cor e contorno labial duradouros, para um resultado definido no dia a dia.",
      duration: "A definir",
      price: "120,00 €",
      photos: ["assets/images/servicos/micropigmentacao-labial.jpg"]
    },
    {
      name: "Revitalização Facial",
      desc: "Higienização, esfoliação, máscara e massagem. Devolve hidratação e luminosidade à pele.",
      duration: "1h30",
      price: "45,00 €",
      photos: ["assets/images/servicos/revitalizacao-facial.jpg"]
    },
    {
      name: "Spa das Sobrancelhas",
      desc: "Reconstrução, design e tratamento das sobrancelhas, com um resultado visível.",
      duration: "1h",
      price: "25,00 €",
      photos: ["assets/images/servicos/spa-das-sobrancelhas.jpg"]
    }
  ];

  const reviews = [
    {
      name: "Inês M.",
      text: "Faço a limpeza de pele neste espaço e saio sempre com o rosto descansado. O ambiente é calmo e o tratamento é personalizado.",
      service: "Limpeza de Pele"
    },
    {
      name: "Raquel S.",
      text: "O lash lifting ficou natural, exactamente o resultado que procurava. Já marquei a manutenção.",
      service: "Lash Lifting"
    },
    {
      name: "Marta P.",
      text: "As sobrancelhas ficaram definidas, sem um aspecto desenhado. Espaço cuidado, junto ao Rato.",
      service: "Browlamination"
    }
  ];

  const gallery = [
    { src: "assets/images/lounge.png", cap: "Lounge superior" },
    { src: "assets/images/fachada.jpg", cap: "Fachada · Rua de São Filipe Néri 25B" },
    { src: "assets/images/espera.png", cap: "Sala de espera · logótipo Niky Pop" },
    { src: "assets/images/estacao.png", cap: "Estação de cabelo e lavagem" },
    { src: "assets/images/tratamento.png", cap: "Sala de tratamentos" },
    { src: "assets/images/unhas.png", cap: "Estação de unhas" }
  ];

  const hours = [
    { day: 1, name: "Segunda", open: "09:00", close: "19:00" },
    { day: 2, name: "Terça", open: "09:00", close: "19:00" },
    { day: 3, name: "Quarta", open: "09:00", close: "19:00" },
    { day: 4, name: "Quinta", open: "09:00", close: "19:00" },
    { day: 5, name: "Sexta", open: "09:00", close: "19:00" },
    { day: 6, name: "Sábado", open: "09:00", close: "17:00" },
    { day: 0, name: "Domingo", open: null, close: null }
  ];

  const $ = (sel, root = document) => root.querySelector(sel);

  function serviceMedia(s) {
    const photos = s.photos || [];
    if (photos.length <= 1) {
      return `<img src="${photos[0] || ""}" alt="${s.name}" loading="lazy" decoding="async">`;
    }
    return `
      <div class="fair" data-fair>
        ${photos
          .map(
            (src, i) =>
              `<img src="${src}" alt="${s.name}" class="${i === 0 ? "is-on" : ""}" loading="${i === 0 ? "eager" : "lazy"}" decoding="async">`
          )
          .join("")}
        <div class="fair__dots" aria-hidden="true">${photos
          .map((_, i) => `<button type="button" class="${i === 0 ? "is-on" : ""}" aria-label="Fotografia ${i + 1}"></button>`)
          .join("")}</div>
      </div>
    `;
  }

  function renderServices() {
    const grid = $("#serviceGrid");
    const select = $("#servicoSelect");
    if (!grid) return;
    grid.innerHTML = services
      .map(
        (s) => `
      <article class="service-card">
        <div class="service-card__media">
          ${serviceMedia(s)}
        </div>
        <div class="service-card__body">
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
          <div class="service-card__meta">
            <span>${s.duration}</span>
            <strong class="price">${s.price}</strong>
          </div>
        </div>
      </article>`
      )
      .join("");
    grid.querySelectorAll("img").forEach(markReady);
    startFairs(grid);
    if (select) {
      select.innerHTML =
        `<option value="" disabled selected>Escolher o tratamento</option>` +
        services.map((s) => `<option>${s.name}</option>`).join("");
    }
  }

  function startFairs(root = document) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.querySelectorAll("[data-fair]").forEach((el) => {
      const slides = [...el.querySelectorAll("img")];
      const dots = [...el.querySelectorAll(".fair__dots button")];
      if (slides.length < 2) return;
      let index = 0;
      let timer;
      const show = (next) => {
        index = (next + slides.length) % slides.length;
        slides.forEach((img, i) => img.classList.toggle("is-on", i === index));
        dots.forEach((dot, i) => dot.classList.toggle("is-on", i === index));
      };
      const play = () => {
        clearInterval(timer);
        if (reduce) return;
        timer = setInterval(() => show(index + 1), 3200);
      };
      dots.forEach((dot, i) => {
        dot.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          show(i);
          play();
        });
      });
      el.addEventListener("mouseenter", () => clearInterval(timer));
      el.addEventListener("mouseleave", play);
      play();
    });
  }

  function renderReviews() {
    const track = $("#reviewTrack");
    if (!track) return;
    track.innerHTML = reviews
      .map(
        (r) => `
      <article class="review-card reveal">
        <div class="stars" aria-label="5 em 5">★★★★★</div>
        <p>${r.text}</p>
        <footer>
          <strong>${r.name}</strong>
          <span>${r.service} · exemplo</span>
        </footer>
      </article>`
      )
      .join("");
  }

  function lisbonNow() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Lisbon" }));
  }

  function toMinutes(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  }

  function renderHours() {
    const bloom = $("#bloomHours");
    const status = $("#openStatus");
    if (!bloom) return;
    const now = lisbonNow();
    const today = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();

    bloom.innerHTML = `
      <div class="bloom__heart">
        <svg viewBox="0 0 120 160" fill="none" aria-hidden="true">
          <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M60 158 C58 118 62 86 60 58" stroke-width="1.6"/>
            <path d="M60 58 C42 62 28 50 24 32 C40 36 52 46 60 58Z" stroke-width="1.5"/>
            <path d="M60 58 C78 62 92 50 96 32 C80 36 68 46 60 58Z" stroke-width="1.5"/>
            <path d="M60 58 C50 40 52 18 60 6 C68 18 70 40 60 58Z" stroke-width="1.5"/>
          </g>
        </svg>
        <div>
          <strong>Horário semanal</strong>
          <span>O dia atual está assinalado a verde</span>
        </div>
      </div>
    `;

    hours.forEach((h) => {
      const petal = document.createElement("div");
      petal.className = "petal";
      if (h.day === today) petal.classList.add("is-today");
      if (!h.open) petal.classList.add("is-closed");
      petal.innerHTML = `<b>${h.name}</b><span>${h.open ? `${h.open.replace(':00','h')}–${h.close.replace(':00','h')}` : "Encerrado"}</span>`;
      bloom.appendChild(petal);
    });

    const todayHours = hours.find((h) => h.day === today);
    let open = false;
    let label = "Encerrado agora";
    if (todayHours?.open) {
      const start = toMinutes(todayHours.open);
      const end = toMinutes(todayHours.close);
      open = mins >= start && mins < end;
      label = open
        ? `Aberto agora · até ${todayHours.close}`
        : mins < start
          ? `Abre hoje às ${todayHours.open}`
          : "Encerrado por hoje";
    } else {
      label = "Encerrado · abre segunda às 09:00";
    }
    if (status) {
      status.textContent = label;
      status.className = `status-pill reveal ${open ? "is-open" : "is-closed"}`;
    }
  }

  function enhanceVideo() {
    const video = $("#heroVideo");
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (reduce || saveData) {
      video.removeAttribute("autoplay");
      video.pause();
      video.remove();
      return;
    }
    const play = () => video.play().catch(() => {});
    play();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) video.pause();
      else play();
    });
  }

  function nav() {
    const header = $(".header");
    const toggle = $("#navToggle");
    const navEl = $("#nav");
    const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    toggle?.addEventListener("click", () => {
      const open = !header.classList.contains("is-open");
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    navEl?.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        header.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      })
    );
  }

  function lightbox() {
    const dialog = $("#lightbox");
    const img = $("#lightboxImg");
    const cap = $("#lightboxCap");
    const dots = $("#lightboxDots");
    const openBtn = $("#galleryOpen");
    let index = 0;

    const show = (i) => {
      index = (i + gallery.length) % gallery.length;
      img.src = gallery[index].src;
      img.alt = gallery[index].cap;
      cap.textContent = `${gallery[index].cap} · ${index + 1}/${gallery.length}`;
      dots.querySelectorAll("button").forEach((b, n) => b.classList.toggle("is-active", n === index));
    };

    dots.innerHTML = gallery
      .map((_, i) => `<button type="button" aria-label="Fotografia ${i + 1}"></button>`)
      .join("");
    dots.querySelectorAll("button").forEach((b, i) => b.addEventListener("click", () => show(i)));

    openBtn?.addEventListener("click", () => {
      show(0);
      dialog.showModal();
    });
    $("#lightboxClose")?.addEventListener("click", () => dialog.close());
    $("#lightboxPrev")?.addEventListener("click", () => show(index - 1));
    $("#lightboxNext")?.addEventListener("click", () => show(index + 1));
    dialog?.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    window.addEventListener("keydown", (e) => {
      if (!dialog.open) return;
      if (e.key === "ArrowRight") show(index + 1);
      if (e.key === "ArrowLeft") show(index - 1);
    });

    let startX = 0;
    dialog?.addEventListener("touchstart", (e) => (startX = e.changedTouches[0].clientX), { passive: true });
    dialog?.addEventListener(
      "touchend",
      (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
      },
      { passive: true }
    );
  }

  function booking() {
    const form = $("#bookForm");
    const date = form?.querySelector('input[name="data"]');
    if (date) date.min = new Date().toISOString().slice(0, 10);
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const text = [
        "Olá, Niky Pop. Gostaria de marcar:",
        `Nome: ${data.get("nome")}`,
        `Serviço: ${data.get("servico")}`,
        `Data preferida: ${data.get("data")}`,
        data.get("mensagem") ? `Nota: ${data.get("mensagem")}` : ""
      ]
        .filter(Boolean)
        .join("\n");
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    });
  }

  function markReady(img) {
    const ready = () => img.classList.add("is-ready");
    if (img.complete && img.naturalWidth) ready();
    else img.addEventListener("load", ready, { once: true });
    img.addEventListener("error", ready, { once: true });
  }

  function startReveals() {
    const items = [...document.querySelectorAll(".reveal")];
    const show = (el) => el.classList.add("is-in");
    if (!("IntersectionObserver" in window)) {
      items.forEach(show);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "40px 0px 0px 0px" }
    );
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      else observer.observe(el);
    });
  }

  renderServices();
  renderReviews();
  renderHours();
  enhanceVideo();
  nav();
  lightbox();
  booking();
  startReveals();
})();
