import Notiflix from 'notiflix';

export function Notification({ message }) {
  return Notiflix.Notify.failure(message);
}
