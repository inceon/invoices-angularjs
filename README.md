# Dependencies

- sqlite3
- node
- npm

# Getting Started

| npm install

| node app.js

# Schema

## Customers

- id (integer)
- name (string)
- address (string)
- phone (string)


## Products

- id (integer)
- name (string)
- price (decimal)

## Invoices

- id (integer)
- customer_id (integer)
- discount (decimal)
- total (decimal)

## InvoiceItems

- id (integer)
- invoice_id (integer)
- product_id (integer)
- quantity (decimal)


# Resources

## Customers

/api/customers (GET, POST)
/api/customers/{id} (GET, PUT, DELETE)

## Products

/api/products (GET, POST)
/api/products/{id} (GET, PUT, DELETE)

## Invoices

/api/invoices (GET, POST)
/api/invoices/{id} (GET, PUT, DELETE)

## InvoiceItems

`/api/invoices/{id}/items (GET, POST)`
`/api/invoices/{invoice_id}/items/{id} (GET, PUT, DELETE)`


