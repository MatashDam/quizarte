const artworks = [
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ghiberticompetition.jpg",
        "title": "FORMELLA GHIBERTI",
        "author": "BATTISTERO"
    },
    {
        "image": "https://www.viaggiatricecuriosa.it/wp-content/uploads/2021/01/lorenzo-ghiberti-porta-del-paradiso-riquadro-giuseppe.jpg",
        "title": "STORIA DI SAN GIUSEPPE",
        "author": "BATTISTERO"
    },
    {
        "image": "https://www.finestresullarte.info/rivista/immagini/2018/fn/porta-paradiso.jpg",
        "title": "PORTA DEL PARADISO GHIBERTI",
        "author": "BATTISTERO"
    },
    {
        "image": "https://www.artesvelata.it/wp-content/uploads/2020/11/Donatello-San-Giorgio-1416-20.-Marmo-arte-svelata.jpg",
        "title": "SAN GIORGIO-DONATELLO",
        "author": "ORSANMICHELE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/FirenzeOrsanmichele03.jpg/640px-FirenzeOrsanmichele03.jpg",
        "title": "QUATTRO SANTI CORONATI-NANNI DI BANCO",
        "author": "ORSANMICHELE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sangiovannievangelista.jpg/205px-Sangiovannievangelista.jpg",
        "title": "SAN GIOVANNI PER SANTA MARIA DEL FIORE",
        "author": "DONATELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Baptismal_font_of_the_Siena_Baptistry_la-test_battista_presenta.jpg",
        "title": "BANCHETTO DI ERODE",
        "author": "DONATELLO"
    },
    {
        "image": "https://www.thehistoryofart.org/donatello/Zuccone%20Donatello.jpg",
        "title": "ZUCCONE",
        "author": "DONATELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Florenz_-_Bargello_2014-08-09r.jpg/800px-Florenz_-_Bargello_2014-08-09r.jpg",
        "title": "DAVID",
        "author": "DONATELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Gattamelata.jpg",
        "title": "MONUMENTO EQUESTRE DI GATTAMELATA",
        "author": "DONATELLO"
    },
    {
        "image": "https://www.santodeimiracoli.org/wp-content/uploads/2020/01/Senza-titolo-11.jpg",
        "title": "ALTARE BASILICA DI SANT\u2019ANTONIO",
        "author": "DONATELLO"
    },
    {
        "image": "https://www.stile24.wp24.it/donatello/wp-content/uploads/sites/10/2017/09/pentito.jpg",
        "title": "MIRACOLO DEL FIGLIO PENTITO",
        "author": "DONATELLO"
    },
    {
        "image": "https://www.meisterdrucke.it/kunstwerke/1260px/Donatello_-_Judith_and_Holofernes_Bronze_Sculpture_-_%28MeisterDrucke-1126393%29.jpg",
        "title": "GIUDITTA E OLOFERNE",
        "author": "DONATELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Florence_duomo_fc10.jpg",
        "title": "SANTA MARIA DEL FIORE",
        "author": "BRUNELLESCHI"
    },
    {
        "image": "https://michelangelobuonarrotietornato.com/wp-content/uploads/2022/08/lanterna.jpg",
        "title": "LA LANTERNA",
        "author": "BRUNELLESCHI"
    },
    {
        "image": "https://www.viaggiatricecuriosa.it/wp-content/uploads/2019/10/basilica-san-lorenzo-interno.jpg",
        "title": "BASILICA DI SAN LORENZO",
        "author": "BRUNELLESCHI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sagrestia_vecchia%2C_veduta_00.jpg/1200px-Sagrestia_vecchia%2C_veduta_00.jpg",
        "title": "SAGRESTIA VECCHIA A SAN LORENZO",
        "author": "BRUNELLESCHI"
    },
    {
        "image": "https://www.abstrartfirenze.org/wp-content/uploads/2018/02/Santo-Spirito.jpg",
        "title": "SANTO SPIRITO",
        "author": "BRUNELLESCHI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/San_Giovenale_Masaccio.jpg/640px-San_Giovenale_Masaccio.jpg",
        "title": "TRITTICO DI SAN GIOVENALE",
        "author": "MASACCIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Masaccio._The_Madonna_and_Child_with_st._Anna._ca._1424._Uffizi%2C_Florence.jpg/640px-Masaccio._The_Madonna_and_Child_with_st._Anna._ca._1424._Uffizi%2C_Florence.jpg",
        "title": "SANT\u2019ANNA METTERZA",
        "author": "MASACCIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Masolino%2C_madonna_dell%27umilt%C3%A0_brema.jpg/800px-Masolino%2C_madonna_dell%27umilt%C3%A0_brema.jpg",
        "title": "MADONNA COL BAMBINO DI MASOLINO",
        "author": "MASACCIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Masaccio_expulsion-1427.jpg/512px-Masaccio_expulsion-1427.jpg",
        "title": "CACCIATA DAL PARADISO- CAPPELLA BRANCACCI E PECCATO ORIGINALE DI MASOLINO",
        "author": "MASACCIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Masolino%2C_adamo_ed_eva.jpg/800px-Masolino%2C_adamo_ed_eva.jpg",
        "title": "CACCIATA DAL PARADISO- CAPPELLA BRANCACCI E PECCATO ORIGINALE DI MASOLINO",
        "author": "MASACCIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Masaccio7.jpg/800px-Masaccio7.jpg",
        "title": "IL TRIBUTO- CAPPELLA BRANCACCI",
        "author": "MASACCIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Battesimo_dei_neofiti_2.jpg",
        "title": "BATTESIMO DEI NEOFITI- CAPPELLA BRANCACCI",
        "author": "MASACCIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Masaccio%2C_trinit%C3%A0.jpg/800px-Masaccio%2C_trinit%C3%A0.jpg",
        "title": "TRINIT**\u00c0**",
        "author": "MASACCIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Fra_Angelico_002.jpg/1200px-Fra_Angelico_002.jpg",
        "title": "IMPOSIZIONE DEL NOME AL BATTISTA",
        "author": "BEATO ANGELICO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Deposizione_%28Angelico%29.jpg/1200px-Deposizione_%28Angelico%29.jpg",
        "title": "PALA STROZZI-DEPOSIZIONE DI CRISTO",
        "author": "BEATO ANGELICO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ANGELICO%2C_Fra_Annunciation%2C_1437-46_%282236990916%29.jpg/640px-ANGELICO%2C_Fra_Annunciation%2C_1437-46_%282236990916%29.jpg",
        "title": "ANNUNCIAZIONE-CONVENTO SAN MARCO",
        "author": "BEATO ANGELICO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Fra_Angelico_060.jpg/800px-Fra_Angelico_060.jpg",
        "title": "PALA DI SAN MARCO",
        "author": "BEATO ANGELICO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/John_Hawkwood_fresco_by_Paolo_Uccello.jpg/640px-John_Hawkwood_fresco_by_Paolo_Uccello.jpg",
        "title": "MONUMENTO EQUESTRE DI GIOVANNI ACUTO+MONUMENTO EQUESTRE NICCOLO DA TOLENTINO",
        "author": "PAOLO UCCELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/98/San_Romano_Battle_%28Paolo_Uccello%2C_London%29_01.jpg",
        "title": "BATTAGLIA DI SAN ROMANO",
        "author": "PAOLO UCCELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Norditalienischer_Meister_im_Stil_des_Pisanello_001.jpg/800px-Norditalienischer_Meister_im_Stil_des_Pisanello_001.jpg",
        "title": "ADORAZIONE DEI MAGI",
        "author": "VENEZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Domenico_Veneziano_-_Pala_di_Santa_Lucia_dei_Magnoli_-_Google_Art_Project.jpg",
        "title": "PALA DI SANTA LUCIA DE\u2019 MAGNOLI",
        "author": "VENEZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Lippi%2C_madonna_di_tarquinia%2C_1437.jpg",
        "title": "MADONNA IN TRONO COL BAMBINO",
        "author": "FILIPPO LIPPI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Fra_Filippo_Lippi_-_Herod%27s_Banquet_-_WGA13286.jpg/640px-Fra_Filippo_Lippi_-_Herod%27s_Banquet_-_WGA13286.jpg",
        "title": "BANCHETTO DI ERODE",
        "author": "FILIPPO LIPPI"
    },
    {
        "image": "https://www.villegiardini.it/wp-content/uploads/2022/02/tempio-malatestiano.jpg",
        "title": "CHIESA DI SAN FRANCESCO",
        "author": "LEON BATTISTA ALBERTI"
    },
    {
        "image": "https://www.artesvelata.it/wp-content/uploads/2020/07/Leon-Battista-Alberta-Facciata-di-Santa-Maria-Novella-Arte-Svelata-2.jpg",
        "title": "SANTA MARIA NOVELLA",
        "author": "LEON BATTISTA ALBERTI"
    },
    {
        "image": "https://www.lombardiabeniculturali.it/assets/immagini/liv1/A310RL/SC/A/MN360/01/A_MN360-01055_IMG-0000185639.jpg",
        "title": "CHIESA DI SAN SEBASTIANO",
        "author": "LEON BATTISTA ALBERTI"
    },
    {
        "image": "https://guideturistichemantova.it/wp-content/uploads/2011/01/Sant-andrea-interno-paolo-pescasio.jpg",
        "title": "CHIESA DI SANT\u2019ANDREA",
        "author": "LEON BATTISTA ALBERTI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Piero%2C_battesimo_di_cristo_04.jpg",
        "title": "BATTESIMO DI CRISTO",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/22/Piero_della_Francesca_-_2._Procession_of_the_Queen_of_Sheba%3B_Meeting_between_the_Queen_of_Sheba_and_King_Solomon_-_WGA17487.jpg",
        "title": "INCONTRO TRA LA REGINA DI SABA E RE SALOMONE-STORIE DELLA VERA CROCE",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Piero_della_Francesca_-_7._Finding_and_Recognition_of_the_True_Cross_-_WGA17533.jpg",
        "title": "RITROVAMENTO E VERIFICA DELLA CROCE-STORIE DELLA VERA CROCE",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/51/Piero_della_Francesca_-_9._Exaltation_of_the_Cross_-_WGA17570.jpg",
        "title": "ESALTAZIONE DELLA CROCE-STORIE DELLA VERA CROCE",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Piero_della_Francesca_017_a.jpg",
        "title": "SOGNO DI COSTANTINO",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/Piero%2C_flagellazione_11.jpg",
        "title": "FLAGELLAZIONE",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/86/Piero_della_Francesca_044.jpg",
        "title": "DITTICO MONTEFELTRO",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://www.artesvelata.it/wp-content/uploads/2019/09/Piero-della-Francesca-Ritratti-di-Federico-da-Montefeltro-e-della-moglie-Battista-Sforza-2-Arte-Svelata.jpg",
        "title": "DITTICO MONTEFELTRO",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Piero_della_Francesca_046.jpg",
        "title": "PALA MONTEFELTRO",
        "author": "PIERO DELLA FRANCESCA"
    },
    {
        "image": "https://gndm.it/wp-content/uploads/2023/08/lo-studiolo-del-duca-gndm-det-2-old.jpg",
        "title": "STUDIOLO MONTEFELTRO",
        "author": "URBINO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Mantegna%2C_introduzione_del_culto_di_cibele_a_roma.jpg/1200px-Mantegna%2C_introduzione_del_culto_di_cibele_a_roma.jpg",
        "title": "INTRODUZIONE DEL CULTO DI CYBELE A ROMA",
        "author": "MANTEGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Ovetari%2C_san_cristorforo_05-06%2C_Martirio_e_trasporto_del_corpo_decapitato_di_san_Cristoforo_di_Andrea_Mantegna.jpg",
        "title": "MARTIRIO DI SAN CRISTOFORO E TRASPORTO-CAPPELLA OVETARI",
        "author": "MANTEGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Andrea_Mantegna_Pala_di_San_Zeno.jpg",
        "title": "PALA SAN ZENO E ORAZIONE NELL\u2019ORTO",
        "author": "MANTEGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/40/Andrea_Mantegna_036.jpg",
        "title": "PALA SAN ZENO E ORAZIONE NELL\u2019ORTO",
        "author": "MANTEGNA"
    },
    {
        "image": "https://www.mantovaducale.beniculturali.it/images/Camera_degli_Sposi_generale_f.to_A._Quattrone_low.jpg",
        "title": "CAMERA PICTA",
        "author": "MANTEGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Andrea_Mantegna_014.jpg",
        "title": "SAN SEBASTIANO",
        "author": "MANTEGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_dead_Christ_and_three_mourners%2C_by_Andrea_Mantegna.jpg/1200px-The_dead_Christ_and_three_mourners%2C_by_Andrea_Mantegna.jpg",
        "title": "CRISTO MORTO",
        "author": "MANTEGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Antonello_da_Messina_-_St_Jerome_in_his_study_-_National_Gallery_London.jpg",
        "title": "SAN GIROLAMO NELLO STUDIO+COLANTONIO",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Colantonio%2C_Jerome_in_his_Study.jpg",
        "title": "SAN GIROLAMO NELLO STUDIO+COLANTONIO",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Antonello_da_Messina_-_Portrait_of_a_Man_-_National_Gallery_London.jpg/1200px-Antonello_da_Messina_-_Portrait_of_a_Man_-_National_Gallery_London.jpg",
        "title": "RITRATTO D\u2019UOMO",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://www.analisidellopera.it/wp-content/uploads/2019/04/Antonello_da_Messina_Ritratto_di_Ignoto_Cefalu.jpg",
        "title": "RITRATTO D\u2019UOMO",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Antonello_da_Messina_-_Portrait_of_a_Man_%28Il_Condottiere%29.jpg",
        "title": "RITRATTO D\u2019UOMO",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://www.museoeidos.it/wp-content/uploads/2021/10/Annunciata-di-Palermo.jpg",
        "title": "ANNUNCIATA",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Messina.Madona01.jpg/1200px-Messina.Madona01.jpg",
        "title": "PALA SAN CASSIANO",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Antonello_da_Messina_018.jpg",
        "title": "SAN SEBASTIANO",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://www.artikaeventi.com/uploads/1/0/0/5/100599188/processione-in-piazza-san-marco_orig.jpg",
        "title": "MIRACOLI DELLA RELIQUIA DELLA VERA CROCE -GENTILE BELLINI",
        "author": "VENEZIA"
    },
    {
        "image": "https://www.viaggiatricecuriosa.it/wp-content/uploads/2022/09/vittore-carpaccio-arrivo-ambasciatori-inglesi-re-bretagna.jpg",
        "title": "STORIE DI SANT\u2019ORSOLA-VITTORE CARPACCIO",
        "author": "VENEZIA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Giovanni_Bellini_-_Orazione_nell%27orto.jpg",
        "title": "ORAZIONE NELL\u2019ORTO+MANTEGNA",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/40/Andrea_Mantegna_036.jpg",
        "title": "ORAZIONE NELL\u2019ORTO+MANTEGNA",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Giovanni-Bellini-Piet%C3%A1_%281465%29.jpg",
        "title": "COMPIANTO SU CRISTO MORTO",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Giovanni_bellini%2C_piet%C3%A0_del_museo_correr_01.jpg",
        "title": "[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlw0fDhu730B_JG4yUfa-9gnFEaZ4K3Buuaw&s](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlw0fDhu730B_JG4yUfa-9gnFEaZ4K3Buuaw&s)",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://live.staticflickr.com/829/41204819404_a2be0fe34b_z.jpg",
        "title": "MADONNA COL BAMBINO",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Giovanni_Bellini%2C_portrait_of_Doge_Leonardo_Loredan.jpg",
        "title": "RITRATTO DEL DOGE LEONARDO LOREDAN",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://www.analisidellopera.it/wp-content/uploads/2019/04/Giovanni_Bellini_Incoronazione_della_Vergine.jpg",
        "title": "INCORONAZIONE DELLA VERGINE",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Frari_%28Venice%29_-_Sacristy_-_triptych_by_Giovanni_Bellini.jpg",
        "title": "TRITTICO DI SANTA GLORIOSA DEI FRARI",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Accademia_-_Pala_di_San_Giobbe_by_Giovanni_Bellini.jpg/1200px-Accademia_-_Pala_di_San_Giobbe_by_Giovanni_Bellini.jpg",
        "title": "PALA DI SAN GIOBBE",
        "author": "GIOVANNI BELLINI"
    },
    {
        "image": "https://www.palazzomediciriccardi.it/wp-content/uploads/2023/04/Facciata-Palazzo-Medici-Riccardi-1920-1080-1024x576.jpg",
        "title": "PALAZZO MEDICI",
        "author": "MEDICI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Botticelli%2C_adorazione_dei_magi_uffizi.jpg/1200px-Botticelli%2C_adorazione_dei_magi_uffizi.jpg",
        "title": "ADORAZIONE DEI MAGGI DI BOTTICELLI",
        "author": "MEDICI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/09/Cappella_dei_magi%2C_corteo_con_lorenzo%2C_piero_e_giovanni_de%27_medici.jpg",
        "title": "CAVALCATA DEI MAGI",
        "author": "MEDICI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Antonio_del_Pollaiolo_-_Ercole_e_l%27Idra_e_Ercole_e_Anteo_-_Google_Art_Project.jpg",
        "title": "ERCOLE E IDRA",
        "author": "ANTONIO POLLAIOLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/Antonio_del_Pollaiolo_-_Ercole_e_Anteo.jpg",
        "title": "ERCOLE E ANTEO",
        "author": "ANTONIO POLLAIOLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/ae/David%2C_Andrea_del_Verrocchio%2C_ca._1466-69%2C_Bargello_Florenz-01.jpg",
        "title": "DAVID",
        "author": "VERROCCHIO"
    },
    {
        "image": "https://www.analisidellopera.it/wp-content/uploads/2019/07/Andrea_del_Verrocchio_La-Vergine_col_bambino_e_due_angeli-867x1200.jpg",
        "title": "MADONNA COL BAMBINO",
        "author": "VERROCCHIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bartolomeo_Colleoni%2C_statua_equestre_del_Verrocchio%2C_Venezia%2C_campo_di_san_Zanipolo.jpg",
        "title": "MONUMENTO EQUESTRE A BARTOLOMEO COLLEONI",
        "author": "VERROCCHIO"
    },
    {
        "image": "https://www.museoomero.it/wp-content/uploads/2020/05/opera-verrocchio-Dama-del-Mazzolino-1307-0702A-2.jpg",
        "title": "DAMA COL MAZZOLINO",
        "author": "VERROCCHIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bust_of_Piero_de%27_Medici_by_Mino_da_Fiesole-Bargello.jpg/697px-Bust_of_Piero_de%27_Medici_by_Mino_da_Fiesole-Bargello.jpg",
        "title": "BUSTO RITRATTO PIETRO DE MEDICI-MINO DA FIESOLE",
        "author": "VERROCCHIO"
    },
    {
        "image": "https://framemark.vam.ac.uk/collections/2022NF4949/full/735,/0/default.jpg",
        "title": "BUSTO DI GIOVANNI CHELLINI- ANTONIO ROSSELLINI",
        "author": "VERROCCHIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Botticelli-primavera.jpg",
        "title": "PRIMAVERA",
        "author": "BOTTICELLI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/El_nacimiento_de_Venus%2C_por_Sandro_Botticelli.jpg/1200px-El_nacimiento_de_Venus%2C_por_Sandro_Botticelli.jpg",
        "title": "NASCITA DI VENERE",
        "author": "BOTTICELLI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Venus_and_Mars_National_Gallery.jpg",
        "title": "VENERE E MARTE",
        "author": "BOTTICELLI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Pallade_col_Centauro%2C_Sandro_Botticelli_%281482%29.jpg/800px-Pallade_col_Centauro%2C_Sandro_Botticelli_%281482%29.jpg",
        "title": "PALLADE E IL CENTAURO",
        "author": "BOTTICELLI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Madonna_of_the_Magnificat.png/1200px-Madonna_of_the_Magnificat.png",
        "title": "MADONNA DEL MAGNIFICAT",
        "author": "BOTTICELLI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Mystical_Nativity.jpg",
        "title": "NATIVIT**\u00c1 MISTICA**",
        "author": "BOTTICELLI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Entrega_de_las_llaves_a_San_Pedro_%28Perugino%29.jpg",
        "title": "CONSEGNA DELLE CHIAVI A SAN PIETRO",
        "author": "PERUGINO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Pietro_Perugino_cat30.jpg",
        "title": "MADONNA COL BAMBINO IN TRONO",
        "author": "PERUGINO"
    },
    {
        "image": "https://cdn.studenti.stbm.it/images/2016/11/02/cappella-sistina-orig.jpeg",
        "title": "MADONNA COL BAMBINO IN TRONO",
        "author": "CAPPELLA SISTINA"
    },
    {
        "image": "https://ilchaos.com/wp-content/uploads/2021/04/giudizio-universale-di-luca-signorelli-dannati-allinferno-chiamata-all-inferno.jpg",
        "title": "CONDANNA DEI DANNATI",
        "author": "LUCA SIGNORELLI"
    },
    {
        "image": "https://www.italyproguide.com/wp-content/uploads/2020/10/San-Satiro-prospettiva-dallingresso-2.jpg",
        "title": "SANTA MARIA PRESSO SAN SATIRO",
        "author": "BRAMANTE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/96/Donato_Bramante_-_Heraclitus_and_Democritus_-_WGA3054.jpg",
        "title": "ERACLITO E DEMOCRITO",
        "author": "BRAMANTE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Tempietto_di_San_Pietro_in_Montorio.jpg/800px-Tempietto_di_San_Pietro_in_Montorio.jpg",
        "title": "SAN PIETRO IN MONTORIO",
        "author": "BRAMANTE"
    },
    {
        "image": "https://www.progettostoriadellarte.it/wp-content/uploads/2020/05/interno.jpg",
        "title": "SAN PIETRO IN MONTORIO",
        "author": "BRAMANTE"
    },
    {
        "image": "https://www.infobuild.it/wp-content/uploads/san-pietro-da-bramante-a-michelangelo.jpg",
        "title": "BASILICA DI SAN PIETRO",
        "author": "BRAMANTE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Paisagem_do_Arno_-_Leonardo_da_Vinci.jpg",
        "title": "PAESAGGIO DEL VALDARNO",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Verrocchio_e_leonardo%2C_battesimo_di_cristo_01.jpg",
        "title": "BATTESIMO DI CRISTO",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Annunciation_%28Leonardo%29.jpg/1200px-Annunciation_%28Leonardo%29.jpg",
        "title": "ANNUNCIAZIONE",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg/640px-Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg",
        "title": "RITRATTO GINEVRA DE\u2019BENCI",
        "author": "LEONARDO"
    },
    {
        "image": "https://zebrart.it/wp-content/uploads/2017/07/garofano-madonna.jpg",
        "title": "MADONNA COL BAMBINO",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Leonardo_da_Vinci_Benois_Madonna.jpg/800px-Leonardo_da_Vinci_Benois_Madonna.jpg",
        "title": "MADONNA BENOIS",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Magi.jpg/1200px-Leonardo_Magi.jpg",
        "title": "ADORAZIONE DEI MAGGI",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Saint_Jerome_Leonardo_-_image_only_%28Q972196%29.jpg",
        "title": "SAN GIROLAMO NEL DESERTO",
        "author": "LEONARDO"
    },
    {
        "image": "https://www.arteworld.it/wp-content/uploads/2018/10/Confronto-Vergine-delle-rocce-Louvre-National-Gallery-Leonardo-da-Vinci.jpg",
        "title": "VERGINE DELLE ROCCE",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Dama_z_gronostajem.jpg",
        "title": "DAMA CON L\u2019ERMELLINO",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/83/Leonardo_da_Vinci_-_Portrait_of_a_Musician.jpg",
        "title": "RITRATTO MUSICO",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Peter_Paul_Ruben%27s_copy_of_the_lost_Battle_of_Anghiari.jpg/350px-Peter_Paul_Ruben%27s_copy_of_the_lost_Battle_of_Anghiari.jpg",
        "title": "BATTAGLIA DI ANGHIARI",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        "title": "GIOCONDA",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg",
        "title": "ULTIMA CENA",
        "author": "LEONARDO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Buonarotti-scala.jpg",
        "title": "MADONNA DELLA SCALA",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/it/thumb/3/3b/Michelangelo%2C_bacco_01.jpg/640px-Michelangelo%2C_bacco_01.jpg",
        "title": "BACCO",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Michelangelo%27s_Piet%C3%A0%2C_St_Peter%27s_Basilica_%281498%E2%80%9399%29.jpg",
        "title": "PIET\u00c0",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/80/Michelangelo%27s_David_-_right_view_2.jpg",
        "title": "DAVID",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Battagliadicascina.jpg",
        "title": "BATTAGLIA DI CASCINA",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://www.visituffizi.org/img/artworks/michelangelo-tondo-doni.jpg",
        "title": "TONDO DONI",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://www.storicang.it/medio/2022/10/05/la-cappella-di-sisto-iv-ricostruita-a-partire-dal-1477-la-volta-affrescata-da-michelangelo-ha-una-superficie-di-circa-800-metri-quadrati_00741f24_800x1013.jpg",
        "title": "VOLTA CAPPELLA SISTINA",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://m.museivaticani.va/content/dam/museivaticani/immagini/collezioni/musei/cappella_sistina/03_00_Giudizio_universale.jpg/_jcr_content/renditions/cq5dam.web.820h.jpeg",
        "title": "GIUDIZIO UNIVERSALE",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://www.bmlonline.it/wp-content/uploads/photo-gallery/salone.jpg",
        "title": "BIBLIOTECA LAURENZIANA",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Frari_%28Venice%29_nave_left_-_Altar_of_Madona_di_Ca%27Pesaro.jpg",
        "title": "PALA PESARO",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Worship_of_Venus_01.jpg",
        "title": "OFFERTA A VENERE",
        "author": "TIZIANO"
    },
    {
        "image": "https://www.frammentiarte.it/wp-11-15/wp-content/uploads/2016/02/dal%20Gotico/Tiziano%20opere/28-tiziano-ritratto-duomo-il-giovane-inglese.jpg",
        "title": "RITRATTO DI GENTILUOMO",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Titian_-_Portrait_of_a_man_with_a_quilted_sleeve.jpg",
        "title": "RITRATTO DI LUDOVICO ARIOSTO",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Portrait_of_Pope_Paul_III_Farnese_%28by_Titian%29_-_National_Museum_of_Capodimonte.jpg/800px-Portrait_of_Pope_Paul_III_Farnese_%28by_Titian%29_-_National_Museum_of_Capodimonte.jpg",
        "title": "RITRATTO DI PAOLO III",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Titian_-_The_Flaying_of_Marsyas.jpg",
        "title": "APOLLO E MARSIA",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Tiziani%2C_assunta_01.jpg",
        "title": "ASSUNTA DEI FRARI TIZIANO",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Carlos_V_en_M%C3%BChlberg%2C_by_Titian%2C_from_Prado_in_Google_Earth.jpg/640px-Carlos_V_en_M%C3%BChlberg%2C_by_Titian%2C_from_Prado_in_Google_Earth.jpg",
        "title": "RITRATTO DI CARLO V A CAVALLO",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tiziano%2C_The_Miracle_of_the_Jealous_Husband.jpg",
        "title": "MIRACOLO DEL MARITO GELOSO",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Tizian_102.jpg",
        "title": "VENERE DI URBINO",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tiziano_-_Amor_Sacro_y_Amor_Profano_%28Galer%C3%ADa_Borghese%2C_Roma%2C_1514%29.jpg/640px-Tiziano_-_Amor_Sacro_y_Amor_Profano_%28Galer%C3%ADa_Borghese%2C_Roma%2C_1514%29.jpg",
        "title": "AMOR SACRO E AMOR PROFANO",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Titian_-_Bacchus_and_Ariadne_-_Google_Art_Project.jpg/800px-Titian_-_Bacchus_and_Ariadne_-_Google_Art_Project.jpg",
        "title": "BACCO E ARIANNA",
        "author": "TIZIANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Giorgione_043.jpg",
        "title": "LAURA",
        "author": "GIORGIONE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Giorgione_060.jpg/640px-Giorgione_060.jpg",
        "title": "RAGAZZO CON FRECCIA",
        "author": "GIORGIONE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Giorgione%2C_The_tempest.jpg",
        "title": "LA TEMPESTA",
        "author": "GIORGIONE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Giorgione_-_Pala_di_Castelfranco.jpg",
        "title": "PALA DI CASTELFRANCO",
        "author": "GIORGIONE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Giorgione%2C_Three_Ages.jpg",
        "title": "LE TRE ET\u00c0  DELL\u2019UOMO",
        "author": "GIORGIONE"
    },
    {
        "image": "https://www.frammentiarte.it/wp-11-15/wp-content/uploads/2016/02/dal%20Gotico/Lotto%20opere/23-lotto-annunciazione.jpg",
        "title": "ANNUNCIAZIONE",
        "author": "LORENZO LOTTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Lorenzo_Lotto_042.jpg/1200px-Lorenzo_Lotto_042.jpg",
        "title": "RITRATTO DEL VESCOVO BERNANDO DE ROSSI",
        "author": "LORENZO LOTTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Correggio%2C_madonna_campori.jpg",
        "title": "MADONNA CAMPORI",
        "author": "CORREGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e0/San_Giovanni_Evangelista_%28Parma%29_-_Dome.jpg",
        "title": "VISIONE DI SAN GIOVANNI EVANGELISTA",
        "author": "CORREGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cathedral_%28Parma%29_-_Assumption_by_Correggio.jpg/1200px-Cathedral_%28Parma%29_-_Assumption_by_Correggio.jpg",
        "title": "ASSUNZIONE DELLA VERGINE",
        "author": "CORREGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Crocifissione_gavari.jpg",
        "title": "CROCIFISSIONE",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/La-belle-jardiniere.jpg",
        "title": "LA BELLE JARDINIERE",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Raffael_046FXD.jpg/1200px-Raffael_046FXD.jpg",
        "title": "DAMA COL LEOCORNO",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Raffaello%2C_pala_baglioni%2C_deposizione.jpg/800px-Raffaello%2C_pala_baglioni%2C_deposizione.jpg",
        "title": "DEPOSIZIONE",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Raffael_Stanza_della_Segnatura.jpg/640px-Raffael_Stanza_della_Segnatura.jpg",
        "title": "SCUOLA DI ATENE",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/28/Deliveranceofstpeter.jpg",
        "title": "LIBERAZIONE DI SAN PIETRO DAL CARCERE",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Massatbolsena.jpg/800px-Massatbolsena.jpg",
        "title": "MESSA DI BOLSENA",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Incendio_di_borgo_01.jpg/1200px-Incendio_di_borgo_01.jpg",
        "title": "INCENDIO DI BORGO",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/Raphael%27s_Triumph_of_Galatea_02.jpg",
        "title": "TRIONFO DI GALATEA",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://www.progettostoriadellarte.it/wp-content/uploads/2021/04/1-2.jpg",
        "title": "CAPPELLA CHIGI",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://luoghi.italianbotanicalheritage.com/wp-content/uploads/2019/08/dea155e589b617159dd6006e3c29021b.jpg",
        "title": "VILLA MADAMA",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Raffael_051.jpg",
        "title": "MADONNA SISTINA",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/51/Transfiguration_Raphael.jpg",
        "title": "TRASFIGURAZIONE",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Portrait_of_Pope_Leo_X_and_his_cousins%2C_cardinals_Giulio_de%27_Medici_and_Luigi_de%27_Rossi_%28by_Raphael%29.jpg",
        "title": "RITRATTO DI LEONE X CON I CARDINALI GIULIO DE\u2019 MEDICI E LUIGI DE\u2019 ROSSI",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Raffaello%2C_pala_baglioni%2C_deposizione.jpg/1200px-Raffaello%2C_pala_baglioni%2C_deposizione.jpg",
        "title": "PALA BAGLIONI",
        "author": "RAFFAELLO SANZIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/24/Andrea_del_Sarto_-_Madonna_of_the_Harpies_-_WGA00370.jpg",
        "title": "MADONNA DELLE ARPIE",
        "author": "ANDREA DEL SARTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Andrea_del_Sarto_-_Dama_col_-_Google_Art_Project.jpg/1200px-Andrea_del_Sarto_-_Dama_col_-_Google_Art_Project.jpg",
        "title": "DAMA CON IL PETRARCHINO",
        "author": "ANDREA DEL SARTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rosso_Fiorentino%2C_Deposizione_di_Volterra%2C_Pinacoteca_e_Museo_Civico_di_Volterra%2C_1521.jpg/206px-Rosso_Fiorentino%2C_Deposizione_di_Volterra%2C_Pinacoteca_e_Museo_Civico_di_Volterra%2C_1521.jpg",
        "title": "DEPOSIZIONE",
        "author": "ROSSO FIORENTINO"
    },
    {
        "image": "https://www.analisidellopera.it/wp-content/uploads/2017/10/Rosso_Fiorentino_Pieta.jpg",
        "title": "PIET\u00c0",
        "author": "ROSSO FIORENTINO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Parmigianino_Selfportrait.jpg/800px-Parmigianino_Selfportrait.jpg",
        "title": "AUTORITRATTO",
        "author": "PARMIGIANINO"
    },
    {
        "image": "https://www.engramma.it/eOS/resources/images/10/10_pinotti_parmigianino_madonna_collo_lungo.jpg",
        "title": "MADONNA DAL COLLO LUNGO",
        "author": "PARMIGIANINO"
    },
    {
        "image": "https://www.centropalazzote.it/wp-content/uploads/2022/01/00-Cortile-E-scaled-e1692624891591.jpg",
        "title": "PALAZZO TE",
        "author": "GIULIO  ROMANO"
    },
    {
        "image": "https://www.inexhibit.com/wp-content/uploads/2015/01/Palazzo-Te-Mantova-Giulio-Romano-aerial-2-1.jpg",
        "title": "PALAZZO TE",
        "author": "GIULIO  ROMANO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Giulio-romano-fall-of-the-giants-fresco-in-the-sala-dei-giganti-palazzo-del-te-1530-1532.jpg/640px-Giulio-romano-fall-of-the-giants-fresco-in-the-sala-dei-giganti-palazzo-del-te-1530-1532.jpg",
        "title": "SALA DEI GIGANTI",
        "author": "GIULIO  ROMANO"
    },
    {
        "image": "https://www.intoscana.it/wp-content/uploads/03-Salone-dei-Cinquecento.jpg",
        "title": "PALAZZO VECCHIO",
        "author": "GIORGIO VASARI"
    },
    {
        "image": "https://storage.googleapis.com/mytour-prod/blog/1662116917763_uffizi-gallery-7299966-1920-jpg.jpeg",
        "title": "PALAZZO DEGLI UFFIZI",
        "author": "GIORGIO VASARI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Angelo_Bronzino_-_Venus%2C_Cupid%2C_Folly_and_Time_-_National_Gallery%2C_London.jpg/416px-Angelo_Bronzino_-_Venus%2C_Cupid%2C_Folly_and_Time_-_National_Gallery%2C_London.jpg",
        "title": "ALLEGORIA DEGLI INGANNI DI VENERE",
        "author": "BRONZINO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg",
        "title": "RITRATTO DI ELEONORA DI TOLEDO CON IL FIGLIO GIOVANNI",
        "author": "BRONZINO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Bronzino%2C_Portrait_of_Cosimo_I_de%27_Medici_in_armour%2C_1545_%28Uffizi%29.jpg/1200px-Bronzino%2C_Portrait_of_Cosimo_I_de%27_Medici_in_armour%2C_1545_%28Uffizi%29.jpg",
        "title": "RITRATTO DI COSIMO I",
        "author": "BRONZINO"
    },
    {
        "image": "https://www.didatticarte.it/Blog/wp-content/uploads/2021/04/cellini-perseo3.jpg",
        "title": "PERSEO",
        "author": "CELLINI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Saliera_%28js%29.jpg/1200px-Saliera_%28js%29.jpg",
        "title": "SALIERA",
        "author": "CELLINI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Giambologna_raptodasabina.jpg/203px-Giambologna_raptodasabina.jpg",
        "title": "RATTO DELLE SABINE",
        "author": "GIAMBOLOGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Gigante_dell%27Appennino_del_Giambologna.jpg",
        "title": "APPENNINO",
        "author": "GIAMBOLOGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Tintoretto_-_San_Marco_libera_uno_schiavo%2C_1547-1548%2C_42.jpg",
        "title": "MIRACOLO DELLO SCHIAVO",
        "author": "TINTORETTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Jacopo_Tintoretto_-_Finding_of_the_body_of_St_Mark.jpg/1200px-Jacopo_Tintoretto_-_Finding_of_the_body_of_St_Mark.jpg",
        "title": "RITROVAMENTO DEL CORPO DI SAN MARCO",
        "author": "TINTORETTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Jacopo_Tintoretto_021.jpg/1200px-Jacopo_Tintoretto_021.jpg",
        "title": "CROCIFISSIONE",
        "author": "TINTORETTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Jacopo_Tintoretto_-_The_Adoration_of_the_Shepherds_-_WGA22550.jpg",
        "title": "ADORAZIONE DEI PASTORI",
        "author": "TINTORETTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Tintoretto-Santa_in_meditazione_1-Grande_di_San_Rocco.jpg",
        "title": "MARIA MADDALENA",
        "author": "TINTORETTO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Paolo_Veronese_-_Music_-_WGA24950.jpg",
        "title": "ALLEGORIA DELLA MUSICA",
        "author": "PAOLO VERONESE"
    },
    {
        "image": "https://www.frammentiarte.it/wp-11-15/wp-content/uploads/2016/02/dal%20Gotico/Veronese%20opere/08-affresco-di-maser-sala-a-crocera.jpg",
        "title": "VILLA BARBARO A MASER",
        "author": "PAOLO VERONESE"
    },
    {
        "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500,h_362/http://www.veronamostre.com/wp-content/uploads/2014/10/mostra-paolo-veronese-villa-barbaro.jpg",
        "title": "VILLA BARBARO A MASER",
        "author": "PAOLO VERONESE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Feast_in_the_House_of_Levi_by_Paolo_Veronese_%28edited_2%29.jpg/520px-The_Feast_in_the_House_of_Levi_by_Paolo_Veronese_%28edited_2%29.jpg",
        "title": "CENA IN CASA LEVI",
        "author": "PAOLO VERONESE"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Annibale_Carracci_-_Butcher%27s_Shop_-_WGA04409.jpg",
        "title": "BOTTEGA DEL MACELLAIO",
        "author": "ANNIBALE CARRACCI"
    },
    {
        "image": "https://www.raiscuola.rai.it/dl/img/2021/10/06/1633527267151_copertina%20TOTALE%20VOLTA%201920X108072.jpg",
        "title": "VOLTA DELLA GALLERIA FARNESE",
        "author": "ANNIBALE CARRACCI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Galleria_Farnese.jpg/300px-Galleria_Farnese.jpg",
        "title": "VOLTA DELLA GALLERIA FARNESE",
        "author": "ANNIBALE CARRACCI"
    },
    {
        "image": "https://www.analisidellopera.it/wp-content/uploads/2018/02/Annibale_Carracci_Arianna_Bacco.jpg",
        "title": "TRIONFO DI BACCO E ARIANNA",
        "author": "ANNIBALE CARRACCI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Annibale_Carracci_003.jpg/1200px-Annibale_Carracci_003.jpg",
        "title": "FUGA IN EGITTO",
        "author": "ANNIBALE CARRACCI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Guido_Reni_-_Aurora_-_WGA19273.jpg",
        "title": "CARRO DELL\u2019AURORA",
        "author": "GUIDO RENI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Guido_Reni_-_Massacre_of_the_Innocents.jpg/800px-Guido_Reni_-_Massacre_of_the_Innocents.jpg",
        "title": "STRAGE DEGLI INNOCENTI",
        "author": "GUIDO RENI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Guido_Reni_047.jpg/800px-Guido_Reni_047.jpg",
        "title": "CROCIFISSIONE DI SAN PIETRO",
        "author": "GUIDO RENI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Canestra_di_frutta_%28Caravaggio%29.jpg",
        "title": "CANESTRA DI FRUTTA",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sick_young_Bacchus_by_Caravaggio.jpg/1200px-Sick_young_Bacchus_by_Caravaggio.jpg",
        "title": "BACCHINO MALATO",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://hips.hearstapps.com/hmg-prod/images/the-cardsharps-caravaggio-michelangelo-m-1594-news-photo-1677577993.jpg",
        "title": "I BARI",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://galleriaborghese.beniculturali.it/wp-content/uploads/caravaggio.jpg",
        "title": "GIOVANE CON CANESTRA DI FRUTTA",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Michelangelo_Caravaggio_063.jpg/1200px-Michelangelo_Caravaggio_063.jpg",
        "title": "MADDALENA PENITENTE",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/The_Martyrdom_of_Saint_Matthew-Caravaggio_%28c._1599-1600%29.jpg/1200px-The_Martyrdom_of_Saint_Matthew-Caravaggio_%28c._1599-1600%29.jpg",
        "title": "MARTIRIO DI SAN MATTEO",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Caravaggio_-_San_Matteo_e_l%27angelo.jpg",
        "title": "SAN MATTEO E L\u2019ANGELO",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/San_Matteo_e_l%27angelo.jpg/310px-San_Matteo_e_l%27angelo.jpg",
        "title": "SAN MATTEO E L\u2019ANGELO",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/67/Conversion_on_the_Way_to_Damascus-Caravaggio_%28c.1600-1%29.jpg",
        "title": "CONVERSIONE DI SAULO",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Crucifixion_of_Saint_Peter-Caravaggio_%28c.1600%29.jpg/800px-Crucifixion_of_Saint_Peter-Caravaggio_%28c.1600%29.jpg",
        "title": "CROCIFISSIONE DI SAN PIETRO",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Caravaggio_-_La_Morte_della_Vergine.jpg",
        "title": "MORTE DELLA VERGINE",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Caravaggio_-_Sette_opere_di_Misericordia_%281607%2C_Naples%29.jpg",
        "title": "SETTE OPERE DI MISERICORDIA",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/52/Michelangelo_Caravaggio_066.jpg",
        "title": "MADONNA DEL ROSARIO",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/La_decapitaci%C3%B3n_de_San_Juan_Bautista%2C_por_Caravaggio.jpg",
        "title": "DECOLLAZIONE DEL BATTISTA",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Michelangelo_Caravaggio_006.jpg/1200px-Michelangelo_Caravaggio_006.jpg",
        "title": "RESURREZIONE DI LAZZARO",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f6/David_with_the_Head_of_Goliath-Caravaggio_%281610%29.jpg",
        "title": "DAVIDE E GOLIA",
        "author": "CARAVAGGIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judith_Beheading_Holofernes_-_Caravaggio.jpg/800px-Judith_Beheading_Holofernes_-_Caravaggio.jpg",
        "title": "GIUDITTA E OLOFERNE",
        "author": "ARTEMISIA GENTILESCHI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/San_Carlo_alle_quattro_fontane_-_interno.jpg/1200px-San_Carlo_alle_quattro_fontane_-_interno.jpg",
        "title": "SAN CARLO ALLE QUATTRO FONTANE",
        "author": "BORROMINI"
    },
    {
        "image": "https://www.aletes.it/wp-content/uploads/2017/06/P1250392.jpg",
        "title": "SAN CARLO ALLE QUATTRO FONTANE",
        "author": "BORROMINI"
    },
    {
        "image": "https://fai-platform.imgix.net/uploads/52417178-a7e4-457e-ac71-334180e44654.jpg",
        "title": "CHIESA DI SANT\u2019ANDREA DELLE FRATTE",
        "author": "BORROMINI"
    },
    {
        "image": "https://www.didatticarte.it/Blog/wp-content/uploads/2023/06/spinario-rubens-1601-1608.jpg",
        "title": "RUBENS-SPINARIO",
        "author": "Pittura barocca"
    },
    {
        "image": "https://files.spazioweb.it/37/a3/37a3fbbf-5905-4d07-9e64-87e429bfded3.jpg",
        "title": "GIOVANNI LANFRANCO-ASSUNZIONE DELLA VERGINE",
        "author": "Pittura barocca"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Guercino_-_Aurora_-_WGA10920.jpg",
        "title": "GUERCINO-CARRO D\u2019AURORA",
        "author": "Pittura barocca"
    },
    {
        "image": "https://thetravellingpetsitter.it/wp-content/uploads/2022/03/Guercino_La_Notte.jpeg",
        "title": "GUERCINO-CARRO D\u2019AURORA",
        "author": "Pittura barocca"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Pietro_da_Cortona_-_Rape_of_the_Sabines_-_Google_Art_Project.jpg",
        "title": "RATTO DELLE SABINE",
        "author": "PIETRO DA CORTONA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Il_trionfo_della_Divina_Provvidenza%2CPalazzo_Barberini.jpg/800px-Il_trionfo_della_Divina_Provvidenza%2CPalazzo_Barberini.jpg",
        "title": "TRIONFO DELLA DIVINA PROVVIDENZA",
        "author": "PIETRO DA CORTONA"
    },
    {
        "image": "https://www.frammentiarte.it/wp-11-15/wp-content/uploads/2016/02/dal%20Gotico/Pietro%20da%20Cortona%20opere/11-pietro-da-cortona-eta-delloro-assieme.jpg",
        "title": "ET\u00c0 DELL\u2019ORO",
        "author": "PIETRO DA CORTONA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ponte-_Chiesa_di_S.Maria_della_Pace.jpg/640px-Ponte-_Chiesa_di_S.Maria_della_Pace.jpg",
        "title": "CHIESA DI SANTA MARIA DELLA PACE",
        "author": "PIETRO DA CORTONA"
    },
    {
        "author": "GHIBERTI",
        "title": "San Giovanni Battista",
        "image": "https://arteinbreve.it/wp-content/uploads/2024/01/Lorenzo-Ghiberti-San-Giovanni-Battista-arte-in-breve_3_11zon.webp"
    },
    {
        "author": "DONATELLO",
        "title": "San Ludovico da Tolosa",
        "image": "https://www.datocms-assets.com/35103/1610728898-osc-392-3809b-zepstudio.jpg?w=2500&h=2500&fit=max"
    },
    {
        "author": "DONATELLO",
        "title": "San Luca di Nanni Banco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/San_luca_di_nanni_di_banco_01.JPG/180px-San_luca_di_nanni_di_banco_01.JPG"
    },
    {
        "author": "DONATELLO",
        "title": "San Marco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Donatello%2C_san_marco%2C_1411-13%2C_01.JPG/126px-Donatello%2C_san_marco%2C_1411-13%2C_01.JPG"
    },
    {
        "author": "DONATELLO",
        "title": "Cantoria",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Donatello%2C_cantoria%2C_veduta%2C_1433-39%2C_01.JPG"
    },
    {
        "author": "DONATELLO",
        "title": "Miracolo della Mula",
        "image": "https://desk.insidecom.it/ch24.img/contenuti/Donatello__miracolo_dell_asina_11zon6839.webp"
    },
    {
        "author": "LUCA DELLA ROBBIA",
        "title": "Cantoria",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Cantoria_di_luca_della_robbia_01.JPG"
    },
    {
        "author": "BRUNELLESCHI",
        "title": "Ospedale degli Innocenti",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Spedale_innocenti%2C_veduta_02.JPG"
    },
    {
        "author": "BRUNELLESCHI",
        "title": "Formella",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Brunelleschi%2C_sacrificio_di_Isacco."
    },
    {
        "author": "MASACCIO",
        "title": "Polittico di Pisa",
        "image": "https://lh6.googleusercontent.com/proxy/S-P3V3ryb0ORawUXuRmJU2iHJ1PycrY5V85F4M-RIjQlB5MpdF74h8wi8IIMRxVrKWNueRY7tWJnx8KbthLoQRa-9D4fQiaf8Kfb1LtbpYVJJj6C0bUBV3nKWA"
    },
    {
        "author": "PAOLO UCCELLO",
        "title": "Nascita della Vergine",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1lIsmzecLCllEHmUvaohu68qgclhPYQprA&s"
    },
    {
        "author": "PAOLO UCCELLO",
        "title": "Monumento Equestre Niccol\u00f2 da Tolentino",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Andrea_del_castagno%2C_Monumento_equestre_di_Niccol\u00f2_da_Tolentino%2C_1456%2C_01.JPG/228px-Andrea_del_castagno%2C_Monumento_equestre_di_Niccol\u00f2_da_Tolentino%2C_1456%2C_01.JPG"
    },
    {
        "author": "LEON BATTISTA ALBERTI",
        "title": "Palazzo Rucellai",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Palazzo_Rucellai.JPG"
    },
    {
        "author": "MANTEGNA",
        "title": "Assunzione della Vergine Cappella Ovetari",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/Mantegna%2C_assunzione_della_vergine.JPG"
    },
    {
        "image": "https://arteinbreve.it/wp-content/uploads/2024/01/Lorenzo-Ghiberti-San-Giovanni-Battista-arte-in-breve_3_11zon.webp",
        "title": "San Giovanni Battista",
        "author": "GHIBERTI"
    },
    {
        "image": "https://www.datocms-assets.com/35103/1610728898-osc-392-3809b-zepstudio.jpg?w=2500&h=2500&fit=max",
        "title": "San Ludovico da Tolosa",
        "author": "DONATELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/San_luca_di_nanni_di_banco_01.JPG/180px-San_luca_di_nanni_di_banco_01.JPG",
        "title": "San Luca",
        "author": "NANNI DI BANCO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Donatello%2C_san_marco%2C_1411-13%2C_01.JPG/126px-Donatello%2C_san_marco%2C_1411-13%2C_01.JPG",
        "title": "San Marco",
        "author": "DONATELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Donatello%2C_cantoria%2C_veduta%2C_1433-39%2C_01.JPG",
        "title": "Cantoria",
        "author": "DONATELLO"
    },
    {
        "image": "https://desk.insidecom.it/ch24.img/contenuti/Donatello__miracolo_dell_asina_11zon6839.webp",
        "title": "Miracolo della Mula",
        "author": "DONATELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Cantoria_di_luca_della_robbia_01.JPG",
        "title": "Cantoria",
        "author": "LUCA DELLA ROBBIA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Spedale_innocenti%2C_veduta_02.JPG",
        "title": "Ospedale degli Innocenti",
        "author": "BRUNELLESCHI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Brunelleschi%2C_sacrificio_di_Isacco.",
        "title": "Formella",
        "author": "BRUNELLESCHI"
    },
    {
        "image": "https://lh6.googleusercontent.com/proxy/S-P3V3ryb0ORawUXuRmJU2iHJ1PycrY5V85F4M-RIjQlB5MpdF74h8wi8IIMRxVrKWNueRY7tWJnx8KbthLoQRa-9D4fQiaf8Kfb1LtbpYVJJj6C0bUBV3nKWA",
        "title": "Polittico di Pisa",
        "author": "MASACCIO"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1lIsmzecLCllEHmUvaohu68qgclhPYQprA&s",
        "title": "Nascita della Vergine",
        "author": "PAOLO UCCELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Andrea_del_castagno%2C_Monumento_equestre_di_Niccolò_da_Tolentino%2C_1456%2C_01.JPG/228px-Andrea_del_castagno%2C_Monumento_equestre_di_Niccolò_da_Tolentino%2C_1456%2C_01.JPG",
        "title": "Monumento Equestre Niccolò da Tolentino",
        "author": "PAOLO UCCELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Palazzo_Rucellai.JPG",
        "title": "Palazzo Rucellai",
        "author": "LEON BATTISTA ALBERTI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/Mantegna%2C_assunzione_della_vergine.JPG",
        "title": "Assunzione della Vergine, Cappella Ovetari",
        "author": "MANTEGNA"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/image.png",
        "title": "Oculo, Camera Picta",
        "author": "MANTEGNA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Villa_di_Poggio_a_Caiano%2C1.JPG",
        "title": "Villa di Poggio a Caiano",
        "author": "MEDICI"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/88/Museo_di_orsanmichele%2C_verrocchio%2C_incredulità_di_s._tommaso_01.JPG",
        "title": "Incredulità di San Tommaso",
        "author": "VERROCCHIO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Benedetto_da_maiano%2C_busto_di_pietro_mellini.JPG/300px-Benedetto_da_maiano%2C_busto_di_pietro_mellini.JPG",
        "title": "Busto di Pietro Mellini",
        "author": "BENEDETTO DA MAIANO"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SFAvXnx5OMHqA_AC_I1hgGoIUhaMdl0nrw&s",
        "title": "Tribuna di Santa Maria delle Grazie",
        "author": "BRAMANTE"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsWX-ndYtvJfsxIPGO66umrAW91gQxpL5fw&s",
        "title": "Cristo alla Colonna",
        "author": "BRAMANTE"
    },
    {
        "image": "https://lh3.googleusercontent.com/proxy/rP95wpzzQIL3lDqjg48_z1LBkYszf2kpwttvAJjwaiMcnU0uQB4yUce5RwWichKC38R35ODRigzExdRtNaSUoM1F1zCOt4QzYMy5c2UHJU9_A45W4hd7O3wFYfhbcj5jQl6Tu95cMvjVVA",
        "title": "Ecce Homo",
        "author": "ANTONELLO DA MESSINA"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Michelangelo%2C_centauromachia%2C_1492_ca._01.JPG/800px-Michelangelo%2C_centauromachia%2C_1492_ca._01.JPG",
        "title": "Centauromachia",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Taddei_Tondo.JPG/1200px-Taddei_Tondo.JPG",
        "title": "Tondo Taddei",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://imgadc.mus3ums.com/ADC/Art-ImgScreen-4.nsf/O/A-8XZRXW/$FILE/Michelangelo_buonarroti-tomb_of_julius_ii.Jpg",
        "title": "Monumento Funebre Giulio II",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://www.finestresullarte.info/rivista/immagini/2019/1029/sagrestia-nuova-tomba-lorenzo.JPG",
        "title": "San Lorenzo, Sagrestia Nuova",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/70/Basilica_di_San_Pietro_-_Schema_progetto_di_Michelangelo_-_Disegno_di_Etienne_-Li-.PNG",
        "title": "San Pietro - Pianta",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Michelangelo%2C_pietà_rondanini%2C_1552-1564%2C_01.JPG",
        "title": "Pietà Rondanini",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFscw9ubnHzOaaG2-Sl5IFjorjfTidPo8dVQ&s",
        "title": "Piazza del Campidoglio",
        "author": "MICHELANGELO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Andrea_Odoni_%281527%29%3B_Lorenzo_Lotto.JPG",
        "title": "Ritratto di Andrea Odoni",
        "author": "LORENZO LOTTO"
    },
    {
        "image": "https://fai-platform.imgix.net/uploads/5afffe3f-fd0a-4531-9f11-99eb154117e2.jpg",
        "title": "Camera della Badessa",
        "author": "CORREGGIO"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLQakccMvaxapUq7AJGgWWCsY_TFSX8wPFg&s",
        "title": "Sposalizio della Vergine",
        "author": "RAFFAELLO"
    },
    {
        "image": "https://www.datocms-assets.com/103094/1688681597-1548765683018814-doni.jpg",
        "title": "Ritratti Coppia Doni",
        "author": "RAFFAELLO"
    },
    {
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaB67H9TlfTzJKRFPb1U65SWo2325AwSsBkVESZavSaSKwPJ30wIquQ6jXhfyPGS_kXhU0tPPXqsGxdR4h_3c9Aw",
        "title": "Bindo Altoviti",
        "author": "RAFFAELLO"
    },
    {
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSM3aembVeRqx8KKoqNEGpNUThHqvYIT3BuQZjf8puY_JelngTUzW4nNNW0r6mD3z9vRdfQ",
        "title": "Cacciata dal Tempio di Eliodoro",
        "author": "RAFFAELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/Villa_farnesina%2C_loggia_di_psiche_02.JPG",
        "title": "Loggia di Amore e Psiche",
        "author": "RAFFAELLO"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Chiostro_dello_scalzo_08_andrea_del_sarto%2C_carità_%281513_circa%29_02.JPG",
        "title": "Carità",
        "author": "ANDREA DEL SARTO"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/deposizione_pontormo.webp",
        "title": "Deposizione",
        "author": "PONTORMO"
    },
    {
        "image": "https://lh3.googleusercontent.com/proxy/f8DN87a9JVGOBIsNtDzf1AchIojc53hP4txxodtidWM6Juj4mOLJck4w1qHPEsY4GyrnrNHKDf795hDjGkqUJ_z8qvqC6ZyS3rMz9MdyrD8AkDY7w3NG-CF_qdlzqt3vahvTljW38DoX",
        "title": "Storie di Diana e Atteone",
        "author": "PARMIGIANINO"
    },
    {
        "image": "https://hips.hearstapps.com/hmg-prod/images/the-calling-of-st-matthew-painting-by-michelangelo-merisi-news-photo-1681299111.jpg",
        "title": "Vocazione di San Matteo",
        "author": "CARAVAGGIO"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/D2274157-4728-4082-AF79-C00F8DC8ABFA.jpeg",
        "title": "Giuditta e Oloferne",
        "author": "ARTEMISIA GENTILESCHI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/68BA52AC-DB72-4C1F-A0A7-3CF3118464B1.webp",
        "title": "Enea, Anchise e Ascanio",
        "author": "BERNINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/A64617D1-13FF-4C49-B25E-26096F1724F4.jpeg",
        "title": "David",
        "author": "BERNINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/45C445CA-99CE-401E-9AD3-8F5EAC4E7092.jpeg",
        "title": "Apollo e Dafne",
        "author": "BERNINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/EBAEF6CF-AEA4-4E53-A280-731C19BF144A.jpeg",
        "title": "Baldacchino",
        "author": "BERNINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/F6F8A3D8-E288-4021-BFD0-F9B65BDF3305.webp",
        "title": "Ritratto di Costanza Bonarelli",
        "author": "BERNINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/E1D304EA-DB2F-469B-BCDD-604DA31C77D9.jpeg",
        "title": "Piazza San Pietro",
        "author": "BERNINI"
    },
     {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/BC540185-1672-4A3F-B12E-C1423A6F63EF.jpeg",
        "title": "Piazza Navona",
        "author": "BERNINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/9B8B18D3-441B-43CD-BA22-68FE3CB50C01.jpeg",
        "title": "Estasi di Santa Teresa",
        "author": "BERNINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/BFAEA46A-A6D2-48A6-9478-211F2699B50B.jpeg",
        "title": "Sant'Ivo alla Sapienza",
        "author": "BORROMINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/9FA568A3-1B37-47C5-9D4A-1D5CEFB5F13A.jpeg",
        "title": "Sant'Ivo 2",
        "author": "BORROMINI"
    },
    {
        "image": "file:///Users/francescodiano/Downloads/0c8fc144-bf9b-4e52-9d49-95a66f63ca2b_Export-5a3db2e9-dab4-420e-a579-964864762d8a/Quiz%20arte%2014b8e3e733d4806fa42cf10569404665/A86FF2D8-0B4B-46E8-93E9-61F9C00F4BD8.jpeg",
        "title": "Galleria di Palazzo Spada",
        "author": "BORROMINI"
    }
];