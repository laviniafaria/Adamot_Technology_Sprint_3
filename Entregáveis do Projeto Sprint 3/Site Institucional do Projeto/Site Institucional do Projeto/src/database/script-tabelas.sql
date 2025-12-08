CREATE DATABASE adamot;

USE adamot;

CREATE TABLE shopping (
    idShopping INT PRIMARY KEY AUTO_INCREMENT,
    nomeShopping VARCHAR(45),
    numeroTel CHAR(11),
    cnpj char(14),
    token char(6)
);

INSERT INTO
    shopping (
        nomeShopping,
        numeroTel,
        cnpj,
        token
    )
VALUES (
        'Shopping Center Norte',
        '11987654321',
        '12345678000195',
        'A1B2C3'
    ),
    (
        'Shopping Iguatemi',
        '11911112222',
        '23456789000102',
        'D4E5F6'
    );

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45) UNIQUE,
    senha VARCHAR(45),
    tipoUsr Char(3),
    fkShopping INT,
    CONSTRAINT fk_shop_cad FOREIGN KEY (fkShopping) REFERENCES shopping (idShopping)
);

CREATE TABLE entrada (
    idEntrada INT,
    fkShopping INT,
    CONSTRAINT pkEntShop PRIMARY KEY (idEntrada, fkShopping),
    CONSTRAINT fk_Ent_Shop FOREIGN KEY (fkShopping) REFERENCES shopping (idShopping),
    nomeEntrada VARCHAR(45)
);

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(45),
    dtInstalacao DATETIME,
    dtManutencao DATETIME,
    fkEntrada INT,
    shopping_id INT,
    CONSTRAINT fk_Sen_Ent FOREIGN KEY (fkEntrada, shopping_id) REFERENCES entrada (idEntrada, fkShopping)
);

CREATE TABLE endereco (
    idEndereco INT AUTO_INCREMENT,
    cep CHAR(9),
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    uf CHAR(2),
    numero CHAR(11),
    fkShopping INT,
    CONSTRAINT pk_End_Shop PRIMARY KEY (idEndereco, fkShopping),
    CONSTRAINT fk_End_Shop FOREIGN KEY (fkShopping) REFERENCES shopping (idShopping)
);

CREATE TABLE registro (
    idRegistro INT AUTO_INCREMENT,
    valor INT,
    dtHora DATETIME,
    fkSensor INT,
    CONSTRAINT pk_Reg_Sen PRIMARY KEY (idRegistro),
    CONSTRAINT fk_Reg_Sen FOREIGN KEY (fkSensor) REFERENCES sensor (idSensor)
);

CREATE TABLE Fale_Conosco (
    idFaleConosco INT PRIMARY KEY AUTO_INCREMENT,
    nomeFac VARCHAR(45),
    emailFac VARCHAR(45) UNIQUE,
    mensagem VARCHAR(400)
);

INSERT INTO
    entrada (
        idEntrada,
        fkShopping,
        nomeEntrada
    )
VALUES (1, 2, 'Entrada Principal');

INSERT INTO
    sensor (
        modelo,
        dtInstalacao,
        dtManutencao,
        fkEntrada,
        shopping_id
    )
VALUES ('HC-SR04', NOW(), NULL, 1, 2);

select sum(valor), fkSensor from registro group by fkSensor;

select sum(valor) from registro;

SELECT DATE_FORMAT(r.dtHora, '%H') AS hora, SUM(r.valor) AS pessoas
FROM registro r
    JOIN sensor s ON r.fkSensor = s.idSensor
WHERE
    s.shopping_id = 2
GROUP BY
    DATE_FORMAT(r.dtHora, '%H')
ORDER BY hora DESC
LIMIT 7;