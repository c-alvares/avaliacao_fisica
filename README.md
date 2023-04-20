# Atividades de Produtividade FullStack (ejs/pug)

## Tema 1 - Avaliação Física

|Contextualização:|
|-|
|A Sra. Carla Prestes é nutricionista e precisa de um sistema para cadastrar seus pacientes e que faça um rápido pré-diagnóstico|

- O Analista de sistemas já realizou a **análise de requisitos** e documentou conforme diagramas a seguir:

|Documento|Diagrama|
|-|-|
|DER Modelo Conceitual|![DER Modelo Conceitual](./docs/der_imc.png)|
|UML - DC|![UML DC (Diagrama de Classes)](./docs/uml_dc_imc.png)|
|UML - DCU|![UML DCU (Diagrama de Casos de Uso)](./docs/uml_dcu_imc.png)|

|Desafio-1:|
|-|
|Você foi contratado como Programador Full-Stack, por isso deve desenvolver o Back-end e a Aplicação Web com as funcionalidades documentadas, utilize os dados abaixo para testar sua aplicação e desenvolva o Front-End integrado conforme WireFrames a seguir, crie um diagrama de Atividades com o intúito de treinar a usuária nas funcionalidades da aplicação|

|Nome|Nascimento|Peso|Altura|
|-|-|-|-|
|Jair Rodrigues|1981-01-03|85.5|1.75|
|Marieta Severo|1995-03-04|44.3|1.55|
|Karina Silva|2002-05-13|88|1,73|
|Solange Nascimento|2005-12-01|95|1.58|
|Marcos Pontes|2001-12-03|60|1.98|

### WireFrame

|Descrição|Tela|
|-|-|
|Tela CRUD|![WireFrame 01](./docs/wireframes/wireframe1.png)|
|Modal de Cadastro|![WireFrame 02](./docs/wireframes/wireframe2.png)|
|Alteração via linhas editávejs da tabela|![WireFrame 03](./docs/wireframes/wireframe3.png)|
|Botão para excluir|![WireFrame 04](./docs/wireframes/wireframe4.png)|

|Observações:|
|-|
|Dados calculados nem sempre precisam ser armazenados em bancos de dados:<br>- Podem ser calculados através de **visões**(Views) no SGBD e apenas exibidos os resultados,<br>- Podem ser calculados na API back-end através de métodos/funções:<br>&emsp;- Podem ser calculados quando os dados são listados um a um<br>&emsp;- Podem ser calculados quando os dados são todos de uma vez<br>&emsp;- Podem ser calculados quando os dados são cadastrados e armazenados no banco de dados<br>- Para cada problema devemos avaliar qual a melhor alternativa quanto a processamento e armazenamento<br>**- Neste caso o Analista decidiu que os resultados dos cálculos não devem ser armazenados então calcule nos métodos da API ou em forma de VIEW no BD**|


## Como entregar as atividades
|Entregas:|
|-|
|O professor disponibilizará uma pasta na rede para entregar o projeto|
|Crie uma pasta com seu nome contendo:|
|Uma pasta para cada projeto dividida em:<br>- Subpasta: **webapp** com os códigos fullstack ejs/pug<br>- Subpasta: **docs** com o script.sql e o arquivo do insomnia<br>- Não esqueça de excluir a pasta **node_modules** antes de entregar|