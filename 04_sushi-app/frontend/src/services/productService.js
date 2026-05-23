const apiBaseUrl = String(import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/+$/, '');

export async function loadProducts(categoryId, options = {}) {
  const query = new URLSearchParams();

  if (Number(categoryId) > 0) {
    query.set('category_id', String(categoryId));
  }

  const queryString = query.toString();
  const url = `${apiBaseUrl}/api/product/fetch${queryString ? `?${queryString}` : ''}`;
  const response = await fetch(url, options);
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error ?? payload.message ?? 'API request failed');
  }

  return payload.products ?? payload.data ?? [];
}
