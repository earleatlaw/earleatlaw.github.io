import { History } from 'history';
import { MouseEvent } from 'react';
import { onClickHandler } from './on_click_handler';

/**
 * Properties for overriding Links and Buttons.
 */
export interface HistoryProps {
  href: string;
  onClick: (event: MouseEvent) => void;
}

/**
 * Create `HistoryProps` to use with Links and Buttons to work within React
 * Router, as well as outside of it (e.g., opening a new tab).
 *
 * @param history The React Router history object.
 * @param href The route to navigate to with React Router.
 * @param onClick If supplied, triggered after history is updated.
 */
export const historyHandler = (
  history: History,
  href: string,
  onClick?: () => void
): HistoryProps => ({
  // Generate the correct link href (with basename accounted for)
  href: history.createHref({ pathname: href }),
  onClick: onClickHandler(history, href, onClick),
});
