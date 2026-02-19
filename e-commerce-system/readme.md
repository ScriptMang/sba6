# Reflection

* Write a reflection of roughly 300 words addressing:
* How you implemented TypeScript features and OOP principles.
* The challenges you encountered and how you overcame them.
* How you handled asynchronous operations and error management.

## The Process

This lab required me to create a product object and fetch them using dummy-json api.
I found this somewhat challenging since there was so many fields to include in the product class.
I had to format the list of fields in the product since listing it was making it hard to read.  
As for the field value types some of them I had to make interfaces to better match the objects beings returned from fields like meta. 

Another I challenge I faced was getting used to using async await with typescript which requires type annotation. Staring from a dynamic language like JavaScript, I didn't know what conversions were being done with promises under the hood. Now, having used TypeScript, I understand the value inside a promise is unwrapped once you assign the async function the keyword await.

The other thing I learned was custom errors. At first glance it might seem easier to to always return the same error type, but it comes in handy when you need to perform a specific action once the error is thrown. Other times you want to be able throw a custom error because the data returned didn't meet a specific criteria like a minimum number of products in stock. The process of adding the custom error was pretty simple. All I had to extend my new error to  the existing  error class and pass it as a value to its constructor.


As for calculating the tax of product I found it pretty straight forward I passed product object as argument. I created the function calculateDiscount to return a number  which represent the discounted dollar amount of the product. As for the class method getPricewithDiscount I simplified it by importing the calculatieDiscount function. Then in the main file I used the built in toPrecision function to round the value of the tax by 3. 
  