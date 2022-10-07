# Teste Técnico Shopper - Dev Jr

![og-logo](https://user-images.githubusercontent.com/104689597/194442881-8148b260-f4f4-4534-97db-f712f92845be.png)

# Teste Shopper

Este teste foi realizado como um dos requisitos do processo seletivo para desenvolvedor Full-stack Junior na Shopper. O back end foi desenvolvido em NodeJS com Typescript e programação POO.
e o front-end em ReactJS. No back, utilizei as libs express, cors, dontenv, knex, mysql e uuid. No front, usei styled-components, axios, react-router-dom, toast. O Banco de dados relacional MYSQL utilizando Workbanch.

O deploy do back foi feito no Heroku e API documentada pode-se encontrada no endereço:
https://documenter.getpostman.com/view/21555306/2s83zfRRK1#d66df008-187e-4e2f-825e-033bc602c40d

O Front foi publicado por meio surge, no endereço: https://shopper-case-lucas-magalhaes.surge.sh

O Deploy do Heroku pode-ser vista: https://case-shopper-lucas-magalhaes.herokuapp.com

## Entidades (TypeScript)

### Products (Produtos)

Representa os produtos de nossa aplicação. Todo produtos é composto pelas seguintes características:

- `id(string) é gerado pela própria aplicação`
- `name(string)`
- `price(number)`
- `qty_stock(number)`

### ProductsCarts (TypeScript)

Representa os produtos do carrinho de nossa aplicação. Todo produto do carrinho é composto pelas seguintes características:

- `id (string) é gerado pela própria aplicação`
- `product_id (string)`
- `product_name (string)`
- `product_price (number)`
- `checkout (number) e gerado pela própria aplicação`
- `product_amount(number)`
- `product_totalPrice(number) e gerado pela própria aplicação`


### Tabelas (MySQL)

###Shopper_products

 `id VARCHAR(255) PRIMARY KEY`
 `name varchar(255) NOT NULL`
 `price FLOAT NOT NULL`
 `qty_stock INT NULL`
 
 ###Shopper_Products_Cart
 
 ` id varchar(255) Primary Key`
 `product_id varchar(255) NOT null`
 `product_name varchar(255) NOT NULL`
 `product_price float NOT NULL`
 `product_amount INT not NULL DEFAULT 0`
 `product_totalPrice float default 0` 
 `checkout BOOLEAN DEFAULT 0`
 
 ## Instruções
 
 ### Instalando as dependências:
 
 `npm install`:
 Instale todas as dependências listas no `package.json`
 
 ## Introdução para rodar localmemte
 
 ## No terminal, excutamos a seguintes comandos:
 
 git clone https://github.com/LucasMagalhaesPacheco/Processo-Seletivo-Shopper.git
 
 Back End
 
 cd BackEnd
 
 npm install 
 
 Front end
 
 cd ..
 
 cd case-shopper
 
 npm install
 
 ### Criando o arquivo .env:

Criar o arquivo `.env` e configurar com as informações de seu banco de dados.

```
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_SCHEMA = nome-do-banco-de-dados
```

### Populando a tabela:

-   `npm run migrations`
    Cria e popula as tabelas com dados _mockados_ de Produtos.
    -   _Esse script deve ser executado apenas uma única vez_
    -   _Se executado uma segunda vez, ele dropa as tabelas e reseta os dados mockados_


### Coverage 

![Screenshot_1](https://user-images.githubusercontent.com/104689597/194585177-8d4f2d81-6d39-453f-9901-4bc628658e12.png)

### Tecnologias utilizadas

-   NodeJS
-   TypeScript
-   MySQL
-   Knex
-   Express
-   Cors
-   UUID
-   Markdown
-   React.JS
-   Toast
-   styled-components
-   axios 
-   react-router-dom, 
-   Jest

### Programas utilizados

-   Git
-   VSCode
-   WorkBanch Studio
-   Postman API Platform
-   Heroku: Cloud Application Platform
-   Surge



### 🧑‍💻 Desenvolvedores:

</h2>
<table align="center">
  <tr>
    </td> <td align="center"><a href="https://github.com/LucasMagalhaesPacheco"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/104689597?v=4" width="100px;" alt=""/><br /><sub><b>Lucas Magalhães Pacheco</b></sub></a>
  </tr>
</table>

 [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-magalhaes-pacheco/)


- Pagina Inicial 🍁 - 
- Nesta pagina podemos comprar produtos clicando em seu quadrado de compra e isso será enviado para seu carrinho.
- Possui paginação até a página 5

- Compras 🍁 - 
- Nesta pagina podemos ver os produtos adicionado ao carrinho.
- Podemos mudar sua quantidade 
- Remover produtos
- Finalizar a compra

### Prints

![image](https://user-images.githubusercontent.com/104689597/194445653-ffa57f1f-e36d-49aa-b01b-cdcca2e277a6.png)

![image](https://user-images.githubusercontent.com/104689597/194445682-cddfda0f-583d-434a-869c-c2fa09bc6912.png)

![image](https://user-images.githubusercontent.com/104689597/194445709-47b47792-82aa-4340-bfd6-e6134c43ff79.png)

![image](https://user-images.githubusercontent.com/104689597/194445741-0415bb28-17c9-428b-982e-54f8ee5893b0.png)

![image](https://user-images.githubusercontent.com/104689597/194445770-dc9c9ca6-1797-45ee-8bf0-1b15672be4bb.png)

![image](https://user-images.githubusercontent.com/104689597/194445793-a668058f-c67b-4958-bc32-8e566bb96c84.png)









