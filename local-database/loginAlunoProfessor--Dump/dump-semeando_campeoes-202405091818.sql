-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: semeando_campeoes
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `centro_de_treinamento`
--

DROP TABLE IF EXISTS `centro_de_treinamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `centro_de_treinamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centro_de_treinamento`
--

LOCK TABLES `centro_de_treinamento` WRITE;
/*!40000 ALTER TABLE `centro_de_treinamento` DISABLE KEYS */;
INSERT INTO `centro_de_treinamento` VALUES (1,'Centro'),(2,'Lar Paraná'),(3,'Iretama'),(4,'???');
/*!40000 ALTER TABLE `centro_de_treinamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidade`
--

DROP TABLE IF EXISTS `cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_cidade` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade`
--

LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES (1,'Campo Mourão'),(2,'Iretama'),(3,'testefront'),(4,'aaaaaaaaaaaaaaaaa'),(5,'asd');
/*!40000 ALTER TABLE `cidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_cidade` int NOT NULL,
  `rua` varchar(100) NOT NULL,
  `numero` varchar(100) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `endereco_cidade_FK` (`id_cidade`),
  CONSTRAINT `endereco_cidade_FK` FOREIGN KEY (`id_cidade`) REFERENCES `cidade` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `id` int NOT NULL AUTO_INCREMENT,
  `cor_da_faixa` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faixa`
--

LOCK TABLES `faixa` WRITE;
/*!40000 ALTER TABLE `faixa` DISABLE KEYS */;
INSERT INTO `faixa` VALUES (1,'Branca'),(2,'Cinza/Branca'),(3,'Cinza'),(4,'Cinza/Preta'),(5,'Amarela_Branca'),(6,'Amarela'),(7,'Amarela/Preta'),(8,'Laranja/Branca'),(9,'Laranja'),(10,'Laranja/Preta'),(11,'Verde/Branca'),(12,'Verde'),(13,'Verde/Preta'),(14,'Azul'),(15,'Roxa'),(16,'Marrom'),(17,'Preta');
/*!40000 ALTER TABLE `faixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginaluno`
--

DROP TABLE IF EXISTS `loginaluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loginaluno` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginaluno`
--

LOCK TABLES `loginaluno` WRITE;
/*!40000 ALTER TABLE `loginaluno` DISABLE KEYS */;
INSERT INTO `loginaluno` VALUES (1,'rmbradock','123'),(2,'lgrander','123145');
/*!40000 ALTER TABLE `loginaluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginprofessor`
--

DROP TABLE IF EXISTS `loginprofessor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loginprofessor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `senha` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginprofessor`
--

LOCK TABLES `loginprofessor` WRITE;
/*!40000 ALTER TABLE `loginprofessor` DISABLE KEYS */;
/*!40000 ALTER TABLE `loginprofessor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participante`
--

DROP TABLE IF EXISTS `participante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `data_de_nascimento` date NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `responsavel` varchar(100) DEFAULT NULL,
  `id_centro_de_treinamento` int DEFAULT NULL,
  `id_endereco` int DEFAULT NULL,
  `id_faixa` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Pessoa_centro_de_treinamento_FK` (`id_centro_de_treinamento`),
  KEY `Pessoa_endereco_FK` (`id_endereco`),
  KEY `participante_faixa_FK` (`id_faixa`),
  CONSTRAINT `participante_faixa_FK` FOREIGN KEY (`id_faixa`) REFERENCES `faixa` (`id`),
  CONSTRAINT `Pessoa_centro_de_treinamento_FK` FOREIGN KEY (`id_centro_de_treinamento`) REFERENCES `centro_de_treinamento` (`id`),
  CONSTRAINT `Pessoa_endereco_FK` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participante`
--

LOCK TABLES `participante` WRITE;
/*!40000 ALTER TABLE `participante` DISABLE KEYS */;
INSERT INTO `participante` VALUES (1,'id1-larissa','1900-01-29','44 9994659245','Ricardinho',1,2,1),(2,'id2-ds','1900-01-29','44 9994659245','Ricardinho',3,1,5),(3,'id3-ricarod','2005-08-08','44 991354595','Neidinha',1,1,2),(4,'id4-ll','1800-03-10','44 9989023498','Batman',2,1,12),(5,'id5-pp','2000-12-05','44 991354595','bah',3,2,17);
/*!40000 ALTER TABLE `participante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'semeando_campeoes'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-09 18:18:19
