-- Banco de Dados Adamot Individual

CREATE DATABASE adamot;

USE adamot;

CREATE TABLE shopping(
	idShopping INT PRIMARY KEY AUTO_INCREMENT,
    nomeShopping VARCHAR(45), -- Atributo Simples
    cep CHAR(9), -- Atributo Composto
    bairro VARCHAR(45), -- Atributo Composto
    numero VARCHAR(10) -- Atributo Composto
);

CREATE TABLE entrada(
	idEntrada INT AUTO_INCREMENT,
    fkShopping INT,
	CONSTRAINT pkCompostaUno PRIMARY KEY (idEntrada,fkShopping),
    localEntrada VARCHAR(45), -- Atributo Simples
    CONSTRAINT fkEntShop FOREIGN KEY (fkShopping) REFERENCES shopping(fkShopping)
);

CREATE TABLE movimento(
	idMovimento INT PRIMARY KEY AUTO_INCREMENT,
    quantidade INT, -- Atributo Monovalorado
    dtCaptura DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkEntrada INT NOT NULL,
    CONSTRAINT fkMovEnt FOREIGN KEY (fkEntrada) REFERENCES entrada(idEntrada)
);

CREATE TABLE cadastro(
	idCadastro INT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(45), -- Atributo Simples
    dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP, -- Atributo Simples
    primeiroNome VARCHAR(45) NOT NULL, -- Atributo Multivalorado
    ultimoNome VARCHAR(45), -- Atributo Multivalorado
    emailInstitucional VARCHAR(45), -- Atributo Multivalorado
    emailPessoal VARCHAR(45) UNIQUE, -- Atributo Multivalorado
    contatoInstitucional INT,
    contatoPessoal INT
);

CREATE TABLE auditoria(
	idAuditoria INT AUTO_INCREMENT,
    fkCadastro INT,
    CONSTRAINT pkCompostaDos PRIMARY KEY (idAuditoria,fkCadastro),
    dtAuditoria DATETIME DEFAULT CURRENT_TIMESTAMP,
    acao VARCHAR(500)
);
