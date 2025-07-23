export default function OrdersPage() {
  const orders = [
    { id: 1, item: "Laptop", status: "Shipped", amount: "$1200" },
    { id: 2, item: "Phone", status: "Processing", amount: "$800" },
    { id: 3, item: "Headphones", status: "Delivered", amount: "$150" },
    { id: 4, item: "Monitor", status: "Cancelled", amount: "$300" },
    { id: 5, item: "Keyboard", status: "Shipped", amount: "$100" },
  ];

  return (
    <div>
      <h1>Orders</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Order ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Item</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Status</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.item}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.status}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
