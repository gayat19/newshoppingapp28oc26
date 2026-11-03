import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  switchMap,
  mergeMap,
  concatMap,
  exhaustMap,
  map,
  delay,
  debounceTime,
  distinctUntilChanged,
  finalize,
  tap,
} from 'rxjs/operators';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// JSONPlaceholder answers very fast, so we add a delay to make
// each operator's behaviour easy to see in the UI.
const randomDelay = (min = 500, max = 2500) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// ---------- Basic API calls (each returns an Observable) ----------

export const searchPosts = (term) =>
  ajax.getJSON(`${BASE_URL}/posts?q=${encodeURIComponent(term)}`).pipe(
    map((posts) => posts.slice(0, 5)),
    delay(randomDelay(800, 1500))
  );

export const getUser = (id) =>
  ajax.getJSON(`${BASE_URL}/users/${id}`).pipe(delay(randomDelay()));

export const createOrder = (order) =>
  ajax
    .post(`${BASE_URL}/posts`, order, { 'Content-Type': 'application/json' })
    .pipe(
      map((res) => res.response),
      delay(randomDelay(700, 1500))
    );

export const login = (credentials) =>
  ajax
    .post(`${BASE_URL}/posts`, credentials, { 'Content-Type': 'application/json' })
    .pipe(
      map((res) => res.response),
      delay(2000) // simulate a slow login
    );

// ---------- 1. switchMap : search as you type ----------
// A new search term CANCELS the previous request. Only the latest result is shown.
export const createSearchStream = (log) => {
  const search$ = new Subject();

  const results$ = search$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term) => {
      log(`➡️ Request started for "${term}"`);
      return searchPosts(term).pipe(
        tap(() => log(`✅ Response for "${term}"`)),
        finalize(() => log(`⏹️ Request for "${term}" finished or cancelled`))
      );
    })
  );

  return { search$, results$ };
};

// ---------- 2. mergeMap : load many users in parallel ----------
// All requests run at the SAME time. Results arrive in whatever order the server answers.
export const createParallelUsersStream = (log) => {
  const userIds$ = new Subject();

  const users$ = userIds$.pipe(
    mergeMap((id) => {
      log(`➡️ Request started for user ${id}`);
      return getUser(id).pipe(tap((u) => log(`✅ Got user ${id} (${u.name})`)));
    })
  );

  return { userIds$, users$ };
};

// ---------- 3. concatMap : place orders one after another ----------
// Each request WAITS for the previous one to finish. Order is always preserved.
export const createOrderQueueStream = (log) => {
  const orders$ = new Subject();

  const savedOrders$ = orders$.pipe(
    tap((o) => log(`📥 Queued order #${o.orderNo}`)),
    concatMap((order) => {
      log(`➡️ Saving order #${order.orderNo}`);
      return createOrder(order).pipe(
        map((saved) => ({ ...order, serverId: saved.id })),
        tap(() => log(`✅ Saved order #${order.orderNo}`))
      );
    })
  );

  return { orders$, savedOrders$ };
};

// ---------- 4. exhaustMap : prevent double-submit on login ----------
// While a request is running, new clicks are IGNORED.
export const createLoginStream = (log) => {
  const loginClick$ = new Subject();

  const loginResult$ = loginClick$.pipe(
    tap((c) => log(`🖱️ Click #${c.clickNo}`)),
    exhaustMap((click) => {
      log(`➡️ Login request started (click #${click.clickNo})`);
      return login(click.credentials).pipe(
        tap(() => log(`✅ Login done (click #${click.clickNo})`))
      );
    })
  );

  return { loginClick$, loginResult$ };
};
