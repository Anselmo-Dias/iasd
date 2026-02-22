document.addEventListener("DOMContentLoaded", () => {
  const avisos = [
    {
      categoria: "Urgente",
      titulo: "Jejum congregacional nesta terça",
      texto: "A igreja estará em jejum e oração das 6h às 18h. Envie seus pedidos para intercessão na secretaria.",
      data: "Atualizado em 22/02/2026",
      publico: "Toda a igreja",
      imagem: "https://picsum.photos/seed/jejum-igreja/900/460"
    },
    {
      categoria: "Ministério",
      titulo: "Reunião de líderes de célula",
      texto: "Encontro de alinhamento no salão social, quarta-feira às 20h com repasse de metas e novos materiais.",
      data: "Publicado em 20/02/2026",
      publico: "Liderança"
    },
    {
      categoria: "Geral",
      titulo: "Abertas as inscrições para batismo",
      texto: "As inscrições vão até 10 de março. Procure a secretaria após os cultos ou preencha o formulário presencial.",
      data: "Publicado em 18/02/2026",
      publico: "Novos convertidos",
      imagem: "https://picsum.photos/seed/batismo-igreja/900/460"
    },
    {
      categoria: "Ministério",
      titulo: "Escala da recepção atualizada",
      texto: "Confira os novos horários do mês e confirme sua disponibilidade até sexta-feira.",
      data: "Publicado em 16/02/2026",
      publico: "Equipe de recepção"
    },
    {
      categoria: "Geral",
      titulo: "Conferência de famílias - inscrições abertas",
      texto: "Evento especial no próximo mês com plenárias e oficinas práticas para casais, pais e filhos.",
      data: "Publicado em 15/02/2026",
      publico: "Famílias",
      imagem: "https://picsum.photos/seed/familias-conferencia/900/460"
    },
    {
      categoria: "Urgente",
      titulo: "Mudança temporária de acesso ao estacionamento",
      texto: "No domingo, o portão lateral ficará fechado até 10h por manutenção. Use a entrada principal.",
      data: "Atualizado em 21/02/2026",
      publico: "Visitantes e membros"
    }
  ];

  const materiais = [
    {
      titulo: "Boletim semanal",
      categoria: "Boletins",
      detalhes: "PDF | 1.9 MB",
      atualizado: "22/02/2026",
      link: "https://drive.google.com/file/d/1aBoletimDemo/view",
      icone: "ph-newspaper-clipping"
    },
    {
      titulo: "Estudo de discipulado - Módulo 3",
      categoria: "Estudos",
      detalhes: "PDF | 3.1 MB",
      atualizado: "21/02/2026",
      link: "https://drive.google.com/file/d/1bDiscipuladoDemo/view",
      icone: "ph-book-open-text"
    },
    {
      titulo: "Escala do louvor",
      categoria: "Escalas",
      detalhes: "XLSX | 240 KB",
      atualizado: "20/02/2026",
      link: "https://drive.google.com/file/d/1cEscalaLouvorDemo/view",
      icone: "ph-music-notes"
    },
    {
      titulo: "Roteiro da célula da semana",
      categoria: "Células",
      detalhes: "DOCX | 490 KB",
      atualizado: "19/02/2026",
      link: "https://drive.google.com/file/d/1dRoteiroCelulaDemo/view",
      icone: "ph-users-three"
    },
    {
      titulo: "Manual de recepção",
      categoria: "Treinamento",
      detalhes: "PDF | 2.4 MB",
      atualizado: "17/02/2026",
      link: "https://drive.google.com/file/d/1eManualRecepcaoDemo/view",
      icone: "ph-identification-card"
    },
    {
      titulo: "Plano de leitura bíblica do trimestre",
      categoria: "Estudos",
      detalhes: "PDF | 780 KB",
      atualizado: "16/02/2026",
      link: "https://drive.google.com/file/d/1fPlanoLeituraDemo/view",
      icone: "ph-bookmarks"
    },
    {
      titulo: "Formulário de visitação",
      categoria: "Administração",
      detalhes: "DOCX | 320 KB",
      atualizado: "14/02/2026",
      link: "https://drive.google.com/file/d/1gVisitacaoDemo/view",
      icone: "ph-clipboard-text"
    },
    {
      titulo: "Arte oficial para divulgação",
      categoria: "Mídia",
      detalhes: "ZIP | 8.7 MB",
      atualizado: "13/02/2026",
      link: "https://drive.google.com/file/d/1hArtesMidiaDemo/view",
      icone: "ph-image"
    }
  ];

  const agenda = [
    { dia: "Domingo", titulo: "Cultos da família", horario: "9h e 18h" },
    { dia: "Segunda", titulo: "Reunião administrativa", horario: "19h30" },
    { dia: "Terça", titulo: "Culto de oração", horario: "20h" },
    { dia: "Quarta", titulo: "Células nas casas", horario: "20h" },
    { dia: "Quinta", titulo: "Ensaios de louvor", horario: "19h45" },
    { dia: "Sexta", titulo: "Rede de jovens", horario: "20h" },
    { dia: "Sábado", titulo: "Ação evangelística", horario: "16h" }
  ];

  const escalasMensais = [
    {
      ministerio: "Ministério de Louvor",
      mes: "Março/2026",
      imagem: "assets/escalas/musica.jpeg",
      link: "https://drive.google.com/file/d/1escalaLouvorMarcoDemo/view"
    },
    {
      ministerio: "Ministério de Recepção",
      mes: "Março/2026",
      imagem: "assets/escalas/recepcao.jpeg",
      link: "https://drive.google.com/file/d/1escalaRecepcaoMarcoDemo/view"
    },
    {
      ministerio: "Ministério de Sonoplastia",
      mes: "Março/2026",
      imagem: "assets/escalas/sonoplastia.jpeg",
      link: "https://drive.google.com/file/d/1escalaSonoplastiaMarcoDemo/view"
    }
  ];

  const refs = {
    listaAvisos: document.getElementById("lista-avisos"),
    listaMateriais: document.getElementById("lista-materiais"),
    listaEscalas: document.getElementById("lista-escalas"),
    listaAgenda: document.getElementById("lista-agenda"),
    filtrosAvisos: document.getElementById("filtros-avisos"),
    filtrosMateriais: document.getElementById("filtros-materiais"),
    buscaAvisos: document.getElementById("search-avisos"),
    buscaMateriais: document.getElementById("search-materiais"),
    countAvisos: document.getElementById("count-avisos"),
    countMateriais: document.getElementById("count-materiais"),
    menuBtn: document.querySelector(".mobile-menu-btn"),
    navbar: document.querySelector(".navbar"),
    modalOverlay: document.getElementById("aviso-modal-overlay"),
    modalCard: document.getElementById("aviso-modal-card"),
    modalClose: document.getElementById("aviso-modal-close"),
    modalImageWrap: document.getElementById("aviso-modal-image-wrap"),
    modalImage: document.getElementById("aviso-modal-image"),
    modalPublico: document.getElementById("aviso-modal-publico"),
    modalCategoria: document.getElementById("aviso-modal-categoria"),
    modalTitulo: document.getElementById("aviso-modal-titulo"),
    modalTexto: document.getElementById("aviso-modal-texto"),
    modalData: document.getElementById("aviso-modal-data"),
    escalaModalOverlay: document.getElementById("escala-modal-overlay"),
    escalaModalClose: document.getElementById("escala-modal-close"),
    escalaModalImage: document.getElementById("escala-modal-image")
  };

  const state = {
    categoriaAviso: "Todos",
    categoriaMaterial: "Todos"
  };

  const categoriasAvisos = ["Todos", ...new Set(avisos.map((item) => item.categoria))];
  const categoriasMateriais = ["Todos", ...new Set(materiais.map((item) => item.categoria))];
  const badgeClasses = ["urgente", "geral", "ministerio"];
  const imagemAvisoDefault = "logo.jpg";

  function normalize(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function getAvisoImage(item) {
    return item.imagem || imagemAvisoDefault;
  }

  function createChip(label, isActive, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${isActive ? " active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  function renderAvisoChips() {
    refs.filtrosAvisos.innerHTML = "";

    categoriasAvisos.forEach((categoria) => {
      const chip = createChip(categoria, state.categoriaAviso === categoria, () => {
        state.categoriaAviso = categoria;
        renderAvisoChips();
        renderAvisos();
      });

      refs.filtrosAvisos.appendChild(chip);
    });
  }

  function renderMaterialChips() {
    refs.filtrosMateriais.innerHTML = "";

    categoriasMateriais.forEach((categoria) => {
      const chip = createChip(categoria, state.categoriaMaterial === categoria, () => {
        state.categoriaMaterial = categoria;
        renderMaterialChips();
        renderMateriais();
      });

      refs.filtrosMateriais.appendChild(chip);
    });
  }

  function renderAvisos() {
    const termo = normalize(refs.buscaAvisos.value.trim());

    const filtrados = avisos.filter((item) => {
      const porCategoria = state.categoriaAviso === "Todos" || item.categoria === state.categoriaAviso;
      const textoAlvo = normalize(`${item.titulo} ${item.texto} ${item.publico}`);
      const porBusca = !termo || textoAlvo.includes(termo);
      return porCategoria && porBusca;
    });

    refs.listaAvisos.innerHTML = "";

    if (!filtrados.length) {
      refs.listaAvisos.innerHTML = '<p class="empty-state">Nenhum aviso encontrado para o filtro selecionado.</p>';
      refs.countAvisos.textContent = "0";
      return;
    }

    filtrados.forEach((item) => {
      const card = document.createElement("article");
      const categoriaClass = normalize(item.categoria).replace(/\s+/g, "");
      const imagemAviso = `
        <div class="aviso-cover">
          <img src="${getAvisoImage(item)}" alt="Imagem do aviso: ${item.titulo}" loading="lazy">
        </div>
      `;

      card.className = "aviso-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Abrir detalhes do aviso: ${item.titulo}`);
      card.innerHTML = `
        ${imagemAviso}
        <div class="aviso-top">
          <span>${item.publico}</span>
          <span class="badge ${categoriaClass}">${item.categoria}</span>
        </div>
        <h3>${item.titulo}</h3>
        <p>${item.texto}</p>
        <div class="aviso-footer">
          <strong><i class="ph ph-calendar-blank"></i> ${item.data}</strong>
          <span><i class="ph ph-check-circle"></i> Oficial</span>
        </div>
      `;

      card.addEventListener("click", () => openAvisoModal(item));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openAvisoModal(item);
        }
      });

      refs.listaAvisos.appendChild(card);
    });

    refs.countAvisos.textContent = String(filtrados.length);
  }

  function renderMateriais() {
    const termo = normalize(refs.buscaMateriais.value.trim());

    const filtrados = materiais.filter((item) => {
      const porCategoria = state.categoriaMaterial === "Todos" || item.categoria === state.categoriaMaterial;
      const textoAlvo = normalize(`${item.titulo} ${item.categoria} ${item.detalhes}`);
      const porBusca = !termo || textoAlvo.includes(termo);
      return porCategoria && porBusca;
    });

    refs.listaMateriais.innerHTML = "";

    if (!filtrados.length) {
      refs.listaMateriais.innerHTML = '<p class="empty-state">Nenhum material disponível para esse filtro.</p>';
      refs.countMateriais.textContent = "0";
      return;
    }

    filtrados.forEach((item) => {
      const card = document.createElement("article");
      card.className = "download-item";
      card.innerHTML = `
        <div class="download-main">
          <span class="download-icon"><i class="ph ${item.icone}"></i></span>
          <div class="download-text">
            <h3>${item.titulo}</h3>
            <p>${item.categoria}</p>
            <span class="download-meta">${item.detalhes} | Atualizado em ${item.atualizado}</span>
          </div>
        </div>
        <a href="${item.link}" class="btn-download" target="_blank" rel="noopener noreferrer" aria-label="Baixar ${item.titulo}">
          Baixar
        </a>
      `;

      refs.listaMateriais.appendChild(card);
    });

    refs.countMateriais.textContent = String(filtrados.length);
  }

  function renderAgenda() {
    refs.listaAgenda.innerHTML = "";

    agenda.forEach((item) => {
      const card = document.createElement("article");
      card.className = "agenda-item";
      card.innerHTML = `
        <h3>${item.dia}</h3>
        <p>${item.titulo}</p>
        <p><strong>${item.horario}</strong></p>
      `;
      refs.listaAgenda.appendChild(card);
    });
  }

  function renderEscalas() {
    refs.listaEscalas.innerHTML = "";

    escalasMensais.forEach((item) => {
      const card = document.createElement("article");
      card.className = "escala-card";
      card.innerHTML = `
        <div class="escala-cover">
          <img src="${item.imagem}" alt="Escala mensal do ${item.ministerio}" loading="lazy">
        </div>
        <div class="escala-content">
          <h3>${item.ministerio}</h3>
          <p>${item.mes}</p>
          <div class="escala-actions">
            <button type="button" class="btn-view-image" aria-label="Ver imagem completa da escala do ${item.ministerio}">
              Ver imagem
            </button>
            <a href="${item.link}" class="btn-download" target="_blank" rel="noopener noreferrer" aria-label="Baixar escala mensal do ${item.ministerio}">
              Baixar escala
            </a>
          </div>
        </div>
      `;
      card.querySelector(".btn-view-image").addEventListener("click", () => openEscalaModal(item));
      refs.listaEscalas.appendChild(card);
    });
  }

  function setupSearch() {
    refs.buscaAvisos.addEventListener("input", renderAvisos);
    refs.buscaMateriais.addEventListener("input", renderMateriais);
  }

  function setupMobileMenu() {
    refs.menuBtn.addEventListener("click", () => {
      const open = refs.navbar.classList.toggle("open");
      refs.menuBtn.setAttribute("aria-expanded", String(open));
    });

    refs.navbar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        refs.navbar.classList.remove("open");
        refs.menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function openAvisoModal(item) {
    const categoriaClass = normalize(item.categoria).replace(/\s+/g, "");

    refs.modalPublico.textContent = item.publico;
    refs.modalCategoria.textContent = item.categoria;
    refs.modalCategoria.className = `badge ${badgeClasses.includes(categoriaClass) ? categoriaClass : "geral"}`;
    refs.modalTitulo.textContent = item.titulo;
    refs.modalTexto.textContent = item.texto;
    refs.modalData.innerHTML = `<i class="ph ph-calendar-blank"></i> ${item.data}`;

    refs.modalImage.src = getAvisoImage(item);
    refs.modalImage.alt = `Imagem do aviso: ${item.titulo}`;
    refs.modalImageWrap.hidden = false;
    refs.modalCard.classList.remove("no-image");

    refs.modalOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeAvisoModal() {
    refs.modalOverlay.hidden = true;
    refs.modalImage.removeAttribute("src");
    refs.modalImage.alt = "";
    refs.modalCard.classList.remove("no-image");
    document.body.style.overflow = "";
  }

  function setupModal() {
    refs.modalOverlay.hidden = true;
    document.body.style.overflow = "";

    refs.modalClose.addEventListener("click", closeAvisoModal);

    refs.modalOverlay.addEventListener("click", (event) => {
      if (event.target === refs.modalOverlay) {
        closeAvisoModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !refs.modalOverlay.hidden) {
        closeAvisoModal();
      }
    });
  }

  function openEscalaModal(item) {
    refs.escalaModalImage.src = item.imagem;
    refs.escalaModalImage.alt = `Imagem completa da escala: ${item.ministerio}`;
    refs.escalaModalOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeEscalaModal() {
    refs.escalaModalOverlay.hidden = true;
    refs.escalaModalImage.removeAttribute("src");
    refs.escalaModalImage.alt = "";
    document.body.style.overflow = "";
  }

  function setupEscalaModal() {
    refs.escalaModalOverlay.hidden = true;
    refs.escalaModalClose.addEventListener("click", closeEscalaModal);

    refs.escalaModalOverlay.addEventListener("click", (event) => {
      if (event.target === refs.escalaModalOverlay) {
        closeEscalaModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !refs.escalaModalOverlay.hidden) {
        closeEscalaModal();
      }
    });
  }

  renderAvisoChips();
  renderMaterialChips();
  renderAvisos();
  renderMateriais();
  renderEscalas();
  renderAgenda();
  setupSearch();
  setupMobileMenu();
  setupModal();
  setupEscalaModal();
});
