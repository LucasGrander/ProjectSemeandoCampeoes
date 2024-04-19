-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: Projeto_Semeando_Campeoes
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluno` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `id_pessoa` int NOT NULL,
  `id_centroDeTreinamento` int NOT NULL,
  `id_faixa` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `aluno_pessoa_FK` (`id_pessoa`),
  KEY `aluno_centro_de_treinamento_FK` (`id_centroDeTreinamento`),
  KEY `aluno_faixa_FK` (`id_faixa`),
  CONSTRAINT `aluno_centro_de_treinamento_FK` FOREIGN KEY (`id_centroDeTreinamento`) REFERENCES `centro de treinamento` (`ID`),
  CONSTRAINT `aluno_faixa_FK` FOREIGN KEY (`id_faixa`) REFERENCES `faixa` (`ID`),
  CONSTRAINT `aluno_pessoa_FK` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
INSERT INTO `aluno` VALUES (1,2,1,5),(2,1,3,5);
/*!40000 ALTER TABLE `aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `centro de treinamento`
--

DROP TABLE IF EXISTS `centro de treinamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `centro de treinamento` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `id_endereco` int NOT NULL,
  `nome` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Centro_de_treinamento_endereco_FK` (`id_endereco`),
  CONSTRAINT `Centro_de_treinamento_endereco_FK` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centro de treinamento`
--

LOCK TABLES `centro de treinamento` WRITE;
/*!40000 ALTER TABLE `centro de treinamento` DISABLE KEYS */;
INSERT INTO `centro de treinamento` VALUES (1,1,'a'),(2,2,'b'),(3,2,'c'),(4,1,'d');
/*!40000 ALTER TABLE `centro de treinamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidade`
--

DROP TABLE IF EXISTS `cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidade` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade`
--

LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES (1,'Campo Mourão'),(2,'Iretama');
/*!40000 ALTER TABLE `cidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `id_cidade` int NOT NULL,
  `rua` varchar(100) NOT NULL,
  `numero` varchar(100) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `endereco_cidade_FK` (`id_cidade`),
  CONSTRAINT `endereco_cidade_FK` FOREIGN KEY (`id_cidade`) REFERENCES `cidade` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,1,'Sao Josafat','1778','Centro'),(2,1,'Outsuk','0','Lar Parana'),(3,2,'Ginasio Esp','0','Centro');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faixa`
--

DROP TABLE IF EXISTS `faixa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faixa` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Cor` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faixa`
--

LOCK TABLES `faixa` WRITE;
/*!40000 ALTER TABLE `faixa` DISABLE KEYS */;
INSERT INTO `faixa` VALUES (1,'Branca'),(2,'Cinza'),(3,'Amarela'),(4,'Laranja'),(5,'Verde'),(6,'Azul'),(7,'Roxa'),(8,'Marrom'),(9,'Preta');
/*!40000 ALTER TABLE `faixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `id_pessoa` int NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `login_pessoa_FK` (`id_pessoa`),
  CONSTRAINT `login_pessoa_FK` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,1,'rmbradock','123'),(2,2,'lgrander','123145');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `dataDeNascimento` date NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `responsavel` varchar(100) DEFAULT NULL,
  `id_centroDeTreinamento` int NOT NULL,
  `id_endereco` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Pessoa_centro_de_treinamento_FK` (`id_centroDeTreinamento`),
  KEY `Pessoa_endereco_FK` (`id_endereco`),
  CONSTRAINT `Pessoa_centro_de_treinamento_FK` FOREIGN KEY (`id_centroDeTreinamento`) REFERENCES `centro de treinamento` (`ID`),
  CONSTRAINT `Pessoa_endereco_FK` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (1,'Ricardo','1975-11-29','+55 44 998130695','Ricardo',1,2),(2,'Lucas','2005-08-08','+55 44991354595','Neide G Garaluz',3,1);
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor`
--

DROP TABLE IF EXISTS `professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professor` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `id_pessoa` int NOT NULL,
  `id_centroDeTreinamento` int NOT NULL,
  `id_faixa` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `aluno_faixa_FK` (`id_faixa`) USING BTREE,
  KEY `aluno_pessoa_FK` (`id_pessoa`) USING BTREE,
  KEY `aluno_centro_de_treinamento_FK` (`id_centroDeTreinamento`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES (1,2,3,1),(2,1,1,5);
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'Projeto_Semeando_Campeoes'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-19 11:07:48
