import '@testing-library/jest-dom';

// Polyfill for fetch
global.fetch = (input, init) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(init?.method || 'GET', input);

    for (const key in init?.headers || {}) {
      xhr.setRequestHeader(key, init.headers[key]);
    }

    xhr.onload = () => {
      resolve({
        ok: true,
        status: xhr.status,
        statusText: xhr.statusText,
        json: () => Promise.resolve(JSON.parse(xhr.responseText)),
        text: () => Promise.resolve(xhr.responseText),
      });
    };

    xhr.onerror = () => {
      reject(new TypeError('Network request failed'));
    };

    xhr.send(init?.body || null);
  });
};

// Example mock setup
global.fetch.mockResponseOnce = (body) => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(JSON.parse(body)),
    })
  );
};

global.fetch.mockReset = () => {
  fetch.mockClear();
};
