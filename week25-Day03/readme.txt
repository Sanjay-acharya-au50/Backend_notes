AttainU Question ID: 239
Download the json file from
https://gist.github.com/JaithunAttainU/c7d60d129ed3ffe2233d63a0cb3c70d3 for the
sample data.
Insert all the data in a mongo db collection using insertMany() command and write queries
for the below use cases.
1. Write a MongoDB query to display all the documents in the collection
restaurants.
2. Write a MongoDB query to display the fields restaurant_id, name, borough
and cuisine for all the documents in the collection restaurant.
3. Write a MongoDB query to display the fields restaurant_id, name, borough
and cuisine, but exclude the field _id for all the documents in the collection
restaurant.
4. Write a MongoDB query to display the fields restaurant_id, name, borough
and zip code, but exclude the field _id for all the documents in the collection
restaurant.
5. Write a MongoDB query to display all the restaurant which is in the borough
Bronx.
6. Write a MongoDB query to display the first 5 restaurant which is in the
borough Bronx.
Refer: https://www.mongodb.com/docs/v5.0/reference/method/cursor.limit/
7.Write a MongoDB query to display the next 5 restaurants after skipping first
5 which are in the borough Bronx.
Refer: https://www.mongodb.com/docs/v5.0/reference/method/cursor.skip/
Refer: https://www.mongodb.com/docs/manual/tutorial/query-documents/#specifyconditions-using-query-operators for the below queries
8. Write a MongoDB query to find the restaurants who achieved a score more
than 90.
9. Write a MongoDB query to find the restaurants that achieved a score, more
than 80 but less than 100.
10. Write a MongoDB query to find the restaurants which locate in latitude
value less than -95.754168.