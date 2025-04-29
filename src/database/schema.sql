CREATE DATABASE hero
\c hero;

CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    photo VARCHAR(500)
);

CREATE TABLE editora (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    hero_id INT NOT NULL REFERENCES heroes(id) ON DELETE CASCADE
);


INSERT INTO heroes (nome, photo) VALUES ('Superman', 'https://static.wikia.nocookie.net/dccomics/images/a/a5/Superman_Vol_5_1_Textless.jpg/revision/latest?cb=20200421194020&path-prefix=pt');
INSERT INTO heroes (nome, photo) VALUES ('Batman', 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/quadrinho-de-batman.jpg?w=1200&h=900&crop=1');
INSERT INTO heroes (nome, photo) VALUES ('Wonder Woman', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnkHxsytDWFRHnSCWPoWRSFZpOVKuwL09yuY55AAoOv9PJUxD4dQz4CXNDLJlJBGUYsE&usqp=CAU');
INSERT INTO heroes (nome, photo) VALUES ('Flash', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLwVwP2apEA9H6Ta0XfaDp4_j6frCXk5AFQ&s');
INSERT INTO heroes (nome, photo) VALUES ('Aquaman', 'https://spider145hqs.com/wp-content/uploads/2021/11/destaque_aquaman_especial80anos_panini_26112021.jpg?w=1200');
INSERT INTO heroes (nome, photo) VALUES ('Green Lantern', 'https://i.pinimg.com/736x/a4/ce/25/a4ce25d7fcf9caddc5e46a48e0708beb.jpg');
INSERT INTO heroes (nome, photo) VALUES ('Cyborg', 'https://upload.wikimedia.org/wikipedia/en/5/58/Cyborg_%28Victor_Stone%29.jpg');
INSERT INTO heroes (nome, photo) VALUES ('Spider-Man', 'https://static.wikia.nocookie.net/dublagempedia/images/2/2e/Homem-aranha.png/revision/latest?cb=20180316234648&path-prefix=pt-br');
INSERT INTO heroes (nome, photo) VALUES ('Iron Man', 'https://i.redd.it/ufsxwwfzrccd1.jpeg');
INSERT INTO heroes (nome, photo) VALUES ('Hulk', 'https://static.wikia.nocookie.net/liga-da-zueira-oficial/images/9/9b/1597329790705.png/revision/latest?cb=20200813144412&path-prefix=pt-br');

INSERT INTO editora (nome, hero_id) VALUES ('DC Comics', 1);
INSERT INTO editora (nome, hero_id) VALUES ('DC Comics', 2);
INSERT INTO editora (nome, hero_id) VALUES ('DC Comics', 3);
INSERT INTO editora (nome, hero_id) VALUES ('DC Comics', 4);
INSERT INTO editora (nome, hero_id) VALUES ('DC Comics', 5);
INSERT INTO editora (nome, hero_id) VALUES ('DC Comics', 6);
INSERT INTO editora (nome, hero_id) VALUES ('DC Comics', 7);
INSERT INTO editora (nome, hero_id) VALUES ('Marvel Comics', 8);
INSERT INTO editora (nome, hero_id) VALUES ('Marvel Comics', 9);
INSERT INTO editora (nome, hero_id) VALUES ('Marvel Comics', 10);