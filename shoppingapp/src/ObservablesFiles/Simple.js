import { Observable } from 'rxjs';

const simpleObservable = new Observable(subscriber => {
  let count = 0;
  console.log('count before emitting: ' + count);
  subscriber.next(count);
  count++;
  subscriber.next(count);
  count++;
  subscriber.complete();
});

export default simpleObservable;