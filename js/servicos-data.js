window.NikyServicos = (() => {
  const IMG = {
    cabelo: "assets/images/estacao.png",
    espera: "assets/images/espera.png",
    lounge: "assets/images/lounge.png",
    tratamento: "assets/images/tratamento.png",
    unhas: "assets/images/unhas.png",
    limpeza: "assets/images/servicos/limpeza-profunda.jpg",
    revital: "assets/images/servicos/revitalizacao-facial.jpg",
    micro1: "assets/images/servicos/microagulhamento-01.jpg",
    micro2: "assets/images/servicos/microagulhamento-02.jpg",
    derma: "assets/images/servicos/dermaplaning-premium.jpg",
    brows: [
      "assets/images/servicos/browlamination-01.jpg",
      "assets/images/servicos/browlamination-02.jpg",
      "assets/images/servicos/spa-das-sobrancelhas.jpg"
    ],
    lashes: "assets/images/servicos/lash-lifting.jpg"
  };

  const categories = [
    {
      id: "cabeleireiro",
      name: "Cabeleireiro",
      lead: "Corte, coloração, brushing, penteados e tratamentos capilares.",
      photos: [IMG.cabelo, IMG.espera]
    },
    {
      id: "massagens",
      name: "Massagens",
      lead: "Relaxamento, modeladora, pedras quentes e drenagem linfática.",
      photos: [IMG.lounge]
    },
    {
      id: "manicure",
      name: "Manicure e Pedicure",
      lead: "Verniz, gel, nail art, hidratação e cuidados de podologia.",
      photos: [IMG.unhas]
    },
    {
      id: "estetica",
      name: "Tratamentos Estéticos",
      lead: "Limpeza de pele, corpo, manchas, rugas e depilação.",
      photos: [IMG.limpeza, IMG.tratamento]
    },
    {
      id: "olhar",
      name: "Sobrancelhas e Pestanas",
      lead: "Design de sobrancelhas e extensão de pestanas.",
      photos: IMG.brows
    }
  ];

  const services = [
    { cat: "cabeleireiro", name: "Brushing", desc: "Modelação e finalização do cabelo, para um resultado alinhado e com movimento.", photos: [IMG.cabelo] },
    { cat: "cabeleireiro", name: "Corte mulher e homem", desc: "Corte adaptado ao tipo de cabelo e ao estilo pretendido, com acabamento cuidado.", photos: [IMG.espera] },
    { cat: "cabeleireiro", name: "Tratamentos capilares", desc: "Protocolos para hidratar, reparar ou fortalecer o fio, consoante o estado do cabelo.", photos: [IMG.cabelo] },
    { cat: "cabeleireiro", name: "Penteados", desc: "Penteados para o dia a dia ou para ocasiões especiais, com fixação e volume controlados.", photos: [IMG.espera] },
    { cat: "cabeleireiro", name: "Coloração com ou sem amoníaco", desc: "Coloração permanente ou mais suave, escolhida de acordo com o cabelo e o resultado desejado.", photos: [IMG.cabelo] },
    { cat: "cabeleireiro", name: "Alisamento, relaxamento e botox", desc: "Técnicas para alisar, reduzir volume ou devolver macieza e brilho ao fio.", photos: [IMG.lounge] },
    { cat: "cabeleireiro", name: "Madeixas", desc: "Iluminação seletiva para abrir o tom com um efeito natural e dimensionado.", photos: [IMG.espera] },
    { cat: "cabeleireiro", name: "Contraste", desc: "Jogo de tons mais claros e mais escuros para dar profundidade ao corte.", photos: [IMG.cabelo] },
    { cat: "cabeleireiro", name: "Sunlight", desc: "Técnica de iluminação que evoca o efeito do sol no cabelo, com transições suaves.", photos: [IMG.lounge] },
    { cat: "cabeleireiro", name: "Face contouring", desc: "Corte e cor pensados para enquadrar o rosto e valorizar as linhas naturais.", photos: [IMG.derma] },

    { cat: "massagens", name: "Massagem modeladora", desc: "Trabalho mais firme para estimular a circulação e ajudar a definir o contorno corporal.", photos: [IMG.lounge] },
    { cat: "massagens", name: "Massagem com pantalas", desc: "Massagem com equipamento de pantalas, indicada para modelar e tonificar.", photos: [IMG.lounge] },
    { cat: "massagens", name: "Massagem de relaxamento", desc: "Pressão suave para aliviar tensão muscular e promover descanso.", photos: [IMG.lounge] },
    { cat: "massagens", name: "Pedras quentes", desc: "Pedras aquecidas combinadas com massagem, para libertar a musculatura com calor.", photos: [IMG.lounge] },
    { cat: "massagens", name: "Velas quentes", desc: "Massagem com cera morna de vela, que hidrata a pele enquanto relaxa o corpo.", photos: [IMG.lounge] },
    { cat: "massagens", name: "Drenagem linfática", desc: "Movimentos ritmados para favorecer a circulação linfática e reduzir retenção de líquidos.", photos: [IMG.tratamento] },

    { cat: "manicure", name: "Verniz normal", desc: "Manicure clássica com verniz tradicional e acabamento cuidado.", photos: [IMG.unhas] },
    { cat: "manicure", name: "Verniz gel", desc: "Cobertura em gel, com maior durabilidade e brilho estável.", photos: [IMG.unhas] },
    { cat: "manicure", name: "Gel sobre a unha", desc: "Camada de gel aplicada sobre a unha natural, para reforço e um resultado uniforme.", photos: [IMG.unhas] },
    { cat: "manicure", name: "Gel com extensão", desc: "Extensão em gel para alongar e dar forma, com acabamento resistente.", photos: [IMG.unhas] },
    { cat: "manicure", name: "Nail art", desc: "Decoração personalizada, do detalhe simples ao desenho mais elaborado.", photos: [IMG.unhas] },
    { cat: "manicure", name: "Plástica dos pés", desc: "Tratamento para suavizar calosidades e devolver conforto e um aspeto cuidado aos pés.", photos: [IMG.unhas] },
    { cat: "manicure", name: "Hidratação com parafina", desc: "Máscara de parafina para hidratar em profundidade mãos ou pés.", photos: [IMG.unhas] },
    { cat: "manicure", name: "Esfoliação de mãos e pés", desc: "Remove células mortas e prepara a pele para hidratação, deixando-a mais macia.", photos: [IMG.unhas] },
    { cat: "manicure", name: "Podologia", desc: "Cuidados específicos do pé, com avaliação e tratamento adequado a cada caso.", photos: [IMG.unhas] },

    { cat: "estetica", name: "Mesoterapia homeopática", desc: "Aplicação tópica de ativos para estimular a pele ou o contorno, com um protocolo suave.", photos: [IMG.tratamento] },
    { cat: "estetica", name: "Limpeza de pele", desc: "Higienização, extração e máscara adaptada ao tipo de pele, para um rosto mais limpo e uniforme.", photos: [IMG.limpeza] },
    { cat: "estetica", name: "Radiofrequência corpo e rosto", desc: "Calor controlado para estimular o tecido e ajudar na firmeza do rosto ou do corpo.", photos: [IMG.tratamento] },
    { cat: "estetica", name: "Cavitação", desc: "Tratamento corporal por ultrassons, indicado para zonas com acumulação de gordura localizada.", photos: [IMG.tratamento] },
    { cat: "estetica", name: "Lipo laser não invasivo", desc: "Protocolo de laser de baixa intensidade para apoiar a redução de gordura localizada, sem cirurgia.", photos: [IMG.tratamento] },
    { cat: "estetica", name: "Tratamento de manchas", desc: "Protocolo para uniformizar o tom e atenuar manchas, com ativos e aparelhos adequados à pele.", photos: [IMG.revital] },
    { cat: "estetica", name: "Tratamento de rugas", desc: "Cuidados para suavizar linhas de expressão e devolver mais firmeza ao rosto.", photos: [IMG.micro1] },
    { cat: "estetica", name: "Manta de sudação", desc: "Sessão com manta térmica para promover transpiração e complementar tratamentos corporais.", photos: [IMG.lounge] },
    { cat: "estetica", name: "Envolvimentos de argila ou gesso", desc: "Envolvimento corporal com argila ou gesso, para modelar e tonificar com um efeito tensor.", photos: [IMG.tratamento] },
    { cat: "estetica", name: "Fios de colagénio", desc: "Tratamento que estimula o colagénio para maior suporte e um aspeto mais firme.", photos: [IMG.micro2] },
    { cat: "estetica", name: "Depilação a cera ou laser", desc: "Remoção de pêlo com cera ou laser, consoante a zona e a indicação para cada pele.", photos: [IMG.tratamento] },

    { cat: "olhar", name: "Design de sobrancelhas", desc: "Definição da linha das sobrancelhas, com simetria e um resultado natural.", photos: IMG.brows },
    { cat: "olhar", name: "Extensão de pestanas", desc: "Aplicação fio a fio para alongar e dar volume às pestanas, com um efeito cuidado.", photos: [IMG.lashes] }
  ].map((s) => ({ ...s, duration: "Sob consulta", price: "Sob consulta" }));

  return {
    categories,
    services,
    featured: categories.slice(0, 3)
  };
})();
