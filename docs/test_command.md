## Spending

curl -X POST http://localhost:3000/api/spendings -H "Content-Type: application/json" -d "{\"spending_amount\": 50.00, \"spending_date\": \"2023-10-20\", \"spending_desc\": \"Groceries\", \"user_id\": 1, \"category_id\": 1}"

curl http://localhost:3000/api/spendings

curl http://localhost:3000/api/spendings/1

curl -X PUT http://localhost:3000/api/spendings/1 -H "Content-Type: application/json" -d "{\"spending_amount\": 50.00, \"spending_desc\": \"Groceries and household items\"}"

curl -X DELETE http://localhost:3000/api/spendings/1

## Category

curl -X POST http://localhost:3000/api/categories -H "Content-Type: application/json" -d "{\"category_name\": \"Luxuries\", \"category_description\": \"CHANNEL, Dior and Louis Vuitton\"}"

curl http://localhost:3000/api/categories

curl http://localhost:3000/api/categories/1

curl -X PUT http://localhost:3000/api/categories/1 -H "Content-Type: application/json" -d "{\"category_name\": \"Food\", \"category_description\": \"Bak Kut Teh\"}"

curl -X DELETE http://localhost:3000/api/categories/9

## User

curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d "{\"user_name\": \"John Cena\", \"user_email\": \"john.cena@gmail.com\"}"

curl http://localhost:3000/api/users

curl http://localhost:3000/api/users/2

curl -X PUT http://localhost:3000/api/users/2 -H "Content-Type: application/json" -d "{\"user_name\": \"Donald Trump\", \"user_email\": \"trump@gmail.com\"}"

curl -X DELETE http://localhost:3000/api/users/2