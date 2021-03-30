import { Action, History, Location } from 'history';

/**
 * `Options` exist as overrideable settings for `useAnchorScroller`.
 */
interface Options {
  /**
   * When set to `true`, it will trigger the anchor scroller immediately.
   * Defaults to `true`.
   *
   * This is useful when users are able to be given a deep link with an anchor
   * set.
   */
  invokeImmediately?: boolean;

  /**
   * Query selector for the site's header. This should only be supplied if the
   * header is fixed at the top, thus requiring an offset when scrolling past
   * it. Defaults to `undefined`, thus implying no extra offset is needed.
   *
   * @example
   *
   * // Note the '.' in front of the CSS class name
   * headerSelector: '.euiHeader',
   */
  headerSelector?: string;

  /**
   * Tell the browser how to scroll to the selected element. Defaults to
   * `'smooth'` to indicate the browser should smoothly go there.
   *
   * @example
   *
   * scrollBehavior: 'auto',
   */
  scrollBehavior?: ScrollBehavior;

  /**
   * The number of milliseconds to wait for the element to appear after `PUSH`
   * action has been received. Defaults to `500` milliseconds.
   *
   * @example
   *
   * // give up after 200 milliseconds
   * timeoutMillis: 200,
   */
  timeoutMillis: number;
}

const getTopOffsetPixels = (headerSelector?: string) => {
  if (headerSelector) {
    const header = document.querySelector(headerSelector);

    if (header) {
      return header.clientHeight + 1;
    }
  }

  return 0;
};

/**
 * Create a callback to scroll to the element with the specified `id`.
 *
 * If the element exists, then the window is scrolled to it, and `reset` is
 * called.
 *
 * @param id The element's ID to scroll to.
 * @param reset Callback to avoid trying again later.
 * @param options Options defining extra details.
 * @returns Callback that returns `true` if scrolling occurred.
 */
const createScrollToElement = (
  id: string,
  reset: () => void,
  options: Options
) => (): boolean => {
  const element = document.getElementById(id);

  if (element) {
    window.scrollTo({
      top: Math.max(
        element.offsetTop - getTopOffsetPixels(options.headerSelector),
        0
      ),
      behavior: 'smooth',
    });

    reset();
  }

  return !!element;
};

/**
 * Listen to `history` for new routes being added that contain a hash (e.g.,
 * `/my-page#blah` where `#blah` is the hash) and, once detected, scroll the
 * browser to them.
 *
 * This should only be invoked once at the start of the Single Page Application
 * (SPA).
 *
 * @example
 *
 * useAnchorScroller(useHistory(), { headerSelector: '.myHeader' });
 *
 * @param history {@see https://www.npmjs.com/package/history}
 * @param timeout A number of milliseconds to wait for the element to appear after PUSH action has been received.
 */
export const useAnchorScroller = (
  history: History,
  opts: Partial<Options> = {}
) => {
  // the browser does not support what we need
  if (!window.MutationObserver) {
    return;
  }

  const options: Options = {
    invokeImmediately: true,
    scrollBehavior: 'smooth',
    timeoutMillis: 500,
    ...opts,
  };

  let observer: MutationObserver | undefined;
  let timeoutId: NodeJS.Timeout | undefined;

  const reset = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  };

  const listener = (location: Location, action: Action) => {
    // if there is already a timeout, then
    if (timeoutId) {
      reset();
    }

    // We only care if a new hash has been added (pushed) containing an ID
    if (action !== 'PUSH') {
      return;
      // if there is no hash, then scroll to the top
    } else if (
      (typeof location.hash !== 'string' || location.hash.length <= 1) &&
      window.screenTop !== 0
    ) {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
      return;
    }

    // create a callback to invoke upon detecting the element
    const scrollToElement = createScrollToElement(
      location.hash.slice(1),
      reset,
      options
    );

    // attempt the next event cycle
    setTimeout(() => {
      if (scrollToElement()) {
        return;
      }

      observer = new MutationObserver(scrollToElement);

      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
      });

      timeoutId = setTimeout(reset, options.timeoutMillis);
    });
  };

  // allow the page loading to trigger the scroll action
  if (options.invokeImmediately) {
    // attempt the next event cycle
    setTimeout(() => listener(history.location, 'PUSH'));
  }

  // listen for changes to history to capture hash changes
  history.listen(listener);
};
