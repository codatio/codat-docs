---
title: "Reference types"
description: "Commerce reference types link between data types in the Codat commerce data model"
createdAt: "2020-09-21T15:38:51.722Z"
updatedAt: "2022-11-22T13:54:25.826Z"
---

Commerce reference types link between data types in the Codat commerce data model.

For accounting reference types, see [Reference types](https://docs.codat.io/docs/datamodel-accounting-referencetypes) in the Accounting section.

## customerRef

Links to the [Customers](https://docs.codat.io/docs/datamodel-commerce-customers) data type. [Orders](https://docs.codat.io/docs/datamodel-commerce-orders), which include payments, discounts, and service charges, use a **customerRef** that contains the ID and name of the linked customer.

```json
"customerRef": {
            "id": "string", // 'id' unique to the customer - from the Customers data type
            "name": "string" // 'name' from the Customers data type
}
```

## locationRef

Links to the [Locations](https://docs.codat.io/docs/datamodel-commerce-locations) data type in the following objects:

- [Products variant inventory locations](https://docs.codat.io/docs/datamodel-commerce-products#section-product-variant-inventory-locations) include a **locationRef** that contains the ID and name of the location at which stock is held.

- [Orders](https://docs.codat.io/docs/datamodel-commerce-orders) include a **locationRef** that contains the ID and name of the location where the order was placed.

```json
"locationRef": {
            "id": "string", // 'id' unique to the product or order - from the Locations data type
            "name": "string" // 'name' from the Locations data type
}
```

## paymentMethodRef

Links to the [Payment Methods](https://docs.codat.io/docs/datamodel-commerce-paymentmethods) data type. [Payments](https://docs.codat.io/docs/datamodel-commerce-payments) include a **paymentMethodRef** that contains the ID and name of the method of payment.

```json
"paymentMethodRef": {
    "id": "string",  // 'id' unique to the payment method - from the Payment Methods data type
    "name": "string" // 'name' from the Payment Methods data type
}
```

## productCategoryRef

Links to the [Products](https://docs.codat.io/docs/datamodel-commerce-products) data type.

```json
"productCategoryRef": {
    "id": "string",  // 'id' of the product category
    "name": "string" // 'name' of the product category
}
```

## productRef

Links to the [Products](https://docs.codat.io/docs/datamodel-commerce-products) data type. [Order line items](https://docs.codat.io/docs/datamodel-commerce-orders#section-order-line-items) include a **productRef** that contains the ID and name of the linked product.

```json
"productRef": {
        "id": "string", // 'id' unique to the product - from the Products data type
        "name": "string" // 'name' from the Products data type
}
```

## productVariantRef

Links to the [Products](https://docs.codat.io/docs/datamodel-commerce-products) data type. [Order line items](https://docs.codat.io/docs/datamodel-commerce-orders#section-order-line-items) include a **productVariantRef** that contains the ID and name of the linked product variant.

```json
"productVariantRef": {
            "id": "string", // 'id' unique to the product - from the Products data type
            "name": "string" // 'name' from the Products data type
}
```

## transactionSourceRef

Links to the source of a transaction in the [Transactions](https://docs.codat.io/docs/datamodel-commerce-transactions) data type when the transaction has been triggered by an event. The **transactionSourceRef** contains the ID and type of the original event. For example, the transaction triggered by a refund will include a reference to the order that was refunded.

```json Example
{
  "transactions": [
    {
      "id": "62fce855-4aff-41b0-8607-54e1cf4d35a4",
      "totalAmount": -18.42,
      "currency": "GBP",
      "type": "Refund",
      "transactionSourceRef": {
        "id": "5bb8f0cb-168f-41ad-ab62-cd511a7e5282",
        "type": "Order"
      }
    }
  ]
}
```

```json
"transactionSourceRef": {
        "id": "string", // 'id'unique to the transaction -  from the Transactions data type
        "type": "string" // 'type' from the Transactions data type Unknown, Fee, Order, Payment or Service Charge
}
```
