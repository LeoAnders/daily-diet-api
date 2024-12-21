# Especificações 

## RFs (Requisitos Funcionais)  
- [ ] Deve ser possível criar um usuário.  
- [ ] Deve ser possível identificar o usuário entre as requisições.  
- [ ] Deve ser possível registrar uma refeição feita, contendo:  
   - Nome.  
   - Descrição.  
   - Data e hora.  
   - Indicação se está dentro ou fora da dieta.  
- [ ] Deve ser possível editar uma refeição, podendo alterar todos os seus dados.  
- [ ] Deve ser possível apagar uma refeição.  
- [ ] Deve ser possível listar todas as refeições de um usuário.  
- [ ] Deve ser possível visualizar uma única refeição.  
- [ ] Deve ser possível recuperar as métricas de um usuário, incluindo:  
   - Quantidade total de refeições registradas.  
   - Quantidade de refeições dentro da dieta.  
   - Quantidade de refeições fora da dieta.  
   - Melhor sequência de refeições dentro da dieta.  

---

## RNs (Regras de Negócio)  
- [ ] O usuário só pode visualizar, editar e apagar as refeições que ele próprio criou.  
- [ ] O campo `email` deve ser único para cada usuário.  
- [ ] A senha do usuário deve ser armazenada de forma segura, utilizando hash.  
- [ ] Refeições devem estar associadas a um único usuário.  
- [ ] A melhor sequência de refeições dentro da dieta deve ser calculada de forma cronológica.  

---

## RNFs (Requisitos Não-Funcionais)  
- [ ] A aplicação deve utilizar um banco de dados relacional para armazenar os dados(sqlite). 
- [ ] Senhas devem ser criptografadas utilizando uma biblioteca confiável.  
- [ ] O sistema deve utilizar UUID para os identificadores únicos de usuários e refeições.  
- [ ] A API deve seguir os padrões REST.  
- [ ] Deve haver autenticação nas rotas que necessitam de identificação do usuário.  
- [ ] As respostas da API devem seguir um padrão JSON.  
