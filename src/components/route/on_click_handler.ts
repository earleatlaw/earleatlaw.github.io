import { History } from 'history';
import { MouseEvent } from 'react';

/**
 * Determine if a special key was used, such as CTRL to open a new tab.
 *
 * @param e The event.
 * @returns `true` if a special key was used.
 */
const isModifiedEvent = (e: MouseEvent) =>
  !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);

/**
 * Determine if the left mouse click was used.
 *
 * @param e The event
 * @returns `true` if it was the left mouse click. Otherwise `false`.
 */
const isLeftClickEvent = (e: MouseEvent) => e.button === 0;

/**
 * Determine if the `onClick` handler should be ignored based on the event
 * details (e.g., right clicking to open in a new tab, holding special keys,
 * etc).
 *
 * @param e The event
 * @returns `true` to ignore the event. `false` to use `onClick`.
 */
export const ignoreOnClick = (e: MouseEvent): boolean =>
  e.defaultPrevented || isModifiedEvent(e) || !isLeftClickEvent(e);

/**
 * `onClickHandler` is a generic `onClick` handler that can be used with React
 * Router to be used when clicking for local usage, but ignored for new tabs /
 * windows.
 *
 * @param history The `useHistory` hook response object.
 * @param href The path to redirect to upon click.
 * @param onClick If supplied, triggered after history is updated.
 */
export const onClickHandler = (
  history: History,
  href: string,
  onClick?: () => void
) => (e: MouseEvent) => {
  if (ignoreOnClick(e)) {
    return;
  }

  // Prevent regular link behavior, which causes a browser refresh.
  e.preventDefault();

  // Push the route to the history.
  history.push(href);

  // perform the wrapped onClick action
  if (onClick) {
    onClick();
  }
};
