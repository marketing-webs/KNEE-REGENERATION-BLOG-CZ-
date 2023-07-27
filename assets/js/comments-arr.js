const returnComment = (user, message, time) => {
  return `
       <div class="comment">
                <img
                  src="assets/images/avatar.svg"
                  alt="avatar-image"
                  class="comment-avatar"
                />
                <div class="comment-content-wrapper">
                  <div class="comment-row">
                    <p class="comment-author">${user}</p>
                    <p class="comment-date">&bull; ${time}</p>
                  </div>
                  <div class="comment-row-image">
                    <p class="comment-content">
                     ${message}
                    </p>
                  </div>
                  <div class="comment-row">
                    <img
                      src="./assets/images/icon-comment.svg"
                      alt=""
                      class="comment-rating"
                    />
                  </div>
                </div>
              </div>
      `;
};

const generateDateBefore = (daysBefore, type) => {
  let date = new Date();
  date.setDate(date.getDate() - daysBefore);
  let time = `${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
  if (type && type === "comment") {
    return date;
  }
  return time;
};

const commentsArray = [
  {
    type: "comment",
    author: "Eva Vojtková",
    avatar: "avatar.png",
    text: "Senzační stabilizátor, doporučuji všem z celého srdce.",
    pictures: "testimony2.jpeg",
    time: generateDateBefore(1, "comment"),
  },
  {
    type: "comment",
    author: "Adamo75",
    avatar: "avatar.png",
    text: "Jsem profesionální cyklista a moje kolena jsou naprosto zničená . Používal jsem různé přípravky, ale vůbec nic mi nepomohly. Až stabilizátor KNEE RENEGENRATION mi skutečně pomohl. Nyní se mohu v klidu připravovat na další závody. ",
    pictures: "",
    time: generateDateBefore(1, "comment"),
  },
  {
    type: "comment",
    author: "Milada Hofrajtrová",
    avatar: "avatar.png",
    text: "Začátkem roku 2022 jsem uklouzla a vyvrtnula si koleno. Přetrhla jsem si vazy a v mém věku je to velké riziko, protože kloub nic nedrží pohromadě a všechno se strašně opotřebovává. Sice jsem byla na operaci a rehabilitaci, ale když jsem vstávala a na delších procházkách mě koleno strašně bolelo a zalomovalo se. Nakonec vnuk našel tento stabilizátor. S každým dnem používání bolest přecházela a já se cítila lépe a jistěji na vlastních nohou. Po měsíci se moje koleno vrátilo do stavu před nehodou. Používám ho pořád, aby se bolest nevrátila.",
    pictures: "",
    time: generateDateBefore(1, "comment"),
  },
  {
    type: "comment",
    author: "Roman Gunár",
    avatar: "avatar.png",
    text: "Skvělý produkt. Kolena mě bolí už pár měsíců a s tímto stabilizátorem bolest systematicky mizí. Příjemné překvapení a navíc zdarma. Vřele doporučuji.",
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Pavlína Nováková",
    avatar: "avatar.png",
    text: "Můj otec (79 let) má silné bolesti v levém koleni, sotva chodí. Pomůže mu to v tomto věku? A vážně, můžete získat tento stabilizátor zdarma?",
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },

  {
    type: "comment",
    author: "Dagmar Pelikánová",
    avatar: "avatar.png",
    text: "@Pavlína dostala jsem ho zdarma, objednala jsem ho pro starší osobu (86 let) a je moc spokojená. Dlouho ji bolelo koleno a kyčel a kvůli mnohaleté degeneraci sotva vstávala z postele. Tento stabilizátor nějakou dobu nosila a velmi si ho pochvalovala. Bolest je pryč, může se zase normálně hýbat a nálada je hned zpátky 😊 Zkuste to, třeba to dostanete taky zadarmo.",
    timestamp: "1 dzień temu",
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Václav Jahoda",
    avatar: "avatar.png",
    text: `Moje máma to získala pro sebe a mého tátu. Myslela i na mě, protože už delší dobu trpím problémy s bolavým, nestabilním kolenem. Nejen, že to funguje, ale také jsme dostali kus zdarma. `,
    pictures: "testimony1.jpeg",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Květoslava Joslová",
    avatar: "avatar.png",
    text: `Fantastický produkt, je tam sice napsáno že jenom "ulevuje od bolesti" a u mě úplně zmizela a koleno přestalo pukat a přeskakovat. Už dlouho jsem se necítila tak dobře, takže doporučuji všem, koho opravdu bolí koleno a má problémy s pohyblivostí.`,
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Jaroslav Vácha",
    avatar: "avatar.png",
    text: "Všem vřele doporučuji. Tento produkt jsem dostal zdarma. Začal jsem ho používat a bolest v koleni zmizela hned první den.",
    timestamp: "2 dni temu",
    pictures: "testimony3.jpeg",
    time: generateDateBefore(0, "comment"),
  },
];
