// US Citizenship Test Quiz - 128 questions + ENG/ESP explanations
// Hosted externally for GoDaddy custom HTML limit.

let lang = "en";

const explanations = {
  "What is the form of government of the United States?": {
    "en": "The United States is a republic, which means people elect leaders to represent them. Power comes from citizens, not a king or dictator.",
    "es": "Estados Unidos es una república, lo que significa que el pueblo elige líderes para representarlo. El poder viene de los ciudadanos, no de un rey ni de un dictador."
  },
  "What is the supreme law of the land?": {
    "en": "The Constitution is the highest law in the United States. Every law and government action must follow it.",
    "es": "La Constitución es la ley suprema de Estados Unidos. Todas las leyes y acciones del gobierno deben seguirla."
  },
  "Name one thing the U.S. Constitution does.": {
    "en": "The Constitution creates the basic structure of the U.S. government. It also explains the powers and limits of each branch.",
    "es": "La Constitución crea la estructura básica del gobierno de EE.UU. También explica los poderes y límites de cada rama."
  },
  "The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?": {
    "en": "“We the People” means the government gets its power from the people. This is the idea of self-government.",
    "es": "“We the People” significa que el gobierno obtiene su poder del pueblo. Esta es la idea del autogobierno."
  },
  "How are changes made to the U.S. Constitution?": {
    "en": "Changes to the Constitution are called amendments. This lets the country update important rules without replacing the whole Constitution.",
    "es": "Los cambios a la Constitución se llaman enmiendas. Esto permite actualizar reglas importantes sin reemplazar toda la Constitución."
  },
  "What does the Bill of Rights protect?": {
    "en": "The Bill of Rights protects basic freedoms like speech, religion, and due process. These are rights the government must respect.",
    "es": "La Carta de Derechos protege libertades básicas como expresión, religión y debido proceso. Son derechos que el gobierno debe respetar."
  },
  "How many amendments does the Constitution have?": {
    "en": "The Constitution has 27 amendments. The first 10 are called the Bill of Rights.",
    "es": "La Constitución tiene 27 enmiendas. Las primeras 10 se llaman la Carta de Derechos."
  },
  "Why is the Declaration of Independence important?": {
    "en": "The Declaration of Independence announced that the colonies were no longer under British rule. It also stated important ideas about freedom and rights.",
    "es": "La Declaración de Independencia anunció que las colonias ya no estaban bajo dominio británico. También expresó ideas importantes sobre libertad y derechos."
  },
  "What founding document said the American colonies were free from Britain?": {
    "en": "The Declaration of Independence said the American colonies were free from Britain. It was adopted on July 4, 1776.",
    "es": "La Declaración de Independencia dijo que las colonias americanas eran libres de Gran Bretaña. Fue adoptada el 4 de julio de 1776."
  },
  "Name two important ideas from the Declaration of Independence and the Constitution.": {
    "en": "Liberty and equality are major ideas in the founding documents. They helped shape American government and rights.",
    "es": "La libertad y la igualdad son ideas principales en los documentos fundacionales. Ayudaron a formar el gobierno y los derechos estadounidenses."
  },
  "The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?": {
    "en": "“Life, Liberty, and the pursuit of Happiness” appears in the Declaration of Independence. It describes rights the founders believed people naturally have.",
    "es": "“Vida, libertad y búsqueda de la felicidad” aparece en la Declaración de Independencia. Describe derechos que los fundadores creían naturales para las personas."
  },
  "What is the economic system of the United States?": {
    "en": "The U.S. has a capitalist economy, where people can own businesses and property. Prices are mostly guided by supply and demand.",
    "es": "EE.UU. tiene una economía capitalista, donde las personas pueden tener negocios y propiedad. Los precios se guían principalmente por oferta y demanda."
  },
  "What is the rule of law?": {
    "en": "The rule of law means everyone must follow the law. No one, including government leaders, is above it.",
    "es": "El estado de derecho significa que todos deben obedecer la ley. Nadie, incluidos los líderes del gobierno, está por encima de ella."
  },
  "Many documents influenced the U.S. Constitution. Name one.": {
    "en": "Documents like the Declaration of Independence and Magna Carta influenced American ideas about rights and limited government. The Constitution borrowed from these traditions.",
    "es": "Documentos como la Declaración de Independencia y la Carta Magna influyeron en ideas americanas sobre derechos y gobierno limitado. La Constitución tomó ideas de esas tradiciones."
  },
  "There are three branches of government. Why?": {
    "en": "The three branches divide power so no one part controls everything. This is called checks and balances.",
    "es": "Las tres ramas dividen el poder para que ninguna parte controle todo. Esto se llama controles y equilibrios."
  },
  "Name the three branches of government.": {
    "en": "The three branches are legislative, executive, and judicial. They make laws, enforce laws, and interpret laws.",
    "es": "Las tres ramas son legislativa, ejecutiva y judicial. Hacen leyes, hacen cumplir leyes e interpretan leyes."
  },
  "The President of the United States is part of which branch of government?": {
    "en": "The President leads the executive branch. This branch enforces federal laws.",
    "es": "El Presidente dirige la rama ejecutiva. Esta rama hace cumplir las leyes federales."
  },
  "What part of the federal government writes laws?": {
    "en": "Congress writes federal laws. It is made up of the Senate and the House of Representatives.",
    "es": "El Congreso escribe las leyes federales. Está compuesto por el Senado y la Cámara de Representantes."
  },
  "What are the two parts of the U.S. Congress?": {
    "en": "Congress has two parts: the Senate and the House of Representatives. This system balances state equality and population representation.",
    "es": "El Congreso tiene dos partes: el Senado y la Cámara de Representantes. Este sistema equilibra la igualdad de los estados y la representación por población."
  },
  "Name one power of the U.S. Congress.": {
    "en": "One power of Congress is to write laws. Congress also controls federal spending and can declare war.",
    "es": "Un poder del Congreso es escribir leyes. El Congreso también controla el gasto federal y puede declarar la guerra."
  },
  "How many U.S. Senators are there?": {
    "en": "There are 100 U.S. Senators. Each state has two senators.",
    "es": "Hay 100 senadores de EE.UU. Cada estado tiene dos senadores."
  },
  "How long is a term for a U.S. Senator?": {
    "en": "A U.S. Senator serves a 6-year term. Longer terms give senators more time to work on national issues.",
    "es": "Un senador de EE.UU. sirve un mandato de 6 años. Los mandatos más largos les dan más tiempo para trabajar en asuntos nacionales."
  },
  "Who is one U.S. Senator from Illinois now?": {
    "en": "Dick Durbin is one of Illinois’ U.S. Senators. Senator answers can change, so people should always check their own state before the real test.",
    "es": "Dick Durbin es uno de los senadores de Illinois. Las respuestas sobre senadores pueden cambiar, así que la gente debe revisar su propio estado antes del examen real."
  },
  "Who is another U.S. Senator from Illinois now?": {
    "en": "Tammy Duckworth is one of Illinois’ U.S. Senators. Senator answers depend on the state where the applicant lives.",
    "es": "Tammy Duckworth es una senadora de Illinois. Las respuestas sobre senadores dependen del estado donde vive el solicitante."
  },
  "How many voting members are in the House of Representatives?": {
    "en": "The House of Representatives has 435 voting members. Seats are divided among states based on population.",
    "es": "La Cámara de Representantes tiene 435 miembros con voto. Los puestos se dividen entre los estados según la población."
  },
  "How long is a term for a member of the House of Representatives?": {
    "en": "House members serve 2-year terms. This keeps them closely connected to voters.",
    "es": "Los miembros de la Cámara sirven mandatos de 2 años. Esto los mantiene más conectados con los votantes."
  },
  "Why do U.S. representatives serve shorter terms than U.S. senators?": {
    "en": "Representatives have shorter terms so voters can respond quickly if they want change. It keeps the House close to public opinion.",
    "es": "Los representantes tienen mandatos más cortos para que los votantes puedan responder rápido si quieren cambios. Mantiene a la Cámara cerca de la opinión pública."
  },
  "How many senators does each state have?": {
    "en": "Each state has two senators. This gives every state equal representation in the Senate.",
    "es": "Cada estado tiene dos senadores. Esto da representación igual a cada estado en el Senado."
  },
  "Why does each state have two senators?": {
    "en": "Each state has two senators so small and large states have equal power in the Senate. This was a key compromise in the Constitution.",
    "es": "Cada estado tiene dos senadores para que estados grandes y pequeños tengan igual poder en el Senado. Fue un compromiso clave en la Constitución."
  },
  "Who does a U.S. Senator represent?": {
    "en": "A U.S. Senator represents the people of the entire state. Representatives in the House represent smaller districts.",
    "es": "Un senador representa a la gente de todo el estado. Los representantes de la Cámara representan distritos más pequeños."
  },
  "Who elects U.S. Senators?": {
    "en": "U.S. Senators are elected by citizens in their state. This direct election is protected by the 17th Amendment.",
    "es": "Los senadores son elegidos por los ciudadanos de su estado. Esta elección directa está protegida por la Enmienda 17."
  },
  "Who does a member of the House of Representatives represent?": {
    "en": "A House member represents citizens in one congressional district. Districts are based on population.",
    "es": "Un miembro de la Cámara representa a los ciudadanos de un distrito congresional. Los distritos se basan en la población."
  },
  "Who elects members of the House of Representatives?": {
    "en": "Members of the House are elected by citizens in their district. These elections happen every two years.",
    "es": "Los miembros de la Cámara son elegidos por los ciudadanos de su distrito. Estas elecciones ocurren cada dos años."
  },
  "Some states have more representatives than other states. Why?": {
    "en": "States with more people get more representatives. This is why California has more House members than a small state.",
    "es": "Los estados con más población reciben más representantes. Por eso California tiene más miembros en la Cámara que un estado pequeño."
  },
  "The President of the United States is elected for how many years?": {
    "en": "The President is elected for a 4-year term. After that, voters decide whether to elect the President again.",
    "es": "El Presidente es elegido por un mandato de 4 años. Después, los votantes deciden si lo eligen otra vez."
  },
  "The President of the United States can serve only two terms. Why?": {
    "en": "The 22nd Amendment limits a President to two elected terms. It was passed after Franklin Roosevelt served more than two terms.",
    "es": "La Enmienda 22 limita al Presidente a dos mandatos elegidos. Fue aprobada después de que Franklin Roosevelt sirvió más de dos mandatos."
  },
  "Who is the President of the United States now?": {
    "en": "Donald Trump is listed here as the current President. For the real test, applicants should always confirm the current President before their interview.",
    "es": "Donald Trump aparece aquí como el Presidente actual. Para el examen real, los solicitantes deben confirmar siempre quién es el Presidente actual antes de la entrevista."
  },
  "Who is the Vice President of the United States now?": {
    "en": "JD Vance is listed here as the current Vice President. This answer can change after elections, so always verify it before the real test.",
    "es": "JD Vance aparece aquí como el Vicepresidente actual. Esta respuesta puede cambiar después de elecciones, así que siempre hay que verificarla antes del examen real."
  },
  "If the President can no longer serve, who becomes President?": {
    "en": "If the President cannot serve, the Vice President becomes President. This keeps leadership stable during an emergency.",
    "es": "Si el Presidente no puede servir, el Vicepresidente se convierte en Presidente. Esto mantiene estable el liderazgo durante una emergencia."
  },
  "If both the President and Vice President can no longer serve, who becomes President?": {
    "en": "If both the President and Vice President cannot serve, the Speaker of the House is next. This is part of the presidential line of succession.",
    "es": "Si el Presidente y el Vicepresidente no pueden servir, sigue el Presidente de la Cámara. Esto es parte de la línea de sucesión presidencial."
  },
  "Name one power of the President.": {
    "en": "One presidential power is signing bills into law. The President can also veto bills and lead the military.",
    "es": "Un poder presidencial es firmar proyectos de ley para convertirlos en ley. El Presidente también puede vetar leyes y dirigir las fuerzas armadas."
  },
  "Who is Commander in Chief of the U.S. military?": {
    "en": "The President is Commander in Chief of the U.S. military. This gives civilian leadership over the armed forces.",
    "es": "El Presidente es el Comandante en Jefe de las Fuerzas Armadas. Esto da liderazgo civil sobre el ejército."
  },
  "Who signs bills to become laws?": {
    "en": "The President signs bills after Congress passes them. Once signed, a bill becomes law.",
    "es": "El Presidente firma proyectos de ley después de que el Congreso los aprueba. Cuando se firman, se convierten en ley."
  },
  "Who vetoes bills?": {
    "en": "A veto means the President rejects a bill passed by Congress. Congress can still override a veto with enough votes.",
    "es": "Un veto significa que el Presidente rechaza un proyecto aprobado por el Congreso. El Congreso todavía puede superar un veto con suficientes votos."
  },
  "Who appoints federal judges?": {
    "en": "The President appoints federal judges, including Supreme Court justices. The Senate must confirm many of these appointments.",
    "es": "El Presidente nombra jueces federales, incluidos jueces de la Corte Suprema. El Senado debe confirmar muchos de estos nombramientos."
  },
  "The executive branch has many parts. Name one.": {
    "en": "The executive branch includes the President, Vice President, Cabinet, and federal departments. Its job is to enforce laws.",
    "es": "La rama ejecutiva incluye al Presidente, Vicepresidente, Gabinete y departamentos federales. Su trabajo es hacer cumplir las leyes."
  },
  "What does the President’s Cabinet do?": {
    "en": "The Cabinet advises the President on major issues. Cabinet members lead important federal departments.",
    "es": "El Gabinete aconseja al Presidente sobre asuntos importantes. Sus miembros dirigen departamentos federales importantes."
  },
  "What are two Cabinet-level positions?": {
    "en": "Cabinet-level positions include Secretary of State and Secretary of Defense. These leaders help manage foreign policy and national defense.",
    "es": "Los cargos a nivel de Gabinete incluyen Secretario de Estado y Secretario de Defensa. Estos líderes ayudan a manejar política exterior y defensa nacional."
  },
  "Why is the Electoral College important?": {
    "en": "The Electoral College officially elects the President. It gives states a role in presidential elections.",
    "es": "El Colegio Electoral elige oficialmente al Presidente. Da a los estados un papel en las elecciones presidenciales."
  },
  "What is one part of the judicial branch?": {
    "en": "The Supreme Court is part of the judicial branch. The judicial branch explains laws and decides legal disputes.",
    "es": "La Corte Suprema es parte de la rama judicial. La rama judicial interpreta leyes y decide disputas legales."
  },
  "What does the judicial branch do?": {
    "en": "The judicial branch reviews laws and decides whether they follow the Constitution. This power is called judicial review.",
    "es": "La rama judicial revisa leyes y decide si siguen la Constitución. Este poder se llama revisión judicial."
  },
  "What is the highest court in the United States?": {
    "en": "The Supreme Court is the highest court in the United States. Its decisions are final on major federal legal questions.",
    "es": "La Corte Suprema es el tribunal más alto de Estados Unidos. Sus decisiones son finales en grandes asuntos legales federales."
  },
  "How many seats are on the Supreme Court?": {
    "en": "There are 9 seats on the Supreme Court. This number is set by Congress, not directly by the Constitution.",
    "es": "Hay 9 puestos en la Corte Suprema. Este número lo fija el Congreso, no directamente la Constitución."
  },
  "How many Supreme Court justices are usually needed to decide a case?": {
    "en": "A majority of the 9 justices is usually 5. That is why 5 votes often decide a Supreme Court case.",
    "es": "Una mayoría de los 9 jueces normalmente es 5. Por eso 5 votos suelen decidir un caso de la Corte Suprema."
  },
  "How long do Supreme Court justices serve?": {
    "en": "Supreme Court justices serve for life unless they retire, resign, or are removed. This protects them from election pressure.",
    "es": "Los jueces de la Corte Suprema sirven de por vida salvo que se retiren, renuncien o sean removidos. Esto los protege de presión electoral."
  },
  "Supreme Court justices serve for life. Why?": {
    "en": "Life terms help justices stay independent from politics. They do not have to run for reelection.",
    "es": "Los mandatos de por vida ayudan a que los jueces sean independientes de la política. No tienen que postularse para reelección."
  },
  "Who is the Chief Justice of the United States now?": {
    "en": "John Roberts is listed here as the Chief Justice. For the real test, current officeholder answers should be checked before the interview.",
    "es": "John Roberts aparece aquí como el Juez Presidente. Para el examen real, las respuestas de cargos actuales deben verificarse antes de la entrevista."
  },
  "Name one power that is only for the federal government.": {
    "en": "Only the federal government can print paper money. This helps keep one national currency for the whole country.",
    "es": "Solo el gobierno federal puede imprimir papel moneda. Esto ayuda a mantener una moneda nacional para todo el país."
  },
  "Name one power that is only for the states.": {
    "en": "States handle powers like issuing driver’s licenses. This is an example of state government authority.",
    "es": "Los estados manejan poderes como emitir licencias de conducir. Este es un ejemplo de autoridad estatal."
  },
  "What is the purpose of the 10th Amendment?": {
    "en": "The 10th Amendment says powers not given to the federal government belong to the states or the people. It supports federalism.",
    "es": "La Enmienda 10 dice que los poderes no dados al gobierno federal pertenecen a los estados o al pueblo. Apoya el federalismo."
  },
  "Who is the Governor of Illinois now?": {
    "en": "JB Pritzker is listed here as the Governor of Illinois. Governor answers depend on your state and can change after elections.",
    "es": "JB Pritzker aparece aquí como el gobernador de Illinois. Las respuestas sobre gobernador dependen de tu estado y pueden cambiar después de elecciones."
  },
  "What is the capital of Illinois?": {
    "en": "Springfield is the capital of Illinois. Chicago is the largest city, but it is not the state capital.",
    "es": "Springfield es la capital de Illinois. Chicago es la ciudad más grande, pero no es la capital del estado."
  },
  "Who is the Speaker of the House of Representatives now?": {
    "en": "Mike Johnson is listed here as Speaker of the House. This position can change, so applicants should check before the real test.",
    "es": "Mike Johnson aparece aquí como Presidente de la Cámara. Este cargo puede cambiar, así que los solicitantes deben revisar antes del examen real."
  },
  "There are four amendments to the U.S. Constitution about who can vote. Describe one.": {
    "en": "Voting amendments expanded the right to vote over time. One example is that citizens 18 and older can vote.",
    "es": "Las enmiendas sobre votación ampliaron el derecho al voto con el tiempo. Un ejemplo es que los ciudadanos de 18 años o más pueden votar."
  },
  "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?": {
    "en": "Only U.S. citizens can vote in federal elections, run for federal office, and serve on a jury. These are important civic rights and duties.",
    "es": "Solo los ciudadanos estadounidenses pueden votar en elecciones federales, postularse a cargos federales y servir en un jurado. Son derechos y deberes cívicos importantes."
  },
  "What are three rights of everyone living in the United States?": {
    "en": "People in the U.S. have rights such as freedom of speech, religion, and assembly. Many of these rights are protected by the First Amendment.",
    "es": "Las personas en EE.UU. tienen derechos como libertad de expresión, religión y reunión. Muchos están protegidos por la Primera Enmienda."
  },
  "What do we show loyalty to when we say the Pledge of Allegiance?": {
    "en": "The Pledge of Allegiance shows loyalty to the United States and its flag. It is often recited at public events and schools.",
    "es": "El Juramento a la Bandera muestra lealtad a Estados Unidos y a su bandera. A menudo se recita en eventos públicos y escuelas."
  },
  "Name two promises that new citizens make in the Oath of Allegiance.": {
    "en": "New citizens promise to support and defend the Constitution. They also give up loyalty to other countries as part of the oath.",
    "es": "Los nuevos ciudadanos prometen apoyar y defender la Constitución. También renuncian a la lealtad a otros países como parte del juramento."
  },
  "How can people become United States citizens?": {
    "en": "People can become citizens through naturalization. This process includes eligibility, an interview, and an oath ceremony.",
    "es": "Las personas pueden convertirse en ciudadanos por naturalización. Este proceso incluye elegibilidad, entrevista y ceremonia de juramento."
  },
  "What are two examples of civic participation in the United States?": {
    "en": "Civic participation includes voting, joining a political party, and helping in the community. It is how people take part in democracy.",
    "es": "La participación cívica incluye votar, unirse a un partido político y ayudar en la comunidad. Es cómo las personas participan en la democracia."
  },
  "What is one way Americans can serve their country?": {
    "en": "Americans can serve their country by voting, serving on a jury, or joining the military. Civic service helps the country function.",
    "es": "Los estadounidenses pueden servir al país votando, sirviendo en un jurado o uniéndose al ejército. El servicio cívico ayuda al país a funcionar."
  },
  "Why is it important to pay federal taxes?": {
    "en": "Federal taxes pay for services like defense, roads, and public programs. Paying taxes is required by law.",
    "es": "Los impuestos federales pagan servicios como defensa, carreteras y programas públicos. Pagar impuestos es requerido por la ley."
  },
  "Why should men age 18 through 25 register for Selective Service?": {
    "en": "Selective Service registration helps the government know who could be called in a national emergency. It is required by law for most men ages 18 to 25.",
    "es": "El registro del Servicio Selectivo ayuda al gobierno a saber quién podría ser llamado en una emergencia nacional. Es requerido por ley para la mayoría de hombres de 18 a 25 años."
  },
  "The colonists came to America for many reasons. Name one.": {
    "en": "Many colonists came for freedom, opportunity, and religious liberty. These reasons shaped early American society.",
    "es": "Muchos colonos vinieron por libertad, oportunidad y libertad religiosa. Estas razones formaron la sociedad americana temprana."
  },
  "Who lived in America before the Europeans arrived?": {
    "en": "American Indians lived in America long before Europeans arrived. They had many different nations, languages, and cultures.",
    "es": "Los indígenas americanos vivían en América mucho antes de que llegaran los europeos. Tenían muchas naciones, idiomas y culturas diferentes."
  },
  "What group of people was taken and sold as slaves?": {
    "en": "Africans were taken by force and sold into slavery. Slavery became one of the central conflicts in American history.",
    "es": "Los africanos fueron llevados por la fuerza y vendidos como esclavos. La esclavitud se convirtió en uno de los conflictos centrales de la historia estadounidense."
  },
  "What war did the Americans fight to win independence from Britain?": {
    "en": "The American Revolution was the war for independence from Britain. It ended with the United States becoming a new nation.",
    "es": "La Revolución Americana fue la guerra por la independencia de Gran Bretaña. Terminó con Estados Unidos convirtiéndose en una nueva nación."
  },
  "Name one reason why the Americans declared independence from Britain.": {
    "en": "Colonists objected to high taxes and no representation in British government. This helped lead to independence.",
    "es": "Los colonos se opusieron a impuestos altos y falta de representación en el gobierno británico. Esto ayudó a llevar a la independencia."
  },
  "Who wrote the Declaration of Independence?": {
    "en": "Thomas Jefferson was the main writer of the Declaration of Independence. The document was adopted in 1776.",
    "es": "Thomas Jefferson fue el escritor principal de la Declaración de Independencia. El documento fue adoptado en 1776."
  },
  "When was the Declaration of Independence adopted?": {
    "en": "The Declaration of Independence was adopted on July 4, 1776. This date is celebrated as Independence Day.",
    "es": "La Declaración de Independencia fue adoptada el 4 de julio de 1776. Esta fecha se celebra como el Día de la Independencia."
  },
  "The American Revolution had many important events. Name one.": {
    "en": "The Battle of Yorktown was a major American victory. It helped end the Revolutionary War.",
    "es": "La Batalla de Yorktown fue una gran victoria estadounidense. Ayudó a terminar la Guerra Revolucionaria."
  },
  "There were 13 original states. Name five.": {
    "en": "The 13 original states came from the 13 colonies. They were the first states of the United States.",
    "es": "Los 13 estados originales vinieron de las 13 colonias. Fueron los primeros estados de Estados Unidos."
  },
  "What founding document was written in 1787?": {
    "en": "The Constitution was written in 1787 at the Constitutional Convention. It created a stronger federal government.",
    "es": "La Constitución fue escrita en 1787 en la Convención Constitucional. Creó un gobierno federal más fuerte."
  },
  "The Federalist Papers supported the passage of the U.S. Constitution. Name one writer.": {
    "en": "James Madison was one writer of the Federalist Papers. These essays supported ratifying the Constitution.",
    "es": "James Madison fue uno de los escritores de los Papeles Federalistas. Estos ensayos apoyaron la ratificación de la Constitución."
  },
  "Why were the Federalist Papers important?": {
    "en": "The Federalist Papers explained why the Constitution was needed. They helped persuade people to support the new government.",
    "es": "Los Papeles Federalistas explicaron por qué se necesitaba la Constitución. Ayudaron a convencer a la gente de apoyar el nuevo gobierno."
  },
  "Benjamin Franklin is famous for many things. Name one.": {
    "en": "Benjamin Franklin was a diplomat, inventor, and Founding Father. He helped gain French support during the Revolution.",
    "es": "Benjamin Franklin fue diplomático, inventor y Padre Fundador. Ayudó a conseguir apoyo francés durante la Revolución."
  },
  "George Washington is famous for many things. Name one.": {
    "en": "George Washington was the first President and led the Continental Army. He is often called the Father of the Country.",
    "es": "George Washington fue el primer Presidente y lideró el Ejército Continental. A menudo se le llama el Padre de la Nación."
  },
  "Thomas Jefferson is famous for many things. Name one.": {
    "en": "Thomas Jefferson is famous for writing the Declaration of Independence. He also became the third President of the United States.",
    "es": "Thomas Jefferson es famoso por escribir la Declaración de Independencia. También fue el tercer Presidente de Estados Unidos."
  },
  "James Madison is famous for many things. Name one.": {
    "en": "James Madison is called the Father of the Constitution. He helped design the government and wrote parts of the Federalist Papers.",
    "es": "James Madison es llamado el Padre de la Constitución. Ayudó a diseñar el gobierno y escribió partes de los Papeles Federalistas."
  },
  "Alexander Hamilton is famous for many things. Name one.": {
    "en": "Alexander Hamilton was the first Secretary of the Treasury. He helped create the national financial system.",
    "es": "Alexander Hamilton fue el primer Secretario del Tesoro. Ayudó a crear el sistema financiero nacional."
  },
  "What territory did the United States buy from France in 1803?": {
    "en": "The Louisiana Purchase doubled the size of the United States in 1803. The land was bought from France.",
    "es": "La Compra de Luisiana duplicó el tamaño de Estados Unidos en 1803. El territorio fue comprado a Francia."
  },
  "Name one war fought by the United States in the 1800s.": {
    "en": "The Civil War was one major U.S. war in the 1800s. It was fought from 1861 to 1865.",
    "es": "La Guerra Civil fue una guerra importante de EE.UU. en los años 1800. Se peleó de 1861 a 1865."
  },
  "Name the U.S. war between the North and the South.": {
    "en": "The Civil War was fought between the North and the South. It centered on slavery, states’ rights, and the future of the Union.",
    "es": "La Guerra Civil se peleó entre el Norte y el Sur. Se centró en la esclavitud, derechos de los estados y el futuro de la Unión."
  },
  "The Civil War had many important events. Name one.": {
    "en": "The Battle of Gettysburg was a turning point in the Civil War. It was one of the war’s most important battles.",
    "es": "La Batalla de Gettysburg fue un punto de cambio en la Guerra Civil. Fue una de las batallas más importantes de la guerra."
  },
  "Name one reason why the Civil War started.": {
    "en": "Slavery was a major reason the Civil War started. The conflict decided whether slavery would continue in the United States.",
    "es": "La esclavitud fue una razón principal por la que empezó la Guerra Civil. El conflicto decidió si la esclavitud continuaría en Estados Unidos."
  },
  "What did the Emancipation Proclamation do?": {
    "en": "The Emancipation Proclamation declared enslaved people free in Confederate areas. It changed the purpose of the Civil War toward ending slavery.",
    "es": "La Proclamación de Emancipación declaró libres a los esclavos en áreas confederadas. Cambió el propósito de la Guerra Civil hacia terminar la esclavitud."
  },
  "What amendment gives citizenship to all persons born in the United States?": {
    "en": "The 14th Amendment grants citizenship to people born in the United States. It also promises equal protection under the law.",
    "es": "La Enmienda 14 da ciudadanía a las personas nacidas en Estados Unidos. También promete igual protección bajo la ley."
  },
  "What amendment gave voting rights to men of all races?": {
    "en": "The 15th Amendment gave voting rights to men of all races. It was passed after the Civil War.",
    "es": "La Enmienda 15 dio derecho al voto a hombres de todas las razas. Fue aprobada después de la Guerra Civil."
  },
  "Name one leader of the women’s rights movement in the 1800s.": {
    "en": "Susan B. Anthony was a leader in the women’s rights movement. She worked for women’s right to vote.",
    "es": "Susan B. Anthony fue líder del movimiento por los derechos de la mujer. Trabajó por el derecho al voto de las mujeres."
  },
  "Name one war fought by the United States in the 1900s.": {
    "en": "World War II is one U.S. war from the 1900s. The U.S. also fought World War I, Korea, Vietnam, and the Persian Gulf War.",
    "es": "La Segunda Guerra Mundial es una guerra de EE.UU. de los años 1900. EE.UU. también peleó la Primera Guerra Mundial, Corea, Vietnam y la Guerra del Golfo."
  },
  "Why did the United States enter World War I?": {
    "en": "The U.S. entered World War I after Germany attacked U.S. ships and used unrestricted submarine warfare. The war ended in 1918.",
    "es": "EE.UU. entró en la Primera Guerra Mundial después de que Alemania atacó barcos estadounidenses y usó guerra submarina sin restricciones. La guerra terminó en 1918."
  },
  "When did all women get the right to vote?": {
    "en": "Women won the right to vote nationwide in 1920. This was protected by the 19th Amendment.",
    "es": "Las mujeres ganaron el derecho al voto a nivel nacional en 1920. Esto fue protegido por la Enmienda 19."
  },
  "What was the Great Depression?": {
    "en": "The Great Depression was a long economic crisis with high unemployment and business failures. It deeply affected American families.",
    "es": "La Gran Depresión fue una larga crisis económica con alto desempleo y quiebras de negocios. Afectó mucho a las familias estadounidenses."
  },
  "When did the Great Depression start?": {
    "en": "The Great Depression started in 1929 after the stock market crash. It lasted through much of the 1930s.",
    "es": "La Gran Depresión empezó en 1929 después de la caída de la bolsa. Duró gran parte de los años 1930."
  },
  "Who was President during the Great Depression and World War II?": {
    "en": "Franklin Roosevelt led the country during the Great Depression and World War II. His New Deal created many federal programs.",
    "es": "Franklin Roosevelt lideró el país durante la Gran Depresión y la Segunda Guerra Mundial. Su New Deal creó muchos programas federales."
  },
  "Why did the United States enter World War II?": {
    "en": "The U.S. entered World War II after Japan attacked Pearl Harbor on December 7, 1941. Congress declared war soon after.",
    "es": "EE.UU. entró en la Segunda Guerra Mundial después de que Japón atacó Pearl Harbor el 7 de diciembre de 1941. El Congreso declaró la guerra poco después."
  },
  "Dwight Eisenhower is famous for many things. Name one.": {
    "en": "Dwight Eisenhower was a top Allied general during World War II. He later became President of the United States.",
    "es": "Dwight Eisenhower fue un general aliado importante durante la Segunda Guerra Mundial. Después fue Presidente de Estados Unidos."
  },
  "Who was the United States’ main rival during the Cold War?": {
    "en": "The Soviet Union was America’s main rival during the Cold War. The conflict was political, military, and ideological.",
    "es": "La Unión Soviética fue el principal rival de Estados Unidos durante la Guerra Fría. El conflicto fue político, militar e ideológico."
  },
  "During the Cold War, what was one main concern of the United States?": {
    "en": "During the Cold War, the U.S. was worried about the spread of communism. This concern influenced foreign policy for decades.",
    "es": "Durante la Guerra Fría, EE.UU. se preocupaba por la expansión del comunismo. Esta preocupación influyó en la política exterior por décadas."
  },
  "Why did the United States enter the Korean War?": {
    "en": "The U.S. entered the Korean War to stop the spread of communism. The war began in 1950 after North Korea invaded South Korea.",
    "es": "EE.UU. entró en la Guerra de Corea para detener la expansión del comunismo. La guerra empezó en 1950 cuando Corea del Norte invadió Corea del Sur."
  },
  "Why did the United States enter the Vietnam War?": {
    "en": "The U.S. entered the Vietnam War to stop the spread of communism in Southeast Asia. It became one of the most debated wars in U.S. history.",
    "es": "EE.UU. entró en la Guerra de Vietnam para detener la expansión del comunismo en el sudeste asiático. Fue una de las guerras más debatidas en la historia de EE.UU."
  },
  "What did the civil rights movement do?": {
    "en": "The civil rights movement fought to end racial discrimination. It helped lead to major laws protecting equal rights.",
    "es": "El movimiento de derechos civiles luchó para terminar la discriminación racial. Ayudó a crear leyes importantes para proteger la igualdad de derechos."
  },
  "Martin Luther King, Jr. is famous for many things. Name one.": {
    "en": "Martin Luther King, Jr. fought for civil rights using nonviolent protest. He helped lead the movement for racial equality.",
    "es": "Martin Luther King, Jr. luchó por los derechos civiles usando protesta no violenta. Ayudó a liderar el movimiento por la igualdad racial."
  },
  "Why did the United States enter the Persian Gulf War?": {
    "en": "The U.S. entered the Persian Gulf War after Iraq invaded Kuwait. The goal was to force Iraqi forces out of Kuwait.",
    "es": "EE.UU. entró en la Guerra del Golfo Pérsico después de que Irak invadió Kuwait. El objetivo fue expulsar a las fuerzas iraquíes de Kuwait."
  },
  "What major event happened on September 11, 2001, in the United States?": {
    "en": "On September 11, 2001, terrorists attacked the United States. The attacks led to major security changes and military action.",
    "es": "El 11 de septiembre de 2001, terroristas atacaron Estados Unidos. Los ataques llevaron a grandes cambios de seguridad y acción militar."
  },
  "Name one U.S. military conflict after the September 11, 2001 attacks.": {
    "en": "The War in Afghanistan began after the September 11 attacks. It was part of the U.S. response to terrorism.",
    "es": "La Guerra en Afganistán empezó después de los ataques del 11 de septiembre. Fue parte de la respuesta de EE.UU. al terrorismo."
  },
  "Name one American Indian tribe in the United States.": {
    "en": "Cherokee is one example of an American Indian tribe. There are many recognized tribes with different histories and cultures.",
    "es": "Cherokee es un ejemplo de tribu indígena americana. Hay muchas tribus reconocidas con diferentes historias y culturas."
  },
  "Name one example of an American innovation.": {
    "en": "The airplane is an example of American innovation. The Wright brothers made the first successful powered flight in 1903.",
    "es": "El avión es un ejemplo de innovación estadounidense. Los hermanos Wright hicieron el primer vuelo motorizado exitoso en 1903."
  },
  "What is the capital of the United States?": {
    "en": "Washington, D.C. is the capital of the United States. It is not a state and was created as the federal capital.",
    "es": "Washington, D.C. es la capital de Estados Unidos. No es un estado y fue creada como capital federal."
  },
  "Where is the Statue of Liberty?": {
    "en": "The Statue of Liberty is in New York Harbor. It was a gift from France and became a symbol of freedom.",
    "es": "La Estatua de la Libertad está en el puerto de Nueva York. Fue un regalo de Francia y se convirtió en símbolo de libertad."
  },
  "Why does the flag have 13 stripes?": {
    "en": "The 13 stripes represent the 13 original colonies. These colonies became the first states.",
    "es": "Las 13 franjas representan las 13 colonias originales. Estas colonias se convirtieron en los primeros estados."
  },
  "Why does the flag have 50 stars?": {
    "en": "The 50 stars represent the 50 states. Each star stands for one state in the Union.",
    "es": "Las 50 estrellas representan los 50 estados. Cada estrella representa un estado de la Unión."
  },
  "What is the name of the national anthem?": {
    "en": "The national anthem is “The Star-Spangled Banner.” It was inspired by the defense of Fort McHenry during the War of 1812.",
    "es": "El himno nacional es “The Star-Spangled Banner.” Fue inspirado por la defensa de Fort McHenry durante la Guerra de 1812."
  },
  "The Nation’s first motto was “E Pluribus Unum.” What does that mean?": {
    "en": "“E Pluribus Unum” means “Out of many, one.” It reflects the idea that many states and people form one nation.",
    "es": "“E Pluribus Unum” significa “De muchos, uno.” Refleja la idea de que muchos estados y personas forman una nación."
  },
  "What is Independence Day?": {
    "en": "Independence Day celebrates the adoption of the Declaration of Independence on July 4, 1776. It marks the birth of the United States as an independent country.",
    "es": "El Día de la Independencia celebra la adopción de la Declaración de Independencia el 4 de julio de 1776. Marca el nacimiento de EE.UU. como país independiente."
  },
  "Name three national U.S. holidays.": {
    "en": "National holidays honor important people, events, and values. Independence Day, Thanksgiving, and Veterans Day are three examples.",
    "es": "Los feriados nacionales honran personas, eventos y valores importantes. El Día de la Independencia, Acción de Gracias y Día de los Veteranos son tres ejemplos."
  },
  "What is Memorial Day?": {
    "en": "Memorial Day honors people who died while serving in the U.S. military. It is observed on the last Monday in May.",
    "es": "Memorial Day honra a las personas que murieron sirviendo en las Fuerzas Armadas de EE.UU. Se observa el último lunes de mayo."
  },
  "What is Veterans Day?": {
    "en": "Veterans Day honors all people who served in the U.S. military. It is observed on November 11.",
    "es": "Veterans Day honra a todas las personas que sirvieron en las Fuerzas Armadas de EE.UU. Se observa el 11 de noviembre."
  }
};

const qData = `
What is the form of government of the United States?|¿Cuál es la forma de gobierno de Estados Unidos?|Republic|República|Monarchy|Monarquía|Dictatorship|Dictadura|Communist state|Estado comunista
What is the supreme law of the land?|¿Cuál es la ley suprema del país?|The Constitution|La Constitución|The Declaration of Independence|La Declaración de Independencia|The Bill of Rights|La Carta de Derechos|The Federalist Papers|Los Papeles Federalistas
Name one thing the U.S. Constitution does.|Nombre una cosa que hace la Constitución de Estados Unidos.|Sets up the government|Establece el gobierno|Chooses state governors|Elige a los gobernadores estatales|Prints money|Imprime dinero|Declares holidays|Declara días festivos
The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?|La Constitución de Estados Unidos empieza con las palabras “We the People”. ¿Qué significa “We the People”?|Self-government|Autogobierno|Only Congress has power|Solo el Congreso tiene poder|The President rules alone|El Presidente gobierna solo|Courts write all laws|Los tribunales escriben todas las leyes
How are changes made to the U.S. Constitution?|¿Cómo se hacen cambios a la Constitución de Estados Unidos?|By amendments|Por medio de enmiendas|By the President alone|Solo por el Presidente|By state governors only|Solo por gobernadores estatales|By the military|Por el ejército
What does the Bill of Rights protect?|¿Qué protege la Carta de Derechos?|Basic rights of Americans|Los derechos básicos de los estadounidenses|Only the President|Solo al Presidente|Only state governments|Solo a los gobiernos estatales|Foreign governments|Gobiernos extranjeros
How many amendments does the Constitution have?|¿Cuántas enmiendas tiene la Constitución?|27|27|10|10|13|13|50|50
Why is the Declaration of Independence important?|¿Por qué es importante la Declaración de Independencia?|It says America is free from British control|Dice que Estados Unidos es libre del control británico|It created the Supreme Court|Creó la Corte Suprema|It started the Civil War|Empezó la Guerra Civil|It created income tax|Creó el impuesto sobre la renta
What founding document said the American colonies were free from Britain?|¿Qué documento fundacional dijo que las colonias americanas eran libres de Gran Bretaña?|The Declaration of Independence|La Declaración de Independencia|The Constitution|La Constitución|The Bill of Rights|La Carta de Derechos|The Mayflower Compact|El Pacto del Mayflower
Name two important ideas from the Declaration of Independence and the Constitution.|Nombre dos ideas importantes de la Declaración de Independencia y la Constitución.|Liberty and equality|Libertad e igualdad|War and taxes|Guerra e impuestos|Kings and queens|Reyes y reinas|Money and trade|Dinero y comercio
The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?|Las palabras “Life, Liberty, and the pursuit of Happiness” están en qué documento fundacional?|The Declaration of Independence|La Declaración de Independencia|The Constitution|La Constitución|The Federalist Papers|Los Papeles Federalistas|The Articles of Confederation|Los Artículos de la Confederación
What is the economic system of the United States?|¿Cuál es el sistema económico de Estados Unidos?|Capitalist economy|Economía capitalista|Communist economy|Economía comunista|Monarchy economy|Economía monárquica|Feudal economy|Economía feudal
What is the rule of law?|¿Qué es el estado de derecho?|Everyone must follow the law|Todos deben obedecer la ley|Only citizens follow the law|Solo los ciudadanos obedecen la ley|The President is above the law|El Presidente está por encima de la ley|Judges do not follow laws|Los jueces no obedecen leyes
Many documents influenced the U.S. Constitution. Name one.|Muchos documentos influyeron en la Constitución de Estados Unidos. Nombre uno.|Declaration of Independence|Declaración de Independencia|Social Security card|Tarjeta del Seguro Social|U.S. passport|Pasaporte estadounidense|Driver’s license|Licencia de conducir
There are three branches of government. Why?|Hay tres ramas del gobierno. ¿Por qué?|So one part does not become too powerful|Para que una parte no tenga demasiado poder|So voting is not needed|Para que no sea necesario votar|So states cannot make laws|Para que los estados no puedan hacer leyes|So courts control elections|Para que los tribunales controlen las elecciones
Name the three branches of government.|Nombre las tres ramas del gobierno.|Legislative, executive, judicial|Legislativa, ejecutiva y judicial|Federal, state, city|Federal, estatal y municipal|Army, Navy, Air Force|Ejército, Marina y Fuerza Aérea|President, governor, mayor|Presidente, gobernador y alcalde
The President of the United States is part of which branch of government?|El Presidente de Estados Unidos forma parte de qué rama del gobierno?|Executive branch|Rama ejecutiva|Judicial branch|Rama judicial|Legislative branch|Rama legislativa|State branch|Rama estatal
What part of the federal government writes laws?|¿Qué parte del gobierno federal escribe las leyes?|Congress|El Congreso|The Supreme Court|La Corte Suprema|The President|El Presidente|The Cabinet|El Gabinete
What are the two parts of the U.S. Congress?|¿Cuáles son las dos partes del Congreso de Estados Unidos?|Senate and House of Representatives|Senado y Cámara de Representantes|President and Vice President|Presidente y Vicepresidente|Supreme Court and Cabinet|Corte Suprema y Gabinete|Army and Navy|Ejército y Marina
Name one power of the U.S. Congress.|Nombre un poder del Congreso de Estados Unidos.|Writes laws|Escribe leyes|Commands the military alone|Comanda el ejército solo|Decides court cases|Decide casos judiciales|Runs state schools|Dirige escuelas estatales
How many U.S. Senators are there?|¿Cuántos senadores hay en Estados Unidos?|100|100|50|50|435|435|9|9
How long is a term for a U.S. Senator?|¿Cuánto dura el mandato de un senador de Estados Unidos?|6 years|6 años|2 years|2 años|4 years|4 años|10 years|10 años
Who is one U.S. Senator from Illinois now?|¿Quién es un senador de Estados Unidos por Illinois ahora?|Dick Durbin|Dick Durbin|Mike Johnson|Mike Johnson|JD Vance|JD Vance|John Roberts|John Roberts
Who is another U.S. Senator from Illinois now?|¿Quién es otro senador de Estados Unidos por Illinois ahora?|Tammy Duckworth|Tammy Duckworth|Chuck Schumer|Chuck Schumer|Marco Rubio|Marco Rubio|Mike Johnson|Mike Johnson
How many voting members are in the House of Representatives?|¿Cuántos miembros con voto hay en la Cámara de Representantes?|435|435|100|100|50|50|9|9
How long is a term for a member of the House of Representatives?|¿Cuánto dura el mandato de un miembro de la Cámara de Representantes?|2 years|2 años|4 years|4 años|6 years|6 años|8 years|8 años
Why do U.S. representatives serve shorter terms than U.S. senators?|¿Por qué los representantes sirven mandatos más cortos que los senadores?|To more closely follow public opinion|Para seguir más de cerca la opinión pública|Because they are judges|Porque son jueces|Because they are appointed|Porque son nombrados|Because they serve for life|Porque sirven de por vida
How many senators does each state have?|¿Cuántos senadores tiene cada estado?|2|2|1|1|4|4|10|10
Why does each state have two senators?|¿Por qué cada estado tiene dos senadores?|Equal representation for each state|Representación igual para cada estado|Because each state has two capitals|Porque cada estado tiene dos capitales|Because each state has two governors|Porque cada estado tiene dos gobernadores|Because the President chooses two|Porque el Presidente elige dos
Who does a U.S. Senator represent?|¿A quién representa un senador de Estados Unidos?|Citizens of their state|A los ciudadanos de su estado|Only the President|Solo al Presidente|Only judges|Solo a los jueces|Only one city|Solo a una ciudad
Who elects U.S. Senators?|¿Quién elige a los senadores de Estados Unidos?|Citizens from their state|Los ciudadanos de su estado|The Supreme Court|La Corte Suprema|The President|El Presidente|The Cabinet|El Gabinete
Who does a member of the House of Representatives represent?|¿A quién representa un miembro de la Cámara de Representantes?|Citizens in their district|A los ciudadanos de su distrito|Only senators|Solo a los senadores|Only governors|Solo a los gobernadores|Only the military|Solo al ejército
Who elects members of the House of Representatives?|¿Quién elige a los miembros de la Cámara de Representantes?|Citizens from their district|Los ciudadanos de su distrito|The President|El Presidente|The Supreme Court|La Corte Suprema|Foreign leaders|Líderes extranjeros
Some states have more representatives than other states. Why?|Algunos estados tienen más representantes que otros. ¿Por qué?|Because some states have more people|Porque algunos estados tienen más población|Because some states are older|Porque algunos estados son más antiguos|Because some states have more flags|Porque algunos estados tienen más banderas|Because some states pay more taxes|Porque algunos estados pagan más impuestos
The President of the United States is elected for how many years?|¿Por cuántos años es elegido el Presidente de Estados Unidos?|4 years|4 años|2 years|2 años|6 years|6 años|8 years|8 años
The President of the United States can serve only two terms. Why?|El Presidente de Estados Unidos solo puede servir dos mandatos. ¿Por qué?|Because of the 22nd Amendment|Por la Enmienda 22|Because of the First Amendment|Por la Primera Enmienda|Because of the Civil War|Por la Guerra Civil|Because of the Supreme Court only|Solo por la Corte Suprema
Who is the President of the United States now?|¿Quién es el Presidente de Estados Unidos ahora?|Donald Trump|Donald Trump|Joe Biden|Joe Biden|Barack Obama|Barack Obama|George Washington|George Washington
Who is the Vice President of the United States now?|¿Quién es el Vicepresidente de Estados Unidos ahora?|JD Vance|JD Vance|Kamala Harris|Kamala Harris|Mike Johnson|Mike Johnson|Chuck Schumer|Chuck Schumer
If the President can no longer serve, who becomes President?|Si el Presidente ya no puede servir, ¿quién se convierte en Presidente?|The Vice President|El Vicepresidente|The Speaker of the House|El Presidente de la Cámara|The Chief Justice|El Juez Presidente|The governor|El gobernador
If both the President and Vice President can no longer serve, who becomes President?|Si el Presidente y el Vicepresidente ya no pueden servir, ¿quién se convierte en Presidente?|The Speaker of the House of Representatives|El Presidente de la Cámara de Representantes|The Chief Justice|El Juez Presidente|The Secretary of Defense|El Secretario de Defensa|A governor|Un gobernador
Name one power of the President.|Nombre un poder del Presidente.|Signs bills into law|Firma proyectos de ley para convertirlos en ley|Prints money|Imprime dinero|Decides Supreme Court cases|Decide casos de la Corte Suprema|Changes the Constitution alone|Cambia la Constitución solo
Who is Commander in Chief of the U.S. military?|¿Quién es el Comandante en Jefe de las Fuerzas Armadas de Estados Unidos?|The President|El Presidente|The Speaker of the House|El Presidente de la Cámara|The Chief Justice|El Juez Presidente|The governor|El gobernador
Who signs bills to become laws?|¿Quién firma los proyectos de ley para convertirlos en ley?|The President|El Presidente|The Supreme Court|La Corte Suprema|The governor|El gobernador|The military|El ejército
Who vetoes bills?|¿Quién veta los proyectos de ley?|The President|El Presidente|The Supreme Court|La Corte Suprema|The House only|Solo la Cámara|The Cabinet|El Gabinete
Who appoints federal judges?|¿Quién nombra a los jueces federales?|The President|El Presidente|State governors|Gobernadores estatales|Local mayors|Alcaldes locales|Voters directly|Los votantes directamente
The executive branch has many parts. Name one.|La rama ejecutiva tiene muchas partes. Nombre una.|The President|El Presidente|The Supreme Court|La Corte Suprema|The Senate|El Senado|The House|La Cámara
What does the President’s Cabinet do?|¿Qué hace el Gabinete del Presidente?|Advises the President|Aconseja al Presidente|Elects senators|Elige senadores|Runs the Supreme Court|Dirige la Corte Suprema|Writes the Constitution|Escribe la Constitución
What are two Cabinet-level positions?|¿Cuáles son dos cargos a nivel de Gabinete?|Secretary of State and Secretary of Defense|Secretario de Estado y Secretario de Defensa|Governor and Mayor|Gobernador y alcalde|Senator and Representative|Senador y representante|Judge and Sheriff|Juez y sheriff
Why is the Electoral College important?|¿Por qué es importante el Colegio Electoral?|It decides who is elected President|Decide quién es elegido Presidente|It writes the Bill of Rights|Escribe la Carta de Derechos|It runs the Supreme Court|Dirige la Corte Suprema|It prints money|Imprime dinero
What is one part of the judicial branch?|¿Cuál es una parte de la rama judicial?|Supreme Court|Corte Suprema|Congress|Congreso|President|Presidente|Cabinet|Gabinete
What does the judicial branch do?|¿Qué hace la rama judicial?|Reviews laws|Revisa las leyes|Commands the military|Comanda el ejército|Writes all laws|Escribe todas las leyes|Elects the President|Elige al Presidente
What is the highest court in the United States?|¿Cuál es el tribunal más alto de Estados Unidos?|Supreme Court|Corte Suprema|District Court|Tribunal de distrito|State Court|Tribunal estatal|Traffic Court|Tribunal de tránsito
How many seats are on the Supreme Court?|¿Cuántos puestos hay en la Corte Suprema?|9|9|7|7|10|10|100|100
How many Supreme Court justices are usually needed to decide a case?|¿Cuántos jueces de la Corte Suprema se necesitan normalmente para decidir un caso?|5|5|1|1|2|2|100|100
How long do Supreme Court justices serve?|¿Cuánto tiempo sirven los jueces de la Corte Suprema?|For life|De por vida|2 years|2 años|4 years|4 años|6 years|6 años
Supreme Court justices serve for life. Why?|Los jueces de la Corte Suprema sirven de por vida. ¿Por qué?|To be independent of politics|Para ser independientes de la política|To become President|Para convertirse en Presidente|To run Congress|Para dirigir el Congreso|To avoid all laws|Para evitar todas las leyes
Who is the Chief Justice of the United States now?|¿Quién es el Juez Presidente de Estados Unidos ahora?|John Roberts|John Roberts|Clarence Thomas|Clarence Thomas|Brett Kavanaugh|Brett Kavanaugh|Neil Gorsuch|Neil Gorsuch
Name one power that is only for the federal government.|Nombre un poder que pertenece solo al gobierno federal.|Print paper money|Imprimir papel moneda|Give a driver’s license|Dar licencias de conducir|Run city schools|Dirigir escuelas municipales|Approve local zoning|Aprobar zonificación local
Name one power that is only for the states.|Nombre un poder que pertenece solo a los estados.|Give a driver’s license|Dar licencias de conducir|Print money|Imprimir dinero|Declare war|Declarar guerra|Make treaties|Hacer tratados
What is the purpose of the 10th Amendment?|¿Cuál es el propósito de la Enmienda 10?|Powers not given to the federal government belong to the states or the people|Los poderes no dados al gobierno federal pertenecen a los estados o al pueblo|It created the President|Creó al Presidente|It created the flag|Creó la bandera|It ended slavery|Terminó la esclavitud
Who is the Governor of Illinois now?|¿Quién es el gobernador de Illinois ahora?|JB Pritzker|JB Pritzker|Donald Trump|Donald Trump|Mike Johnson|Mike Johnson|John Roberts|John Roberts
What is the capital of Illinois?|¿Cuál es la capital de Illinois?|Springfield|Springfield|Chicago|Chicago|Peoria|Peoria|Rockford|Rockford
Who is the Speaker of the House of Representatives now?|¿Quién es el Presidente de la Cámara de Representantes ahora?|Mike Johnson|Mike Johnson|Chuck Schumer|Chuck Schumer|John Roberts|John Roberts|JD Vance|JD Vance
There are four amendments to the U.S. Constitution about who can vote. Describe one.|Hay cuatro enmiendas de la Constitución sobre quién puede votar. Describa una.|Citizens 18 and older can vote|Los ciudadanos de 18 años o más pueden votar|Only men can vote|Solo los hombres pueden votar|Only landowners can vote|Solo los propietarios pueden votar|Only governors can vote|Solo los gobernadores pueden votar
Who can vote in federal elections, run for federal office, and serve on a jury in the United States?|¿Quién puede votar en elecciones federales, postularse a cargos federales y servir en un jurado en Estados Unidos?|Citizens|Los ciudadanos|Tourists|Los turistas|Foreign diplomats|Los diplomáticos extranjeros|Only judges|Solo los jueces
What are three rights of everyone living in the United States?|¿Cuáles son tres derechos de todas las personas que viven en Estados Unidos?|Freedom of speech, religion, and assembly|Libertad de expresión, religión y reunión|Free car, free house, free college|Auto gratis, casa gratis y universidad gratis|Right to ignore laws, taxes, and courts|Derecho a ignorar leyes, impuestos y tribunales|Right to become President immediately|Derecho a ser Presidente de inmediato
What do we show loyalty to when we say the Pledge of Allegiance?|¿A qué mostramos lealtad cuando decimos el Juramento a la Bandera?|The United States|A Estados Unidos|The United Nations|A las Naciones Unidas|A state governor|A un gobernador estatal|A foreign country|A un país extranjero
Name two promises that new citizens make in the Oath of Allegiance.|Nombre dos promesas que hacen los nuevos ciudadanos en el Juramento de Lealtad.|Give up loyalty to other countries and defend the Constitution|Renunciar a la lealtad a otros países y defender la Constitución|Never vote and never pay taxes|Nunca votar y nunca pagar impuestos|Join Congress and become judge|Unirse al Congreso y ser juez|Move to Washington, D.C.|Mudarse a Washington, D.C.
How can people become United States citizens?|¿Cómo pueden las personas convertirse en ciudadanos de Estados Unidos?|Naturalize|Naturalizarse|Buy a passport online|Comprar un pasaporte en internet|Pay a traffic ticket|Pagar una multa de tránsito|Join a private club|Unirse a un club privado
What are two examples of civic participation in the United States?|¿Cuáles son dos ejemplos de participación cívica en Estados Unidos?|Vote and join a political party|Votar y unirse a un partido político|Ignore laws and avoid taxes|Ignorar leyes y evitar impuestos|Buy a car and rent a house|Comprar un auto y alquilar una casa|Travel and shop|Viajar y comprar
What is one way Americans can serve their country?|¿Cuál es una forma en que los estadounidenses pueden servir a su país?|Vote|Votar|Avoid jury duty|Evitar servir en un jurado|Ignore elections|Ignorar las elecciones|Refuse to pay taxes|Negarse a pagar impuestos
Why is it important to pay federal taxes?|¿Por qué es importante pagar impuestos federales?|Required by law|Es requerido por la ley|Only tourists pay taxes|Solo los turistas pagan impuestos|Taxes are optional|Los impuestos son opcionales|Only children pay taxes|Solo los niños pagan impuestos
Why should men age 18 through 25 register for Selective Service?|¿Por qué los hombres de 18 a 25 años deben registrarse en el Servicio Selectivo?|Required by law|Es requerido por la ley|To get free college automatically|Para recibir universidad gratis automáticamente|To become President|Para convertirse en Presidente|To avoid citizenship|Para evitar la ciudadanía
The colonists came to America for many reasons. Name one.|Los colonos vinieron a América por muchas razones. Nombre una.|Freedom|Libertad|To elect a king|Para elegir un rey|To start the Supreme Court|Para crear la Corte Suprema|To build the White House|Para construir la Casa Blanca
Who lived in America before the Europeans arrived?|¿Quién vivía en América antes de que llegaran los europeos?|American Indians|Indígenas americanos|Pilgrims only|Solo peregrinos|British soldiers|Soldados británicos|French kings|Reyes franceses
What group of people was taken and sold as slaves?|¿Qué grupo de personas fue llevado y vendido como esclavos?|Africans|Africanos|Pilgrims|Peregrinos|Senators|Senadores|Judges|Jueces
What war did the Americans fight to win independence from Britain?|¿Qué guerra pelearon los estadounidenses para ganar la independencia de Gran Bretaña?|The American Revolution|La Revolución Americana|The Civil War|La Guerra Civil|World War I|La Primera Guerra Mundial|The Korean War|La Guerra de Corea
Name one reason why the Americans declared independence from Britain.|Nombre una razón por la que los estadounidenses declararon la independencia de Gran Bretaña.|High taxes|Impuestos altos|They wanted a king|Querían un rey|They wanted fewer rights|Querían menos derechos|They wanted British control|Querían control británico
Who wrote the Declaration of Independence?|¿Quién escribió la Declaración de Independencia?|Thomas Jefferson|Thomas Jefferson|George Washington|George Washington|Abraham Lincoln|Abraham Lincoln|John Roberts|John Roberts
When was the Declaration of Independence adopted?|¿Cuándo fue adoptada la Declaración de Independencia?|July 4, 1776|4 de julio de 1776|September 17, 1787|17 de septiembre de 1787|April 15, 1865|15 de abril de 1865|December 7, 1941|7 de diciembre de 1941
The American Revolution had many important events. Name one.|La Revolución Americana tuvo muchos eventos importantes. Nombre uno.|Battle of Yorktown|Batalla de Yorktown|Pearl Harbor|Pearl Harbor|D-Day|Día D|The moon landing|La llegada a la Luna
There were 13 original states. Name five.|Había 13 estados originales. Nombre cinco.|New York, New Jersey, Pennsylvania, Delaware, Georgia|Nueva York, Nueva Jersey, Pensilvania, Delaware y Georgia|California, Texas, Florida, Alaska, Hawaii|California, Texas, Florida, Alaska y Hawái|Illinois, Ohio, Michigan, Wisconsin, Indiana|Illinois, Ohio, Michigan, Wisconsin e Indiana|Nevada, Arizona, Utah, Idaho, Oregon|Nevada, Arizona, Utah, Idaho y Oregón
What founding document was written in 1787?|¿Qué documento fundacional fue escrito en 1787?|The Constitution|La Constitución|The Declaration of Independence|La Declaración de Independencia|The Emancipation Proclamation|La Proclamación de Emancipación|The Gettysburg Address|El Discurso de Gettysburg
The Federalist Papers supported the passage of the U.S. Constitution. Name one writer.|Los Papeles Federalistas apoyaron la aprobación de la Constitución. Nombre un escritor.|James Madison|James Madison|Abraham Lincoln|Abraham Lincoln|Franklin Roosevelt|Franklin Roosevelt|Martin Luther King, Jr.|Martin Luther King, Jr.
Why were the Federalist Papers important?|¿Por qué fueron importantes los Papeles Federalistas?|They helped people understand the Constitution|Ayudaron a la gente a entender la Constitución|They ended World War II|Terminaron la Segunda Guerra Mundial|They created the flag|Crearon la bandera|They started the Civil War|Empezaron la Guerra Civil
Benjamin Franklin is famous for many things. Name one.|Benjamin Franklin es famoso por muchas cosas. Nombre una.|U.S. diplomat|Diplomático estadounidense|First President|Primer Presidente|Civil War general|General de la Guerra Civil|Supreme Court Chief Justice|Juez Presidente de la Corte Suprema
George Washington is famous for many things. Name one.|George Washington es famoso por muchas cosas. Nombre una.|First President of the United States|Primer Presidente de Estados Unidos|Writer of the Declaration of Independence|Escritor de la Declaración de Independencia|President during World War II|Presidente durante la Segunda Guerra Mundial|Leader of the civil rights movement|Líder del movimiento de derechos civiles
Thomas Jefferson is famous for many things. Name one.|Thomas Jefferson es famoso por muchas cosas. Nombre una.|Writer of the Declaration of Independence|Escritor de la Declaración de Independencia|First Chief Justice|Primer Juez Presidente|President during the Civil War|Presidente durante la Guerra Civil|Commander in World War II|Comandante en la Segunda Guerra Mundial
James Madison is famous for many things. Name one.|James Madison es famoso por muchas cosas. Nombre una.|Father of the Constitution|Padre de la Constitución|First President|Primer Presidente|President during the Great Depression|Presidente durante la Gran Depresión|Civil rights leader|Líder de derechos civiles
Alexander Hamilton is famous for many things. Name one.|Alexander Hamilton es famoso por muchas cosas. Nombre una.|First Secretary of the Treasury|Primer Secretario del Tesoro|First President|Primer Presidente|Writer of the Emancipation Proclamation|Escritor de la Proclamación de Emancipación|President during World War II|Presidente durante la Segunda Guerra Mundial
What territory did the United States buy from France in 1803?|¿Qué territorio compró Estados Unidos a Francia en 1803?|Louisiana Territory|Territorio de Luisiana|Alaska|Alaska|Florida|Florida|Texas|Texas
Name one war fought by the United States in the 1800s.|Nombre una guerra peleada por Estados Unidos en los años 1800.|Civil War|Guerra Civil|World War II|Segunda Guerra Mundial|Korean War|Guerra de Corea|Vietnam War|Guerra de Vietnam
Name the U.S. war between the North and the South.|Nombre la guerra de Estados Unidos entre el Norte y el Sur.|Civil War|Guerra Civil|World War I|Primera Guerra Mundial|Revolutionary War|Guerra Revolucionaria|Persian Gulf War|Guerra del Golfo Pérsico
The Civil War had many important events. Name one.|La Guerra Civil tuvo muchos eventos importantes. Nombre uno.|Battle of Gettysburg|Batalla de Gettysburg|Pearl Harbor|Pearl Harbor|September 11 attacks|Ataques del 11 de septiembre|D-Day|Día D
Name one reason why the Civil War started.|Nombre una razón por la que empezó la Guerra Civil.|Slavery|Esclavitud|The moon landing|La llegada a la Luna|The Cold War|La Guerra Fría|Women’s suffrage|El sufragio femenino
What did the Emancipation Proclamation do?|¿Qué hizo la Proclamación de Emancipación?|Freed the slaves|Liberó a los esclavos|Created the Supreme Court|Creó la Corte Suprema|Bought Louisiana|Compró Luisiana|Started World War I|Empezó la Primera Guerra Mundial
What amendment gives citizenship to all persons born in the United States?|¿Qué enmienda da ciudadanía a todas las personas nacidas en Estados Unidos?|14th Amendment|Enmienda 14|1st Amendment|Primera Enmienda|2nd Amendment|Segunda Enmienda|19th Amendment|Enmienda 19
What amendment gave voting rights to men of all races?|¿Qué enmienda dio derechos de voto a hombres de todas las razas?|15th Amendment|Enmienda 15|13th Amendment|Enmienda 13|14th Amendment|Enmienda 14|22nd Amendment|Enmienda 22
Name one leader of the women’s rights movement in the 1800s.|Nombre una líder del movimiento por los derechos de la mujer en los años 1800.|Susan B. Anthony|Susan B. Anthony|Rosa Parks|Rosa Parks|Betsy Ross|Betsy Ross|Harriet Tubman|Harriet Tubman
Name one war fought by the United States in the 1900s.|Nombre una guerra peleada por Estados Unidos en los años 1900.|World War II|Segunda Guerra Mundial|Civil War|Guerra Civil|American Revolution|Revolución Americana|War of 1812|Guerra de 1812
Why did the United States enter World War I?|¿Por qué entró Estados Unidos en la Primera Guerra Mundial?|Because Germany attacked U.S. ships|Porque Alemania atacó barcos estadounidenses|Because Japan bombed Pearl Harbor|Porque Japón bombardeó Pearl Harbor|Because of the Civil War|Por la Guerra Civil|Because France sold Louisiana|Porque Francia vendió Luisiana
When did all women get the right to vote?|¿Cuándo obtuvieron todas las mujeres el derecho al voto?|1920|1920|1776|1776|1787|1787|1865|1865
What was the Great Depression?|¿Qué fue la Gran Depresión?|A long and severe economic recession|Una recesión económica larga y severa|A war in Europe|Una guerra en Europa|A Supreme Court case|Un caso de la Corte Suprema|A national holiday|Un feriado nacional
When did the Great Depression start?|¿Cuándo empezó la Gran Depresión?|1929|1929|1776|1776|1861|1861|1945|1945
Who was President during the Great Depression and World War II?|¿Quién fue Presidente durante la Gran Depresión y la Segunda Guerra Mundial?|Franklin Roosevelt|Franklin Roosevelt|Abraham Lincoln|Abraham Lincoln|George Washington|George Washington|John Adams|John Adams
Why did the United States enter World War II?|¿Por qué entró Estados Unidos en la Segunda Guerra Mundial?|Japan bombed Pearl Harbor|Japón bombardeó Pearl Harbor|Germany attacked U.S. ships|Alemania atacó barcos estadounidenses|The Civil War started|Empezó la Guerra Civil|The Constitution was written|Se escribió la Constitución
Dwight Eisenhower is famous for many things. Name one.|Dwight Eisenhower es famoso por muchas cosas. Nombre una.|General during World War II|General durante la Segunda Guerra Mundial|Writer of the Declaration of Independence|Escritor de la Declaración de Independencia|First President|Primer Presidente|Civil rights leader|Líder de derechos civiles
Who was the United States’ main rival during the Cold War?|¿Quién fue el principal rival de Estados Unidos durante la Guerra Fría?|Soviet Union|Unión Soviética|Canada|Canadá|Mexico|México|France|Francia
During the Cold War, what was one main concern of the United States?|Durante la Guerra Fría, ¿cuál fue una preocupación principal de Estados Unidos?|Communism|Comunismo|The American Revolution|La Revolución Americana|The Louisiana Purchase|La Compra de Luisiana|The Bill of Rights|La Carta de Derechos
Why did the United States enter the Korean War?|¿Por qué entró Estados Unidos en la Guerra de Corea?|To stop the spread of communism|Para detener la expansión del comunismo|To buy land from France|Para comprar tierra de Francia|To write the Constitution|Para escribir la Constitución|To end the American Revolution|Para terminar la Revolución Americana
Why did the United States enter the Vietnam War?|¿Por qué entró Estados Unidos en la Guerra de Vietnam?|To stop the spread of communism|Para detener la expansión del comunismo|Because Japan bombed Pearl Harbor|Porque Japón bombardeó Pearl Harbor|To fight Britain|Para luchar contra Gran Bretaña|To create the Supreme Court|Para crear la Corte Suprema
What did the civil rights movement do?|¿Qué hizo el movimiento de derechos civiles?|Fought to end racial discrimination|Luchó para terminar la discriminación racial|Started the Civil War|Empezó la Guerra Civil|Created income tax|Creó el impuesto sobre la renta|Bought Alaska|Compró Alaska
Martin Luther King, Jr. is famous for many things. Name one.|Martin Luther King, Jr. es famoso por muchas cosas. Nombre una.|Fought for civil rights|Luchó por los derechos civiles|First President|Primer Presidente|Writer of the Constitution|Escritor de la Constitución|World War II general|General de la Segunda Guerra Mundial
Why did the United States enter the Persian Gulf War?|¿Por qué entró Estados Unidos en la Guerra del Golfo Pérsico?|To force the Iraqi military from Kuwait|Para expulsar al ejército iraquí de Kuwait|To fight Britain|Para luchar contra Gran Bretaña|To buy Louisiana|Para comprar Luisiana|To end slavery|Para terminar la esclavitud
What major event happened on September 11, 2001, in the United States?|¿Qué evento importante ocurrió el 11 de septiembre de 2001 en Estados Unidos?|Terrorists attacked the United States|Terroristas atacaron Estados Unidos|The Civil War ended|Terminó la Guerra Civil|The Constitution was written|Se escribió la Constitución|Women got the right to vote|Las mujeres obtuvieron el derecho al voto
Name one U.S. military conflict after the September 11, 2001 attacks.|Nombre un conflicto militar de Estados Unidos después de los ataques del 11 de septiembre de 2001.|War in Afghanistan|Guerra en Afganistán|Civil War|Guerra Civil|American Revolution|Revolución Americana|War of 1812|Guerra de 1812
Name one American Indian tribe in the United States.|Nombre una tribu indígena americana en Estados Unidos.|Cherokee|Cherokee|German|Alemana|French|Francesa|Italian|Italiana
Name one example of an American innovation.|Nombre un ejemplo de innovación estadounidense.|Airplane|Avión|Monarchy|Monarquía|Feudalism|Feudalismo|Crown jewels|Joyas de la corona
What is the capital of the United States?|¿Cuál es la capital de Estados Unidos?|Washington, D.C.|Washington, D.C.|New York City|Nueva York|Los Angeles|Los Ángeles|Chicago|Chicago
Where is the Statue of Liberty?|¿Dónde está la Estatua de la Libertad?|New York Harbor|Puerto de Nueva York|Chicago|Chicago|Washington, D.C.|Washington, D.C.|Los Angeles|Los Ángeles
Why does the flag have 13 stripes?|¿Por qué la bandera tiene 13 franjas?|Because there were 13 original colonies|Porque había 13 colonias originales|Because there are 13 presidents|Porque hay 13 presidentes|Because there are 13 senators|Porque hay 13 senadores|Because there are 13 Supreme Court justices|Porque hay 13 jueces de la Corte Suprema
Why does the flag have 50 stars?|¿Por qué la bandera tiene 50 estrellas?|Because there are 50 states|Porque hay 50 estados|Because there are 50 senators|Porque hay 50 senadores|Because there are 50 amendments|Porque hay 50 enmiendas|Because there are 50 presidents|Porque hay 50 presidentes
What is the name of the national anthem?|¿Cuál es el nombre del himno nacional?|The Star-Spangled Banner|The Star-Spangled Banner|America the Beautiful|America the Beautiful|God Bless America|God Bless America|My Country, ’Tis of Thee|My Country, ’Tis of Thee
The Nation’s first motto was “E Pluribus Unum.” What does that mean?|El primer lema de la nación fue “E Pluribus Unum.” ¿Qué significa?|Out of many, one|De muchos, uno|In God We Trust|En Dios confiamos|Life and liberty|Vida y libertad|We the people|Nosotros el pueblo
What is Independence Day?|¿Qué es el Día de la Independencia?|A holiday celebrating U.S. independence|Un feriado que celebra la independencia de Estados Unidos|A holiday honoring veterans|Un feriado que honra a los veteranos|A holiday for workers|Un feriado para los trabajadores|A holiday for presidents|Un feriado para los presidentes
Name three national U.S. holidays.|Nombre tres feriados nacionales de Estados Unidos.|Independence Day, Thanksgiving, Veterans Day|Día de la Independencia, Día de Acción de Gracias y Día de los Veteranos|Halloween, Valentine’s Day, April Fools’ Day|Halloween, Día de San Valentín y Día de los Inocentes|Super Bowl Sunday, Black Friday, Tax Day|Domingo del Super Bowl, Black Friday y Día de Impuestos|Election Day, Flag Day, Groundhog Day|Día de Elecciones, Día de la Bandera y Día de la Marmota
What is Memorial Day?|¿Qué es Memorial Day?|A holiday honoring people who died while serving in the U.S. military|Un feriado que honra a las personas que murieron sirviendo en las Fuerzas Armadas de Estados Unidos|A holiday celebrating independence|Un feriado que celebra la independencia|A holiday for the President|Un feriado para el Presidente|A holiday for taxes|Un feriado para impuestos
What is Veterans Day?|¿Qué es Veterans Day?|A holiday honoring people who served in the U.S. military|Un feriado que honra a las personas que sirvieron en las Fuerzas Armadas de Estados Unidos|A holiday only for new citizens|Un feriado solo para nuevos ciudadanos|A holiday only for Congress|Un feriado solo para el Congreso|A holiday celebrating only the Constitution|Un feriado que celebra solo la Constitución
`;

let allQuestions = [];
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let questionLang = "en";

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function loadQuestions() {
  allQuestions = qData.trim().split("\n").map(line => {
    const p = line.split("|");
    return {
      q_en: p[0],
      q_es: p[1],
      answer_en: p[2],
      answer_es: p[3],
      options_en: [p[2], p[4], p[6], p[8]],
      options_es: [p[3], p[5], p[7], p[9]]
    };
  });
}

function updateStaticText() {
  document.getElementById("subtitle").innerText = lang === "en" ? "Practice Quiz" : "Cuestionario de práctica";
  document.getElementById("lang-btn").innerText = lang === "en" ? "🇪🇸 Español" : "🇺🇸 English";
  document.getElementById("note").innerText = lang === "en"
    ? "128-question practice pool. Randomly selects 20 questions. 12 correct answers to pass."
    : "Banco de 128 preguntas. Se seleccionan 20 preguntas al azar. Necesitas 12 respuestas correctas para aprobar.";
  document.getElementById("restart-btn").innerText = lang === "en" ? "Try Again" : "Intentar otra vez";
}

function toggleLanguage() {
  lang = lang === "en" ? "es" : "en";
  updateStaticText();

  if (document.getElementById("result-screen").style.display === "block") {
    showResult();
    return;
  }

  if (!answered) showQuestion();
}

function startQuiz() {
  loadQuestions();
  quizQuestions = shuffle(allQuestions).slice(0, 20);
  currentQuestion = 0;
  score = 0;
  answered = false;

  document.getElementById("quiz-screen").style.display = "block";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";

  updateStaticText();
  showQuestion();
}

function showQuestion() {
  answered = false;
  questionLang = lang;

  const question = quizQuestions[currentQuestion];

  document.getElementById("question-count").innerText = lang === "en"
    ? `Question ${currentQuestion + 1} of 20`
    : `Pregunta ${currentQuestion + 1} de 20`;

  document.getElementById("score-count").innerText = lang === "en"
    ? `Score: ${score}`
    : `Puntuación: ${score}`;

  document.getElementById("question-text").innerText = lang === "en" ? question.q_en : question.q_es;
  document.getElementById("feedback").innerText = "";
  document.getElementById("next-btn").style.display = "none";

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  const options = shuffle(lang === "en" ? question.options_en : question.options_es);

  options.forEach(option => {
    const button = document.createElement("button");
    button.className = "answer";
    button.innerText = option;
    button.onclick = () => checkAnswer(button, option, question);
    answersDiv.appendChild(button);
  });
}

function checkAnswer(button, selected, question) {
  if (answered) return;
  answered = true;

  const correct = questionLang === "en" ? question.answer_en : question.answer_es;
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) btn.classList.add("correct");
  });

  const explanation = explanations[question.q_en];
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    score++;
    button.classList.add("correct");
    feedback.innerText = lang === "en" ? "Correct!" : "¡Correcto!";
  } else {
    button.classList.add("wrong");

    let feedbackHtml = lang === "en"
      ? `Correct answer: ${correct}`
      : `Respuesta correcta: ${correct}`;

    if (explanation) {
      feedbackHtml += `
        <br>
        <button class="explanation-toggle" onclick="toggleExplanation()">
          ${lang === "en" ? "Learn more here!" : "¡Aprende más aquí!"}
        </button>
        <div id="explanation-box" class="explanation-panel">
          ${lang === "en" ? explanation.en : explanation.es}
        </div>
      `;
    }

    feedback.innerHTML = feedbackHtml;
  }

  document.getElementById("score-count").innerText = lang === "en" ? `Score: ${score}` : `Puntuación: ${score}`;

  const nextBtn = document.getElementById("next-btn");
  nextBtn.style.display = "inline-block";
  nextBtn.innerText = currentQuestion === 19
    ? (lang === "en" ? "See Result" : "Ver resultado")
    : (lang === "en" ? "Next Question" : "Siguiente pregunta");
}

document.getElementById("next-btn").onclick = function() {
  currentQuestion++;
  if (currentQuestion < 20) showQuestion();
  else showResult();
};

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  const resultTitle = document.getElementById("result-title");
  const resultMessage = document.getElementById("result-message");

  if (score >= 12) {
    resultTitle.innerText = lang === "en" ? "Congratulations, you passed!" : "¡Felicidades, aprobaste!";
    resultTitle.className = "passed";
    resultMessage.innerText = lang === "en"
      ? `You answered ${score} out of 20 questions correctly.`
      : `Respondiste correctamente ${score} de 20 preguntas.`;
  } else {
    resultTitle.innerText = lang === "en" ? "You need to study more to pass." : "Necesitas estudiar más para aprobar.";
    resultTitle.className = "failed";
    resultMessage.innerText = lang === "en"
      ? `You answered ${score} out of 20 questions correctly. You need at least 12 correct answers to pass.`
      : `Respondiste correctamente ${score} de 20 preguntas. Necesitas al menos 12 respuestas correctas para aprobar.`;
  }

  document.getElementById("restart-btn").style.display = "inline-block";
}

function toggleExplanation() {
  const box = document.getElementById("explanation-box");
  if (!box) return;
  box.style.display = box.style.display === "none" || box.style.display === "" ? "block" : "none";
}
document.getElementById("restart-btn").onclick = startQuiz;

const params = new URLSearchParams(window.location.search);

if(params.get("lang") === "es"){
  lang = "es";
}

startQuiz();

if(lang === "es"){
  updateStaticText();
  showQuestion();
}
startQuiz();

