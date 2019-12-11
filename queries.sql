-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select * from product
join category 
on product.categoryid = category.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select * from [order] as o
join shipper as s
on o.ShipVia = s.id
where o.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.ProductName, od.Quantity from OrderDetail as od
join product as p
on od.productId = p.id
where od.orderId = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id as "Order", c.CompanyName, e.LastName from [order] as o
join customer as c
on o.customerId = c.id
join employee as e
on o.EmployeeId = e.id
