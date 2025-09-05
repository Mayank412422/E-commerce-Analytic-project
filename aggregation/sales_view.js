[
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $project: {
      order_id: 1,
      order_date: 1,
      quantity: 1,
      total_price: 1,
      "customer.customer_id": 1,
      "customer.name": 1,
      "customer.email": 1,
      "customer.address": 1,
      "product.product_id": 1,
      "product.product_name": 1,
      "product.category": 1,
      "product.price": 1
    }
  }
]
