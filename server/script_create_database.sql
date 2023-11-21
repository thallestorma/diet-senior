CREATE DATABASE `dietsenior2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `dietsenior2`;


CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `peso` decimal(10,2) NOT NULL,
  `altura` int NOT NULL,
  `sexo` enum('M','F','Outro') NOT NULL,
  `idade` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `alimentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `calorias` int NOT NULL,
  `quantidade` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `consumo_diario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `data` date NOT NULL,
  `total_calorias` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `consumo_diario_FK` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO dietsenior.alimentos (nome,calorias,quantidade) VALUES
	 ('Frango',170,100),
	 ('Alcatra',241,100),
	 ('Patinho',219,100),
	 ('Arroz',128,100),
	 ('Feijão preto',77,100),
	 ('Alface crespa',11,100),
	 ('Tomate salada',21,100),
	 ('Banana prata',98,100),
	 ('Maçã Fuji',56,100),
	 ('Ovo',146,100);
