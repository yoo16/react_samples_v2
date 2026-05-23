const apiBaseUrl = String(import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/+$/, '');

export async function loadOrders(visitId, options = {}) {
  if (Number(visitId) <= 0) {
    return { orders: [], total: 0 };
  }

  const url = `${apiBaseUrl}/api/order/fetch?visit_id=${encodeURIComponent(String(visitId))}`;
  const response = await fetch(url, options);
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error ?? payload.message ?? 'API request failed');
  }

  return { orders: payload.orders ?? [], total: payload.total ?? 0 };
}

export async function submitOrder(visitId, product, quantity, options = {}) {
  const url = `${apiBaseUrl}/api/order/add`;
  const response = await fetch(url, {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(options.headers ?? {}) },
    body: JSON.stringify({
      product_id: Number(product.id),
      product_name: product.name,
      product_image_path: product.image_path,
      quantity,
      visit_id: visitId,
    }),
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error ?? payload.message ?? 'API request failed');
  }

  return payload;
}

export async function checkoutOrder(visitId, options = {}) {
  const url = `${apiBaseUrl}/api/order/billed`;
  const response = await fetch(url, {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(options.headers ?? {}) },
    body: JSON.stringify({ visit_id: Number(visitId) }),
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error ?? payload.message ?? 'API request failed');
  }

  return payload;
}
