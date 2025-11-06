-- banco de dados grupo 02 adamot

CREATE DATABASE adamot;
USE adamot;

CREATE TABLE shopping(
    idShopping INT PRIMARY KEY AUTO_INCREMENT,
	nomeShopping VARCHAR(45),
    numeroTel CHAR(11),
    cnpj char(14),
    token char(6)
);

INSERT INTO shopping (nomeShopping, numeroTel, cnpj, token) VALUES
('Shopping Center Norte', '11987654321', '12345678000195', 'A1B2C3'),
('Shopping Iguatemi','11911112222', '23456789000102', 'D4E5F6'),
('Shopping Morumbi','11933334444', '34567890000111', 'G7H8I9'),
('Shopping Paulista','11955556666', '45678901000122', 'J0K1L2'),
('Shopping Eldorado','11977778888', '56789012000133', 'M3N4O5');


CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(45) UNIQUE,
    cpf CHAR(11) UNIQUE,
    senha VARCHAR(45),
    fkShopping INT NOT NULL,
    CONSTRAINT fk_shop_cad FOREIGN KEY (fkShopping) REFERENCES shopping(idShopping)
);

INSERT INTO usuario (email, cpf, senha, fkShopping) VALUES
('ana@cnorte.com',   '12345678901', 'senha123', 1),
('bruno@iguatemi.com', '23456789012', '123senha', 2),
('carla@morumbi.com',  '34567890123', 'abc123', 3),
('diego@paulista.com', '45678901234', 'senha456', 4),
('erika@eldorado.com', '56789012345', 'pass789', 5);

CREATE TABLE entrada (
	idEntrada INT,
    fkShopping INT,
    CONSTRAINT pkEntShop PRIMARY KEY (idEntrada,fkShopping),
    CONSTRAINT fk_Ent_Shop FOREIGN KEY (fkShopping) REFERENCES shopping(idShopping),
    nomeEntrada VARCHAR(45)
);

INSERT INTO entrada (idEntrada, fkShopping, nomeEntrada) VALUES

(1, 1, 'Entrada Sul'),
(2, 2, 'Entrada Principal'),
(3, 3, 'Entrada Leste'),
(4, 4, 'Entrada Norte'),
(5, 5, 'Entrada Oeste');

CREATE TABLE sensor(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR (45),
    dtInstalacao DATETIME,
    dtManutencao DATETIME,
    fkEntrada INT,
    CONSTRAINT fk_Sen_Ent FOREIGN KEY (fkEntrada) REFERENCES entrada(idEntrada)
);

INSERT INTO sensor (modelo, dtInstalacao, dtManutencao, fkEntrada) VALUES
('Sensor-Sul', '2024-01-10 08:00:00', '2024-06-10 10:00:00', 1),
('Sensor-Principal', '2024-02-12 09:30:00', '2024-07-12 14:30:00', 2),
('Sensor-Leste', '2024-03-14 10:15:00', '2024-08-14 17:15:00', 3),
('Sensor-Norte', '2024-04-16 11:45:00', '2024-09-16 20:45:00', 4),
('Sensor-Oeste', '2024-05-18 12:00:00', '2024-10-18 22:00:00', 5);

CREATE TABLE endereco(
	idEndereco INT AUTO_INCREMENT,
    cep CHAR(9),  
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    uf CHAR(2),
    numero CHAR(11),
    fkShopping INT,
    CONSTRAINT pk_End_Shop PRIMARY KEY (idEndereco,fkShopping),
    CONSTRAINT fk_End_Shop FOREIGN KEY (fkShopping) REFERENCES shopping(idShopping)
);  

INSERT INTO endereco (cep, bairro, cidade, uf, numero, fkShopping) VALUES
('01551-029', 'Centro', 'Sâo PAulo', 'SP', '1400', 1),
('02362-020', 'Jardins', 'Sâo PAulo', 'SP', '200', 2),
('03783-021', 'Morumbi', 'Sâo PAulo', 'SP', '666', 3),
('04924-000', 'Paulista', 'Sâo PAulo', 'SP', '257', 4),
('05935-045', 'Pinheiros', 'Sâo PAulo', 'SP', '130', 5);

CREATE TABLE registro(
idRegistro INT AUTO_INCREMENT,
valor INT,
dtHora DATETIME,
fkSensor INT,
CONSTRAINT pk_Reg_Sen PRIMARY KEY (idRegistro,fkSensor),
CONSTRAINT fk_Reg_Sen FOREIGN KEY (fkSensor) REFERENCES sensor(idSensor)
);

SELECT * FROM registro;

INSERT INTO registro (valor, dtHora, fkSensor) VALUES
(0, '2024-06-01 10:00:00', 1),
(1, '2024-06-02 11:00:00', 2),
(1, '2024-06-03 12:00:00', 3),
(0, '2024-06-04 13:00:00', 4),
(1, '2024-06-05 14:00:00', 5);

CREATE TABLE Fale_Conosco(
idFaleConosco INT PRIMARY KEY AUTO_INCREMENT,
nomeFac VARCHAR (45),
emailFac VARCHAR (45) UNIQUE,
mensagem VARCHAR (400)
);

INSERT INTO Fale_Conosco (nomeFac, emailFac, mensagem) VALUES
('Robson Guilherme', 'robson35@gmail.com', 'Gostaria de um orçamento planejado.'),
('João Coimbra', 'joaocoimbra17@gmail.com', 'Quero marcar uma reunião para aplicar o projeto.'),
('Samuel', 'samuel345@gmail.com', 'Parabéns pelo proposta!'),
('Lavinia Todarelli', 'lavinia376@gmail.com', 'Quero aplicar o projet urgentimente.'),
('Roger Elias', 'rogerelias243@gmail.com', 'Tenho algumas dúvidas');

SELECT 
    s.idSensor, s.modelo, r.idRegistro, r.valor, r.dtHora, e.nomeEntrada, sh.nomeShopping
FROM sensor AS s
JOIN registro AS r 
    ON s.idSensor = r.fkSensor
JOIN entrada AS e 
    ON s.fkEntrada = e.idEntrada
JOIN shopping AS sh 
    ON e.fkShopping = sh.idShopping;

    
SELECT 
    s.nomeShopping, s.numeroTel, s.cnpj, u.email, u.senha, e.cep, e.bairro, e.cidade, e.uf, e.numero
FROM shopping AS s
JOIN usuario AS u
    ON s.idShopping = u.fkShopping
JOIN endereco AS e
    ON s.idShopping = e.fkShopping;

-- DROP DATABASE adamot;

