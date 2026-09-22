window.NikyServicos = (() => {
  const S = "assets/images/";
  const M = `${S}momentos/`;
  const C = `${S}cards/`;
  const card = (file) => [`${C}${file}`];
  const IMG = {
    navy: `${M}unhas-navy.png`,
    white: `${M}unhas-branco.jpg`,
    red: `${M}unhas-vermelho.jpg`,
    red2: `${M}unhas-vermelho-2.jpg`,
    pink: `${M}unhas-rosa.jpg`,
    french: `${M}unhas-francesa.jpg`,
    pes: `${M}pes-pedicure.jpg`,
    hairLook: `${M}cabelo-look.jpg`,
    hairBefore: `${M}cabelo-antes-depois.jpg`,
    cavi: `${M}corpo-cavitacao.jpg`,
    face: `${M}rosto-tratamento.jpg`,
    radio: `${M}corpo-radiofrequencia.jpg`
  };

  const categories = [
    {
      id: "cabeleireiro",
      name: "Cabeleireiro",
      lead: "Corte, coloração, brushing, penteados e tratamentos capilares.",
      photos: card("corte.jpg")
    },
    {
      id: "massagens",
      name: "Massagens",
      lead: "Relaxamento, modeladora, pedras quentes e drenagem linfática.",
      photos: card("relaxamento.jpg")
    },
    {
      id: "manicure",
      name: "Manicure e Pedicure",
      lead: "Verniz, gel, nail art, hidratação e cuidados de podologia.",
      photos: card("verniz.jpg")
    },
    {
      id: "estetica",
      name: "Tratamentos Estéticos",
      lead: "Limpeza de pele, corpo, manchas, rugas e depilação.",
      photos: card("limpeza.jpg")
    },
    {
      id: "olhar",
      name: "Sobrancelhas e Pestanas",
      lead: "Design de sobrancelhas e extensão de pestanas.",
      photos: card("sobrancelhas.jpg")
    }
  ];

  const services = [
    { cat: "cabeleireiro", name: "Brushing", desc: "Modelação e finalização do cabelo, para um resultado alinhado e com movimento.", photos: card("brushing.jpg") },
    { cat: "cabeleireiro", name: "Corte mulher e homem", desc: "Corte adaptado ao tipo de cabelo e ao estilo pretendido, com acabamento cuidado.", photos: card("corte.jpg") },
    { cat: "cabeleireiro", name: "Tratamentos capilares", desc: "Protocolos para hidratar, reparar ou fortalecer o fio, consoante o estado do cabelo.", photos: card("trat-capilar.jpg") },
    { cat: "cabeleireiro", name: "Penteados", desc: "Penteados para o dia a dia ou para ocasiões especiais, com fixação e volume controlados.", photos: card("penteados.jpg") },
    { cat: "cabeleireiro", name: "Coloração com ou sem amoníaco", desc: "Coloração permanente ou mais suave, escolhida de acordo com o cabelo e o resultado desejado.", photos: card("coloracao.jpg") },
    { cat: "cabeleireiro", name: "Alisamento, relaxamento e botox", desc: "Técnicas para alisar, reduzir volume ou devolver macieza e brilho ao fio.", photos: card("alisamento.jpg") },
    { cat: "cabeleireiro", name: "Madeixas", desc: "Iluminação seletiva para abrir o tom com um efeito natural e dimensionado.", photos: card("madeixas.jpg") },
    { cat: "cabeleireiro", name: "Contraste", desc: "Jogo de tons mais claros e mais escuros para dar profundidade ao corte.", photos: card("contraste.jpg") },
    { cat: "cabeleireiro", name: "Sunlight", desc: "Técnica de iluminação que evoca o efeito do sol no cabelo, com transições suaves.", photos: card("sunlight.jpg") },
    { cat: "cabeleireiro", name: "Face contouring", desc: "Corte e cor pensados para enquadrar o rosto e valorizar as linhas naturais.", photos: card("face-contour.jpg") },

    { cat: "massagens", name: "Massagem modeladora", desc: "Trabalho mais firme para estimular a circulação e ajudar a definir o contorno corporal.", photos: card("modeladora.jpg") },
    { cat: "massagens", name: "Massagem com pantalas", desc: "Massagem com equipamento de pantalas, indicada para modelar e tonificar.", photos: card("pantalas.jpg") },
    { cat: "massagens", name: "Massagem de relaxamento", desc: "Pressão suave para aliviar tensão muscular e promover descanso.", photos: card("relaxamento.jpg") },
    { cat: "massagens", name: "Pedras quentes", desc: "Pedras aquecidas combinadas com massagem, para libertar a musculatura com calor.", photos: card("pedras.jpg") },
    { cat: "massagens", name: "Velas quentes", desc: "Massagem com cera morna de vela, que hidrata a pele enquanto relaxa o corpo.", photos: card("velas.jpg") },
    { cat: "massagens", name: "Drenagem linfática", desc: "Movimentos ritmados para favorecer a circulação linfática e reduzir retenção de líquidos.", photos: card("drenagem.jpg") },

    { cat: "manicure", name: "Verniz normal", desc: "Manicure clássica com verniz tradicional e acabamento cuidado.", photos: card("verniz.jpg") },
    { cat: "manicure", name: "Verniz gel", desc: "Cobertura em gel, com maior durabilidade e brilho estável.", photos: card("verniz-gel.jpg") },
    { cat: "manicure", name: "Gel sobre a unha", desc: "Camada de gel aplicada sobre a unha natural, para reforço e um resultado uniforme.", photos: card("gel-unha.jpg") },
    { cat: "manicure", name: "Gel com extensão", desc: "Extensão em gel para alongar e dar forma, com acabamento resistente.", photos: card("gel-ext.jpg") },
    { cat: "manicure", name: "Nail art", desc: "Decoração personalizada, do detalhe simples ao desenho mais elaborado.", photos: card("nailart.jpg") },
    { cat: "manicure", name: "Plástica dos pés", desc: "Tratamento para suavizar calosidades e devolver conforto e um aspeto cuidado aos pés.", photos: card("plastica-pes.jpg") },
    { cat: "manicure", name: "Hidratação com parafina", desc: "Máscara de parafina para hidratar em profundidade mãos ou pés.", photos: card("parafina.jpg") },
    { cat: "manicure", name: "Esfoliação de mãos e pés", desc: "Remove células mortas e prepara a pele para hidratação, deixando-a mais macia.", photos: card("esfoliacao.jpg") },
    { cat: "manicure", name: "Podologia", desc: "Cuidados específicos do pé, com avaliação e tratamento adequado a cada caso.", photos: card("podologia.jpg") },

    { cat: "estetica", name: "Mesoterapia homeopática", desc: "Aplicação tópica de ativos para estimular a pele ou o contorno, com um protocolo suave.", photos: card("mesoterapia.jpg") },
    { cat: "estetica", name: "Limpeza de pele", desc: "Higienização, extração e máscara adaptada ao tipo de pele, para um rosto mais limpo e uniforme.", photos: card("limpeza.jpg") },
    { cat: "estetica", name: "Radiofrequência corpo e rosto", desc: "Calor controlado para estimular o tecido e ajudar na firmeza do rosto ou do corpo.", photos: card("radiofreq.jpg") },
    { cat: "estetica", name: "Cavitação", desc: "Tratamento corporal por ultrassons, indicado para zonas com acumulação de gordura localizada.", photos: card("cavitacao.jpg") },
    { cat: "estetica", name: "Lipo laser não invasivo", desc: "Protocolo de laser de baixa intensidade para apoiar a redução de gordura localizada, sem cirurgia.", photos: card("lipolaser.jpg") },
    { cat: "estetica", name: "Tratamento de manchas", desc: "Protocolo para uniformizar o tom e atenuar manchas, com ativos e aparelhos adequados à pele.", photos: card("manchas.jpg") },
    { cat: "estetica", name: "Tratamento de rugas", desc: "Cuidados para suavizar linhas de expressão e devolver mais firmeza ao rosto.", photos: card("rugas.jpg") },
    { cat: "estetica", name: "Manta de sudação", desc: "Sessão com manta térmica para promover transpiração e complementar tratamentos corporais.", photos: card("manta.jpg") },
    { cat: "estetica", name: "Envolvimentos de argila ou gesso", desc: "Envolvimento corporal com argila ou gesso, para modelar e tonificar com um efeito tensor.", photos: card("envolvimentos.jpg") },
    { cat: "estetica", name: "Fios de colagénio", desc: "Tratamento que estimula o colagénio para maior suporte e um aspeto mais firme.", photos: card("colagenio.jpg") },
    { cat: "estetica", name: "Depilação a cera ou laser", desc: "Remoção de pêlo com cera ou laser, consoante a zona e a indicação para cada pele.", photos: card("depilacao.jpg") },

    { cat: "olhar", name: "Design de sobrancelhas", desc: "Definição da linha das sobrancelhas, com simetria e um resultado natural.", photos: card("sobrancelhas.jpg") },
    { cat: "olhar", name: "Extensão de pestanas", desc: "Aplicação fio a fio para alongar e dar volume às pestanas, com um efeito cuidado.", photos: card("pestanas.jpg") }
  ].map((s) => ({ ...s, duration: "Sob consulta", price: "Sob consulta" }));

  const moments = [
    { src: IMG.hairLook, cap: "Cabelo · brushing e finalização" },
    { src: IMG.hairBefore, cap: "Cabelo · transformação" },
    { src: IMG.white, cap: "Manicure · gel branco" },
    { src: IMG.navy, cap: "Manicure · verniz azul-noite" },
    { src: IMG.red, cap: "Manicure · gel vermelho" },
    { src: IMG.pink, cap: "Nail art · rosa com detalhe" },
    { src: IMG.french, cap: "Francesinha · mãos e pés" },
    { src: IMG.pes, cap: "Pedicure" },
    { src: IMG.cavi, cap: "Tratamento corporal" },
    { src: IMG.face, cap: "Tratamento facial" }
  ];

  return {
    categories,
    services,
    featured: categories.filter((c) => ["cabeleireiro", "massagens", "manicure"].includes(c.id)),
    moments
  };
})();
