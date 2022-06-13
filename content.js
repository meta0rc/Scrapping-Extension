const div = document.createElement('div')
const styled = document.createElement('style')
const popup = document.createElement('div')
const btnlimpar = document.createElement('button')
const input = document.createElement('input')


document.body.append(div)
document.body.append(popup)
document.body.append(styled)
document.body.append(input)
document.body.append(btnlimpar)

registers = [
    'https://www.google.com/search?q=site:elevadores.mekanix.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.bhsystem.com.br/controle-de-acesso/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:produtos-hospitalares.medfarmrs.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:caixas.jrplasticos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:persiana.primusspersianas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.ddnoxindustrial.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:medalhas.metalvest.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:congelados.solmarsalgados.com/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.serraplastembalagem.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:buffet.buffetvillaspalace.com.br/coffee-break/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:acessorios.tamiestojos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.tossati.com.br/areia/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.legalspace.com.br/salas-privativas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:vinhos.vinicolagiaretta.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.diplalbrasil.com.br/sacos-plasticos/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:embalagens.inflex.ind.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:lubrificantes.lubrio.com.br/oleo/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:trofeus.uniarttrofeus.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.barangandanfestas.com.br/buffet/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:assistencia.assistenciaantartica.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.limestone.com.br/pisos-hidraulicos/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:carrinho-de-mercado.grelhaco.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.gnvsaocaetano.com.br/gnv/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.engtrio.com.br/rampas-niveladoras/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:persianas.analinepersianas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.aportte.com.br/estruturas-metalicas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:persianas.elmopersianas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:serralheria.ferrart.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.waycoworking.com.br/coworking/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:petshop.lexelulu.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:pisos.espacoambiente.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:chaveiros.mileniovisual.com/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:madeira.compack.ind.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.sangar.com.br/rotulos/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:dentista.odontologicashop.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:lencol-hospitalar.plumax.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.maelgnv.com.br/gnv/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.rpmsul.com.br/analises-de-vibracao/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.chaveirogoiania.com.br/chaves/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:grama.greengramados.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:manutencao.ki-frio.com&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:metal.cwbmetal.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:madeiras.madeireiraluzitano.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.cortpress.com/etiquetas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:bombas.comandodasbombas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:moldes.hwmoldes.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:equipamentos.casapadrao.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:plasticos.fabricadeplasticoscuritiba.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:pranchas-carreta.brcarretas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.recol.eco.br/coletas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.hidraulicaflex.com.br/valvulas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.magazinedosmoveisfortaleza.com.br/cadeiras/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.jcarvalhocabos.com.br/cabos/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.aerobat.com.br/baterias-automotivas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.atacadaobsb.com.br/produto-limpeza/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:toldos.principaltoldos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.kmesquadrias.com.br/esquadrias/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.mangueirasmastertubos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:exame-medico.stmedicina.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:reciclagem.ecooqualy.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.ferroleto.com.br/valvulas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.vitrealcanoas.com.br/esquadrias/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.setglass.com.br/vidros/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.vibtron.com.br/manutencao/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.lutemoveis.com.br/moveis-vime/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:cadeira.stiloflex.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:cirurgias.institutogris.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:congelados.juliettecongelados.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:gnv.oficinaoziasgnv.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:vidros.sofglass.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:moveis.moveisjb.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.requintemoveisbsb.com.br/moveis/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:blocos.novafirenze.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:automotiva.2polosbaterias.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:vidracaria.crystalbox.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.lideracoms.com.br/aco/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:salgados.boamassasalgados.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.pipopecas.com.br/pecas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:ferramenta.blomaq.com.br/locacao-de-andaimes/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:cortinas.cosyhome.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:caldeiraria.caldvibrotech.com.br/caldeirarias/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:grama.alvesgramas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:andaime.diskandaime.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.labtecmb.com.br/petrifilm/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:rotulos.supremaflexo.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:compressores.airservicecompressores.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:etiquetas.dagografica.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:exaustores.lvsexaustores.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:etiquetas.kodiart.com.br/ribbons/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:trator.bugiotratores.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:coworking.santosoffices.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:cafes.dolcearoma.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:impermeabilizacao.ebfimpermeabilizacoes.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:chaves.curitibachaveiro.com.br/chaveiro/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:telas.idealrededeprotecao.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.solucaoconstrucoes.com.br/aditivos/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:instalacoes.moinhoypiranga.com/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:tintas.franpaint.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:caixas.embanor.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:bombas.bwrbombas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:ortopedicos.apoioortopedia.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.cardosoautoresgate.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:analises.soloquimica.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.francautoescola.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:fachadas.sertecengenharia.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.souzasegurancadotrabalho.com.br/treinamento-cipa/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:engates.torpa.com.br/engates/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:pisos.decoracoesberlin.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:habilitacao.autoescolaaeroporto.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:curvamento.artemtubos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:audiologia.clinicaaura.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:fita.flyembalagens.com.br/filmes-stretch/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.esabateria.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:divisorias.diviplan.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:sipat.qualicipa.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:habilitacao.autoescolanovapaysandu.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:impermeabilizacao.edilimpermeabilizacoes.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:toldos.ambitoldos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:sacola.arteembalagens.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:laminados.gspisos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:lajes.lajesfutura.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:expositores.sdvexpositores.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.imedeinstituto.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:reforma.ammpredial.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.mmcortesedobra.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:balancas.balancascianorte.com.br/balanca/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:pallet.abpaineiras.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:ribbons.mastercorp.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.armazemdoacobr.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:divisorias.rndivisorias.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:elevador.industriasaffer.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:analises.ecccertificacao.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:m-apapeisdeparede.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:buffets.buffetciadossabores.com.br/buffet-casamento/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:chaveiro.chaveiroglicerio.com.br/24-horas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:keromelo.gerbellidoceria.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:serralherias.serralheriaratinho.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:escola.nossaescolaeduca.com.br/unidade-ipiranga/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:tecidos.crismazzer.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:pisos.progressopisos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:pavimentacao.totalpavsp.com.br/locacao/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.aureatoalhaseuniformes.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:salgados.mamacida.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.housevidros.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:galvanoplastia.grupogrigoletto.com.br/galvanoplastia/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:escola.centroeducacionalamar.com.br/ensino-particular/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:limpeza.apnclean.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.centraldecorteedobra.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:capas.imperiodascapas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:canis.metalvet.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:marcadores.poliman.srv.br/marcador-industrial/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:escola.colegioross.com.br/educacao-infantil/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:pallets.forceplast.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:peliculas.fortsound.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:proteses.fashionlook.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.arquitecfilm.com.br/peliculas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.habilitacaoautoescola.com.br/cnh/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:estetica.salaoacquaville.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:estetica.kamilagarcia.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:habilitacao.autoescolamarinho.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:vinho.grandvin.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.masterplastfitas.com.br/fitas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:construcao.brancacomercio.com.br/materiais/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.gessocia.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:moveis.comave.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:adesivos.atitudesigns.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:beliches.moveisconforto.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.maranataempilhadeiras.com.br/empilhadeiras/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:embalagens.arasa.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:produtos.growpower.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:pisos.avplanpisosdeconcreto.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:sementes.pastobras.com.br/grama/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.plenocomerciodegas.com.br/botijao/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.checarautomecanica.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:masala.graovizirespeciarias.com.br/zimbro/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:salgados.danysalgadinhos.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.madeirasplasticaecomax.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.toldosidealrp.com.br/toldos/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.gsmetiquetas.com.br/etiquetas-personalizadas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:rufos.viasulcalhas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:cortinas.unilux.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:molduras.moldurasdeconcretocuritiba.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:sofa.kazadesign.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:automoveis.atacadaodasbateriasrp.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.npembalagens.com.br/embalagens/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:paineis.g2bproducoes.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:cafeteira.connectvending.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.amentalfishing.com.br/varas/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.centralbateriassp.com.br/bateria/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.lunadivisorias.com.br/divisorias/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:ferragens.bmaco.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.jotaflex.com.br/pecas-industriais/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:manutencao.centralassistenciatecnica.com.br/assistencia-tecnica-philips/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.cirandaescola.com.br/colegios/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:forro.forronovo.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:grafica.acvisual.com.br/comunicacao-visual/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.revestepoxx.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.abcpisoslaminados.com.br/pisos/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.mundodasescadas.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:www.imbbrasil.com/cadeiras/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1',
'https://www.google.com/search?q=site:moveis.mobilinea.com.br/&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=0&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1'
]


//Styles
const divConfigs = { 

    title: 'Scrapping Urls', 
    class : 'getid', 
    style :  ` 
        .input_dom_popup { 
            z-index: 5;
            position: fixed;
            bottom: 100px;
            background: #fff;
            left: 25px;
            font-size: 15px;
            color: #000;
            border-radius: 5px;
            padding: 16px 4px;
        }
        .popupDiv { 
           
            width: 100%;
            padding: 5%;
            display: flex;
            position: absolute;
            overflow: scroll;
            font-size: 1.2em;
            background: #333;
            /* text-align: center; */
            color: #fff;
            top: 0;
            line-height: 2;
            z-index: 999;
            justify-content: center;

        }
        .getid { 
            z-index: 5;
            position: fixed;
            bottom: 33px;
            background: #979595;
            left: 25px;
            font-size: 15px;
            color: #000;
            border-radius: 27px;
            padding: 16px 34px;
            }

        .getid:hover{ 
            cursor : pointer;
        }
        .activePopup {
            display: none;
        }
        .btn-limpar {
            left: 210px;
            border: none;
        }
        ` ,

}

div.innerHTML = divConfigs.title
div.setAttribute("id", "scrapping")
btnlimpar.innerHTML = 'Reset'
div.classList = divConfigs.class
input.classList = 'input_dom_popup'
btnlimpar.classList = 'getid btn-limpar'
popup.classList = 'popupDiv activePopup'
popup.setAttribute('contenteditable', 'true')

styled.innerHTML = divConfigs.style
novo = new Array();

function download(content, filename, contentType){
    if(!contentType){
        contentType = 'application/octet-stream';
    }
    var a = document.createElement('a');
    var blob = new Blob([content], {'type':contentType});
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

btnlimpar.addEventListener('click', ()=> {
    localStorage.clear();
    location.href = 'https://google.com/'
}) 

input.setAttribute('placeholder', 'URL completa')
input.setAttribute('title', 'Preencha este campo, se você for pesquisar por uma palavra especifica')


div.addEventListener('click', ()=> {

        popup.classList.remove('activePopup')
        div.innerHTML = 'Scrapping'

        t = document.querySelector("#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").value

        rand = t.indexOf('.') > 10 ? t.slice(0, t.indexOf('.')) : t.slice(t.indexOf('.') + 1)
        
        arm = rand.includes('.com') ? rand.slice(0, rand.indexOf('.')) : rand

        localStorage.setItem('filename', arm)

        query = t.replaceAll(' ', '+')

        if(input.value != ''){
            localStorage.setItem('base', input.value)
        }

        if(localStorage.getItem('base')){
            search = localStorage.getItem('base')
        }
        else { 
            search = 'https://' + t.substr(5);
        }

        
        a = document.querySelectorAll('a')
        let index = 0;
        if(!localStorage.getItem('index') || localStorage.getItem('index') == NaN){
            localStorage.setItem('index', index)
        } 

        arr = []
        wirouthSSL = search.replace('https', 'http')
        a.forEach(l => {
            link = l.getAttribute('href')
            if(typeof(link) == 'string') {
                if(link.includes(search) && !link.includes('webcache') && !link.includes('view')){
                    arr.push(link)
                }
                else if(link.includes(wirouthSSL) && !link.includes('webcache') && !link.includes('view'))
                {
                    arr.push(link)
                }

                else {
                    console.log('404')
                }
            }
        })

        if(localStorage.getItem('links')){

            valores = localStorage.getItem('links');
            vals = valores.replaceAll(/[\\"]/g, '');
            auxmax = vals.split(',');
            novo = auxmax.filter((found, indice) => {
                return auxmax.indexOf(found) === indice
            })

            arr.push(JSON.stringify(novo))

        }
        else {
            arr.push(JSON.stringify(arr))
        }
       

        localStorage.setItem('links', JSON.stringify(arr))
        aux = parseInt(localStorage.getItem('index')) + 10
        localStorage.setItem('index', aux.toString());
        contentOf = []
        base = `https://www.google.com/search?q=${query}&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=${aux}&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1`
        
        if(document.body.innerText.includes('não encontrou nenhum documento correspondente')){

            novo.forEach((n, i) => {
                
                t = n.replaceAll('[', '')
                x = t.replaceAll('null', '')
                j = x.replaceAll(']', '')

                contentOf.push(j)
                
                popup.innerHTML += j + '<br>'

                  
            })

            quebras = contentOf.toString().replaceAll(',', '\n');
            fileName = localStorage.getItem('filename') + '.txt'
            download(quebras, fileName)

            localStorage.register = parseInt(localStorage.register) + 1
            localStorage.removeItem('index')
            localStorage.removeItem('links')
            div.removeAttribute("id");
            window.open(registers[parseInt(localStorage.getItem('register'))], '_blank');

        }
        else {
            location.href = base;
        }
  
})










